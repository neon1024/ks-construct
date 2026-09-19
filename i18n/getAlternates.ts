import { Metadata } from "next";

import { COMPANY } from "@/constants";

import { defaultLocale, Locale } from "./config";

export const getAlternates = (
    locale: Locale,
    path: string,
): Metadata["alternates"] => {
    const normalizedPath = path === "/" ? "" : path;

    return {
        canonical: `${COMPANY.DOMAIN}${locale === defaultLocale ? "" : `/${locale}`}${normalizedPath || "/"}`,
        languages: {
            fr: `${COMPANY.DOMAIN}${normalizedPath || "/"}`,
            en: `${COMPANY.DOMAIN}/en${normalizedPath}`,
            es: `${COMPANY.DOMAIN}/es${normalizedPath}`,
        },
    };
};
