import { projects } from "@/data/projects";
import ProjectCard from "./components/ProjectCard";

import {
    Eyebrow,
    Hero,
    HeroContent,
    HeroText,
    HeroTitle,
    Intro,
    IntroText,
    IntroTitle,
    Page,
    ProjectsContainer,
    ProjectsCount,
    ProjectsGrid,
    ProjectsHeader,
    ProjectsSection,
    ProjectsTitle,
} from "./styles";

export const metadata = {
    title: "Nos réalisations | KS Construct",
    description:
        "Découvrez les projets réalisés par KS Construct en isolation, rénovation énergétique et amélioration de l'habitat.",
};

export default function ProjectsPage() {
    return (
        <Page>
            <Hero>
                <HeroContent>
                    <Eyebrow>Nos réalisations</Eyebrow>

                    <HeroTitle>
                        Des projets qui transforment les logements.
                    </HeroTitle>

                    <HeroText>
                        Découvrez nos réalisations et suivez chaque projet, de
                        l'état initial jusqu'au résultat final.
                    </HeroText>
                </HeroContent>
            </Hero>

            <Intro>
                <div>
                    <Eyebrow>Notre savoir-faire</Eyebrow>

                    <IntroTitle>
                        Avant.
                        <br />
                        En cours.
                        <br />
                        Après.
                    </IntroTitle>
                </div>

                <IntroText>
                    <p>
                        Chaque chantier est unique. Découvrez les différentes
                        étapes de nos réalisations, de la préparation du
                        chantier aux dernières finitions.
                    </p>

                    <p>
                        Notre objectif : proposer des solutions adaptées à
                        chaque logement et réaliser des travaux soignés et
                        durables.
                    </p>
                </IntroText>
            </Intro>

            <ProjectsSection>
                <ProjectsContainer>
                    <ProjectsHeader>
                        <ProjectsTitle>Nos projets</ProjectsTitle>

                        <ProjectsCount>
                            {projects.length}{" "}
                            {projects.length === 1
                                ? "réalisation"
                                : "réalisations"}
                        </ProjectsCount>
                    </ProjectsHeader>

                    <ProjectsGrid>
                        {projects.map((project) => (
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
        </Page>
    );
}
