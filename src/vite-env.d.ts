/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_MS: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
