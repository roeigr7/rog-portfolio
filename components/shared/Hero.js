import { Row, Col, Container } from 'react-bootstrap';
import Image from 'next/image';
import IconsList from '../../assets/reausableComponents/IconsList';
import { SplitText } from '../../assets/animations/animationsWrapper';
import ShapeBanner from '../../assets/shapes/ShapeBanner';
const Hero = () => {
  return (
    <section id='home' className='banner'>
      <ShapeBanner />
      <Container fluid className='px-0 md-px-5'>
        <Row className='d-flex justify-content-between align-items-center p-0 m-0'>
          <Col
            className='d-flex flex-column justify-content-center p-0 m-0'
            lg={5}
            sm={6}
          >
            <Row className='p-0 m-0 d-flex justify-content-center '>
              <h1 className='m-0 p-0 pt-5'>
                <SplitText>ROEI GRINSHPAN</SplitText>
              </h1>
            </Row>
            <IconsList />
          </Col>
          <Col className=' d-flex justify-content-center' lg={5} sm={6}>
            <ul className='bubbles'>
              <li /> <li /> <li /> <li /> <li /> <li /> <li /> <li />
            </ul>
            <Image
              className='image-banner'
              src='/man.png'
              layout='intrinsic'
              width={320}
              height={320}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
