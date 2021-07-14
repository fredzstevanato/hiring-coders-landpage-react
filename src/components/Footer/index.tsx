import { Container } from './styles';
import PeopleImg from '../../assets/images/people-section.svg';


export function Footer() {
  return (
    <Container>
        <div>
            <img src={PeopleImg} alt="" />
        </div>
        <div>
          <p>
            WooCommerce - the <strong>most customizable eCommerce
            platform</strong> for building <strong>your online business</strong>
          </p>
          <button>GET STARTED</button>
        </div>
    </Container>
  )
}