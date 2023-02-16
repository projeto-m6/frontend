import styled, { keyframes } from "styled-components";

const load = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const MainStyle = styled.main`
  animation: ${load} 1.5s forwards;
`;
