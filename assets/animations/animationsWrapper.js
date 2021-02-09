import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { letterVariants, headerLineVariants } from './variants';

export const ObserverAnimate = ({ variants, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.h2
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={variants}
    >
      {text}
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={headerLineVariants}
        className='header-line'
      />
    </motion.h2>
  );
};
export const ObserverStack = ({ variants, children, className, custom }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      custom={custom}
      animate={controls}
      initial='hidden'
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
export function SplitText({ children }) {
  let letter = children.split('');
  return letter.map((l, i) => {
    return (
      <div key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={letterVariants}
          className='animated-text'
          custom={i}
        >
          {l + (l === ' ' ? '\u00A0' : '')}
        </motion.div>
      </div>
    );
  });
}
