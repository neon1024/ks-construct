"use client";

import { COMPANY } from "@/constants";
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
                <LinkStyled href="/" $isActive={pathname === "/"}>
                    Home
                </LinkStyled>
                <LinkStyled
                    href="/projects"
                    $isActive={pathname === "/projects"}
                >
                    Projects
                </LinkStyled>
                <LinkStyled href="/contact" $isActive={pathname === "/contact"}>
                    Contact
                </LinkStyled>
            </SecondaryHeaderContainer>
        </HeaderContainer>
    );
}
