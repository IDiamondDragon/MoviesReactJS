import React from "react";
import Banner from '../../common/Banner/Baner';

import styles from './Header.module.scss';



export function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <Banner className={styles.header__baner}/>
    </div>
  );
}

export default Header