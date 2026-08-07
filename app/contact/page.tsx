import {
    StyledField,
    StyledForm,
    StyledInput,
    StyledLabel,
    StyledMessage,
    StyledSubmitButton,
} from "../components/styles";

export default function Contact() {
    return (
        <>
            <StyledForm>
                <StyledField>
                    <StyledLabel htmlFor="name">Name</StyledLabel>
                    <StyledInput id="name" name="name" type="text" required />
                </StyledField>

                <StyledField>
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                    <StyledInput
                        id="email"
                        name="email"
                        type="email"
                        required
                    />
                </StyledField>

                <StyledField>
                    <StyledLabel htmlFor="phone">Phone Number</StyledLabel>
                    <StyledInput id="phone" name="phone" type="tel" />
                </StyledField>

                <StyledField>
                    <StyledLabel htmlFor="message">Message</StyledLabel>
                    <StyledMessage id="message" name="message" required />
                </StyledField>

                <StyledSubmitButton type="submit">Send</StyledSubmitButton>
            </StyledForm>
        </>
    );
}
