import React, { useCallback } from "react";
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../../../../services/hooks/useQuery';

import { IMovie } from '../../../../../models/common/interfaces/IMovie';

import DropdownMenu from '../../../DropdownMenu/DropdownMenu';
import AddEditMovie from '../../../modals/AddEditMovie/AddEditMovie';
import DeleteMovie from '../../../modals/DeleteMovie/DeleteMovie';

import { getYear } from '../../../../../services/helpers/getYear';
import { intialValueMovie } from '../../../../../services/data/initialValueMovie';
import { updateMovieAction, deleteMovieAction } from '../../../../../store/movies/movies.actions';

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

  const dispatch = useDispatch();
  // const query = useQuery();
  const history = useHistory();

  const updateMovie = useCallback(
    (movie: IMovie)=> { 
      dispatch(updateMovieAction(movie));
      // closeEditMovieModal();
    },
    [dispatch]
  );

  const deleteMovie = useCallback(
    (id: number | undefined)=> { 
      dispatch(deleteMovieAction(id));
      closeDeleteMovieModal();
    },
    [dispatch, closeDeleteMovieModal]
  );

  const redirectToMovieDetailsPage = useCallback(
    (): void => { 

      // history.push({pathname: `/film/${movie.id}`, search: query.toString()}); // won't remove
      history.push({pathname: `/film/${movie.id}`});
    },
    [history, movie.id]
  );

  return (
    <>
    <div className={`${styles['movie-card']} ${className}`} onClick={redirectToMovieDetailsPage}>
      <figure className={styles['movie-card__figure']} >
        <img className={styles['movie-card__image']} 
             src={movie.posterPath}  
             alt={movie.title}
             width="320"
             height="460"
        />
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
      <AddEditMovie movie={movie} onClickCloseButton={closeEditMovieModal} onSubmit={updateMovie} />
    </Modal>
    <Modal
      isOpen={isDeleteMovieModalOpen}
      // onRequestClose={closeDeleteMovieModal}
      className="react-modal react-modal--no-paddings"
      overlayClassName="react-overlay"
      contentLabel="Example Modal"
    >

      <DeleteMovie id={movie.id} onClick={closeDeleteMovieModal} onConfirm={deleteMovie} />
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

export default React.memo(MovieCard);