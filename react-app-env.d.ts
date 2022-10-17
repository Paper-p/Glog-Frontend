/// <reference types="react-scripts" />

declare namespace ReactJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production";
    REACT_APP_BASE_URL: string;
  }
}
