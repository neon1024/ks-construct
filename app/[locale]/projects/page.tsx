import { Locale, locales } from "@/i18n/config";
import getTranslations from "@/i18n/getTranslations";
import { notFound } from "next/navigation";
import ProjectsClient from "./components/ProjectsClient/ProjectsClient";

import { PATH } from "@/constants";
import { getAlternates } from "@/i18n/getAlternates";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: PageProps<"/[locale]/projects">): Promise<Metadata> {
    const { locale } = await params;

    const typedLocale = locale as Locale;

    if (!locales.includes(typedLocale)) {
        notFound();
    }

    const translations = await getTranslations(typedLocale);

    return {
        title: translations.projects.title,
        description: translations.projects.hero.description,
        alternates: getAlternates(typedLocale, PATH.PROJECTS),
    };
}

export default function ProjectsPage() {
    return <ProjectsClient />;
}
