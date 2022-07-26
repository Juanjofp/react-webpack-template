import { SupportedLanguages } from '../../src/app';

export function buildI18nServiceMock() {
    let currentLanguage: SupportedLanguages = 'en';
    const t = jest.fn().mockImplementation((key: string) => key);
    const changeLanguage = jest
        .fn()
        .mockImplementation((language: SupportedLanguages) => {
            currentLanguage = language;
        });
    function mockClear() {
        t.mockClear();
        changeLanguage.mockClear();
    }
    return {
        t,
        changeLanguage,
        currentLanguage,
        mockClear
    };
}
