import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  
  div:first-child {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 980px;
   }
  }  
  
  div:last-child {
    margin-top: -7.5rem;
    width: 100vw;
    height: 10rem;
    background: #5F37EF;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p {
      text-align: center;
      font-size: 2rem;
      color: #fff;
      padding-right: 8rem;
    }

    button {
      border-radius: 8rem;
      width: 13rem;
      height: 3.5rem;
      border: 1.5px solid #fff;
      background: none;
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`