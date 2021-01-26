import React, { useCallback } from "react";
import { useDispatch } from 'react-redux';
import { addMovieAction } from '../../../../store/movies/movies.actions';

import Modal from 'react-modal';
import AddEditMovie from '../../../common/modals/AddEditMovie/AddEditMovie';

import { IMovie } from '../../../../models/common/interfaces/IMovie';

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

  const dispatch = useDispatch();

  const addMovie = useCallback(
    (movie: IMovie)=> { 
      dispatch(addMovieAction(movie));
      closeModal();
    },
    [dispatch, closeModal]
  );

  return (
    <>
        <button className={`${styles['add-movie-button']} ${className}`}
                onClick={openModal}>
          + ADD MOVIE
        </button>
        <Modal
          isOpen={isModalOpen}
          // onRequestClose={closeModal}
          className="react-modal"
          overlayClassName="react-overlay"
          contentLabel="Example Modal"
        >
          <AddEditMovie movie={intialValueMovie()} onClickCloseButton={closeModal} onSubmit={addMovie}/>
      </Modal>
    </>
  );
}

export default AddMovieButton