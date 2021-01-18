import React from "react";
import Banner from '../../common/Banner/Baner';
import MovieDetaislPanel from './MovieDetailsPanel/MovieDetailsPanel';
import SearchIcon from './SearchIcon/SearchIcon';

import { IMovie } from '../../../models/common/interfaces/IMovie';

import styles from './Header.module.scss';


const movie: IMovie =   {
  id: 337167,
  title: "Fifty Shades Freed",
  tagline: "Don't miss the climax",
  voteAverage: 6.1,
  voteCount: 1195,
  releaseDate: "2018-02-07",
  posterPath: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
  overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
  budget: 55000000,
  revenue: 136906000,
  genres: [
      "Drama",
      "Romance"
  ],
  runtime: 106
}


export function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <Banner className={styles.header__baner}/>
      <SearchIcon className={styles['header__search-icon']}/>
      <MovieDetaislPanel movie={movie} className={styles.header__panel}/>
    </div>
  );
}

export default Header