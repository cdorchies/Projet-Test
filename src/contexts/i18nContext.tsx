import { createContext } from "react";

interface i18nContextValues {
  lngs: {
    [key: string]: {
      nativeName: string;
    }
  };
  t: (key: string) => string;
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
}

const i18nContext = createContext<i18nContextValues>({
  lngs: {},
  t: (key) => key,
  i18n: { language: 'en', changeLanguage: (lang) => {} },
});

export default i18nContext;