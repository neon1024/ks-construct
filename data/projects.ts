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
    {
        slug: "interieure-exterieure-toiture-renovation",
        title: "Rénovation intérieure, extérieure et de toiture",
        location: "France",
        category: "Isolation",
        description:
            "Rénovation complète de l'intérieur, de l'extérieur et de la toiture visant à améliorer la performance énergétique et le confort du logement.",

        cover: "/images/projects/project-2/after1.jpg",

        before: [
            "/images/projects/project-2/before1.jpg",
            "/images/projects/project-2/before2.jpg",
        ],

        progress: [
            "/images/projects/project-2/progress1.jpg",
            "/images/projects/project-2/progress2.jpg",
            "/images/projects/project-2/progress3.jpg",
            "/images/projects/project-2/progress4.jpg",
        ],

        after: [
            "/images/projects/project-2/after1.jpg",
            "/images/projects/project-2/after2.jpg",
            "/images/projects/project-2/after3.jpg",
        ],
    },
    {
        slug: "toiture-renovation",
        title: "Rénovation de toiture",
        location: "France",
        category: "Renovation",
        description:
            "Rénovation complète de la toiture visant à améliorer l'efficacité énergétique, le confort thermique et la protection à long terme du bâtiment. Le projet comprenait la modernisation de la charpente et de l'isolation, ainsi que l'amélioration de la durabilité et de la résistance aux intempéries du bâtiment.",

        cover: "/images/projects/project-3/progress3.jpg",

        before: [
            "/images/projects/project-3/before1.jpg",
            "/images/projects/project-3/before2.jpg",
        ],

        progress: [
            "/images/projects/project-3/progress1.jpg",
            "/images/projects/project-3/progress2.jpg",
            "/images/projects/project-3/progress3.jpg",
            "/images/projects/project-3/progress4.jpg",
        ],

        after: [
            "/images/projects/project-3/after1.jpg",
            "/images/projects/project-3/after2.jpg",
            "/images/projects/project-3/after3.jpg",
        ],
    },
    {
        slug: "installation-climatisation",
        title: "Installation et entretien de climatisation",
        location: "France",
        category: "Installation et entretien",
        description: "Installation et entretien de climatisation",

        cover: "/images/projects/project-4/after1.jpg",

        before: [
            "/images/projects/project-4/before1.jpeg",
            "/images/projects/project-4/before2.jpg",
            "/images/projects/project-4/before3.jpg",
        ],

        progress: [
            "/videos/projects/project-4/progress1.mp4",
            "/videos/projects/project-4/progress2.mp4",
        ],

        after: [
            "/images/projects/project-4/after1.jpg",
            "/images/projects/project-4/after2.jpg",
        ],
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
