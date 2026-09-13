"use client";

import { COMPANY, PATH } from "@/constants";
import useAppContext from "@/contexts/AppContext";
import { locales } from "@/i18n/config";
import getLocalizedPath from "@/i18n/getLocalizedPath";
import { usePathname, useRouter } from "next/navigation";
import {
    HeaderContainer,
    HeaderTitle,
    LanguageSelect,
    LinkStyled,
    Logo,
    PrimaryHeaderContainer,
    SecondaryHeaderContainer,
} from "./styles";

export default function Navbar() {
    const { locale, translations } = useAppContext();
    const pathname = usePathname();
    const router = useRouter();

    const navigationItems = [
        {
            label: translations?.navigation.header.home,
            path: getLocalizedPath(locale!, PATH.HOME),
        },
        {
            label: translations?.navigation.header.projects,
            path: getLocalizedPath(locale!, PATH.PROJECTS),
        },
        {
            label: translations?.navigation.header.contact,
            path: getLocalizedPath(locale!, PATH.CONTACT),
        },
    ];

    const handleLocaleChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const newLocale = event.target.value;

        document.cookie = `locale=${newLocale}; path=/; max-age=31536000; samesite=lax`;

        const pathWithoutLocale =
            locale === "fr"
                ? pathname
                : pathname.replace(`/${locale}`, "") || "/";

        const newPath =
            newLocale === "fr"
                ? pathWithoutLocale
                : `/${newLocale}${pathWithoutLocale}`;

        router.replace(newPath);
    };

    return (
        <HeaderContainer>
            <PrimaryHeaderContainer>
                <Logo
                    src="/images/logo.png"
                    alt={COMPANY.NAME}
                    width={80}
                    height={80}
                />

                <HeaderTitle>{COMPANY.NAME}</HeaderTitle>
            </PrimaryHeaderContainer>

            <SecondaryHeaderContainer>
                <LanguageSelect
                    value={(locale ?? "") as string}
                    onChange={handleLocaleChange}
                >
                    {locales.map((locale) => (
                        <option key={locale} value={locale}>
                            {locale.toUpperCase()}
                        </option>
                    ))}
                </LanguageSelect>

                {navigationItems.map((navigationItem) => (
                    <LinkStyled
                        key={navigationItem.path}
                        href={navigationItem.path}
                        $isActive={pathname === navigationItem.path}
                    >
                        {navigationItem.label}
                    </LinkStyled>
                ))}
            </SecondaryHeaderContainer>
        </HeaderContainer>
    );
}
