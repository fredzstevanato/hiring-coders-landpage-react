import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100px;
  background: #E5E5E5;
  text-align: center;
  div {
    padding-top: 50px;
    transition: filter 0.2s;

    a:hover {
      filter: brightness(0.7);
    }
  }
  h4 {
    font-size: 0.8rem;
    color: #5F37EF;
  }
`