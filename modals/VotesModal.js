import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const VotesModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        aria-labelledby='contained-modal-title-vcenter'
        centered
        size='sm'
        show={show}
        onHide={handleClose}
        className='p-0 pr-0 m-0'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>Thanks for the Vote !</Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant='dark' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VotesModal;
