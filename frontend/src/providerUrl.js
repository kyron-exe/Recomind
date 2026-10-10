// Attribution labels must link only to the provider they name.
export function providerUrl(value, expectedOrigin) {
  if (typeof value !== 'string') return null;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.origin !== expectedOrigin || url.username || url.password) {
      return null;
    }
    return url.href;
  } catch {
    return null;
  }
}
