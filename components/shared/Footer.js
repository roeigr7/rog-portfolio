import { Col, Container, Row, ListGroup } from 'react-bootstrap';

import IconsList from '../../assets/reausableComponents/IconsList';
import ShapeFooter from '../../assets/shapes/ShapeFooter';
const Footer = () => {
  return (
    <footer className='footer-container'>
      <ShapeFooter />
      <Container fluid className='p-0 m-0'>
        <Row className='d-flex align-items-center text-white-50 p-0 px-0 px-sm-3 m-0 justify-content-between'>
          <Col className='d-flex justify-content-center text-center' md={3}>
            <small>
              Copyright &copy; 2021 Roei Grinshpan styling and coding
            </small>
          </Col>
          <Col
            className='my-1 mb-0 d-flex justify-content-center align-items-center p-0 m-0'
            md={6}
          >
            <IconsList size={40} />
          </Col>
          <Col className='d-flex justify-content-center text-center' md={3}>
            <small>Made with NextJs & bootstrap & mongoDb</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
