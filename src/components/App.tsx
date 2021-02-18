import React from "react";
import { Redirect, Route, Switch} from "react-router-dom";

import ErrorBoundary from './common/ErrorBoundary/ErrorBoundary';
import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import NoFoundPage from './NoFoundPage/NotFoundPage';

import styles from './App.module.scss';
import { withSuspense } from '../hoc/routing/withSuspense';


interface StateProps {
  lazyLoaded: boolean;
}

export class App extends React.Component<StateProps, unknown>  {
  constructor(public props: StateProps) {
    super(props);
  }

  render(): JSX.Element {
    let HomePageSuspense;
    let MovieDetailsPageSuspense;
    let NoFoundPageSuspense;

    if (this.props.lazyLoaded) {
      HomePageSuspense = withSuspense(React.lazy(() => import('./HomePage/HomePage')));
      MovieDetailsPageSuspense = withSuspense(React.lazy(() => import('./MovieDetailsPage/MovieDetailsPage')));
      NoFoundPageSuspense = withSuspense(React.lazy(() => import('./NoFoundPage/NotFoundPage')));
    } else {
      HomePageSuspense = HomePage;
      MovieDetailsPageSuspense = MovieDetailsPage;
      NoFoundPageSuspense = NoFoundPage;
    }


    return (
      <div className={styles.app}>
        <React.StrictMode>
          <ErrorBoundary>
            
              <Switch>

                  <Route exact path='/search'>
                      <HomePageSuspense/>
                  </Route>

                  <Route exact path='/film/:id'>
                      <MovieDetailsPageSuspense/>
                  </Route>

                  <Route exact path='/' 
                          render={() => <Redirect to={"/search"}/>}/>

                  <Route path='*'>
                      <NoFoundPageSuspense/>
                  </Route>

              </Switch>
          </ErrorBoundary>
        </React.StrictMode>
      </div>
    )
  }
}

export default App