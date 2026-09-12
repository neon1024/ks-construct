import styled from "styled-components";

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

export const VideoContainer = styled.div`
    width: 100%;

    background-color: #0d0d0d;
`;
