import { Container, Content } from './styles';
import Comp1Img from '../../assets/images/Component1.svg';
import Comp2Img from '../../assets/images/Component2.svg';
import Comp3Img from '../../assets/images/Component3.svg';

export function Feature() {
  return (
    <Container>
      <div>
        <h1>
          Your eCommerce <br />
          made simple
        </h1>
        <Content>
          <div>
            <img src={Comp1Img} alt="All you need to start" />
            <h4>All You Need to Start</h4>
            <p>
              Add WooCommerce plugin to any WordPress site and <br />
              se up a new store in minutes
            </p>
            <a href="/">Ecommerce for Wordpress </a>
          </div>
          <div>
            <img src={Comp2Img} alt="All you need to start" />
            <h4>All You Need to Start</h4>
            <p>
              Add WooCommerce plugin to any WordPress site and <br />
              se up a new store in minutes
            </p>
            <a href="/">Ecommerce for Wordpress </a>
          </div>
          <div>
            <img src={Comp3Img} alt="All you need to start" />
            <h4>All You Need to Start</h4>
            <p>
              Add WooCommerce plugin to any WordPress site and <br />
              se up a new store in minutes
            </p>
            <a href="/">Ecommerce for Wordpress </a>
          </div>
        </Content>
      </div>
    </Container>
  )
}