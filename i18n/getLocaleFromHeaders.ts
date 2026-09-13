import { defaultLocale, locales } from "./config";

export default function getLocaleFromHeaders(acceptLanguage: string | null) {
    if (!acceptLanguage) {
        return defaultLocale;
    }

    const languages = acceptLanguage
        .split(",")
        .map((language) => language.split(";")[0].trim().toLowerCase());

    for (const language of languages) {
        const code = language.split("-")[0];

        if (locales.includes(code as (typeof locales)[number])) {
            return code;
        }
    }

    return defaultLocale;
}
