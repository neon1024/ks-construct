import { Locale } from "./config";

const translations = {
    fr: () => import("./translations/fr.json").then((module) => module.default),
    en: () => import("./translations/en.json").then((module) => module.default),
    es: () => import("./translations/es.json").then((module) => module.default),
};

export default async function getTranslations(locale: Locale) {
    // use "()" because after you get the function based on the key, you must call it
    // so the import happens and you get the json object
    return translations[locale]();
}
