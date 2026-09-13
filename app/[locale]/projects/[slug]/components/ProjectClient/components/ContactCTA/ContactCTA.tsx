"use client";

import useAppContext from "@/contexts/AppContext";
import {
    ContactCTAButton,
    ContactCTAContainer,
    ContactCTAContent,
    ContactCTAEyebrow,
    ContactCTAText,
    ContactCTATitle,
} from "./styles";

import getLocalizedPath from "@/i18n/getLocalizedPath";

import { PATH } from "@/constants";

export default function ContactCTA() {
    const { locale, translations } = useAppContext();

    return (
        <ContactCTAContainer>
            <ContactCTAContent>
                <ContactCTAEyebrow>
                    {translations?.projects.contact.cta.eyebrow}
                </ContactCTAEyebrow>

                <ContactCTATitle>
                    {translations?.projects.contact.cta.title}
                </ContactCTATitle>

                <ContactCTAText>
                    {translations?.projects.contact.cta.description}
                </ContactCTAText>
            </ContactCTAContent>

            <ContactCTAButton href={getLocalizedPath(locale!, PATH.CONTACT)}>
                {translations?.projects.contact.cta.action.label} <span>→</span>
            </ContactCTAButton>
        </ContactCTAContainer>
    );
}
