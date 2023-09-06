import ReactModal from 'react-modal';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const ImgItem = ({ picture }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img src={picture.webformatURL} alt={picture.tags} onClick={openModal} />
      <Modal
        picture={picture}
        isOpen={isOpen}
        closeModal={closeModal}
        style={customStyles}
      />
    </>
  );
};
