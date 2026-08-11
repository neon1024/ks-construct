import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://ks-construct.fr",
            lastModified: new Date(),
        },
        {
            url: "https://ks-construct.fr/contact",
            lastModified: new Date(),
        },
    ];
}
