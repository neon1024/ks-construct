import {
    ContactContent,
    ContactEyebrow,
    ContactFormContainer,
    ContactFormSubtitle,
    ContactFormTitle,
    ContactHero,
    ContactInfo,
    ContactInfoItem,
    ContactInfoLabel,
    ContactInfoLink,
    ContactInfoText,
    ContactInfoTitle,
    ContactInfoValue,
    ContactPage,
    ContactSubtitle,
    ContactTitle,
    StyledField,
    StyledForm,
    StyledInput,
    StyledLabel,
    StyledMessage,
    StyledSubmitButton,
} from "../components/styles";

import { COMPANY } from "@/constants";
import { formatPhoneNumber } from "../components/layout/Footer/utils";
import { sendEmail } from "./actions";

export default function Contact() {
    return (
        <ContactPage>
            <ContactHero>
                <ContactEyebrow>CONTACT</ContactEyebrow>

                <ContactTitle>Parlons de votre projet.</ContactTitle>

                <ContactSubtitle>
                    Vous avez un projet de construction, de rénovation ou
                    d&apos;amélioration énergétique ? Contactez-nous et
                    discutons ensemble de vos besoins.
                </ContactSubtitle>
            </ContactHero>

            <ContactContent>
                <ContactInfo>
                    <ContactInfoTitle>Nous contacter</ContactInfoTitle>

                    <ContactInfoText>
                        Notre équipe est à votre disposition pour répondre à vos
                        questions et vous accompagner dans votre projet.
                    </ContactInfoText>

                    <ContactInfoItem>
                        <ContactInfoLabel>Téléphone</ContactInfoLabel>

                        <ContactInfoLink href={`tel:${COMPANY.PHONE_NUMBER}`}>
                            {formatPhoneNumber(COMPANY.PHONE_NUMBER)}
                        </ContactInfoLink>
                    </ContactInfoItem>

                    <ContactInfoItem>
                        <ContactInfoLabel>E-mail</ContactInfoLabel>

                        <ContactInfoLink href={`mailto:${COMPANY.EMAIL}`}>
                            {COMPANY.EMAIL}
                        </ContactInfoLink>
                    </ContactInfoItem>

                    <ContactInfoItem>
                        <ContactInfoLabel>
                            Zone d&apos;intervention
                        </ContactInfoLabel>

                        <ContactInfoValue>France & Spain</ContactInfoValue>
                    </ContactInfoItem>
                </ContactInfo>

                <ContactFormContainer>
                    <ContactFormTitle>Envoyez-nous un message</ContactFormTitle>

                    <ContactFormSubtitle>
                        Décrivez-nous votre projet et nous vous recontacterons
                        dans les meilleurs délais.
                    </ContactFormSubtitle>

                    <StyledForm action={sendEmail}>
                        <StyledField>
                            <StyledLabel htmlFor="name">Nom</StyledLabel>

                            <StyledInput
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                required
                            />
                        </StyledField>

                        <StyledField>
                            <StyledLabel htmlFor="email">E-mail</StyledLabel>

                            <StyledInput
                                id="email"
                                name="email"
                                type="email"
                                placeholder={COMPANY.EMAIL}
                                required
                            />
                        </StyledField>

                        <StyledField>
                            <StyledLabel htmlFor="phone">Téléphone</StyledLabel>

                            <StyledInput
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder={formatPhoneNumber(
                                    COMPANY.PHONE_NUMBER,
                                )}
                                required
                            />
                        </StyledField>

                        <StyledField>
                            <StyledLabel htmlFor="message">
                                Votre projet
                            </StyledLabel>

                            <StyledMessage
                                id="message"
                                name="message"
                                placeholder="Décrivez votre projet..."
                                required
                            />
                        </StyledField>

                        <StyledSubmitButton type="submit">
                            Envoyer ma demande
                            <span>→</span>
                        </StyledSubmitButton>
                    </StyledForm>
                </ContactFormContainer>
            </ContactContent>
        </ContactPage>
    );
}
