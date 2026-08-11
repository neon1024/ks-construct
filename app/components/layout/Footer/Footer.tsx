import { COMPANY } from "@/constants";
import { Mail, Phone } from "lucide-react";
import {
    FooterColumn,
    FooterLogo,
    FooterTitle,
    IconAndTextContainer,
    PrimaryFooterContainer,
    SecondaryFooterContainer,
    StyledFooter,
    StyledFooterItem,
} from "../Footer/styles";
import { formatPhoneNumber } from "./utils";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <StyledFooter>
            <PrimaryFooterContainer>
                <FooterLogo
                    src="/logo.png"
                    alt={COMPANY.NAME}
                    width={80}
                    height={80}
                />

                <FooterColumn>
                    <FooterTitle>Location</FooterTitle>
                    <StyledFooterItem>{COMPANY.LOCATION}</StyledFooterItem>
                </FooterColumn>

                <FooterColumn>
                    <FooterTitle>Contact</FooterTitle>

                    <IconAndTextContainer>
                        <Phone size={18} />
                        <StyledFooterItem>
                            <a href={`tel:${COMPANY.PHONE_NUMBER}`}>
                                {formatPhoneNumber(COMPANY.PHONE_NUMBER)}
                            </a>
                        </StyledFooterItem>
                    </IconAndTextContainer>

                    <IconAndTextContainer>
                        <Mail size={18} />
                        <StyledFooterItem>{COMPANY.EMAIL}</StyledFooterItem>
                    </IconAndTextContainer>
                </FooterColumn>
            </PrimaryFooterContainer>

            <hr style={{ margin: 0, padding: 0 }} />

            <SecondaryFooterContainer>
                &copy; {year} {COMPANY.NAME}
            </SecondaryFooterContainer>
        </StyledFooter>
    );
}
