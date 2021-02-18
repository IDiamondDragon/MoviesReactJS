import React from "react";
import { useSelector } from 'react-redux';

import { getMoviesSelector } from '../../../../store/movies/movies.selectors';

import styles from './CounterMovies.module.scss';


export interface ConterMoviesProps {
  className?: string
}

export function ConterMovies({ className }: ConterMoviesProps): JSX.Element {
  const movies = useSelector(getMoviesSelector);

  return (
    <div className={`${styles['counter-movies']} ${className}`}>
      <span className={styles['counter-movies__count']}>{ movies.length }</span> movies found
    </div>
  );
}

export default ConterMovies