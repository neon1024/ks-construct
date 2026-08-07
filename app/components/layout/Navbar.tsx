import { COMPANY } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {
    HeaderContainer,
    HeaderTitle,
    PrimaryHeaderContainer,
    SecondaryHeaderContainer,
} from "./styles";

export default function Navbar() {
    return (
        <HeaderContainer>
            <PrimaryHeaderContainer>
                <Image
                    src={"/logo.png"}
                    alt={COMPANY.NAME}
                    width={100}
                    height={100}
                />
                <HeaderTitle>{COMPANY.NAME}</HeaderTitle>
            </PrimaryHeaderContainer>
            <SecondaryHeaderContainer>
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
            </SecondaryHeaderContainer>
        </HeaderContainer>
    );
}
