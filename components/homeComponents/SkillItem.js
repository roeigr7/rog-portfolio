import { motion, useAnimation } from 'framer-motion';
import { PlusCircle } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

const Skill = ({ updateVotes, votes, id, name }) => {
  const [clicked, setClicked] = useState(false);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView, votes]);
  const updateVoteAndStore = () => {
    setClicked(!clicked);
    localStorage.setItem(`skill-${id}-clicked`, true);
    updateVotes({ variables: { votes: votes + 1, id: id } });
  };
  return (
    <Row className='m-0 p-0  d-flex justify-content-center justify-content-md-around align-items-center my-3 text-dark'>
      <Col className='p-0 m-0' xs={12} xl={2} lg={2} md={3}>
        {name}
      </Col>

      <Col className='p-0 ml-0 ' xs={10} md={7} lg={8}>
        <motion.div
          animate={controls}
          ref={ref}
          variants={{
            initial: { width: '0%', zIndex: 1 },
            animate: {
              width: votes > 100 ? '100%' : `${votes + 5}%`,
              transition: {
                type: 'tween',
                duration: 1,
              },
            },
          }}
          className={votes >= 100 ? 'hundred' : 'animate-Line bg-blue'}
        />
        <div className='line-background bg-lightbright' />
        <p className='line-precent-text text-center text-black p-0 m-0'>
          {votes} Votes
        </p>
      </Col>

      <Col className='p-0' xs={1}>
        <PlusCircle
          size={28}
          disabled={true}
          onClick={updateVoteAndStore}
          className={
            localStorage.getItem(`skill-${id}-clicked`) === 'true'
              ? 'skill-button skill-button-hidden text-blue'
              : 'skill-button text-blue'
          }
        />
      </Col>
    </Row>
  );
};
export default Skill;
