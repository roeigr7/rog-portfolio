import { Row, Container } from 'react-bootstrap';
import { whiteHeaderVariants } from '../../assets/animations/variants';
import { MyTitle } from '../../assets/reausableComponents/MyTags';

import ProjectImage from './ProjectImage';

const MyProjects = () => {
  return (
    <div id='projects' className='my-projects-container'>
      <div className='my-projects-shape'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
      <div className='header-divider'>
        <MyTitle variants={whiteHeaderVariants} text='My Projects' />
        <h3 className='text-dark text-center'>Projects I have done so far</h3>
        <Container fluid className='px-1 pt-4 m-0'>
          <Row className='m-0 p-0'>
            <ProjectImage
              title='Zaad Productions'
              desc='website for productions company | React and Firebase'
              src='/projectsLogos/zaad.jpg'
              href='https://zaad-b5b7e.web.app/'
            />
            <ProjectImage
              title='Infinity Users'
              desc='tiny app for search github users | react'
              src='/projectsLogos/infinite.png'
              href='https://github-infinite.herokuapp.com/'
            />
            <ProjectImage
              title='Batkol Systems'
              desc='WordPress and css site for huge company'
              src='/projectsLogos/batkol.jpg'
              href='http://batkol.co.il'
            />
            <ProjectImage
              title='Lior Massage'
              desc='google play app for treatments meetings | React Native and mongoDB'
              src='/projectsLogos/liorapp.jpg'
              href='http://batkol.co.il'
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyProjects;
