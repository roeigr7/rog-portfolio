import Image from 'next/image';
import { Row, Container, Col } from 'react-bootstrap';
import { MyTitle } from '../../assets/reausableComponents/MyTags';
import { motion } from 'framer-motion';
import {
  stackVariants,
  whiteHeaderVariants,
} from '../../assets/animations/variants';
import { ObserverStack } from '../../assets/animations/animationsWrapper';
import {
  stackFrontItems,
  stackBackItems,
  stackOtherItems,
} from '../../assets/constArrays/stackArrays';
const MyStack = () => {
  return (
    <div id='stack' className='py-5 bg-lightdark'>
      <MyTitle variants={whiteHeaderVariants} text='My Stack' />

      <Container fluid className='p-0 m-0'>
        <Row className='m-0 p-0 px-0 md-px-5 d-flex justify-content-center align-items-start'>
          <Col
            xs={4}
            className='border-stack m-0 p-1 d-flex flex-column align-items-center'
          >
            <h4 className='pb-4'>FrontEnd</h4>
            <Row className='stack-wrapper p-0 px-0 px-md-4 m-0'>
              {stackFrontItems.map((item, i) => (
                <Col key={i} className='p-0 m-0' xs={6} sm={4} lg={3}>
                  <ObserverStack
                    variants={stackVariants}
                    custom={i}
                    className='stack-item'
                  >
                    <Image
                      src={item}
                      layout='intrinsic'
                      height={70}
                      width={70}
                    />
                  </ObserverStack>
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            xs={4}
            className='border-stack m-0 p-1 d-flex flex-column align-items-center'
          >
            <h4 className='pb-4'>BackEnd</h4>
            <Row className='stack-wrapper p-0 px-0 px-md-4 m-0'>
              {stackBackItems.map((item, i) => (
                <Col key={i} className='p-0 m-0' xs={6} sm={4} lg={3}>
                  <ObserverStack
                    variants={stackVariants}
                    custom={i}
                    className='stack-item'
                  >
                    <Image
                      src={item}
                      layout='intrinsic'
                      height={70}
                      width={70}
                    />
                  </ObserverStack>
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            xs={4}
            className='border-stack  m-0 p-1 d-flex flex-column align-items-center'
          >
            <h4 className='pb-4'>Other</h4>
            <Row className='stack-wrapper p-0 px-0 px-md-4 m-0'>
              {stackOtherItems.map((item, i) => (
                <Col key={i} className='p-0 m-0' xs={6} sm={4} lg={3}>
                  <ObserverStack
                    variants={stackVariants}
                    custom={i}
                    className='stack-item'
                  >
                    <Image
                      src={item}
                      layout='intrinsic'
                      height={70}
                      width={70}
                    />
                  </ObserverStack>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyStack;
