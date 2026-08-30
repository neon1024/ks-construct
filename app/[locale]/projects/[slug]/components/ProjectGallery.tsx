"use client";

import Image from "next/image";
import { useState } from "react";

import {
    CloseButton,
    Gallery,
    GalleryImage,
    GalleryItem,
    Lightbox,
    LightboxBackdrop,
    LightboxContent,
    LightboxImage,
    NavigationButton,
    Stage,
    StageTitle,
} from "./styles";

type ProjectGalleryProps = {
    title: string;
    images: string[];
};

export default function ProjectGallery({ title, images }: ProjectGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const showPrevious = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0 ? images.length - 1 : selectedIndex - 1,
        );
    };

    const showNext = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === images.length - 1 ? 0 : selectedIndex + 1,
        );
    };

    if (!images.length) return null;

    return (
        <>
            <Stage>
                <StageTitle>{title}</StageTitle>

                <Gallery>
                    {images.map((image, index) => (
                        <GalleryItem
                            key={image}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <GalleryImage>
                                <Image
                                    src={image}
                                    alt={`${title} - photo ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </GalleryImage>
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

                        {images.length > 1 && (
                            <NavigationButton
                                type="button"
                                $position="left"
                                onClick={showPrevious}
                                aria-label="Image précédente"
                            >
                                {"<"}
                            </NavigationButton>
                        )}

                        <LightboxImage>
                            <Image
                                src={images[selectedIndex]}
                                alt={`${title} - photo ${selectedIndex + 1}`}
                                fill
                                sizes="90vw"
                            />
                        </LightboxImage>

                        {images.length > 1 && (
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
