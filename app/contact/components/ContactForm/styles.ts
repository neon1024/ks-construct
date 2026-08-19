import styled from "styled-components";

export const ContactFormContainer = styled.div`
    padding: 3rem;

    background: #fff;
    border-radius: 1.5rem;

    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.06);

    @media (max-width: 600px) {
        padding: 2rem 1.25rem;
    }
`;

export const ContactFormTitle = styled.h2`
    margin: 0;

    color: #111;

    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 600;
    letter-spacing: -0.03em;
`;

export const ContactFormSubtitle = styled.p`
    margin: 0.75rem 0 2.5rem;

    color: #777;

    font-size: 0.95rem;
    line-height: 1.7;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const StyledField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
`;

export const StyledLabel = styled.label`
    color: #222;

    font-size: 0.8rem;
    font-weight: 600;
`;

export const StyledInput = styled.input`
    width: 100%;
    box-sizing: border-box;

    padding: 0.95rem 1rem;

    border: 1px solid #ddd;
    border-radius: 0.65rem;

    background: #fafafa;

    color: #111;

    font-family: inherit;
    font-size: 0.95rem;

    outline: none;

    transition:
        border-color 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border-color: #b8a06a;
        background: #fff;

        box-shadow: 0 0 0 3px rgba(184, 160, 106, 0.12);
    }
`;

export const StyledMessage = styled.textarea`
    width: 100%;
    min-height: 160px;

    box-sizing: border-box;

    padding: 0.95rem 1rem;

    border: 1px solid #ddd;
    border-radius: 0.65rem;

    background: #fafafa;

    color: #111;

    font-family: inherit;
    font-size: 0.95rem;

    line-height: 1.6;

    resize: vertical;

    outline: none;

    transition:
        border-color 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border-color: #b8a06a;
        background: #fff;

        box-shadow: 0 0 0 3px rgba(184, 160, 106, 0.12);
    }
`;

export const StyledSubmitButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;

    width: 100%;

    margin-top: 0.5rem;
    padding: 1rem 1.5rem;

    border: none;
    border-radius: 999px;

    background: #b8a06a;
    color: #111;

    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 700;

    cursor: pointer;

    transition:
        background 0.25s ease,
        transform 0.25s ease;

    &:hover {
        background: #c8b27d;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    span {
        transition: transform 0.25s ease;
    }

    &:hover span {
        transform: translateX(4px);
    }
`;
