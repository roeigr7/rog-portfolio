import Image from 'next/image';
import { Col } from 'react-bootstrap';
import { MyLink } from '../../assets/reausableComponents/MyTags';

const ProjectImage = ({ href, src, title, desc }) => {
  return (
    <Col
      xs={6}
      className='p-0 m-0 d-flex align-items-center justify-content-center'
      xl={3}
    >
      <MyLink className='anchor-default' href={href}>
        <Image src={src} layout='intrinsic' width={600} height={400} />
        <div className='image-overlay text-center p-3'>
          <h3 className='image-title-text text-dark'>{title}</h3>
          <p className='image-desc-text text-dark'>{desc}</p>
        </div>
      </MyLink>
    </Col>
  );
};
export default ProjectImage;
