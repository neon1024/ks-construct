import { ContactContentContainer, ContactPageContainer } from "./styles";

import { Locale, locales } from "@/i18n/config";
import getTranslations from "@/i18n/getTranslations";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHero from "./components/ContactHero/ContactHero";
import ContactInfo from "./components/ContactInfo/ContactInfo";

export async function generateMetadata({
    params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
    const { locale } = await params;

    const typedLocale = locale as Locale;

    if (!locales.includes(typedLocale)) {
        notFound();
    }

    const translations = await getTranslations(typedLocale);

    return {
        title: translations.common.contact,
        description: translations.contact.hero.description,
    };
}

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
