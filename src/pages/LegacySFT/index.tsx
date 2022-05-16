import React, { useState } from 'react';
import { Modal, Button, CloseButton } from 'react-bootstrap';

const LegacySFT = () => {
  const [show, setShow] = useState<boolean>(false);
  const [modalImage, setModalImage0] = useState<string>('');

  const handleClose = () => {
    setShow(false);
  };

  const showModal = (image: string) => {
    setShow(true);
    setModalImage0(image);
  };

  return (
    <div className=' legacySFT'>
      <Modal
        className='modal__background'
        show={show}
        onHide={() => handleClose()}
      >
        <Modal.Body
          className='modal__body'
          style={{ backgroundImage: `url(${modalImage})` }}
        ></Modal.Body>
      </Modal>
      <div className=' legacySFT__container'>
        <div
          className='legacySFT__box'
          onClick={() =>
            showModal(
              'https://media.elrond.com/nfts/asset/bafybeiagg4pqrkhc3yybrq32ltgdwkkqvhwexloxhpffmbzygukcaxusra/cryptopia-land.png'
            )
          }
        >
          <p className='legacySFT__text'>Land Card</p>
          <img
            src='https://media.elrond.com/nfts/asset/bafybeiagg4pqrkhc3yybrq32ltgdwkkqvhwexloxhpffmbzygukcaxusra/cryptopia-land.png'
            alt='Rare Land Card SFTs'
            className='collections__card--image'
          />
        </div>
        <div
          className='legacySFT__box'
          onClick={() =>
            showModal(
              'https://media.elrond.com/nfts/asset/bafybeihyooxnaimt7ucc2sheq7oioszab6rk6xcwsbsjchgponoguddlee/elf-king.png'
            )
          }
        >
          <p className='legacySFT__text'>Elf King</p>
          <img
            src='https://media.elrond.com/nfts/asset/bafybeihyooxnaimt7ucc2sheq7oioszab6rk6xcwsbsjchgponoguddlee/elf-king.png'
            alt='Very Rare Elf King SFTs'
            className='collections__card--image'
          />
        </div>
      </div>
    </div>
  );
};

export default LegacySFT;
