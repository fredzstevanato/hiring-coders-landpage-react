//import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { CallAction } from './components/CallAction';
import { Feature } from './components/Feature';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal'
import Modal from 'react-modal';
import { useState } from 'react';
import { Depoiment } from './components/Depoiment';
import { StopWatch } from './components/CallAction/Stopwatch';


Modal.setAppElement('#root');

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  function handleOpenRegisterModal() {
    setIsRegisterModalOpen(!isRegisterModalOpen);
    console.log(isRegisterModalOpen)
  }

  function handleCloseRegisterModal() {
    setIsRegisterModalOpen(false);
    console.log(isRegisterModalOpen)

  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenRegisterModal={handleOpenRegisterModal}/>
      <CallAction onOpenRegisterModal={handleOpenRegisterModal} />
      <StopWatch />
      <RegisterModal isOpen={isRegisterModalOpen} onRequestClose={handleCloseRegisterModal} />
      <Feature />
      <Depoiment />
      <Footer />
    </>
  );
}

export default App;
