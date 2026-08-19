import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
`;

export const PrimaryFooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 2rem 0;

    @media (max-width: 600px) {
        gap: 0.75rem;
    }
`;

export const FooterLogo = styled(Image)`
    width: clamp(40px, 10vw, 80px);
    height: auto;
    flex-shrink: 0;
    object-fit: contain;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    min-width: 0;
    flex: 1;
`;

export const FooterTitle = styled.h3`
    margin: 0;
    text-align: center;
    font-size: clamp(0.9rem, 2vw, 1.5rem);
`;

export const StyledFooterItem = styled.p`
    display: flex;
    justify-content: center;
    font-size: clamp(0.7rem, 1.5vw, 1rem);
    overflow-wrap: anywhere;
`;

export const IconAndTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    min-width: 0;
    font-size: clamp(0.7rem, 1.5vw, 1rem);

    a {
        display: flex;
        align-items: center;
        gap: 0.35rem;
    }

    a:hover {
        color: #fbbf24;
    }
`;

export const SecondaryFooterContainer = styled.div`
    padding: 1rem 0;
    text-align: center;
    font-size: 0.875rem;
`;
