import { Col, Container, Row, ListGroup } from 'react-bootstrap';

import IconsList from '../../assets/reausableComponents/IconsList';
const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-shape'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
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
