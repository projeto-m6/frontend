import styled from "styled-components";

interface FormProps {
  error: boolean;
}

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span {
      transform: rotate(45deg);
      font-size: 32px;
      font-weight: 600;
      color: ${({ theme }) => theme.grey4};
      cursor: pointer;
    }
  }
`;

export const Form = styled.form<FormProps>`
  textarea {
    resize: none;
    height: 150px;
    width: 100%;
    padding: 0.5rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.grey5};
    border-radius: 5px;

    &:focus {
      border: 0.0938rem solid
        ${({ theme, error }) => (error ? theme.alert1 : theme.brand1)};
    }
  }

  button {
    margin-top: 0.5625rem;
    width: 100%;
    height: 45px;
    background-color: ${({ theme }) => theme.brand1};
    color: ${({ theme }) => theme.white};
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;
