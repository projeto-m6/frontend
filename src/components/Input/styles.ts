import { styled } from '../../styles/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  input: {
    padding: '1.5rem',
    border: '0.0938rem solid $grey7',
    outline: 'none',
    borderRadius: '0.25rem',
  },

  'input:hover': {
    backgroundColor: '$grey8',
  },

  'input:focus': {
    border: '0.0938rem solid $brand2',
    backgroundColor: '$white',
  },

  'input[type="textarea"]': {
    resize: 'none',
  },
});
