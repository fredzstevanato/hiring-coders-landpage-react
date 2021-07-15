import styled from 'styled-components';

export const Container = styled.header`
  padding-top: 1rem;
  background: var(--background);

`
export const Content = styled.div`
  width: 75rem;
  margin: 0 auto;

  padding: 0 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    width: 100%;
    ul {
      visibility: hidden;
    }
  }

  p {
    font-family: Anton, sans-serif;
    font-size: 2rem;
    font-weight: 1000;
    color: #9B5C8F;

    span {
      font-family: Anton, sans-serif;
      font-size: 1.5rem;
      color: #000;
      line-height: 150%;
    }
  }
 
  div{
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        padding: 1rem;
        font-family: Roboto, sans-serif;
        font-weight: 500;
        color: var(--font-menu);

      }
    }
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.125rem;
  
  a {
    text-decoration: none;
    padding-right: 2.375rem;
    color: var(--font-menu);
    
  }

  button {
    color: #fff;
    font-weight: 500;
    font-size: 1.125rem;
    background: var(--purle);
    border: 0;
    border-radius: 0.25rem;
    width: 7.5rem;
    height: 3rem;
  }
`