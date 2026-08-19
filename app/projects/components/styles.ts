import styled from "styled-components";

export const Content = styled.div`
    padding: 1.5rem;
`;

export const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
`;

export const ImageOverlay = styled.div`
    position: absolute;
    inset: 0;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.25), transparent 50%);

    pointer-events: none;
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

export const Category = styled.span`
    color: #9b8351;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
`;
