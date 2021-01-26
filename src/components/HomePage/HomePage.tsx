import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from './Header/Header';
import Main from '../common/Main/Main';
import Footer from '../common/Footer/Footer';

import { useComponentDidMount } from '../../services/hooks/useComponentDidMount';
import { getMoviesSelector } from '../../store/movies/movies.selectors';
import { getMoviesAction } from '../../store/movies/movies.actions';

import styles from './HomePage.module.scss';



function HomePage(): JSX.Element {
  const dispatch = useDispatch();

  const getMovies = React.useCallback(
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
    <div className={styles['home-page']}>
      <Header/> 
      <Main className={styles.stretch} movies={movies}/>
      <Footer/>
    </div>
  );

}

export default HomePage