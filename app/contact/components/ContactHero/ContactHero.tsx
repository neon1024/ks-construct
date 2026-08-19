import {
    ContactEyebrow,
    ContactHeroContainer,
    ContactSubtitle,
    ContactTitle,
} from "./styles";

export default function ContactHero() {
    return (
        <>
            <ContactHeroContainer>
                <ContactEyebrow>CONTACT</ContactEyebrow>

                <ContactTitle>Parlons de votre projet.</ContactTitle>

                <ContactSubtitle>
                    Vous avez un projet de construction, de rénovation ou
                    d&apos;amélioration énergétique ? Contactez-nous et
                    discutons ensemble de vos besoins.
                </ContactSubtitle>
            </ContactHeroContainer>
        </>
    );
}
