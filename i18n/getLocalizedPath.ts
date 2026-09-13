import { Locale } from "./config";

export default function getLocalizedPath(locale: Locale, path: string) {
    return locale === "fr"
        ? path
        : path === "/"
          ? `/${locale}`
          : `/${locale}${path}`;
}
