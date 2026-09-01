import styled from "styled-components";

export const CloseButton = styled.button`
    position: absolute;
    top: -3rem;
    right: 0;
    z-index: 2;

    width: 2.5rem;
    height: 2.5rem;

    border: 0;
    background: transparent;

    color: #fff;
    font-size: 2rem;
    line-height: 1;

    cursor: pointer;
`;

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;

export const GalleryItem = styled.button`
    padding: 0;

    border: 0;
    background: transparent;

    cursor: pointer;

    border-radius: 1rem;
    overflow: hidden;
`;

export const GalleryImage = styled.div`
    position: relative;
    aspect-ratio: 4 / 3;

    overflow: hidden;
    background: #eee;

    img {
        object-fit: cover;

        transition: transform 0.5s ease;
    }

    ${GalleryItem}:hover & img {
        transform: scale(1.04);
    }
`;

/* Lightbox */

export const Lightbox = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;
`;

export const LightboxBackdrop = styled.div`
    position: absolute;
    inset: 0;

    background: rgba(0, 0, 0, 0.92);
`;

export const LightboxContent = styled.div`
    position: relative;
    z-index: 1;

    width: min(1200px, 90vw);
    height: min(800px, 85vh);
`;

export const LightboxImage = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    img {
        object-fit: contain;
    }
`;

export const Stage = styled.section`
    & + & {
        margin-top: 7rem;
    }

    @media (max-width: 768px) {
        & + & {
            margin-top: 5rem;
        }
    }
`;

export const StageTitle = styled.h2`
    margin: 0 0 1.5rem;

    font-size: clamp(1.7rem, 3vw, 2.3rem);
    font-weight: 600;
    letter-spacing: -0.03em;
`;

export const NavigationButton = styled.button<{
    $position: "left" | "right";
}>`
    position: absolute;
    top: 50%;
    ${({ $position }) =>
        $position === "left" ? "left: -4rem;" : "right: -4rem;"}
    z-index: 2;

    width: 3rem;
    height: 3rem;

    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 50%;

    background: rgba(255, 255, 255, 0.08);

    color: #fff;
    font-size: 2rem;
    line-height: 1;

    cursor: pointer;

    transform: translateY(-50%);

    transition: background 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 768px) {
        ${({ $position }) =>
            $position === "left" ? "left: 0.5rem;" : "right: 0.5rem;"}
    }
`;
