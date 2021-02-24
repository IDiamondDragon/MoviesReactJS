import React from "react";
import { Redirect, Route, Switch} from "react-router-dom";

import ErrorBoundary from './common/ErrorBoundary/ErrorBoundary';
import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import NoFoundPage from './NoFoundPage/NotFoundPage';

import styles from './App.module.scss';
import { withSuspense } from '../hoc/routing/withSuspense';


interface AppProps {
  lazyLoaded: boolean;
}

export class App extends React.Component<AppProps, unknown>  {
  constructor(public props: AppProps) {
    super(props);
  }

  render(): JSX.Element {
    let HomePageWithSuspense;
    let MovieDetailsPageWithSuspense;
    let NoFoundPageWithSuspense;

    if (this.props.lazyLoaded) {
      HomePageWithSuspense = withSuspense(React.lazy(() => import('./HomePage/HomePage')));
      MovieDetailsPageWithSuspense = withSuspense(React.lazy(() => import('./MovieDetailsPage/MovieDetailsPage')));
      NoFoundPageWithSuspense = withSuspense(React.lazy(() => import('./NoFoundPage/NotFoundPage')));
    } else {
      HomePageWithSuspense = HomePage;
      MovieDetailsPageWithSuspense = MovieDetailsPage;
      NoFoundPageWithSuspense = NoFoundPage;
    }


    return (
      <div className={styles.app}>
        <React.StrictMode>
          <ErrorBoundary>
            
              <Switch>

                  <Route exact path='/search'>
                      <HomePageWithSuspense />
                  </Route>

                  <Route exact path='/film/:id'>
                      <MovieDetailsPageWithSuspense />
                  </Route>

                  <Route exact path='/' 
                          render={() => <Redirect to={"/search"}/>}/>

                  <Route path='*'>
                      <NoFoundPageWithSuspense />
                  </Route>

              </Switch>
          </ErrorBoundary>
        </React.StrictMode>
      </div>
    )
  }
}

export default App