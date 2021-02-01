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

import styles from './HomePage.module.scss';


function HomePage(): JSX.Element {
  const query = useQuery();
  const search = query.get('search');

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
        // getMovies();
      } else {
        setFilters({ search });
      }
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