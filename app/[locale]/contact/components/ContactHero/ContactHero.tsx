"use client";

import useAppContext from "@/contexts/AppContext";
import {
    ContactEyebrow,
    ContactHeroContainer,
    ContactSubtitle,
    ContactTitle,
} from "./styles";

export default function ContactHero() {
    const { translations } = useAppContext();

    return (
        <>
            <ContactHeroContainer>
                <ContactEyebrow>
                    {translations?.contact.hero.eyebrow}
                </ContactEyebrow>

                <ContactTitle>{translations?.contact.hero.title}</ContactTitle>

                <ContactSubtitle>
                    {translations?.contact.hero.description}
                </ContactSubtitle>
            </ContactHeroContainer>
        </>
    );
}
