import * as React from 'react';

import { I18nService } from './i18n-service';

export const defaultI18nService: I18nService = {
    t: (key: string) => key,
    changeLanguage: () => undefined,
    currentLanguage: 'en'
};

export type DefaultTranslateProps = {
    children: React.ReactNode;
};
export const DefaultTranslate = ({ children }: DefaultTranslateProps) => (
    <>{children}</>
);
const I18nContext = React.createContext<I18nService>(defaultI18nService);
let TranslateComponent = DefaultTranslate;

export type I18nProviderProps = {
    children?: React.ReactNode;
    service?: I18nService;
    Translate?: typeof DefaultTranslate;
};
export function I18nProvider({
    service,
    Translate,
    ...props
}: I18nProviderProps) {
    const translationService = service ?? defaultI18nService;
    TranslateComponent = Translate ?? DefaultTranslate;
    return <I18nContext.Provider value={translationService} {...props} />;
}

export const useI18nService = () => {
    return React.useContext(I18nContext);
};

export type TranslateProps = {
    children?: React.ReactNode;
    i18nKey?: string;
};
export function Trans({ children, ...rest }: TranslateProps) {
    return <TranslateComponent {...rest} children={children} />;
}

export * from './i18n-service';
