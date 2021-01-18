import React from "react";
import MovieCard from './MovieCard/MovieCard';

import { IMovie } from '../../../../models/common/interfaces/IMovie';

import styles from './MovieCardList.module.scss';


export interface MovieCardListProps {
  movies: IMovie[];
  className?: string;
}

export function MovieCardList({ className, movies }: MovieCardListProps): JSX.Element {
  return (
    <div className={`${styles['movie-card-list']} ${className}`}>
      {
        movies.map((movie) => {
            return (<MovieCard key={movie.id} 
                               className={styles["right-margin"]}
                               movie={movie}/>)
          }
        )    
      }
    </div>
  );
}

export default MovieCardList