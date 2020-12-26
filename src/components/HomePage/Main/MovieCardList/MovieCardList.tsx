import React from "react";
import MovieCard from './MovieCard/MovieCard';

import movies from '../../../../assets/data/movies.json'
import styles from './MovieCardList.module.scss';

export interface MovieCardListProps {
  className?: string
}

export function MovieCardList({ className }: MovieCardListProps): JSX.Element {
  return (
    <div className={`${styles['movie-card-list']} ${className}`}>
      {
        movies.map(movie => {
            return (<MovieCard key={movie.id} 
                               className={styles["right-margin"]}
                               posterPath={movie.poster_path}
                               title={movie.title}
                               releaseDate={movie.release_date}
                               geners={movie.genres}/>)
          }
        )    
      }
    </div>
  );
}

export default MovieCardList