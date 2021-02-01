import React, { useCallback } from "react";

import Header from './Header/Header';
import Main from '../common/Main/Main';
import Footer from '../common/Footer/Footer';

import { useComponentDidMount } from '../../services/hooks/useComponentDidMount';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesAction } from '../../store/movies/movies.actions';
import { getMoviesSelector } from '../../store/movies/movies.selectors';

import styles from './MovieDetailsPage.module.scss';



function MovieDetailsPage(): JSX.Element {
  const dispatch = useDispatch();

  const getMovies = useCallback(
    ()=> dispatch(getMoviesAction()),
    [dispatch]
  );

  const movies = useSelector(getMoviesSelector);

  useComponentDidMount(() => {
    if (!movies.length) {
      getMovies();
    }
  })

  return (
    <div className={styles['movie-details-page']}>
      <Header/>
      <Main className={styles.stretch} movies={movies}/>
      <Footer/>
    </div>
  );
}

export default MovieDetailsPage