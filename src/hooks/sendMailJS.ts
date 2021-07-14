import emailjs from 'emailjs-com';

interface IEmail {
  fullName: string;
  from_name: string;
  message: string;
}

const {REACT_APP_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;

export default function ContactUs(data: IEmail) {
    emailjs.send(`${REACT_APP_ID}`, `${REACT_APP_TEMPLATE_ID}`, undefined, `${REACT_APP_USER_ID}`)
      .then((result) => {
          alert('Email test is sended');
      }, (error) => {
          alert(error.text);
      });
}