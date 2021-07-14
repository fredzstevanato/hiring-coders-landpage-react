import styled from 'styled-components';

export const Container = styled.header`
  padding-top: 1rem;
`
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding: 0 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
  }

  li {
    padding: 1rem;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    color: var(--font-menu);
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