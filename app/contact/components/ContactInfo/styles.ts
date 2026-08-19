import styled from "styled-components";

export const ContactInfoContainer = styled.div`
    padding-top: 0.5rem;
`;

export const ContactInfoTitle = styled.h2`
    margin: 0;

    color: #111;

    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    line-height: 1.05;
    letter-spacing: -0.035em;
`;

export const ContactInfoText = styled.p`
    max-width: 480px;
    margin: 1.5rem 0 3rem;

    color: #666;

    font-size: 1rem;
    line-height: 1.8;
`;

export const ContactInfoItem = styled.div`
    padding: 1.5rem 0;

    border-top: 1px solid #ddd;

    &:last-child {
        border-bottom: 1px solid #ddd;
    }
`;

export const ContactInfoLabel = styled.p`
    margin: 0 0 0.5rem;

    color: #9b8351;

    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`;

export const ContactInfoValue = styled.p`
    margin: 0;

    color: #222;

    font-size: 1rem;
`;

export const ContactInfoLink = styled.a`
    display: inline-block;

    color: #222;

    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;

    transition: color 0.2s ease;

    &:hover {
        color: #9b8351;
    }
`;
