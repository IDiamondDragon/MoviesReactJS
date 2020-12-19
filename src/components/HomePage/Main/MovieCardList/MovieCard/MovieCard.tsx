import React from "react";
import styles from './MovieCard.module.scss';

export interface MovieCardProps {
  posterPath: string | undefined;
  title: string;
  releaseDate: string;
  geners: string[]; 
  className?: string
}

export function MovieCard({ 
  className,
  posterPath = undefined,
  title = 'None',
  releaseDate = 'None',
  geners = []}: MovieCardProps): JSX.Element {

  return (
    <div className={`${styles['movie-card']} ${className}`}>
      <figure>
        <img className={styles['movie-card__image']} src={posterPath}/>
      </figure>
      <div className={styles['movie-card__wrapper']}>
        <div className={styles['movie-card__title']}>{title}</div>
        <div className={styles['movie-card__release-date']}>{getYear(releaseDate)}</div>
      </div>
      <div className={styles['movie-card__geners']}>{convertArrayGenersToString(geners)}</div>
    </div>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}

function convertArrayGenersToString(geners: string[]) {
  if (geners?.length) {
    return;
  }

  if (geners.length == 2) {
    return geners[0] + ' & ' + geners[1]
  }

  return geners.join(', ')
}

export default MovieCard