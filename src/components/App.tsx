import React, { Component } from "react";

import ErrorBoundary from './common/ErrorBoundary/ErrorBoundary';
// import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';

import styles from './App.module.scss';



export class App extends Component {
  render(): JSX.Element {
    return (
      <div className={styles.app}>
        <React.StrictMode>
          <ErrorBoundary>
            <MovieDetailsPage/>
            {/* <HomePage/> */}
          </ErrorBoundary>
        </React.StrictMode>
      </div>
    )
  }
}

export default App