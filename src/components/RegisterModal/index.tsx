import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';

import { Container, Content } from './styles'

import sendMail from '../../hooks/sendMailJS'


interface RegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

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
            clientId={'90227753387-cjmpoqkt1daoqnneg8f8meuieglnqvgv.apps.googleusercontent.com'}
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          </div>
          <div>
              <div>
                <p>Digite seu melhor e-mail <span>*</span></p>
                <input 
                  type="email" 
                  placeholder="Enter your best email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
              <div>
                <p>Nome</p>
                <input 
                  type="text" 
                  placeholder="Enter your fullname" 
                  value={fullName}
                  onChange={event => setFullName(event.target.value)}
                />
              </div>

            </div>
          </Content>
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}