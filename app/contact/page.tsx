import { ContactContentContainer, ContactPageContainer } from "./styles";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactHero from "./components/ContactHero/ContactHero";
import ContactInfo from "./components/ContactInfo/ContactInfo";

export default function ContactPage() {
    return (
        <ContactPageContainer>
            <ContactHero />

            <ContactContentContainer>
                <ContactInfo />

                <ContactForm />
            </ContactContentContainer>
        </ContactPageContainer>
    );
}
