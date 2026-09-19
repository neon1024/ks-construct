import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";

import ProjectClient from "./components/ProjectClient/ProjectClient";

import { PATH } from "@/constants";
import { Locale, locales } from "@/i18n/config";
import { getAlternates } from "@/i18n/getAlternates";
import { Metadata } from "next";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
    params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
    const { locale, slug } = await params;

    const typedLocale = locale as Locale;

    if (!locales.includes(typedLocale)) {
        notFound();
    }

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return {
        title: project.title,
        description: project.description,
        alternates: getAlternates(typedLocale, `${PATH.PROJECTS}/${slug}`),
    };
}

export default async function ProjectPage({
    params,
}: PageProps<"/[locale]/projects/[slug]">) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectClient project={project} />;
}
