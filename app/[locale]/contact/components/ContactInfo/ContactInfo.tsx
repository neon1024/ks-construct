"use client";

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
import useAppContext from "@/contexts/AppContext";
import { formatPhoneNumber } from "@/utils/utils";

export default function ContactInfo() {
    const { translations } = useAppContext();

    return (
        <>
            <ContactInfoContainer>
                <ContactInfoTitle>
                    {translations?.contact.info.title}
                </ContactInfoTitle>

                <ContactInfoText>
                    {translations?.contact.info.description}
                </ContactInfoText>

                <ContactInfoItem>
                    <ContactInfoLabel>
                        {translations?.common.phone}
                    </ContactInfoLabel>

                    <ContactInfoLink href={`tel:${COMPANY.PHONE_NUMBER}`}>
                        {formatPhoneNumber(COMPANY.PHONE_NUMBER)}
                    </ContactInfoLink>
                </ContactInfoItem>

                <ContactInfoItem>
                    <ContactInfoLabel>
                        {translations?.common.mail}
                    </ContactInfoLabel>

                    <ContactInfoLink href={`mailto:${COMPANY.EMAIL}`}>
                        {COMPANY.EMAIL}
                    </ContactInfoLink>
                </ContactInfoItem>

                <ContactInfoItem>
                    <ContactInfoLabel>
                        {translations?.contact.info.zone}
                    </ContactInfoLabel>

                    <ContactInfoValue>
                        {translations?.common.country.fr} &{" "}
                        {translations?.common.country.es}
                    </ContactInfoValue>
                </ContactInfoItem>
            </ContactInfoContainer>
        </>
    );
}
