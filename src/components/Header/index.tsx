import { Container, Content, ContentButtons } from "./styles";

interface HeaderProps {
  onOpenRegisterModal: () => void;
}

export function Header({ onOpenRegisterModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <p>COACH <span>Commerce</span></p>
        <div>
          <ul>
            <li>Vendas</li>
            <li>Clientes</li>
            <li>Comunidade</li>
            <li>Nosso Time</li>
            <li>Recurso</li>
          </ul>
        </div>
        <ContentButtons>
          <a href="/">Log In</a>
          <button onClick={onOpenRegisterModal}>Começe aqui</button>
        </ContentButtons>
      </Content>
    </Container>
  )
}