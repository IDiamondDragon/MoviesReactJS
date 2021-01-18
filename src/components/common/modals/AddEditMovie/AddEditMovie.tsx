import React, { useEffect, useState } from "react";

import { IMovie } from '../../../../models/common/interfaces/IMovie';

import { intialValueMovie } from '../../../../services/data/initialValueMovie';

import styles from './AddEditMovie.module.scss';



export interface AddEditMovieProps {
  movie: IMovie;
  onClick: (e: React.MouseEvent) => void
  className?: string;
}

export interface AddEditMovieState {
  movie: IMovie;
}

function AddEditMovie(props: AddEditMovieProps): JSX.Element    {

  const [movie, setMovie] = useState(intialValueMovie);

  useEffect(() => {
    if (props.movie) {
      setMovie({...props.movie, genres: [...props.movie.genres]})
    }
  }, [props.movie])

  const handleInputChange  = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const updatedKeyword = event.target.value;
  }
 
    return (
      <div className={`${styles['add-edit-movie']} ${props.className} modal`}> 
        <div className="modal__title">{ movie.id ? 'EDIT MOVIE' : 'ADD MOVIE'}</div>
        <div className="modal__cross" onClick={props.onClick}></div>
        <form className={`${styles['add-edit-movie-form']} formLayout`}>
          { 
            movie.id != 0 ?
              <div className="field">
                <div className="field__title">MOVIE ID</div> {
                      <label className="field__label" >{movie.id}</label>
                }
              </div>
              : null
          }
          <div className="field">
            <div className="field__title">TITLE</div> 
            <input className="field__input" 
                   placeholder="Title here" 
                   value={movie.title}
                   onChange={handleInputChange}></input>
          </div>
          <div className="field">
            <div className="field__title">RELEASE DATE</div> 
            <input className="field__input" 
                   type="date" 
                  placeholder="Selecte Date"
                  value={movie.releaseDate}
                  onChange={handleInputChange}>  
            </input>
          </div>
          <div className="field">
            <div className="field__title">MOVIE URL</div> 
            <input className="field__input" 
                   placeholder="Movie URL here" 
                   value={movie.posterPath}
                   onChange={handleInputChange}></input>
          </div>
          <div className="field">
            <div className="field__title">GENRE</div> 
            <select className="field__select" defaultValue={'DEFAULT'} onChange={handleInputChange}>
              <option value="DEFAULT" disabled>Select Genre</option>
              {/* <option value="" disabled hidden={true} selected>Select Genre</option> */}
              {
                movie.genres.map(gener => {
                  return <option key={gener} value={gener}>{gener}</option>
                })
              }
            </select>
          </div>
          <div className="field">
            <div className="field__title">OVERVIEW</div> 
            <input className="field__input" 
                   placeholder="Overview here" 
                  value={movie.overview}
                  onChange={handleInputChange}>              
            </input>
          </div>
          <div className={`${styles['add-edit-movie-form__last']} field`}>
            <div className="field__title">RUNTIME</div> 
            <input className="field__input" 
                   placeholder="Runtime here" 
                   value={movie.runtime}
                   onChange={handleInputChange}></input>
          </div>
          <div className={styles['add-edit-movie-form__buttons']}>
            <button type="reset" 
                    className={`field__button ${styles['add-edit-movie-form__reset']}`}>
                      RESET
            </button>
            <button className={`field__button ${styles['add-edit-movie-form__submit']}`}
                    onClick={props.onClick}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
}

export default AddEditMovie