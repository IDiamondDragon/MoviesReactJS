import React from "react";
import Modal from 'react-modal';

import { IMovie } from '../../../../../models/common/interfaces/Movie';

import DropdownMenu from '../../../../common/DropdownMenu/DropdownMenu';
import AddEditMovie from '../../../../common/modals/AddEditMovie/AddEditMovie';
import DeleteMovie from '../../../../common/modals/DeleteMovie/DeleteMovieMovie';

import styles from './MovieCard.module.scss';

const intialValueMovie: IMovie = {id: 0,
                          posterPath: undefined,
                          title: 'None',
                          releaseDate: 'None',
                          overview: 'None',
                          runtime: 0,
                          geners: []};
export interface MovieCardProps {
  movie: IMovie;
  className?: string
}

export function MovieCard({ className, movie = intialValueMovie}: MovieCardProps): JSX.Element {

  const [isEditMovieModaOpen, setIsEditMovieOpen] = React.useState(false);
  const [isDeleteMovieModalOpen, setIsDeleteMovieOpen] = React.useState(false);

  function openEditMovieModal() {
    setIsEditMovieOpen(true);
  }

  function closeEditMovieModal(){
    setIsEditMovieOpen(false);
  }

  function openDeleteMovieModal() {
    setIsDeleteMovieOpen(true);
  }

  function closeDeleteMovieModal(){
    setIsDeleteMovieOpen(false);
  }


  return (
    <>
    <div className={`${styles['movie-card']} ${className}`}>
      <figure>
        <img className={styles['movie-card__image']} src={movie.posterPath}/>
      </figure>
      <div className={styles['movie-card__wrapper']}>
        <div className={styles['movie-card__title']}>{movie.title}</div>
        <div className={styles['movie-card__release-date']}>{getYear(movie.releaseDate)}</div>
      </div>
      <div className={styles['movie-card__geners']}>{convertArrayGenersToString(movie.geners)}</div>
      <DropdownMenu onOpenEditMovieModal={openEditMovieModal}
                    onOpenDeleteMovieModal={openDeleteMovieModal}
                    className={styles['movie-card__dropdown-menu']}
      />
    </div>
    <Modal
      isOpen={isEditMovieModaOpen}
      // onRequestClose={closeEditMovieModal}
      className="react-modal"
      overlayClassName="react-overlay"
      contentLabel="Example Modal"
    >
      <AddEditMovie movie={movie} onClick={closeEditMovieModal}/>
    </Modal>
    <Modal
      isOpen={isDeleteMovieModalOpen}
      // onRequestClose={closeDeleteMovieModal}
      className="react-modal react-modal--no-paddings"
      overlayClassName="react-overlay"
      contentLabel="Example Modal"
    >

      <DeleteMovie id='' onClick={closeDeleteMovieModal}/>
    </Modal>
  </>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}

function convertArrayGenersToString(geners: string[]) {
  if (!geners?.length) {
    return;
  }

  if (geners.length == 2) {
    return geners[0] + ' & ' + geners[1]
  }

  return geners.join(', ')
}

export default MovieCard