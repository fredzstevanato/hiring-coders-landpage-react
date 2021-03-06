import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';

import { Container, Content } from './styles'

import sendMail from '../../hooks/sendMailJS'


interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const {REACT_APP_GOOGLE_ID} = process.env;

export function RegisterModal({isOpen, onRequestClose}: RegisterModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const responseGoogle = async (response: any) => {
    const {name, email} = response.profileObj;
    
    setFullName(name);
    setEmail(email)
  }
  
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
        <Content>
          <div>
            <GoogleLogin
              clientId={`${REACT_APP_GOOGLE_ID}`}
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <div>
              <label>Digite seu melhor e-mail <span>*</span>
                <input
                  type="email" 
                  required
                  placeholder="Insira seu melhor email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />               
              </label>
              <label>Nome
                <input 
                  type="text" 
                  placeholder="Insira seu nome" 
                  value={fullName}
                  onChange={event => setFullName(event.target.value)}
                />
              </label>
            </div>
          </Content>
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}