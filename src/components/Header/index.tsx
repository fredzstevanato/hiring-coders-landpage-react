import { Container, Content, ContentButtons } from "./styles";
import Logo from '../../assets/images/LOGO.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Woo commerce" />
        <div>
          <ul>
            <li>Sell</li>
            <li>Marktplace</li>
            <li>Community</li>
            <li>Develop</li>
            <li>Resources</li>
          </ul>
        </div>
        <ContentButtons>
          <a href="/">Log In</a>
          <button>Get Started</button>
        </ContentButtons>
      </Content>
    </Container>
  )
}