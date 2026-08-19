import Link from "next/link";
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

/* Project detail */

export const DetailContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 5rem 2rem 8rem;

    @media (max-width: 768px) {
        padding: 4rem 1.25rem 6rem;
    }
`;

export const BackLink = styled(Link)`
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

export const ContactCTA = styled.section`
    margin-top: 8rem;
    padding: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    background: #0d0d0d;
    border-radius: 1.5rem;

    @media (max-width: 768px) {
        margin-top: 5rem;
        padding: 2.5rem 1.5rem;

        flex-direction: column;
        align-items: flex-start;
    }
`;

export const ContactCTAContent = styled.div`
    max-width: 650px;
`;

export const ContactCTAEyebrow = styled.p`
    margin: 0 0 0.75rem;

    color: #b8a06a;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
`;

export const ContactCTATitle = styled.h2`
    margin: 0;

    color: #fff;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.035em;
`;

export const ContactCTAText = styled.p`
    margin: 1rem 0 0;

    color: rgba(255, 255, 255, 0.65);
    font-size: 1rem;
    line-height: 1.7;
`;

export const ContactCTAButton = styled(Link)`
    flex-shrink: 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    padding: 1rem 1.5rem;

    border-radius: 999px;

    background: #b8a06a;
    color: #111;

    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;

    transition:
        background 0.25s ease,
        transform 0.25s ease;

    &:hover {
        background: #c8b27d;
        transform: translateY(-2px);
    }

    span {
        transition: transform 0.25s ease;
    }

    &:hover span {
        transform: translateX(4px);
    }
`;
