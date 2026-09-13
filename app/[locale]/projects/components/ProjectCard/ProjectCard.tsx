"use client";

import Image from "next/image";
import Link from "next/link";

import useAppContext from "@/contexts/AppContext";
import getLocalizedPath from "@/i18n/getLocalizedPath";
import {
    Arrow,
    Card,
    CardImage,
    Category,
    Content,
    ImageContainer,
    ImageOverlay,
    Location,
    Title,
} from "../ProjectCard/styles";

type ProjectCardProps = {
    slug: string;
    title: string;
    location: string;
    category: string;
    cover: string;
};

export default function ProjectCard({
    slug,
    title,
    location,
    category,
    cover,
}: ProjectCardProps) {
    const { locale, translations } = useAppContext();

    return (
        <Card>
            <Link href={getLocalizedPath(locale!, `/projects/${slug}`)}>
                <ImageContainer>
                    <CardImage>
                        <Image
                            src={cover}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </CardImage>

                    <ImageOverlay />
                </ImageContainer>

                <Content>
                    <Category>{category}</Category>

                    <Title>{title}</Title>

                    <Location>{location}</Location>

                    <Arrow>
                        {translations?.projects.goto} <span>→</span>
                    </Arrow>
                </Content>
            </Link>
        </Card>
    );
}
