/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_CHARACTERS_API_BEARER_TOKEN: string;
    readonly VITE_CHARACTERS_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}