import { Container, Content } from './styles'
import FeaturedImg from '../../assets/images/featured-image.svg';

interface CallActionProps {
  onOpenRegisterModal: () => void;
}

export function CallAction({ onOpenRegisterModal }: CallActionProps) { 
  return (
    <Container>
      <Content>
        <div>
          <h1>
              Building exacly the <br />
              eCommerce website <br />
              you want
          </h1>
          <h6>
              WooCommerce is a customizable, open-source eCommerce platform built on WordPress.
              Get stared quickly and make you way.
          </h6>
          <div>
            <button
              type="button" onClick={onOpenRegisterModal}
            >
              Start a New Store
            </button>
            <p>or</p>
            <a href="/">Customize & Extend</a>
          </div>
        </div>
        <img src={FeaturedImg} alt="Featured" />
      </Content>
    </Container>   
  )
} 