import styled from 'styled-components';

export const Container = styled.form`
  margin: 0 auto;

  h2 {
    margin-bottom: 3rem;
    text-align: center;
    color: #272D4E;
  }

  h4 {

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

export const Content = styled.div`
    margin: 0 auto;            
    display: grid;
    grid-template-columns: 1fr 1fr;  
    gap: 1rem;

  label {
    span {
      color: red;
    }

    input {
      width: 100%;
      height: 30px;
      border: 0;
      color: #94A2B3;
      font-weight: 400;
      border-radius: 8px;
      padding-left: 10px;
      font-size: 1rem;

      :hover {
        filter: drop-shadow(0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2));
      }
    } 
  }
`;