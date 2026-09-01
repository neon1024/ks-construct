"use client";

import { COMPANY, PATH } from "@/constants";
import useAppContext from "@/contexts/AppContext";
import getLocalizedPath from "@/i18n/getLocalizedPath";
import { usePathname } from "next/navigation";
import {
    HeaderContainer,
    HeaderTitle,
    LinkStyled,
    Logo,
    PrimaryHeaderContainer,
    SecondaryHeaderContainer,
} from "./styles";

export default function Navbar() {
    const { locale, translations } = useAppContext();
    const pathname = usePathname();

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
