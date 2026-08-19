import Link from "next/link";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0%,
  100% {
    opacity: 0.4;
    transform: scaleX(1);
  }

  50% {
    opacity: 1;
    transform: scaleX(1.15);
  }
`;

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    background:
        radial-gradient(
            circle at 50% 45%,
            rgba(212, 175, 55, 0.08),
            transparent 35%
        ),
        #080808;

    color: #fff;
`;

export const BackgroundNumber = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    font-size: clamp(15rem, 40vw, 35rem);
    font-weight: 800;
    line-height: 1;

    color: rgba(255, 255, 255, 0.025);

    user-select: none;
    pointer-events: none;
`;

export const Content = styled.div`
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 600px;
`;

export const Eyebrow = styled.span`
    margin-bottom: 1rem;

    color: #9b8351;

    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.25em;
`;

export const AccentLine = styled.div`
    width: 60px;
    height: 2px;

    margin-bottom: 2rem;

    background: #9b8351;

    transform-origin: left;
    animation: ${glow} 2s ease-in-out infinite;
`;

export const Title = styled.h1`
    margin: 0;

    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 600;
    line-height: 0.95;
    letter-spacing: -0.04em;
`;

export const Description = styled.p`
    max-width: 500px;

    margin: 2rem 0 2.5rem;

    color: rgba(255, 255, 255, 0.55);

    font-size: 1rem;
    line-height: 1.7;
`;

export const HomeButton = styled(Link)`
    display: flex;
    align-items: center;
    gap: 2rem;

    padding: 1rem 1.5rem;

    border: 1px solid rgba(212, 175, 55, 0.5);

    color: #fff;

    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;

    transition:
        background 0.3s ease,
        border-color 0.3s ease,
        gap 0.3s ease;

    &:hover {
        gap: 2.5rem;

        border-color: #9b8351;

        background: #9b8351;
        color: #080808;
    }
`;
