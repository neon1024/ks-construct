import styled from "styled-components";

export const IntroContainer = styled.section`
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
    white-space: pre-line;
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
