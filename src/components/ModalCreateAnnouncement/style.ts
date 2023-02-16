import styled from "styled-components";


export const ModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'scroll',
  height:'100%',
  
};

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    background-color: '$grey10';
    max-width: 25.6875rem;
    margin: 0 auto;

    .flex{
    display: flex;
    gap: 0.5625rem;
  }
`
