"use client";

import { PageContainer } from "../../../styles";
import {
    BackLink,
    Cover,
    DetailCategory,
    DetailContainer,
    DetailDescription,
    DetailHeader,
    DetailLocation,
    DetailTitle,
} from "./styles";

import { MEDIA_TYPES, PATH } from "@/constants";

import { getMediaType } from "@/utils/utils";
import Image from "next/image";

import useAppContext from "@/contexts/AppContext";
import { Project } from "@/data/projects";
import getLocalizedPath from "@/i18n/getLocalizedPath";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import ContactCTA from "./components/ContactCTA/ContactCTA";

type ProjectClientProps = {
    project: Project;
};

export default function ProjectClient({ project }: ProjectClientProps) {
    const { locale, translations } = useAppContext();

    return (
        <PageContainer>
            <DetailContainer>
                <BackLink href={getLocalizedPath(locale!, PATH.PROJECTS)}>
                    <span>←</span> {translations?.projects.goback}
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

                <ProjectGallery
                    title={translations?.projects.before ?? "Avant"}
                    media={project.before}
                />
                <ProjectGallery
                    title={translations?.projects.progress ?? "En cours"}
                    media={project.progress}
                />
                <ProjectGallery
                    title={translations?.projects.after ?? "Après"}
                    media={project.after}
                />

                <ContactCTA />
            </DetailContainer>
        </PageContainer>
    );
}
