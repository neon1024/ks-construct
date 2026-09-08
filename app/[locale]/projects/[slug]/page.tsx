import Image from "next/image";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";
import ProjectGallery from "./components/ProjectGallery";

import { COMPANY, MEDIA_TYPES, PATH } from "@/constants";

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

import { getMediaType } from "@/utils/utils";

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
                <BackLink href={PATH.PROJECTS}>
                    ← Toutes les réalisations
                </BackLink>
                <DetailHeader>
                    <DetailCategory>{project.category}</DetailCategory>

                    <DetailTitle>{project.title}</DetailTitle>

                    <DetailLocation>{project.location}</DetailLocation>

                    <DetailDescription>{project.description}</DetailDescription>
                </DetailHeader>
                <Cover>
                    {getMediaType(project.cover) === MEDIA_TYPES.IMAGE ? (
                        <Image
                            src={project.cover}
                            alt={project.title}
                            fill
                            priority
                            sizes="100vw"
                        />
                    ) : (
                        <video>
                            <source src={project.cover} type="video/mp4" />
                        </video>
                    )}
                </Cover>

                <ProjectGallery title="Avant" media={project.before} />
                <ProjectGallery title="En cours" media={project.progress} />
                <ProjectGallery title="Après" media={project.after} />

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

                    <ContactCTAButton href={PATH.CONTACT}>
                        Nous contacter <span>→</span>
                    </ContactCTAButton>
                </ContactCTA>
            </DetailContainer>
        </Page>
    );
}
