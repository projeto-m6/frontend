import styled from "styled-components";

export const ModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "520px",
  maxHeight: "90%",
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  overflowX: "hidden",
  outline: "none",
};

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: "$grey10";
  max-width: 25.6875rem;
  margin: 0 auto;

  .flex {
    display: flex;
    gap: 0.5625rem;
  }

  .buttonGroup {
    display: flex;
    gap: 0.625rem;

    button {
      width: 100%;

      border-radius: 0.25rem;
      border: none;
      font-family: "Inter";
      font-size: 1rem;
      font-weight: 600;
      padding: 0.75rem 0.875rem;

      cursor: pointer;
    }

    button:first-child {
      background-color: ${({ theme }) => theme.grey6};
      color: ${({ theme }) => theme.grey2};
    }

    button:last-child {
      background-color: ${({ theme }) => theme.brand2};
      color: ${({ theme }) => theme.brand4};
    }
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.brand4};
  color: ${({ theme }) => theme.brand1};

  border-radius: 0.25rem;
  border: none;
  font-family: "Inter";
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75rem 0.875rem;

  width: max-content;

  cursor: pointer;
`;
