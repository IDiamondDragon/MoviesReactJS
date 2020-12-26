import React from "react";

import styles from './CounterMovies.module.scss';

export interface ConterMoviesProps {
  className?: string
}

export function ConterMovies({ className }: ConterMoviesProps): JSX.Element {
  return (
    <div className={`${styles['counter-movies']} ${className}`}>
      <span className={styles['counter-movies__count']}>{9}</span> movies found
    </div>
  );
}

export default ConterMovies