import { useEffect } from 'react';
import i18next from 'i18next';
import { DEFAULT_LANGUAGE } from '../service/translation';

export function useAddTranslations({ language = DEFAULT_LANGUAGE, key, strings }) {
  useEffect(() => {
    if (!key || !strings) return;
    i18next.addResourceBundle(language, key, strings);
  }, []);
}
