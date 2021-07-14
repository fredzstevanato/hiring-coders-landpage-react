import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { LoginWithGoogle } from '../LoginWithGoogle'

import { Container, RegisterTypeContainer } from './styles'

import sendMail from '../../hooks/sendMailJS'


interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function RegisterModal({isOpen, onRequestClose}: RegisterModalProps) {
  const [registerType, setRegisterType] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
      if(registerType==='google') {
        alert('Method not implemented')
        return
      }

  }, [registerType])

  function clearFormFields() {
    setEmail('');
    setFullName('');
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(email) {
      const localStorageItem = localStorage.getItem(`@landing.${email}`);

      if(localStorageItem) {
        const userAlreadyExist = JSON.stringify(localStorageItem);

        console.log(userAlreadyExist)

        setRegisterType('email')

        alert(`E-mail ${userAlreadyExist} already exists.`)
  
        clearFormFields();
  
        return
      }    
    }

    if(email!=="") {
      localStorage.setItem(`@landing.${email}`, fullName);
      sendMail({
        fullName,
        from_name: "HiringCoders",
        message: "Teste",
      })
      clearFormFields();
      return
    } else {
     alert('Exists required fields')  
    }
  }
        
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        X
      </button>

      <Container onSubmit={handleSubmit}>
        <h2>Como deseja se cadastrar</h2>

        <RegisterTypeContainer>
          <LoginWithGoogle
            //onClick={() => {setRegisterType('google')}}
          />
          <button
            onClick={() => setRegisterType('email')}
          >
            E-mail
          </button>
          { (registerType === 'email') 
          ? (
            <div>       
              <input 
                type="text" 
                placeholder="Enter your fullname" 
                value={fullName}
                onChange={event => setFullName(event.target.value)}
              />
              <input 
                type="email" 
                placeholder="Enter your best email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
          ) 
          : '' }
        </RegisterTypeContainer>
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}