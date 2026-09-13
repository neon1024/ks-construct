import styled from "styled-components";

import Link from "next/link";

export const ContactCTAContainer = styled.section`
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
