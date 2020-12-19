import React from "react";

import { FiltersPanel } from './FiltersPanel/FiltersPanel';
import CounterMovies from './CounterMovies/CounterMovies';
import { MovieCardList } from './MovieCardList/MovieCardList';
import MovieCardListBoundary from './MovieCardListBoundary/MovieCardListBoundary';

import styles from './Main.module.scss';


export interface MainProps {
  className: string
}

export function Main({ className }: MainProps): JSX.Element {
  return (
    <div className={`${styles['main']} ${className}`}>
      <FiltersPanel/>
      <MovieCardListBoundary>
        <CounterMovies/>
        <MovieCardList/>
      </MovieCardListBoundary>
    </div>
  );
}

export default Main