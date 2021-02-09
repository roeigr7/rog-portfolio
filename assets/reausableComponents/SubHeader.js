import { motion } from 'framer-motion';
import {
  initSubheader,
  subheaderMove,
} from '../../assets/animations/animations';

const Subheader = ({ title, className }) => {
  return (
    <motion.div
      initial={initSubheader}
      animate={subheaderMove}
      className={` subheader-container d-flex justify-content-center align-items-center ${className}`}
    >
      <h3 className='subheader-title'>{title}</h3>
    </motion.div>
  );
};

export default Subheader;
