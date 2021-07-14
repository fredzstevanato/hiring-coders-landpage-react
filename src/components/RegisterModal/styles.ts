import styled from 'styled-components';

export const Container = styled.form`
  background: black;
  align-items: center;

  h2 {
    color: #fff;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const RegisterTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;  
`;