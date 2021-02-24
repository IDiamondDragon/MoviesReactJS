import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Baner from '../../common/Banner/Baner';
import MovieDetailsPanel from './MovieDetailsPanel/MovieDetailsPanel';
import SearchIcon from './SearchIcon/SearchIcon';
import { RootState } from '../../../store/store';

import { getMovieByIdSelector } from '../../../store/movies/movies.selectors';
import { intialValueMovie } from '../../../services/data/initialValueMovie';

import styles from './Header.module.scss';

interface ParamTypes {
  id: string;
}

export function Header(): JSX.Element {
  const { id } = useParams<ParamTypes>();
  let movie = useSelector((state: RootState) => getMovieByIdSelector(state, Number(id)));

  if (!movie) {
    movie = intialValueMovie();
  }

  return (
    <div className={styles.header}>
      <Baner className={styles.header__baner} />
      <SearchIcon className={styles['header__search-icon']} />
      <MovieDetailsPanel movie={movie} className={styles.header__panel} />
    </div>
  );
}

export default React.memo(Header)