import { applyMiddleware, combineReducers, compose, createStore } from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [epicMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore();

epicMiddleware.run(epics);

export { store };
