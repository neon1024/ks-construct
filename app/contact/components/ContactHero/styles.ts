import styled from "styled-components";

export const ContactHeroContainer = styled.section`
    background: #0d0d0d;
    padding: 8rem 2rem 7rem;

    @media (max-width: 768px) {
        padding: 6rem 1.25rem 5rem;
    }
`;

export const ContactEyebrow = styled.p`
    max-width: 1280px;
    margin: 0 auto 1rem;

    color: #b8a06a;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.18em;
`;

export const ContactTitle = styled.h1`
    max-width: 1280px;
    margin: 0 auto;

    color: #fff;

    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 600;
    line-height: 0.98;
    letter-spacing: -0.045em;
`;

export const ContactSubtitle = styled.p`
    max-width: 650px;
    margin: 2rem auto 0;

    color: rgba(255, 255, 255, 0.65);

    font-size: 1.05rem;
    line-height: 1.8;
`;
