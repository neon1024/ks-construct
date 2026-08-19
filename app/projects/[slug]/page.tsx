import Image from "next/image";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";
import ProjectGallery from "./components/ProjectGallery";

import { COMPANY } from "@/constants";

import {
    BackLink,
    ContactCTA,
    ContactCTAButton,
    ContactCTAContent,
    ContactCTAEyebrow,
    ContactCTAText,
    ContactCTATitle,
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

    return (
        <Page>
            <DetailContainer>
                <BackLink href="/projects">← Toutes les réalisations</BackLink>
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

                <ContactCTA>
                    <ContactCTAContent>
                        <ContactCTAEyebrow>Votre projet</ContactCTAEyebrow>

                        <ContactCTATitle>
                            Vous avez un projet en tête ?
                        </ContactCTATitle>

                        <ContactCTAText>
                            Contactez-nous pour discuter de votre projet et
                            découvrir comment KS Construct peut vous
                            accompagner.
                        </ContactCTAText>
                    </ContactCTAContent>

                    <ContactCTAButton href="/contact">
                        Nous contacter <span>→</span>
                    </ContactCTAButton>
                </ContactCTA>
            </DetailContainer>
        </Page>
    );
}
