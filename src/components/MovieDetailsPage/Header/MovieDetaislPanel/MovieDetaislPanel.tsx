import React from "react";

import { IMovie } from '../../../../models/common/interfaces/IMovie';

import { getYear } from '../../../../services/helpers/getYear';
import { intialValueMovie } from '../../../../services/data/initialValueMovie';

import styles from './MovieDetaislPanel.module.scss';

export interface MovieDetaislPanelProps {
  movie?: IMovie;
  className: string;
}

export function MovieDetaislPanel({ className, movie = intialValueMovie() }: MovieDetaislPanelProps): JSX.Element {
  return (
    <div className={`${styles['movie-details-panel']} ${className}`}>
      <figure>
        <img className={styles['movie-image']} src={movie.posterPath}/>
      </figure>
      <div className={styles['movie-details']}>
        <div className={styles['movie-details__wrap-title-vote-average']}>
          <div className={styles['movie-details__title']}>{ movie.title }</div>
          <div className={styles['vote-average']}>
            <div className={styles['vote-average__number']}>{ movie.voteAverage }</div>
          </div>
        </div> 
        <div className={styles['movie-details__tagline']}>{ movie.tagline }</div>
        <span className={styles['movie-details__release-date']}>{ getYear(movie.releaseDate) }</span>
        <span className={styles['movie-details__runtime']}>{ movie.runtime } min</span>
        <div className={styles['movie-details__overview']}>{ movie.overview }</div>
      </div>
    </div>
  );
}

export default MovieDetaislPanel