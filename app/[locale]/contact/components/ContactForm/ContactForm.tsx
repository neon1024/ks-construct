"use client";

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

import useAppContext from "@/contexts/AppContext";
import { formatPhoneNumber } from "@/utils/utils";

export default function ContactForm() {
    const { translations } = useAppContext();

    return (
        <>
            <ContactFormContainer>
                <ContactFormTitle>
                    {translations?.contact.form.title}
                </ContactFormTitle>

                <ContactFormSubtitle>
                    {translations?.contact.form.description}
                </ContactFormSubtitle>

                <StyledForm action={sendEmail}>
                    <StyledField>
                        <StyledLabel htmlFor="name">
                            {translations?.common.name}
                        </StyledLabel>

                        <StyledInput
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            required
                        />
                    </StyledField>

                    <StyledField>
                        <StyledLabel htmlFor="email">
                            {translations?.common.mail}
                        </StyledLabel>

                        <StyledInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder={COMPANY.EMAIL}
                            required
                        />
                    </StyledField>

                    <StyledField>
                        <StyledLabel htmlFor="phone">
                            {translations?.common.phone}
                        </StyledLabel>

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
                            {translations?.contact.form.message.label}
                        </StyledLabel>

                        <StyledMessage
                            id="message"
                            name="message"
                            placeholder={
                                translations?.contact.form.message.placeholder
                            }
                            required
                        />
                    </StyledField>

                    <StyledSubmitButton type="submit">
                        {translations?.contact.form.submit}
                        <span>→</span>
                    </StyledSubmitButton>
                </StyledForm>
            </ContactFormContainer>
        </>
    );
}
