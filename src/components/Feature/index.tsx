import { Container, Content } from './styles';
import Comp1Img from '../../assets/images/Component1.svg';
import Comp2Img from '../../assets/images/Component2.svg';
import Comp3Img from '../../assets/images/Component3.svg';

export function Feature() {
  return (
    <Container>
      <div>
        <h1>
          Seu eCommerce <br />
          de um jeito simples
        </h1>
        <Content>
          <div>
            <img src={Comp1Img} alt="All you need to start" />
            <h4>Tudo que você precisa</h4>
            <p>
              Criamos eu eCommerce e entregamos no menor prazo.
            </p>
            <a href="/">Lista de Prazos</a>
          </div>
          <div>
            <img src={Comp2Img} alt="All you need to start" />
            <h4>Ingetrações</h4>
            <p>
              Integramos com qualquer API existente no mecardo.
            </p>
            <a href="/">Conheça as principais soluções</a>
          </div>
          <div>
            <img src={Comp3Img} alt="All you need to start" />
            <h4>Não importa seu tamanho</h4>
            <p>
              Temos soluções para o pequenos e <br />
              e grandes varegistras.
            </p>
            <a href="/">Ecommerce for Wordpress </a>
          </div>
        </Content>
      </div>
    </Container>
  )
}