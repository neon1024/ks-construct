import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    padding: 0.75rem 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;

    @media (max-width: 768px) {
        padding: 0.6rem 0.75rem;
        gap: 0.5rem;
    }

    @media (max-width: 480px) {
        padding: 0.5rem 0.4rem;
        gap: 0.3rem;
    }
`;

export const PrimaryHeaderContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 0.5rem;

    min-width: 0;
    flex-shrink: 1;

    @media (max-width: 768px) {
        gap: 0.3rem;
    }

    @media (max-width: 480px) {
        gap: 0.2rem;
    }
`;

export const Logo = styled(Image)`
    width: 80px;
    height: 80px;

    object-fit: contain;
    flex-shrink: 1;

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 480px) {
        width: 36px;
        height: 36px;
    }
`;

export const HeaderTitle = styled.h1`
    margin: 0;

    font-size: clamp(1rem, 2vw, 2rem);
    line-height: 1;

    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
`;

export const SecondaryHeaderContainer = styled.nav`
    display: flex;
    align-items: center;

    gap: 0.4rem;

    flex-shrink: 0;

    @media (max-width: 768px) {
        gap: 0.2rem;
    }

    @media (max-width: 480px) {
        gap: 0.1rem;
    }
`;

export const LanguageSelect = styled.select`
    appearance: none;
    -webkit-appearance: none;

    height: 34px;

    background: transparent;

    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 5px;

    color: inherit;

    font-size: 0.85rem;
    font-weight: 500;

    padding: 0 1.6rem 0 0.5rem;

    cursor: pointer;
    outline: none;

    box-sizing: border-box;

    transition:
        border-color 0.2s ease,
        background-color 0.2s ease;

    background-image:
        linear-gradient(45deg, transparent 50%, currentColor 50%),
        linear-gradient(135deg, currentColor 50%, transparent 50%);

    background-position:
        calc(100% - 9px) 50%,
        calc(100% - 5px) 50%;

    background-size:
        4px 4px,
        4px 4px;

    background-repeat: no-repeat;

    &:hover {
        border-color: rgba(255, 255, 255, 0.5);
        background-color: rgba(255, 255, 255, 0.05);
    }

    &:focus {
        border-color: rgba(255, 255, 255, 0.6);
    }

    option {
        background: #111;
        color: #fff;
    }

    @media (max-width: 768px) {
        height: 28px;

        font-size: 0.7rem;

        padding: 0 1.25rem 0 0.4rem;

        background-position:
            calc(100% - 7px) 50%,
            calc(100% - 4px) 50%;

        background-size:
            3px 3px,
            3px 3px;
    }

    @media (max-width: 480px) {
        height: 24px;

        font-size: 0.6rem;

        padding: 0 1rem 0 0.3rem;

        background-position:
            calc(100% - 6px) 50%,
            calc(100% - 3px) 50%;

        background-size:
            3px 3px,
            3px 3px;
    }
`;

export const LinkStyled = styled(Link)<{ $isActive?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 34px;

    padding: 0 0.55rem;

    font-size: 0.85rem;
    line-height: 1;

    text-decoration: none;
    color: inherit;

    white-space: nowrap;

    border: 1px solid transparent;
    border-radius: 4px;

    box-sizing: border-box;

    transition:
        background-color 0.3s ease,
        color 0.3s ease;

    ${({ $isActive }) =>
        $isActive &&
        `
            color: #000;
            background-color: #9b8351;
            border-color: #9b8351;
        `}

    &:hover {
        background-color: #9b8351;
        color: #000;
    }

    @media (max-width: 768px) {
        height: 28px;

        padding: 0 0.35rem;

        font-size: 0.7rem;
    }

    @media (max-width: 480px) {
        height: 24px;

        padding: 0 0.25rem;

        font-size: 0.6rem;

        border-radius: 3px;
    }
`;
