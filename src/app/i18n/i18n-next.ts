import React from 'react';

import * as i18next from 'i18next';
import { initReactI18next, useTranslation, Trans } from 'react-i18next';

// import LanguageDetector from 'i18next-browser-language detector';
import { I18nService, SupportedLanguages } from './i18n-service';
import en from './translations/en.json';
import es from './translations/es.json';

i18next
    .use(initReactI18next) //.use(LanguageDetector) // passes i18n down to react-i18next
    .init({
        lng: navigator.language, // LanguageDetector
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: en
            },
            es: {
                translation: es
            }
        },
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

export const useI18next = (): I18nService => {
    const { t, i18n } = useTranslation();
    const tI18n = React.useRef(t);
    const [language, setLanguage] = React.useState<SupportedLanguages>(
        i18n.language as SupportedLanguages
    );
    const changeLanguage = React.useCallback(
        (language: SupportedLanguages) => {
            i18n.changeLanguage(language).then(t => {
                tI18n.current = t;
                setLanguage(i18n.language as SupportedLanguages);
            });
        },
        [i18n]
    );
    return React.useMemo(
        () => ({ t: tI18n.current, changeLanguage, currentLanguage: language }),
        [changeLanguage, language]
    );
};

export const TranslateComponent = Trans;
