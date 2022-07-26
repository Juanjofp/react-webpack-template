export type SupportedLanguages = 'en' | 'es-US' | 'es' | 'es-ES';
export type I18nService = {
    t: (key: string, options?: unknown) => string;
    changeLanguage: (language: SupportedLanguages) => void;
    currentLanguage: SupportedLanguages;
};
