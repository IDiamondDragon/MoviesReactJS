import React from "react";

import { IMovie } from '../../../../models/common/interfaces/Movie.';

import styles from './AddEditMovie.module.scss';


export interface AddEditMovieProps {
  movie: IMovie;
  onClick: (e: React.MouseEvent) => void
  className?: string;
}

export interface AddEditMovieState {
  movie: IMovie;
}

const intialValueMovie: IMovie = {id: 0,
  posterPath: undefined,
  title: 'None',
  releaseDate: 'None',
  overview: 'None',
  runtime: 0,
  geners: []};

class AddEditMovie extends React.Component<AddEditMovieProps, AddEditMovieState>   {
  state: AddEditMovieState = {
    movie: intialValueMovie
  }

  constructor(props: AddEditMovieProps) {
    super(props);

    if (props.movie) {
      this.state.movie = {...props.movie};
      this.state.movie.geners = [...props.movie.geners];
    }
  }

  inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
  }
 
  render(): JSX.Element {
    return (
      <div className={`${styles['add-edit-movie']} ${this.props.className} modal`}> 
        <div className="modal__title">EDIT MOVIE</div>
        <div className="modal__cross" onClick={this.props.onClick}></div>
        <form className={`${styles['add-edit-movie-form']} formLayout`}>
          <div className="field">
            <div className="field__title">TITLE</div> {
              this.state?.movie.id 
                ?
                  <input className="field__input" value={this.state.movie.title} 
                                                  placeholder="Title here"
                                                  onChange={(event)=>this.inputChangedHandler(event)}></input>
                :
                  <label className="field__label" placeholder="Title here">{this.state.movie.title}</label>
            }
          </div>
          <div className="field">
            <div className="field__title">RELEASE DATE</div> 
            <input className="field__input" 
                   type="date" 
                  placeholder="Selecte Date"
                  value={this.state.movie.releaseDate}
                  onChange={(event)=>this.inputChangedHandler(event)}>  
            </input>
          </div>
          <div className="field">
            <div className="field__title">MOVIE URL</div> 
            <input className="field__input" 
                   placeholder="Movie URL here" 
                   value={this.state.movie.posterPath}
                   onChange={(event)=>this.inputChangedHandler(event)}></input>
          </div>
          <div className="field">
            <div className="field__title">GENRE</div> 
            <select className="field__select" defaultValue={'DEFAULT'} onChange={(event)=>this.inputChangedHandler(event)}>
              <option value="DEFAULT" disabled>Select Genre</option>
              {/* <option value="" disabled hidden={true} selected>Select Genre</option> */}
              {
                this.state.movie.geners.map(gener => {
                  return <option key={gener} value={gener}>{gener}</option>
                })
              }
            </select>
          </div>
          <div className="field">
            <div className="field__title">OVERVIEW</div> 
            <input className="field__input" 
                   placeholder="Overview here" 
                  value={this.state.movie.overview}
                  onChange={(event)=>this.inputChangedHandler(event)}>              
            </input>
          </div>
          <div className={`${styles['add-edit-movie-form__last']} field`}>
            <div className="field__title">RUNTIME</div> 
            <input className="field__input" 
                   placeholder="Runtime here" 
                   value={this.state.movie.runtime}
                   onChange={(event)=>this.inputChangedHandler(event)}></input>
          </div>
          <div className={styles['add-edit-movie-form__buttons']}>
            <button type="reset" 
                    className={`field__button ${styles['add-edit-movie-form__reset']}`}>
                      RESET
            </button>
            <button className={`field__button ${styles['add-edit-movie-form__submit']}`}
                    onClick={this.props.onClick}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEditMovie