import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import type { Locale } from "@/i18n/config";
import getTranslations from "@/i18n/getTranslations";

import { AppContextProvider } from "@/contexts/AppContext";

type Props = {
    children: React.ReactNode;
    params: Promise<{
        locale: Locale;
    }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    const translations = await getTranslations(locale);

    return (
        <AppContextProvider locale={locale} translations={translations}>
            <Header />
            <main>{children}</main>
            <Footer />
        </AppContextProvider>
    );
}
