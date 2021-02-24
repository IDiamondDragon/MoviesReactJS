import React from "react";
import Baner from '../../common/Banner/Baner';
import AddMovieButton from './AddMovieButton/AddMovieButton';
import SearchPanel from './SearchPanel/SearchPanel';

import styles from './Header.module.scss';


export function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <Baner className={styles.header__baner} />
      <AddMovieButton className={styles.header__button} />
      <SearchPanel className={styles.header__panel} />
    </div>
  );
}

export default React.memo(Header)