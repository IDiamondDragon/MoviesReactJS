import React from "react";
import Banner from '../../common/Banner/Baner';
import AddMovieButton from './AddMovieButton/AddMovieButton';
import SearchPanel from './SearchPanel/SearchPanel';

import styles from './Header.module.scss';


export function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <Banner className={styles.header__baner}/>
      <AddMovieButton className={styles.header__button}/>
      <SearchPanel className={styles.header__panel}/>
    </div>
  );
}

export default Header