import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.sage.com',
  appName: 'Sage',
  webDir: 'dist/client',
  server: {
    cleartext: true,
  },
};

export default config;
