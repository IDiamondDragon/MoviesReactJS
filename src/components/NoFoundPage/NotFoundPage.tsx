import React from "react";

import Header from './Header/Header';
import Footer from '../common/Footer/Footer';

import { useRedirectToSearchPage } from '../../services/hooks/useRedirectToSearchPage';

import styles from './NotFoundPage.module.scss';



function NoFoundPage(): JSX.Element {
  const redirectToSearchPage = useRedirectToSearchPage();

  return (
    <div className={styles['not-found-page']}>
      <Header />
      <div className={styles['content']}>
        <div className={styles['message']}>Page Not Found</div>
        <div className={styles['image404']} />
        <button type="button"
                    className={`button button--without-background ${styles['go-back-to-home-button']}`}
                    onClick={redirectToSearchPage}>
                      GO BACK TO HOME
            </button>
      </div>
      <Footer />
    </div>
  );
}

export default NoFoundPage