import React from "react";
import Banner from '../../common/Banner/Baner';

import styles from './Footer.module.scss';



export function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <Banner className={styles.footer__baner}/>
    </div>
  );
}

export default Footer