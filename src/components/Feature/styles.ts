import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -20rem;
  background: var(--background);

  div {
    max-width: 1200px;
    margin: 0 auto;
    h1 {
      text-align: center;
      color: #272D4E;
    }
  }
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  div {
    * {
      margin-bottom: 0.5rem;
    }
    img{
      width: 21rem;
      height: 21rem;
    }
    h4 {
      font-size: 2rem;
      font-weight: 500;
    }
    p {
      font-size: 1rem;
      font-weight: 300;
    }
    a {
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
      color: var(--blue);
    }
  }
`

