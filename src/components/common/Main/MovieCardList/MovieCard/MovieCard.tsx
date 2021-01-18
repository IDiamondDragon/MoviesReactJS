import React, { useCallback } from "react";
import Modal from 'react-modal';

import { IMovie } from '../../../../../models/common/interfaces/IMovie';

import DropdownMenu from '../../../DropdownMenu/DropdownMenu';
import AddEditMovie from '../../../modals/AddEditMovie/AddEditMovie';
import DeleteMovie from '../../../modals/DeleteMovie/DeleteMovieMovie';

import { getYear } from '../../../../../services/helpers/getYear';
import { intialValueMovie } from '../../../../../services/data/initialValueMovie';

import styles from './MovieCard.module.scss';




export interface MovieCardProps {
  movie: IMovie;
  className?: string
}

export function MovieCard({ className, movie = intialValueMovie()}: MovieCardProps): JSX.Element {

  const [isEditMovieModaOpen, setIsEditMovieOpen] = React.useState(false);
  const [isDeleteMovieModalOpen, setIsDeleteMovieOpen] = React.useState(false);

  const openEditMovieModal = useCallback( () => { setIsEditMovieOpen(true); }, [] );
  const closeEditMovieModal = useCallback( () => { setIsEditMovieOpen(false); }, []);

  const openDeleteMovieModal = useCallback( () => { setIsDeleteMovieOpen(true); }, []);
  const closeDeleteMovieModal = useCallback( () => { setIsDeleteMovieOpen(false); }, []);

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
      <div className={styles['movie-card__geners']}>{convertArrayGenersToString(movie.genres)}</div>
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