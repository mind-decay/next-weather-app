declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WEATHER_API_KEY: string;
      UNSPLASH_API_KEY: string;
      DEFAULT_LOCATION: string;
      API_URL: string;
    }
  }
}

export {};
