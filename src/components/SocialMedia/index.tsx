import { Container } from './styles';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export function SocialMedia() {
  return (
    <Container>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100010087990003"><FaFacebookF size={36} color="#5F37EF"/></a>
        <a href="https://www.linkedin.com/in/fredzstevanato/"><FaLinkedinIn size={36} color="#5F37EF"/></a>
        <a href="https://api.whatsapp.com/send?phone=5566984335553&text=Projeto%20Hiringcoders"><FaWhatsapp size={36} color="#5F37EF"/></a>
        <h4>powered by @fredzstevanato | HiringCoders 2021</h4>
      </div>
    </Container>
  )
}