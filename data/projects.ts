export type Project = {
    slug: string;
    title: string;
    location: string;
    category: string;
    description: string;

    cover: string;

    before: string[];
    progress: string[];
    after: string[];
};

export const projects: Project[] = [
    {
        slug: "isolation-exterieure",
        title: "Isolation extérieure",
        location: "France",
        category: "Isolation",
        description:
            "Travaux d'isolation extérieure visant à améliorer les performances énergétiques et le confort du logement.",

        cover: "/images/projects/project-1/after1.jpeg",

        before: [
            "/images/projects/project-1/before1.jpeg",
            "/images/projects/project-1/before2.jpeg",
        ],

        progress: [
            "/images/projects/project-1/progress1.jpeg",
            "/images/projects/project-1/progress2.jpeg",
            "/images/projects/project-1/progress3.jpeg",
        ],

        after: [
            "/images/projects/project-1/after1.jpeg",
            "/images/projects/project-1/after2.jpeg",
            "/images/projects/project-1/after3.jpeg",
            "/images/projects/project-1/after4.jpeg",
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
