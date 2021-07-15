import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1000;
  right: 5rem;
  top: 10rem;
  width: 300px;
  height: 700px;
  background: black;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 1);
  flex-wrap: wrap;

  @media (max-width: 1200px) {
      display: flex;
      top: 4rem;
      align-content: center;
      height: 170px;
      width: 650px;
      left: 10%;
      background: rgba(0,0,0, 0.7);
      transition: 0.2s;
      flex-wrap: wrap;
      button {
        margin-left: -2rem;
      }

      :hover {
        background: rgba(0,0,0, 1);
      }
  }

  @media (max-width: 750px) {
    width: 500px;
    height: 200px;
    h1 {
      font-size: 2rem;
    }
  }
        
  section {
    margin: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 1200px) {
      display: flex;
      flex-direction: row;
      align-items: left;
    }

    @media (max-width: 750px) {
        display: flex;
      div {
        h1 {
          font-size: 2rem;
        }
      }
    }

      button {
        background: transparent;
        font-size: 1rem;
        border: none;
        color: white;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        transition: 0.2s;
        margin-left: 1px;

        :hover {
          filter: brightness(0.5)
        }
      }

    h1 {
      color: #fff;
      font-size: 3rem;
      text-align: center;
    }
    p {
      text-align: center;
      color: white;
    }
  }
`
export const Percent = styled.div`
      background: rgb(222, 3, 48);
      width: 150px;
      height: 3rem;
      margin-top: 2rem;
      margin-left: 70%;
      border-radius: 0.5rem;
      text-align: center;

      @media (max-width: 1200px) {
        margin-left: 5%;
      }

      @media (max-width: 750px) {
        width: 130px;
      }

      p{
        font-size: 2rem;
        color: white;
      }
`

export const Content = styled.div`
      border-radius: 1rem;
      padding: 1rem;
      font-size: 2rem;
      font-family: Poppins, sans-serif;
      color: white;
      text-align: center;
      width: 30%;

      span {
        font-size: 1.5rem;
      }
     
      div {
        background-color:rgba(255,255,255,0.3);
        text-align: center;
        border-radius: 1rem;
        margin-bottom: -50%;
      }

      div:first-child {
        border-bottom: 3px solid transparent;
      }
      div:last-child {
        border-top: 3px solid transparent;
      }
`