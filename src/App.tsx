//import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { CallAction } from './components/CallAction';
import { Feature } from './components/Feature';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { RegisterModal } from './components/RegisterModal'
import Modal from 'react-modal';
import { useState } from 'react';

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
      <Header />
      <CallAction onOpenRegisterModal={handleOpenRegisterModal} />
      <RegisterModal isOpen={isRegisterModalOpen} onRequestClose={handleCloseRegisterModal} />
      <Feature />
      <Footer />
      <GlobalStyle />
      <Section />

    </>
  );
}

export default App;
