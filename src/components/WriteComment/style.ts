import styled from 'styled-components';

export const StyledContainer = styled.section`
  max-width: 761px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;

  div {
    display: flex;
    align-items: center;
  }
`;
export const StyledTextDiv = styled.div`
  background-color: aliceblue;
  margin: 1rem 0;
  position: relative;
  width: 100%;

  textarea {
    resize: none;
    padding: 10px 70px 0px 30px;
    border: 1.5px solid #e9ecef;
    outline: none;
    font-size: 1rem;
    width: 100%;
  }

  textarea:placeholder {
    color: #868e96;
    font-weight: 400;
    font-family: 'Inter';
  }

  textarea:focus {
    border: 1.5px solid #6100ff;
  }

  button {
    display: block;
    position: absolute;
    bottom: 10px;
    right: 30px;
    background-color: #4529e6;
    color: white;
    font-family: 'Inter';
    border-radius: 4px;
    padding: 0px 1rem;
    height: 38px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const StyledRecommendantions = styled.div`
  display: flex;
  gap: 15px;

  button {
    background: #e9ecef;
    color: #868e96;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    font-family: 'Inter';
    padding: 0.4rem;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
