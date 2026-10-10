import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import process from 'node:process';
import { test } from 'node:test';
import { Capacitor } from '@capacitor/core';
import { createServer } from 'vite';
import { providerUrl } from '../src/providerUrl.js';

for (const mode of ['development', 'production']) {
  test(`API transport policy in ${mode}`, async (t) => {
    const previousNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = mode;
    t.after(() => {
      if (previousNodeEnv === undefined) delete process.env.NODE_ENV;
      else process.env.NODE_ENV = previousNodeEnv;
    });
    const server = await createServer({
      configFile: false,
      envFile: false,
      mode,
      optimizeDeps: { noDiscovery: true, include: [] },
      server: { middlewareMode: true },
    });
    t.after(() => server.close());
    const { fetchApi } = await server.ssrLoadModule('/src/apiConfig.js');
    let native = false;
    t.mock.method(Capacitor, 'isNativePlatform', () => native);
    const response = { ok: true };
    const fetchMock = t.mock.method(globalThis, 'fetch', async () => response);

    for (native of [false, true]) {
      for (const url of [
        'http://192.168.1.5:5000/api/book-details?title=Dune',
        'http://10.0.2.2:5000/api/game-details?name=Portal',
        'http://api.example.com/api/software-details?title=Git',
        'http://localhost.attacker.example/api/movie-details?title=Alien',
        'data:application/json,{"ok":true}',
        '//api.example.com/api/recommend',
        'not a URL',
      ]) {
        const calls = fetchMock.mock.callCount();
        await assert.rejects(fetchApi(url), undefined, url);
        assert.equal(fetchMock.mock.callCount(), calls, 'rejected URLs must never reach fetch');
      }

      for (const host of ['localhost', '127.0.0.1', '[::1]']) {
        const url = `http://${host}:5000/api/recommend`;
        if (mode === 'development' && !native) {
          assert.equal(await fetchApi(url), response);
        } else {
          const calls = fetchMock.mock.callCount();
          await assert.rejects(fetchApi(url), /require HTTPS/);
          assert.equal(fetchMock.mock.callCount(), calls);
        }
      }

      for (const path of ['recommend', 'movie-details', 'book-details', 'game-details', 'software-details']) {
        const url = `https://api.example.com/api/${path}?title=A%26B`;
        assert.equal(await fetchApi(url), response);
        assert.deepEqual(fetchMock.mock.calls.at(-1).arguments, [url, { redirect: 'error' }]);
      }
    }
  });
}

test('attribution URLs stay on the named HTTPS provider origin', () => {
  for (const [origin, path] of [
    ['https://openlibrary.org', '/works/OL123W'],
    ['https://rawg.io', '/games/portal'],
    ['https://en.wikipedia.org', '/wiki/Git'],
  ]) {
    const host = new URL(origin).hostname;
    assert.equal(providerUrl(`${origin}${path}`, origin), `${origin}${path}`);
    assert.equal(providerUrl(`${origin}:443${path}`, origin), `${origin}${path}`);
    for (const input of [
      null, undefined, {}, 42, '', path, `//${host}${path}`,
      `http://${host}${path}`, `https://${host}.attacker.example${path}`,
      `https://${host}@attacker.example${path}`, `https://attacker.example/${host}`,
      `https://user:password@${host}${path}`, `${origin}:444${path}`,
      'javascript:alert(1)', 'data:text/html,<script>alert(1)</script>',
      `https://other.${host}${path}`, `https://attacker.example\\@${host}${path}`,
    ]) {
      assert.equal(providerUrl(input, origin), null, String(input));
    }
  }
});

test('Android disables cleartext and mixed content', async () => {
  const config = JSON.parse(await readFile(new URL('../capacitor.config.json', import.meta.url), 'utf8'));
  assert.equal(config.server.androidScheme, 'https');
  assert.equal(config.android.allowMixedContent, false);
  const manifest = await readFile(new URL('../android/app/src/main/AndroidManifest.xml', import.meta.url), 'utf8');
  assert.match(manifest, /android:usesCleartextTraffic="false"/);
});
