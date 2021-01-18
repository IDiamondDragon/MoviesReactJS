import React from "react";

import styles from './DeleteMovie.module.scss';


export interface AddEditMovieProps {
  id: string;
  onClick: (e: React.MouseEvent) => void
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DeleteMovie({ className, id, onClick }: AddEditMovieProps): JSX.Element {
  return (
    <div className={`${styles['delete-movie']} ${className} modal`}> 
      <div className="modal__title">DELETE MOVIE</div>
      <div className="modal__cross" onClick={onClick}></div>
      <div className="modal__description">Are you sure you want to delete this movie?</div>
      <div className="modal__buttons">
        <button className={`${styles['delete-movie__confirm']}`}
                    onClick={onClick}>
              CONFIRM
        </button>
      </div>
    </div>
  );
}

export default DeleteMovie