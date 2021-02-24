import { applyMiddleware, CombinedState, combineReducers, compose, createStore, Store } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";


import { filtersReducer, IFiltersState } from './filters/filters.reducer';
import { FiltersActionTypes } from './filters/filters.types';
import { IMoviesState, moviesReducer } from './movies/movies.reducer';
import { MoviesActionTypes } from './movies/movies.types';
import { setFiltersEpic } from './filters/filters.epics';
import { getMoviesEpic, addMovieEpic, updateMovieEpic, deleteMovieEpic } from './movies/movies.epics';


// export type RootStateType = IMoviesState & IFiltersState

export type RootState = {
  movies: IMoviesState;
  filters: IFiltersState;
};

const reducers = combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
});

const epics = combineEpics(setFiltersEpic, getMoviesEpic, addMovieEpic, updateMovieEpic, deleteMovieEpic);

export type ActionsType = FiltersActionTypes | MoviesActionTypes;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/ban-types
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const epicMiddleware = createEpicMiddleware<
  ActionsType,
  ActionsType,
  RootState
>();


// Create store
function configureStore(isServer: boolean, initialState?: RootState): Store<CombinedState<{
  movies: IMoviesState;
  filters: IFiltersState;
}>, ActionsType> & {
  dispatch: unknown;
} {
  let composeEnhancers;

  if (!isServer) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  } else {
    composeEnhancers = compose;
  }
  
  // configure middlewares
  const middlewares = [epicMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  // create store
  const store = createStore(reducers, initialState, enhancer);

  epicMiddleware.run(epics);

  return store;
}



export { configureStore };
