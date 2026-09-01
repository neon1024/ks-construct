import {
    ContactFormContainer,
    ContactFormSubtitle,
    ContactFormTitle,
    StyledField,
    StyledForm,
    StyledInput,
    StyledLabel,
    StyledMessage,
    StyledSubmitButton,
} from "./styles";

import { COMPANY } from "@/constants";
import { sendEmail } from "../../actions";

import { formatPhoneNumber } from "@/utils/utils";

export default function ContactForm() {
    return (
        <>
            <ContactFormContainer>
                <ContactFormTitle>Envoyez-nous un message</ContactFormTitle>

                <ContactFormSubtitle>
                    Décrivez-nous votre projet et nous vous recontacterons dans
                    les meilleurs délais.
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
        </>
    );
}
