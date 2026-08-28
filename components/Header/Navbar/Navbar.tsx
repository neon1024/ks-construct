"use client";

import { COMPANY, PATH } from "@/constants";
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
    const pathname = usePathname();

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
                <LinkStyled href={PATH.HOME} $isActive={pathname === PATH.HOME}>
                    Home
                </LinkStyled>
                <LinkStyled
                    href={PATH.PROJECTS}
                    $isActive={pathname === PATH.PROJECTS}
                >
                    Projects
                </LinkStyled>
                <LinkStyled
                    href={PATH.CONTACT}
                    $isActive={pathname === PATH.CONTACT}
                >
                    Contact
                </LinkStyled>
            </SecondaryHeaderContainer>
        </HeaderContainer>
    );
}
