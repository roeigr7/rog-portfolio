import { Container } from 'react-bootstrap';

import { colorHeaderVariants } from '../../assets/animations/variants';

import { MyTitle } from '../../assets/reausableComponents/MyTags';

const AboutMe = () => {
  return (
    <div id='about' className='aboutme-container bg-white'>
      <MyTitle variants={colorHeaderVariants} text='About Me' />
      <Container>
        <div className='p-0 text-center md-mx-5 mx-0 about-me-text text-dark '>
          <p>
            Hi my name is <span className='font-weight-bold'>Roei</span>,Im 29
            years old and Now im{' '}
            <span className='font-weight-bold'>looking for my first job</span>{' '}
            as a Junior Web or Apps Developer. I have a
            <span className='font-weight-bold'>
              {' '}
              B.Sc in Industrial Engineering and Management with specialization
              in information systems. <br />
            </span>
            From childhood I loved the field of web programming and
            applications,and in the last two years I took the subject one step
            further and{' '}
            <span className='font-weight-bold'>
              began to learn and develop in massive self-learning
            </span>{' '}
            with help of online courses like Google and Udemy and knowledge I
            acquired in the degree. this has helped me further my knowledge,
            understanding and experience in this topic. Today I have{' '}
            <span className='font-weight-bold'>
              developed 3 big projects that I built as a freelancer
            </span>
            , and dozens of other small projects. The vast majority of them were
            in <span className='font-weight-bold'>REACT</span>.{' '}
            <span className='font-weight-bold'>
              {' '}
              <br />
              So What i bring with me ?{' '}
            </span>
            passion,motivation, A desire to prove myself,and relatively good
            knowledge for a junior
            <span className='font-weight-bold'>
              {' '}
              Click on the Social icons below to get me
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
