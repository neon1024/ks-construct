import { defaultLocale, type Locale } from "./config";

export default function getLocaleOrDefault(pathname: string): Locale {
    const firstPathnameSegment = pathname.split("/")[1];

    if (firstPathnameSegment === "en") {
        return "en";
    }

    if (firstPathnameSegment === "es") {
        return "es";
    }

    return defaultLocale;
}
