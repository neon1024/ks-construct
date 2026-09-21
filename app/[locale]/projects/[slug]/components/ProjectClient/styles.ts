import styled from "styled-components";

import Link from "next/link";

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
    line-height: 1.7;

    white-space: pre-line;
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
