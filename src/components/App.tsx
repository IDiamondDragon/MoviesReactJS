import React, { Component } from "react";

import ErrorBoundary from './common/ErrorBoundary/ErrorBoundary';
import HeaderPageComponent from './HomePage/Header/Header';
import Main from './HomePage/Main/Main';
import Footer from './common/Footer/Footer';

import styles from './App.module.scss';

export class App extends Component {
  render(): JSX.Element {
    return (
      <div className={styles.app}>
        <ErrorBoundary>
          <HeaderPageComponent/>
          <Main className={styles.stretch}/>
          <Footer/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default App