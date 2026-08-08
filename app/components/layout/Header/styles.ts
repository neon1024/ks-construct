import Image from "next/image";
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
    gap: clamp(0.5rem, 2vw, 1.5rem);

    font-size: clamp(0.8rem, 2.5vw, 1rem);

    a {
        text-decoration: none;
        color: inherit;
        white-space: nowrap;
    }
`;
