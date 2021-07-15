import styled from 'styled-components';
import backgroundPeople from '../../assets/images/depoiment-people.svg'
import backgroundMarks from '../../assets/images/depoiment-background-marks.svg'


export const Container = styled.section`
  padding-top: 4rem;
  background: var(--background);

  @media (max-width: 750px) {
    div {
      visibility: hidden;
      margin-top: -100%;
    }
  }

`

export const Content = styled.div`
  padding-top: 5rem;
  width: 75rem;
  height: auto;
  margin: 0 auto;
  background-image: url(${backgroundPeople});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  > div {
    background-image: url(${backgroundMarks});
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
    position: relative;

    h2 {
      text-align: center;
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #94A2B3;
      font-weight: 400;
    }

    div{
      margin-left: 60%;
     
      button {
        margin-top: 70%;
        background-color: rgb(222,3,48);
        font-size: 0.8rem;
        border: none;
        color: white;
        padding: 1rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        border-radius: 50%;
        transition: 0.2s;
        
        :hover {
          filter: brightness(0.8)
        }
      }
    } 
  }
`