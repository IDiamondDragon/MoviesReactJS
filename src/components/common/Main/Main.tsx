import React from "react";
import { useSelector } from 'react-redux';

import FiltersPanel from './FiltersPanel/FiltersPanel';
import CounterMovies from './CounterMovies/CounterMovies';
import MovieCardList from './MovieCardList/MovieCardList';
import MovieCardListBoundary from './MovieCardListBoundary/MovieCardListBoundary';

import { IMovie } from '../../../models/common/interfaces/IMovie';
import { isLoadingSelector } from '../../../store/movies/movies.selectors';

import styles from './Main.module.scss';




export interface MainProps {
  movies: IMovie[];
  className: string
}

export function Main({ className, movies }: MainProps): JSX.Element {
  const isLoading = useSelector(isLoadingSelector);

  return (
    <div className={`${styles['main']} ${className}`}>
      <FiltersPanel />
      {
        isLoading 
          ?         
            <div className='loading-indicator'>
              Loading...
            </div>
          :
            <MovieCardListBoundary>
              <CounterMovies />
              <MovieCardList movies={movies} />
            </MovieCardListBoundary>
      }
    </div>
  );
}

export default React.memo(Main)