import Link from 'next/link';
import { Row } from 'react-bootstrap';
import { ObserverAnimate } from '../animations/animationsWrapper';

///links///
export const MyLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

///my title///
export const MyTitle = ({ text, variants }) => {
  return (
    <Row className='d-flex flex-column justify-content-center align-items-center m-0 p-0'>
      <ObserverAnimate variants={variants} text={text}></ObserverAnimate>
    </Row>
  );
};
