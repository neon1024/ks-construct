import { COMPANY } from "@/constants";
import ProjectsClient from "./components/ProjectsClient/ProjectsClient";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    const metadata = {
        fr: {
            title: `Nos réalisations | ${COMPANY.NAME}`,
            description:
                "Découvrez les projets réalisés par KS Construct en isolation, rénovation énergétique et amélioration de l'habitat.",
        },
        en: {
            title: `Our Projects | ${COMPANY.NAME}`,
            description:
                "Discover projects completed by KS Construct in insulation, energy renovation, and home improvement.",
        },
        es: {
            title: `Nuestros proyectos | ${COMPANY.NAME}`,
            description:
                "Descubra los proyectos realizados por KS Construct en aislamiento, renovación energética y mejora del hogar.",
        },
    };

    return metadata[locale as keyof typeof metadata] ?? metadata.fr;
}

export default function ProjectsPage() {
    return <ProjectsClient />;
}
