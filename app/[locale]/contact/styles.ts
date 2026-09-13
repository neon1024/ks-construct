import styled from "styled-components";

export const ContactPageContainer = styled.main`
    background: #f6f6f4;
    min-height: 100vh;
`;

export const ContactContentContainer = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 7rem 2rem;

    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 6rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 4rem;
    }

    @media (max-width: 768px) {
        padding: 5rem 1.25rem;
    }
`;
