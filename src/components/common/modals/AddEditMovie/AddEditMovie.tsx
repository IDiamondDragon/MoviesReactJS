import React, { useCallback } from "react";
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

export function AddEditMovie(props: AddEditMovieProps): JSX.Element    {
  const getIntialValue = useCallback(
    
    (): IMovie => {
      const movie = {...intialValueMovie(), ...props.movie, genres: [...props.movie.genres]};
  
      if (!movie.runtime) {
        movie.runtime = 0;
      }
  
      return movie;
    },
    [props.movie]
  );

  const submit = useCallback(

    (values, actions): void => {
      const movie = values;

      if (!movie.tagline) {
        movie.tagline = movie.title;
      }
  
      movie.runtime = Number(movie.runtime);
  
      props.onSubmit(movie);
      actions.setSubmitting(false);
    },
    [props]
  );

  return (
    <div className={`${styles['add-edit-movie']} ${props.className} modal`}> 
      <div className="modal__title">{ props.movie.id ? 'EDIT MOVIE' : 'ADD MOVIE'}</div>
      <div data-testid="close" 
           className="modal__cross" 
           onClick={props.onClickCloseButton}></div>
      <Formik
        enableReinitialize
        initialValues={getIntialValue()}
        validationSchema={MovieValidationSchema}
        onSubmit={submit}
      >
      {(formik: FormikProps<IMovie>) => (
        <Form data-testid="add-edit-movie-form"
              className={`${styles['add-edit-movie-form']} formLayout`} 
              onSubmit={formik.handleSubmit}>
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
              data-testid="title"
              type="text"
              placeholder="Title here" 
              name="title"
              title="TITLE" 
          />        
          <InputField   
              data-testid="releaseDate"
              type="date"
              placeholder="Selecte Date" 
              name="releaseDate"
              title="RELEASE DATE" 
          />   
          <InputField   
              data-testid="posterPath"
              type="text"
              placeholder="Movie URL here" 
              name="posterPath"
              title="MOVIE URL" 
          />   
          <SelectField
              data-testid="genres"
              placeholder="Overview here" 
              name="genres"
              title="GENRE"
          />
          <InputField   
              data-testid="overview"
              type="text"
              placeholder="Overview here" 
              name="overview"
              title="OVERVIEW" 
          />   
          <InputField  
              data-testid="runtime" 
              type="text"
              placeholder="Runtime here" 
              name="runtime"
              title="RUNTIME" 
          />  
          <div className={styles['add-edit-movie-form__buttons']}>
            <button type="button"
                    className={`field__button button--without-background ${styles['add-edit-movie-form__reset']}`}
                    onClick={formik.handleReset}>
                      RESET
            </button>
            <button data-testid="submit" 
                    type="submit"
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

export default AddEditMovie;