import styled from "styled-components";

export const Page = styled.main`
    background: #fff;
    color: #111;
`;

export const Hero = styled.section`
    position: relative;
    overflow: hidden;
    background: #0d0d0d;
`;

export const HeroContent = styled.div`
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
    padding: 9rem 2rem;

    @media (max-width: 768px) {
        padding: 7rem 1.25rem;
    }
`;

export const Eyebrow = styled.p`
    margin: 0 0 1rem;
    color: #b8a06a;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
    max-width: 850px;
    margin: 0;

    color: #fff;
    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 600;
    line-height: 0.98;
    letter-spacing: -0.045em;
`;

export const HeroText = styled.p`
    max-width: 680px;
    margin: 2rem 0 0;

    color: rgba(255, 255, 255, 0.68);
    font-size: 1.1rem;
    line-height: 1.7;
`;

export const Intro = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 7rem 2rem;

    display: grid;
    grid-template-columns: minmax(250px, 0.8fr) 1.5fr;
    gap: 5rem;

    @media (max-width: 768px) {
        padding: 5rem 1.25rem;

        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const IntroTitle = styled.h2`
    margin: 0;

    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.035em;
`;

export const IntroText = styled.div`
    max-width: 700px;

    color: #666;
    font-size: 1.05rem;
    line-height: 1.8;

    p {
        margin: 0;
    }

    p + p {
        margin-top: 1rem;
    }
`;

export const ProjectsSection = styled.section`
    background: #f6f6f4;
`;

export const ProjectsContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 6rem 2rem;

    @media (max-width: 768px) {
        padding: 4rem 1.25rem;
    }
`;

export const ProjectsHeader = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        align-items: start;
        flex-direction: column;
    }
`;

export const ProjectsTitle = styled.h2`
    margin: 0;

    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    letter-spacing: -0.035em;
`;

export const ProjectsCount = styled.p`
    margin: 0;

    color: #888;
    font-size: 0.9rem;
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.article`
    background: #fff;
    border-radius: 1.25rem;
    overflow: hidden;

    transition:
        transform 0.35s ease,
        box-shadow 0.35s ease;

    &:hover {
        transform: translateY(-5px);

        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.09);
    }

    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
`;

export const CardImage = styled.div`
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;

    img {
        object-fit: cover;
        transition: transform 0.7s ease;
    }

    ${Card}:hover & img {
        transform: scale(1.05);
    }
`;

export const ImageOverlay = styled.div`
    position: absolute;
    inset: 0;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.25), transparent 50%);

    pointer-events: none;
`;

export const Content = styled.div`
    padding: 1.5rem;
`;

export const Category = styled.span`
    color: #9b8351;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
`;

export const Title = styled.h3`
    margin: 0.55rem 0 0;

    font-size: 1.35rem;
    font-weight: 600;
    letter-spacing: -0.02em;
`;

export const Location = styled.p`
    margin: 0.4rem 0 0;

    color: #888;
    font-size: 0.9rem;
`;

export const Arrow = styled.div`
    margin-top: 1.5rem;

    color: #111;
    font-size: 0.9rem;
    font-weight: 600;

    span {
        display: inline-block;
        margin-left: 0.35rem;

        transition: transform 0.25s ease;
    }

    ${Card}:hover & span {
        transform: translateX(4px);
    }
`;

/* Project detail */

export const DetailContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 5rem 2rem 8rem;

    @media (max-width: 768px) {
        padding: 4rem 1.25rem 6rem;
    }
`;

export const BackLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    margin-bottom: 3rem;

    color: #666;
    font-size: 0.9rem;
    text-decoration: none;

    transition: color 0.2s ease;

    &:hover {
        color: #111;
    }
`;

export const DetailHeader = styled.header`
    max-width: 850px;
    margin-bottom: 4rem;
`;

export const DetailCategory = styled.p`
    margin: 0 0 1rem;

    color: #9b8351;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
`;

export const DetailTitle = styled.h1`
    margin: 0;

    font-size: clamp(2.8rem, 6vw, 5rem);
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.045em;
`;

export const DetailLocation = styled.p`
    margin: 1rem 0 0;

    color: #777;
    font-size: 1rem;
`;

export const DetailDescription = styled.p`
    max-width: 700px;
    margin: 2rem 0 0;

    color: #666;
    font-size: 1.05rem;
    line-height: 1.8;
`;

export const Cover = styled.div`
    position: relative;

    width: 100%;
    aspect-ratio: 16 / 8;
    margin-bottom: 7rem;

    overflow: hidden;
    border-radius: 1.5rem;

    @media (max-width: 768px) {
        aspect-ratio: 4 / 3;
        margin-bottom: 5rem;
    }

    img {
        object-fit: cover;
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
