/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ITUNES_API: string
  readonly VITE_DEVELOP_API: string
  readonly VITE_USE_FAKE_API: string
  readonly VITE_API_TIMEOUT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
