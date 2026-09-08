"use client";

import Image from "next/image";
import { useState } from "react";

import { MEDIA_TYPES } from "@/constants";
import { getMediaType } from "@/utils/utils";
import {
    CloseButton,
    Gallery,
    GalleryItem,
    GalleryMedia,
    Lightbox,
    LightboxBackdrop,
    LightboxContent,
    LightboxMedia,
    NavigationButton,
    Stage,
    StageTitle,
} from "./styles";

type ProjectGalleryProps = {
    title: string;
    media: string[];
};

export default function ProjectGallery({ title, media }: ProjectGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const showPrevious = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0 ? media.length - 1 : selectedIndex - 1,
        );
    };

    const showNext = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === media.length - 1 ? 0 : selectedIndex + 1,
        );
    };

    if (!media.length) return null;

    return (
        <>
            <Stage>
                <StageTitle>{title}</StageTitle>

                <Gallery>
                    {media.map((content, index) => (
                        <GalleryItem
                            key={content}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <GalleryMedia>
                                {getMediaType(content) === MEDIA_TYPES.IMAGE ? (
                                    <Image
                                        src={content}
                                        alt={`${title} - photo ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                ) : (
                                    <video
                                        src={content}
                                        autoPlay
                                        playsInline
                                        muted
                                        loop
                                    />
                                )}
                            </GalleryMedia>
                        </GalleryItem>
                    ))}
                </Gallery>
            </Stage>

            {selectedIndex !== null && (
                <Lightbox>
                    <LightboxBackdrop onClick={closeLightbox} />

                    <LightboxContent>
                        <CloseButton
                            type="button"
                            onClick={closeLightbox}
                            aria-label="Fermer"
                        >
                            {"X"}
                        </CloseButton>

                        {media.length > 1 && (
                            <NavigationButton
                                type="button"
                                $position="left"
                                onClick={showPrevious}
                                aria-label="Image précédente"
                            >
                                {"<"}
                            </NavigationButton>
                        )}

                        <LightboxMedia>
                            {getMediaType(media[selectedIndex]) ===
                            MEDIA_TYPES.IMAGE ? (
                                <Image
                                    src={media[selectedIndex]}
                                    alt={`${title} - photo ${selectedIndex + 1}`}
                                    fill
                                    sizes="90vw"
                                />
                            ) : (
                                <video
                                    src={media[selectedIndex]}
                                    autoPlay
                                    playsInline
                                    muted
                                />
                            )}
                        </LightboxMedia>

                        {media.length > 1 && (
                            <NavigationButton
                                type="button"
                                $position="right"
                                onClick={showNext}
                                aria-label="Image suivante"
                            >
                                {">"}
                            </NavigationButton>
                        )}
                    </LightboxContent>
                </Lightbox>
            )}
        </>
    );
}
