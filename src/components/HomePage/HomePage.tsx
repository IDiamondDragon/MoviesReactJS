import React, { useState } from "react";

import Header from './Header/Header';
import Main from '../common/Main/Main';
import Footer from '../common/Footer/Footer';

import { IMovie } from '../../models/common/interfaces/IMovie';

import { loadData } from '../../services/api/loadData';
import { useComponentDidMount } from '../../services/hooks/useComponentDidMount';

import styles from './HomePage.module.scss';


function HomePage(): JSX.Element {

  const [movies, setMovies] = useState<IMovie[]>([]);

  useComponentDidMount(() => {
    setMovies(loadData());
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