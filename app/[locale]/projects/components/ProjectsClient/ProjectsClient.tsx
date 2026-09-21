"use client";

import useAppContext from "@/contexts/AppContext";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import ProjectCard from "../ProjectCard/ProjectCard";
import Video from "../Video/Video";
import {
    ProjectsContainer,
    ProjectsCount,
    ProjectsGrid,
    ProjectsHeader,
    ProjectsSection,
    ProjectsTitle,
    VideoContainer,
} from "./styles";

import { PageContainer } from "../../styles";

import { Project, projectsData } from "@/data/projects";

export default function ProjectsClient() {
    const { translations } = useAppContext();

    const sortedProjectsByOrder = [...projectsData].sort(
        (a: Project, b: Project) => a.order - b.order,
    );

    return (
        <PageContainer>
            <Hero />

            <Intro />

            <VideoContainer>
                <Video />
            </VideoContainer>

            <ProjectsSection>
                <ProjectsContainer>
                    <ProjectsHeader>
                        <ProjectsTitle>
                            {translations?.projects.title}
                        </ProjectsTitle>

                        <ProjectsCount>
                            {projectsData.length}{" "}
                            {projectsData.length === 1
                                ? translations?.projects.count.singular
                                : translations?.projects.count.plural}
                        </ProjectsCount>
                    </ProjectsHeader>

                    <ProjectsGrid>
                        {sortedProjectsByOrder.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                slug={project.slug}
                                title={project.title}
                                location={project.location}
                                category={project.category}
                                cover={project.cover}
                            />
                        ))}
                    </ProjectsGrid>
                </ProjectsContainer>
            </ProjectsSection>
        </PageContainer>
    );
}
