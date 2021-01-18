import React from "react";

import FiltersPanel from './FiltersPanel/FiltersPanel';
import CounterMovies from './CounterMovies/CounterMovies';
import MovieCardList from './MovieCardList/MovieCardList';
import MovieCardListBoundary from './MovieCardListBoundary/MovieCardListBoundary';

import { IMovie } from '../../../models/common/interfaces/IMovie';

import styles from './Main.module.scss';


export interface MainProps {
  movies: IMovie[];
  className: string
}

export function Main({ className, movies }: MainProps): JSX.Element {
  return (
    <div className={`${styles['main']} ${className}`}>
      <FiltersPanel/>
      <MovieCardListBoundary>
        <CounterMovies/>
        <MovieCardList movies={movies}/>
      </MovieCardListBoundary>
    </div>
  );
}

export default Main