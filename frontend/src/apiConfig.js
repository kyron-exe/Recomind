import { Capacitor } from '@capacitor/core';

/**
 * Set VITE_API_URL to an HTTPS backend when building for devices or production.
 * HTTP localhost is supported only by the browser development server.
 */
function resolveApiBase() {
  const fromEnv = import.meta.env.VITE_API_URL;
  if (fromEnv) return String(fromEnv).replace(/\/$/, '');

  return 'http://localhost:5000';
}

export const API_BASE = resolveApiBase();

export async function fetchApi(url) {
  const parsed = new URL(url);
  const localDevelopment =
    import.meta.env.DEV &&
    !Capacitor.isNativePlatform() &&
    parsed.protocol === 'http:' &&
    ['localhost', '127.0.0.1', '[::1]'].includes(parsed.hostname);

  if (parsed.protocol !== 'https:' && !localDevelopment) {
    throw new Error('API connections require HTTPS. Configure VITE_API_URL with an HTTPS backend.');
  }

  // Reject redirects so an HTTPS endpoint cannot downgrade the request to HTTP.
  return fetch(parsed.href, { redirect: 'error' });
}
