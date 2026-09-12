import styled from "styled-components";

export const HeroContainer = styled.section`
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
