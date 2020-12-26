import React from "react";

import Modal from 'react-modal';
import AddEditMovie from '../modals/AddEditMovie/AddEditMovie';
import { IMovie } from '../../../models/common/interfaces/Movie.';

import styles from './AddMovieButton.module.scss';

const intialValueMovie: IMovie = {id: 0,
  posterPath: undefined,
  title: 'None',
  releaseDate: 'None',
  overview: 'None',
  runtime: 0,
  geners: []};


export interface AddMovieButtonProps {
  className: string
}

export function AddMovieButton({ className }: AddMovieButtonProps): JSX.Element {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <>
        <button className={`${styles['add-movie-button']} ${className}`}
                onClick={openModal}>
          + ADD MOVIE
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="react-modal"
          overlayClassName="react-overlay"
          contentLabel="Example Modal"
        >
          <AddEditMovie movie={intialValueMovie} onClick={closeModal}/>
      </Modal>
    </>
  );
}

export default AddMovieButton