export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      URI_MONGO: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}