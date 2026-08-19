import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.9);
`;

export const Loader = styled.div`
    width: 48px;
    height: 48px;

    border: 4px solid rgba(255, 255, 255, 0.15);
    border-top-color: #9b8351;
    border-radius: 50%;

    animation: ${spin} 0.8s linear infinite;
`;
