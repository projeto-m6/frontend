import styled from 'styled-components';

export const Container = styled.div`
  .comments {
    background-color: ${({ theme }) => theme.grey10};
    padding: 2.25rem 2.75rem;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 44px;

      li {
        display: flex;
        flex-direction: column;
        gap: 24px;
        div {
          display: flex;
          gap: 0.5rem;
          align-items: baseline;
        }
      }
    }

    .time {
      color: ${({ theme }) => theme.grey3};
      font-family: 'Inter';
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`;
