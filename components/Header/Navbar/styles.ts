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
`;

export const PrimaryHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
`;

export const Logo = styled(Image)`
    width: 80px;
    height: 80px;
    object-fit: contain;
    flex-shrink: 0;
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    font-size: clamp(1rem, 4vw, 2rem);
    line-height: 1;
    white-space: nowrap;
`;

export const SecondaryHeaderContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: clamp(0.1rem, 1vw, 1.5rem);

    @media (max-width: 480px) {
        gap: 0.1rem;
    }
`;

export const LinkStyled = styled(Link)<{ $isActive?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: clamp(0.35rem, 1.5vw, 0.5rem);
    font-size: clamp(0.75rem, 2vw, 1rem);
    line-height: 1;

    text-decoration: none;
    color: inherit;
    white-space: nowrap;

    border: 1px solid transparent;
    border-radius: clamp(3px, 1vw, 4px);

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

    @media (max-width: 480px) {
        padding: 0.3rem 0.4rem;
        font-size: 0.75rem;
    }
`;
