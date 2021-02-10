import React, { Component, Suspense } from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import ErrorBoundary from './common/ErrorBoundary/ErrorBoundary';


import styles from './App.module.scss';


const HomePage = React.lazy(() => import('./HomePage/HomePage'));
const MovieDetailsPage = React.lazy(() => import('./MovieDetailsPage/MovieDetailsPage'));
const NoFoundPage = React.lazy(() => import('./NoFoundPage/NotFoundPage'));

export class App extends Component {
  render(): JSX.Element {
    return (
      <div className={styles.app}>
        <React.StrictMode>
          <ErrorBoundary>
            <BrowserRouter>
              <Switch>

                  <Route exact path='/search'>
                    <Suspense fallback={<div>loading...</div>} >
                      <HomePage/>
                    </Suspense>
                  </Route>

                  <Route exact path='/film/:id'>
                    <Suspense fallback={<div>loading...</div>} >
                      <MovieDetailsPage/>
                    </Suspense>
                  </Route>

                  <Route exact path='/' 
                          render={() => <Redirect to={"/search"}/>}/>

                  <Route path='*'>
                    <Suspense fallback={<div>loading...</div>} >
                      <NoFoundPage/>
                    </Suspense>
                  </Route>

              </Switch>
            </BrowserRouter>
          </ErrorBoundary>
        </React.StrictMode>
      </div>
    )
  }
}

export default App