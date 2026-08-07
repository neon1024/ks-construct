import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    margin: 0 auto;

    width: 100%;
    max-width: 600px;

    padding-left: 8px;
    padding-right: 8px;
`;

export const StyledField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const StyledLabel = styled.label`
    font-weight: 600;
`;

export const StyledInput = styled.input`
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
`;

export const StyledMessage = styled.textarea`
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    min-height: 150px;
    resize: vertical;
`;

export const StyledSubmitButton = styled.button`
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
`;
