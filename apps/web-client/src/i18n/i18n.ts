import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translationEN from "./en/translations";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            hu: {
                translation: {}
            }
        },
        lng: 'en',
    });

export default i18n;
