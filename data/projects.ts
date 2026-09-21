import projects from "@/data/projects.json";

export type Project = {
    slug: string;
    title: string;
    location: string;
    category: string;
    order: number;
    description: string;

    cover: string;

    before: string[];
    progress: string[];
    after: string[];
};

export const projectsData = projects as Project[];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
