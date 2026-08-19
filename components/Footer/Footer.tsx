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
} from "./styles";

import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatPhoneNumber } from "@/utils/utils";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <StyledFooter>
            <PrimaryFooterContainer>
                <FooterLogo
                    src="/images/logo.png"
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
                        <a href={`tel:${COMPANY.PHONE_NUMBER}`}>
                            <Phone size={18} />
                            <StyledFooterItem>
                                {formatPhoneNumber(COMPANY.PHONE_NUMBER)}
                            </StyledFooterItem>
                        </a>
                    </IconAndTextContainer>

                    <IconAndTextContainer>
                        <Mail size={18} />
                        <StyledFooterItem>{COMPANY.EMAIL}</StyledFooterItem>
                    </IconAndTextContainer>

                    <IconAndTextContainer>
                        <a href={COMPANY.SOCIALS.FACEBOOK} target="_blank">
                            <FontAwesomeIcon
                                icon={faFacebook}
                                style={{
                                    width: 18,
                                    height: 18,
                                }}
                            />
                            <StyledFooterItem>{COMPANY.NAME}</StyledFooterItem>
                        </a>
                    </IconAndTextContainer>

                    <IconAndTextContainer>
                        <a href={COMPANY.SOCIALS.INSTAGRAM} target="_blank">
                            <FontAwesomeIcon
                                icon={faInstagram}
                                style={{
                                    width: 18,
                                    height: 18,
                                }}
                            />
                            <StyledFooterItem>{COMPANY.NAME}</StyledFooterItem>
                        </a>
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
