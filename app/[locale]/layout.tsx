import { notFound } from "next/navigation";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { locales, type Locale } from "@/i18n/config";
import getTranslations from "@/i18n/getTranslations";

import { AppContextProvider } from "@/contexts/AppContext";

import { COMPANY, PATH } from "@/constants";
import { getAlternates } from "@/i18n/getAlternates";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
    const { locale } = await params;

    const typedLocale = locale as Locale;

    if (!locales.includes(typedLocale)) {
        notFound();
    }

    const translations = await getTranslations(typedLocale);

    return {
        title: {
            default: COMPANY.NAME,
            template: `%s | ${COMPANY.NAME}`,
        },
        description: translations.home.hero.description,
        keywords: translations.keywords,
        alternates: getAlternates(typedLocale, PATH.HOME),
    };
}

export default async function LocaleLayout({
    children,
    params,
}: LayoutProps<"/[locale]">) {
    const { locale } = await params;

    const typedLocale = locale as Locale;

    if (!locales.includes(typedLocale)) {
        notFound();
    }

    const translations = await getTranslations(typedLocale);

    return (
        <AppContextProvider locale={typedLocale} translations={translations}>
            <Header />
            <main>{children}</main>
            <Footer />
        </AppContextProvider>
    );
}
