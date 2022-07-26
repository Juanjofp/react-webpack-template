declare global {
    namespace NodeJS {
        interface ProcessEnv {
            HTTP_HOST: string | undefined;
        }
    }
}

export {};
