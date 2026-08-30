import {
    ContactInfoContainer,
    ContactInfoItem,
    ContactInfoLabel,
    ContactInfoLink,
    ContactInfoText,
    ContactInfoTitle,
    ContactInfoValue,
} from "./styles";

import { COMPANY } from "@/constants";
import { formatPhoneNumber } from "@/utils/utils";

export default function ContactInfo() {
    return (
        <>
            <ContactInfoContainer>
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
            </ContactInfoContainer>
        </>
    );
}
