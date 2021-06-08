import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import common_enUS from '../locales/en-US/common.json';

export const init = ({ lang }) => {
    return new Promise(async (resolve, reject) => {
        i18next
            .use(initReactI18next)
            .use(Backend)
            .init({
                react: {
                    useSuspense: false
                },
                interpolation: { escapeValue: false },
                fallbackLng: [lang],
                lng: lang,
                backend: {
                    loadPath: '/locales/{{lng}}/{{ns}}.json',
                },
                // defaultNS: 'common',
                // ns: ['common'],
                resources: {
                    [lang]: {
                        common: common_enUS,
                    }
                },
            }, (err, t) => {
                if (err) return reject(err);
                resolve();
            });
    });
};
