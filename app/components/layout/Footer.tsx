import { COMPANY } from "@/constants";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import {
    FooterColumn,
    FooterTitle,
    IconAndTextContainer,
    PrimaryFooterContainer,
    SecondaryFooterContainer,
    StyledFooter,
} from "./styles";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <StyledFooter>
            <PrimaryFooterContainer>
                <Image
                    src={"/logo.png"}
                    alt={COMPANY.NAME}
                    width={100}
                    height={100}
                />
                <FooterColumn>
                    <FooterTitle>Location</FooterTitle>
                    <p>{COMPANY.LOCATION}</p>
                </FooterColumn>
                <FooterColumn>
                    <FooterTitle>Contact</FooterTitle>
                    <IconAndTextContainer>
                        <Phone /> {COMPANY.PHONE_NUMBER}
                    </IconAndTextContainer>
                    <IconAndTextContainer>
                        <Mail /> {COMPANY.EMAIL}
                    </IconAndTextContainer>
                </FooterColumn>
            </PrimaryFooterContainer>
            <SecondaryFooterContainer>
                &copy {year} {COMPANY.NAME}
            </SecondaryFooterContainer>
        </StyledFooter>
    );
}
