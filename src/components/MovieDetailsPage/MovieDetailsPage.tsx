import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from './Header/Header';
import Main from '../common/Main/Main';
import Footer from '../common/Footer/Footer';

import { useQuery } from '../../services/hooks/useQuery';
import { useComponentDidMount } from '../../services/hooks/useComponentDidMount';

import { IFilters } from '../../models/common/interfaces/IFilters';

import { getMoviesSelector } from '../../store/movies/movies.selectors';
import { getMoviesAction } from '../../store/movies/movies.actions';
import { setFiltersAction } from '../../store/filters/filters.actions';

import styles from './MovieDetailsPage.module.scss';


function MovieDetailsPage(): JSX.Element {
  const query = useQuery();
  const search = decodeURI(query.get('search') as string);

  const dispatch = useDispatch();

  const setFilters = useCallback(
    (filters: IFilters)=> dispatch(setFiltersAction(filters)),
    [dispatch]
  );

  const getMovies = useCallback(
    ()=> dispatch(getMoviesAction()),
    [dispatch]
  );

  const movies = useSelector(getMoviesSelector);

  useComponentDidMount(() => {
    if (!movies.length) {
      if (!search) {
        // getMovies();// wont remove
      } else {
        setFilters({ search });
      }
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