import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.andres.catapp',
  appName: 'cat-app',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      showSplashScreen: true,
      autoHideSplash: true,
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;
