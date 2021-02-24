import React from "react";
import Baner from '../../common/Banner/Baner';

import styles from './Footer.module.scss';



export function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <Baner className={styles.footer__baner} />
    </div>
  );
}

export default React.memo(Footer);