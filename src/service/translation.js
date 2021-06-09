import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import appStrings from '../locales/en-US/strings.json';

export const DEFAULT_LANGUAGE = 'en-US';
export const DEFAULT_NAMESPACE = 'app';

export const init = ({ lang = DEFAULT_LANGUAGE } = {}) => {
    return new Promise(async (resolve, reject) => {
        i18next
            .use(initReactI18next)
            .init({
                interpolation: { escapeValue: false },
                fallbackLng: [DEFAULT_LANGUAGE],
                lng: lang,
                defaultNS: DEFAULT_NAMESPACE,
                ns: [DEFAULT_NAMESPACE],
                resources: {
                    [lang]: {
                        app: appStrings,
                    },
                },
            }, (err, t) => {
                if (err) return reject(err);
                resolve();
            });
    });
};
