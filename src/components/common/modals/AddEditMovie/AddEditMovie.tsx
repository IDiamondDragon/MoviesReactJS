import React, { useEffect, useMemo, useState } from "react";
import Select, { ActionMeta, ValueType, OptionTypeBase } from 'react-select';


import { IMovie } from '../../../../models/common/interfaces/IMovie';

import { intialValueMovie } from '../../../../services/data/initialValueMovie';
import { genersData } from '../../../../assets/data/geners';

import styles from './AddEditMovie.module.scss';




export interface AddEditMovieProps {
  movie: IMovie;
  onClickCloseButton: (e: React.MouseEvent) => void;
  onSubmit: (movie: IMovie) => void;
  className?: string;
}

export interface AddEditMovieState {
  movie: IMovie;
}

function AddEditMovie(props: AddEditMovieProps): JSX.Element    {

  const [movie, setMovie] = useState(intialValueMovie);
  const allGeners = useMemo(() => 
                            genersData.map((gener) => { return {value: gener, label: gener} }), []);
  
  const selectedGeners = useMemo(() => 
                                  allGeners.filter(generCombobox => movie.genres.find((gener) => gener === generCombobox.value)), 
                                  [allGeners, movie.genres])
  
  useEffect(() => {
    if (props.movie) {
      setMovie({...props.movie, genres: [...props.movie.genres]})
    }
  }, [props.movie])

  const handleInputChange  = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    setMovie({...movie, [event.target.name]: event.target.value})
  }
 
  const handleSelectChange = (genersSelect: ValueType<OptionTypeBase, boolean>, actionMeta: ActionMeta<OptionTypeBase>): void => {
    setMovie({...movie, genres: genersSelect?.map(gener => gener.value)})
  }

  const onSubmit = (e: React.MouseEvent): void => {
    if (!movie.tagline) {
      movie.tagline = movie.title;
    }

    if (!movie.runtime) {
      movie.runtime = 0;
    }

    movie.runtime = Number(movie.runtime);

    props.onSubmit(movie);
  }

  return (
    <div className={`${styles['add-edit-movie']} ${props.className} modal`}> 
      <div className="modal__title">{ movie.id ? 'EDIT MOVIE' : 'ADD MOVIE'}</div>
      <div className="modal__cross" onClick={props.onClickCloseButton}></div>
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
                  name="title"
                  value={movie.title}
                  onChange={handleInputChange}></input>
        </div>
        <div className="field">
          <div className="field__title">RELEASE DATE</div> 
          <input className="field__input" 
                 type="date" 
                 placeholder="Selecte Date"
                 name="releaseDate"
                 value={movie.releaseDate}
                 onChange={handleInputChange}>  
          </input>
        </div>
        <div className="field">
          <div className="field__title">MOVIE URL</div> 
          <input className="field__input" 
                  placeholder="Movie URL here" 
                  name="posterPath"
                  value={movie.posterPath}
                  onChange={handleInputChange}></input>
        </div>
        {/* <div className="field"> // won't delete now
          <div className="field__title">GENRE</div> 
          <select className="field__select" defaultValue={'DEFAULT'} onChange={handleInputChange}>
            <option value="DEFAULT" disabled>Select Genre</option>
            <option value="" disabled hidden={true} selected>Select Genre</option>
            {
              movie.genres.map(gener => {
                return <option key={gener} value={gener}>{gener}</option>
              })
            }
          </select>
        </div> */}
        <div className="field">
          <div className="field__title">GENRE</div> 
          <Select
            closeMenuOnSelect={false}
            className='react-multi-select-container'
            classNamePrefix="react-multi-select"
            isMulti
            value={selectedGeners}
            options={allGeners}
            onChange={handleSelectChange}
          />
        </div>

        <div className="field">
          <div className="field__title">OVERVIEW</div> 
          <input className="field__input" 
                 placeholder="Overview here" 
                 name="overview"
                 value={movie.overview}
                 onChange={handleInputChange}>              
          </input>
        </div>
        <div className={`${styles['add-edit-movie-form__last']} field`}>
          <div className="field__title">RUNTIME</div> 
          <input className="field__input" 
                  placeholder="Runtime here" 
                  name="runtime"
                  value={movie.runtime}
                  onChange={handleInputChange}></input>
        </div>
        <div className={styles['add-edit-movie-form__buttons']}>
          <button type="reset" 
                  className={`field__button ${styles['add-edit-movie-form__reset']}`}>
                    RESET
          </button>
          <button className={`field__button ${styles['add-edit-movie-form__submit']}`}
                  onClick={onSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEditMovie