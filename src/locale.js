import {createI18n} from 'vue-i18n';
import {CLOSED_STRING, KILOMETERS_STRING, ON_DEMAND_STRING, OPEN_STRING} from "@/const"


export const messages = {
    en: {
        [CLOSED_STRING]: CLOSED_STRING,
        [OPEN_STRING]: OPEN_STRING,
        [ON_DEMAND_STRING]: ON_DEMAND_STRING,
        [KILOMETERS_STRING]: KILOMETERS_STRING
    },
    he: {
        [CLOSED_STRING]: 'סגור',
        [OPEN_STRING]: 'פתוח',
        [ON_DEMAND_STRING]: 'בתיאום מראש',
        [KILOMETERS_STRING]: 'ק"מ'
    },
};


export const i18n = createI18n({
    legacy: false,
    locale: 'he',
    fallbackLocale: 'en',
    messages,
});
