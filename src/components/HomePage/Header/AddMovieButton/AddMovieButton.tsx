import React, { useCallback } from "react";

import Modal from 'react-modal';
import AddEditMovie from '../../../common/modals/AddEditMovie/AddEditMovie';

import { intialValueMovie } from '../../../../services/data/initialValueMovie';

import styles from './AddMovieButton.module.scss';




interface AddMovieButtonProps {
  className: string
}

export function AddMovieButton({ className }: AddMovieButtonProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  const openModal = useCallback(
    () => {
      setIsModalOpen(true);
    },
    [],
  );

  const closeModal = useCallback(
    () => {
      setIsModalOpen(false);
    },
    [],
  );

  return (
    <>
        <button className={`${styles['add-movie-button']} ${className}`}
                onClick={openModal}>
          + ADD MOVIE
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="react-modal"
          overlayClassName="react-overlay"
          contentLabel="Example Modal"
        >
          <AddEditMovie movie={intialValueMovie()} onClick={closeModal}/>
      </Modal>
    </>
  );
}

export default AddMovieButton