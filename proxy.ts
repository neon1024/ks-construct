import { NextRequest, NextResponse } from "next/server";

import getLocaleFromHeaders from "./i18n/getLocaleFromHeaders";

import { defaultLocale, Locale, locales } from "./i18n/config";

export default function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const firstSegment = pathname.split("/")[1];

    // locale in the url -> should overwrite with saved locale in cookie if it exists,
    // otherwise keep the url
    if (firstSegment === "en" || firstSegment === "es") {
        return NextResponse.next();
    }

    // /fr should never be public.
    if (firstSegment === "fr") {
        const url = request.nextUrl.clone();

        url.pathname = pathname.replace(/^\/fr(?=\/|$)/, "") || "/";

        return NextResponse.redirect(url);
    }

    const savedLocale = request.cookies.get("locale")?.value;

    const locale =
        savedLocale && locales.includes(savedLocale as Locale)
            ? (savedLocale as Locale)
            : getLocaleFromHeaders(request.headers.get("accept-language"));

    if (locale !== defaultLocale) {
        const url = request.nextUrl.clone();

        url.pathname = `/${locale}${pathname}`;

        return NextResponse.redirect(url);
    }

    // Internally map French URL to /fr/...
    const url = request.nextUrl.clone();

    url.pathname = `/fr${pathname}`;

    return NextResponse.rewrite(url);
}

// run the proxy function for every file that matches this pattern
export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|icon.png|.*\\..*).*)",
    ],
};
