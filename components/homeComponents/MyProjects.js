import { Row, Container } from 'react-bootstrap';
import { whiteHeaderVariants } from '../../assets/animations/variants';
import { MyTitle } from '../../assets/reausableComponents/MyTags';
import ShapeMyprojects from '../../assets/shapes/ShapeMyprojects';
import ProjectImage from './ProjectImage';

const MyProjects = () => {
  return (
    <div id='projects' className='my-projects-container'>
      <ShapeMyprojects />
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
