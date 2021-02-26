import { Row } from 'react-bootstrap';

import ReactWhatsapp from 'react-whatsapp';
import {
  Instagram,
  Whatsapp,
  Facebook,
  EnvelopeFill,
  Linkedin,
  Sticky,
} from 'react-bootstrap-icons';

const IconsList = () => {
  return (
    <Row className='mb-0 mb-sm-0 p-0 m-0 justify-content-center'>
      <a href='https://www.instagram.com/roeigr/'>
        <Instagram className='social-icon instagram' />
      </a>
      <a href='https://www.facebook.com/roy.grinshpan/'>
        <Facebook className='social-icon facebook' />
      </a>
      <a href='https://www.docdroid.net/CmItduA/roeicv-pdf'>
        <Sticky className='social-icon cv' />
      </a>

      <a href='https://www.linkedin.com/in/roei-grinshpan-a4884a179/'>
        <Linkedin className='social-icon linkedin' />
      </a>
      <a data-cc-domain='gmail.com' href='mailto:roeigr7@gmail.com'>
        <EnvelopeFill className='social-icon gmail' />
      </a>
      <ReactWhatsapp
        style={{
          background: 'transparent',
          margin: '0',
          padding: '0',
          border: '0',
        }}
        number='+972549149898'
        message='Hi! im Roei'
      >
        <Whatsapp className='social-icon whatsapp' />
      </ReactWhatsapp>
    </Row>
  );
};
export default IconsList;
