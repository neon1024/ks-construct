import { notFound } from "next/navigation";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { locales, type Locale } from "@/i18n/config";
import getTranslations from "@/i18n/getTranslations";

import { AppContextProvider } from "@/contexts/AppContext";

export default async function LocaleLayout({
    children,
    params,
}: LayoutProps<"/[locale]">) {
    const { locale } = await params;

    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    const typedLocale = locale as Locale;

    const translations = await getTranslations(typedLocale);

    return (
        <AppContextProvider locale={typedLocale} translations={translations}>
            <Header />
            <main>{children}</main>
            <Footer />
        </AppContextProvider>
    );
}
