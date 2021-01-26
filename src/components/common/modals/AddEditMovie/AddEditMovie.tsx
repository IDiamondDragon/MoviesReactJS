import React from "react";
import { Form, FormikProps, Formik } from 'formik';
import InputField from '../../FormComponents/InputField';

import { IMovie } from '../../../../models/common/interfaces/IMovie';
import { MovieValidationSchema } from './MovieValidationSchema';

import { intialValueMovie } from '../../../../services/data/initialValueMovie';

import styles from './AddEditMovie.module.scss';
import SelectField from '../../FormComponents/SelectField';

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
  const getIntialValue = (): IMovie => {
    const movie = {...intialValueMovie(), ...props.movie, genres: [...props.movie.genres]};

    if (!movie.runtime) {
      movie.runtime = 0;
    }

    return movie;
  }

  return (
    <div className={`${styles['add-edit-movie']} ${props.className} modal`}> 
      <div className="modal__title">{ props.movie.id ? 'EDIT MOVIE' : 'ADD MOVIE'}</div>
      <div className="modal__cross" onClick={props.onClickCloseButton}></div>
      <Formik
        enableReinitialize={true}
        initialValues={getIntialValue()}
        validationSchema={MovieValidationSchema}
        onSubmit={(values, actions) => {
          const movie = values;

          if (!movie.tagline) {
            movie.tagline = movie.title;
          }
      
          movie.runtime = Number(movie.runtime);
      
          props.onSubmit(movie);
          actions.setSubmitting(false);
        }}
      >
      {(formik: FormikProps<IMovie>) => (
        <Form className={`${styles['add-edit-movie-form']} formLayout`} onSubmit={formik.handleSubmit}>
          { 
            formik.values.id != 0 ?
              <div className="field">
                <div className="field__title">MOVIE ID</div> {
                      <label className="field__label" >{formik.values.id}</label>
                }
              </div>
              : null
          }
          <InputField   
              type="text"
              placeholder="Title here" 
              name="title"
              title="TITLE" />        
          <InputField   
              type="date"
              placeholder="Selecte Date" 
              name="releaseDate"
              title="RELEASE DATE" />   
          <InputField   
              type="text"
              placeholder="Movie URL here" 
              name="posterPath"
              title="MOVIE URL" />   
          <SelectField
              placeholder="Overview here" 
              name="genres"
              title="GENRE"
          />
          <InputField   
              type="text"
              placeholder="Overview here" 
              name="overview"
              title="OVERVIEW" />   
          <InputField   
              type="text"
              placeholder="Runtime here" 
              name="runtime"
              title="RUNTIME" />  
          <div className={styles['add-edit-movie-form__buttons']}>
            <button type="button"
                    className={`field__button ${styles['add-edit-movie-form__reset']}`}
                    onClick={formik.handleReset}>
                      RESET
            </button>
            <button type="submit"
                    className={`field__button ${styles['add-edit-movie-form__submit']}`}
                    disabled={formik.isSubmitting || !formik.isValid}>
              SUBMIT
            </button>
          </div>
        </Form>
      )}
    </Formik>
    </div>
  );
}

export default AddEditMovie