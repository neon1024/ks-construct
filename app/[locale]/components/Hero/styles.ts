import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeroContainer = styled.section`
    position: relative;

    min-height: min(760px, 90vh);

    display: flex;
    align-items: center;

    overflow: hidden;

    background: #0b1220;
`;

export const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;

    z-index: 1;

    background: linear-gradient(
        90deg,
        rgba(7, 12, 20, 0.94) 0%,
        rgba(7, 12, 20, 0.82) 35%,
        rgba(7, 12, 20, 0.45) 70%,
        rgba(7, 12, 20, 0.2) 100%
    );

    &::after {
        content: "";

        position: absolute;
        inset: 0;

        background: linear-gradient(
            0deg,
            rgba(7, 12, 20, 0.45),
            transparent 40%
        );
    }
`;

export const HeroContent = styled.div`
    position: relative;

    z-index: 2;

    width: min(1200px, calc(100% - 48px));

    margin: 0 auto;

    padding: 120px 0;
`;

export const HeroEyebrow = styled.p`
    display: flex;
    align-items: center;
    gap: 12px;

    margin: 0 0 22px;

    color: #9b8351;

    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.18em;

    &::before {
        content: "";

        width: 32px;
        height: 2px;

        background: #9b8351;
    }
`;

export const HeroTitle = styled.h1`
    max-width: 850px;

    margin: 0;

    color: white;

    font-size: clamp(48px, 7vw, 88px);
    line-height: 0.98;
    letter-spacing: -0.055em;
    font-weight: 750;

    span {
        color: #9b8351;
    }
`;

export const HeroDescription = styled.p`
    max-width: 570px;

    margin: 30px 0 0;

    color: rgba(255, 255, 255, 0.75);

    font-size: 18px;
    line-height: 1.7;
`;

export const HeroActions = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    margin-top: 38px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: stretch;

        width: 100%;
    }
`;

export const PrimaryButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 15px 22px;

    border-radius: 7px;

    background: #9b8351;
    color: #111827;

    font-size: 15px;
    font-weight: 700;

    text-decoration: none;

    transition:
        transform 0.2s ease,
        background 0.2s ease;

    &:hover {
        background: #9b8351;

        transform: translateY(-2px);
    }
`;

export const SecondaryButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 14px 22px;

    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 7px;

    color: white;

    font-size: 15px;
    font-weight: 600;

    text-decoration: none;

    backdrop-filter: blur(8px);

    transition:
        background 0.2s ease,
        border-color 0.2s ease;

    &:hover {
        border-color: rgba(255, 255, 255, 0.6);
        background: rgba(255, 255, 255, 0.08);
    }
`;
