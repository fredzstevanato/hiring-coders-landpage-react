import React from 'react';
import { useState } from 'react';
import Timer from 'react-compound-timer';
import { Container, Percent, Content } from './styles';

export function StopWatch() {
  const [ isCloseSW, setIsCloseSW] = useState(false);
  const dateFrom = new Date("07/18/2021").getTime();
  const dateTo = Date.now();

  const dateResult = (dateFrom - dateTo);

  return(
    <>
    { !isCloseSW ? (
    <Container>
      
      <section>
      <button onClick={() => setIsCloseSW(!isCloseSW)}>
        X
      </button>
        <div>
            <Percent>
              <p>50% OFF</p>
            </Percent>
            <h1>BLACK FRIDAY</h1>
        </div>
      <Timer 
        initialTime={dateResult}
        direction="backward"
      >
       {() => (
          <React.Fragment>
            <Content>
              <span>Dias</span>
              <div><Timer.Days /></div>
            </Content>
            <Content>
              <span>Horas</span>
              <div><Timer.Hours /></div> 
            </Content>
            <Content>
              <span>Min</span>
              <div><Timer.Minutes /></div> 
            </Content>
            <Content>
              <span>Seg</span>
              <div><Timer.Seconds /> </div>
            </Content>
          </React.Fragment>
        )} 
      </Timer>
      </section>
    </Container>
    ) : ''}
    </>
  )
}         