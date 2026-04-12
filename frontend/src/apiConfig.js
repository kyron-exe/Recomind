import { Capacitor } from '@capacitor/core';

/**
 * Backend URL. Set VITE_API_URL when building for a real device (use your PC's LAN IP, e.g. http://192.168.1.5:5000).
 * Android emulator uses 10.0.2.2 to reach the host machine's localhost.
 */
function resolveApiBase() {
  const fromEnv = import.meta.env.VITE_API_URL;
  if (fromEnv) return String(fromEnv).replace(/\/$/, '');

  try {
    if (Capacitor.isNativePlatform()) {
      if (Capacitor.getPlatform() === 'android') {
        return 'http://10.0.2.2:5000';
      }
    }
  } catch {
    /* ignore */
  }

  return 'http://localhost:5000';
}

export const API_BASE = resolveApiBase();
