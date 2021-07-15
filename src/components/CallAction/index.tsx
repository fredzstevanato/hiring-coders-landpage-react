import { Container, Content, ContentRight, ContentLeft } from './styles'

interface CallActionProps {
  onOpenRegisterModal: () => void;
}

export function CallAction({ onOpenRegisterModal }: CallActionProps) { 
  return (
    <Container>
      <Content>
        <ContentLeft>
          <h1>
            Dimensionamos e construimos
            o seu eCommerce
          </h1>
          <h6>
            Trabalhamso com soluções open-source até as mais sofisticadas do mercado,
            nós sabemos o que você precisa.
        </h6>
        <div>
          <button
            type="button" onClick={onOpenRegisterModal}
          >
            Clique e receba nosso contato
          </button>
        </div>
        </ContentLeft>
        <ContentRight>

        </ContentRight>
      </Content>
    </Container>   
  )
} 