import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";
import ProjectGallery from "../ProjectGallery";

import {
    BackLink,
    Cover,
    DetailCategory,
    DetailContainer,
    DetailDescription,
    DetailHeader,
    DetailLocation,
    DetailTitle,
    Page,
} from "../styles";

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
        title: `${project.title} | KS Construct`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <Page>
            <DetailContainer>
                <Link href="/projects" passHref>
                    <BackLink>← Toutes les réalisations</BackLink>
                </Link>

                <DetailHeader>
                    <DetailCategory>{project.category}</DetailCategory>

                    <DetailTitle>{project.title}</DetailTitle>

                    <DetailLocation>{project.location}</DetailLocation>

                    <DetailDescription>{project.description}</DetailDescription>
                </DetailHeader>

                <Cover>
                    <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        priority
                        sizes="100vw"
                    />
                </Cover>

                <ProjectGallery title="Avant" images={project.before} />

                <ProjectGallery title="En cours" images={project.progress} />

                <ProjectGallery title="Après" images={project.after} />
            </DetailContainer>
        </Page>
    );
}
