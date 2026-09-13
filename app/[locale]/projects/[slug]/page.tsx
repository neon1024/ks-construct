import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";

import { COMPANY } from "@/constants";
import ProjectClient from "./components/ProjectClient/ProjectClient";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
        return {};
    }

    return {
        title: `${project.title} | ${COMPANY.NAME}`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectClient project={project} />;
}
