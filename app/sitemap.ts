import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.ks-construct.fr/",
            lastModified: new Date(),
        },
        {
            url: "https://www.ks-construct.fr/contact",
            lastModified: new Date(),
        },
        {
            url: "https://www.ks-construct.fr/projects",
            lastModified: new Date(),
        },
        {
            url: "https://www.ks-construct.fr/projects/isolation-exterieure",
            lastModified: new Date(),
        },
        {
            url: "https://www.ks-construct.fr/projects/interieure-exterieure-toiture-renovation",
            lastModified: new Date(),
        },
        {
            url: "https://www.ks-construct.fr/projects/toiture-renovation",
            lastModified: new Date(),
        },
        {
            url: "https://www.ks-construct.fr/projects/installation-climatisation",
            lastModified: new Date(),
        },
    ];
}
