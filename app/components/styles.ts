import styled from "styled-components";

export const ContactPage = styled.main`
    background: #f6f6f4;
    min-height: 100vh;
`;

export const ContactHero = styled.section`
    background: #0d0d0d;
    padding: 8rem 2rem 7rem;

    @media (max-width: 768px) {
        padding: 6rem 1.25rem 5rem;
    }
`;

export const ContactEyebrow = styled.p`
    max-width: 1280px;
    margin: 0 auto 1rem;

    color: #b8a06a;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.18em;
`;

export const ContactTitle = styled.h1`
    max-width: 1280px;
    margin: 0 auto;

    color: #fff;

    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 600;
    line-height: 0.98;
    letter-spacing: -0.045em;
`;

export const ContactSubtitle = styled.p`
    max-width: 650px;
    margin: 2rem auto 0;

    color: rgba(255, 255, 255, 0.65);

    font-size: 1.05rem;
    line-height: 1.8;
`;

export const ContactContent = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 7rem 2rem;

    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 6rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 4rem;
    }

    @media (max-width: 768px) {
        padding: 5rem 1.25rem;
    }
`;

export const ContactInfo = styled.div`
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
