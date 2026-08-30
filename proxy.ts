import { NextRequest, NextResponse } from "next/server";

import getLocaleOrDefault from "./i18n/getLocale";

export default function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const firstPathnameSegment = pathname.split("/")[1];

    const locale = getLocaleOrDefault(pathname);

    if (locale === "fr" && firstPathnameSegment !== "fr") {
        const url = request.nextUrl.clone();

        url.pathname = `/fr${pathname}`;

        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

// run the proxy function for every file that matches this pattern
export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|icon.png|.*\\..*).*)",
    ],
};
