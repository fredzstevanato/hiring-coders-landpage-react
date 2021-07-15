import styled from 'styled-components';
import WImg from '../../assets/images/W.svg'
import FeaturedImg from '../../assets/images/featured-image.svg';


export const Container = styled.div`
  margin-top: -10rem;
  background: var(--background) url(${WImg}) no-repeat right top;
  background-size: 50rem;
  flex-wrap: wrap;
`

export const Content = styled.div`
  max-width: 75rem;
  margin: 10rem auto;
  padding: 0 1rem 20rem;
  display: flex;
  align-items: center;
  align-content: center;
  //flex-wrap: wrap;
`
export const ContentLeft = styled.div`
  h1 {
    font-size: 4rem;
    line-height: 4.8rem;
    color: #272D4E;
    margin-bottom: 1rem;
  }

  h6 {
    font-size: 1rem;
    color: #94A2B3;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;
      
    button {
      background: #7854F7;
      border: 0;
      border-radius: 2rem;
      height: 4rem;
      width: 16rem;
      font-family: Roboto, sans-serif;
      font-weight: 500;
      font-size: 1rem;
      color: #fff;
      transition: filter 0.2s;
      
      &:hover {
        filter: brightness(0.9);
      }
    }

    a {
      text-decoration: none;
      color: var(--blue);
      font-weight: 700;
    }

    p {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`

export const ContentRight = styled.div`
    width: 100%;
    height: 700px;
    background: transparent url(${FeaturedImg}) no-repeat left top;

    div {
      background: transparent;
      padding-top: 100px;
      width: 500px;
      height: 500px;
    }
`
