import Head from 'next/head';
import { Row, Col, Container } from 'react-bootstrap';
import { useGetSkills, useUpdateSkills } from '../apollo/actions';
import { MyTitle } from '../assets/reausableComponents/MyTags';
import withApollo from '../hoc/withApollo';
import SkillsList from '../components/homeComponents/SkillsList';
import { useState } from 'react';
import AboutMe from '../components/homeComponents/AboutMe';
import MyProjects from '../components/homeComponents/MyProjects';

import MyStack from '../components/homeComponents/MyStack';
import VotesModal from '../modals/VotesModal';
import { getDataFromTree } from '@apollo/react-ssr';
import { colorHeaderVariants } from '../assets/animations/variants';
import ShapeAboutMe from '../assets/shapes/Aboutme';

const Home = () => {
  const { data } = useGetSkills();
  const [updateSkills] = useUpdateSkills();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const skills = (data && data.skills) || [];

  return (
    <>
      <Head>
        <title>RoeiPortfolio</title>
        <link rel='icon' href='/logorg.png' />
      </Head>

      <section className='p-0 m-0'>
        <VotesModal handleClose={handleCloseModal} show={showModal} />
        <Container className='p-0 m-0' fluid>
          <AboutMe />
          <MyProjects />
          <MyStack />

          <div className='pb-5 mx-auto rate-container bg-white'>
            <ShapeAboutMe />
            <MyTitle variants={colorHeaderVariants} text='Rate Me' />

            <Row
              id='rate'
              className='p-0 m-0 d-flex align-items-center justify-content-center'
            >
              <Col md={8} className='p-0 m-0 text-center'>
                <h4 className='text-dark mb-4'>Rate me on my strong side</h4>
                <SkillsList updateVotes={updateSkills} skills={skills} />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

Home.getInitialProps = async ({ query }) => {
  return { query };
};
export default withApollo(Home, { getDataFromTree });
