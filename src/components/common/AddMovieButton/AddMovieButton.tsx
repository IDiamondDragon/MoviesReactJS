import React from "react";
import styles from './AddMovieButton.module.scss';

export interface AddMovieButtonProps {
  className: string
}

export function AddMovieButton({ className }: AddMovieButtonProps): JSX.Element {
  return (
    <button className={`${styles['add-movie-button']} ${className}`}>+ ADD MOVIE</button>
  );
}

export default AddMovieButton