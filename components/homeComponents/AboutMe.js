import { Container } from 'react-bootstrap';

import { colorHeaderVariants } from '../../assets/animations/variants';

import { MyTitle } from '../../assets/reausableComponents/MyTags';

const AboutMe = () => {
  return (
    <div id='about' className='aboutme-container bg-white'>
      <MyTitle variants={colorHeaderVariants} text='About Me' />
      <Container>
        <div className='p-0 text-center md-mx-5 mx-0 about-me-text text-bright '>
          <p>
            Hi my name is <span className='font-weight-bold'>Roei</span>,Im 29
            years old with a
            <span className='font-weight-bold'>
              {' '}
              B.Sc in industrial engineering and management with aspecialization
              in information systems{' '}
            </span>
            for about a year. From childhood I loved to the field of web
            programming and applications, in the last two years I took the
            subject one step further and{' '}
            <span className='font-weight-bold'>
              began to learn and develop in massive self-learning
            </span>{' '}
            with the help of courses in Udemy and google at home and with the
            help of the knowledge I acquired in the degree. Today I am{' '}
            <span className='font-weight-bold'>
              after 3 big projects I built as a freelancer
            </span>
            , and dozens of other small projects. The vast majority of them are
            in <span className='font-weight-bold'>REACT</span>. Now im{' '}
            <span className='font-weight-bold'>looking for my first job</span>{' '}
            as a junior / entry level position.
            <br />
            <span className='font-weight-bold'>what i bring with me ? </span>
            passion,motivation, A desire to prove,and good knowledge relative to
            junior.
            <span className='font-weight-bold'>
              I would love to hear suggestions
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
