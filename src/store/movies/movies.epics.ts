/* eslint-disable @typescript-eslint/no-unused-vars */
import { Epic, ofType, StateObservable } from "redux-observable";
import { map, switchMap, filter, catchError, concatMap } from 'rxjs/operators';
import { from, Observable, of } from "rxjs";
import { isOfType } from 'typesafe-actions';

import { ActionsType, RootState } from '../store';
import { GET_MOVIES, ADD_MOVIE, UPDATE_MOVIE, DELETE_MOVIE, GetMoviesAction } from './movies.types';
import { MovieApiService } from '../../services/api/movieApiService';
import { getMoviesSuccessAction, getMoviesFailAction, addMovieSuccessAction, addMovieFailAction, updateMovieSuccessAction, updateMovieFailAction, deleteMovieSuccessAction, deleteMovieFailAction, getMoviesAction } from './movies.actions';

export const getMoviesEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  unknown
> = (action$, store) =>
  action$.pipe(
    filter(isOfType(GET_MOVIES)),
    switchMap((action) =>
      from(MovieApiService.getMovies(getFilters(action, store))).pipe(
        map(getMoviesSuccessAction),
        catchError((error) => of(getMoviesFailAction()))
      )
    )
  );

function getFilters(action: GetMoviesAction, store: StateObservable<RootState>) {
  return action.payload ? action.payload : store.value.filters.filters;
}


export const addMovieEpic: Epic<
    ActionsType,
    ActionsType,
    RootState,
    unknown
  > = (action$, store) =>
    action$.pipe(
      filter(isOfType(ADD_MOVIE)),
      switchMap((action) =>
        from(MovieApiService.addMovie(action.payload)).pipe(
          concatMap((movie) => [addMovieSuccessAction(movie), getMoviesAction()]),
          catchError((error) => of(addMovieFailAction()))
        )
      )
    );

export const updateMovieEpic: Epic<
    ActionsType,
    ActionsType,
    RootState,
    unknown
    > = (action$, store) =>
    action$.pipe(
      filter(isOfType(UPDATE_MOVIE)),
      switchMap((action) =>
        from(MovieApiService.updateMovie(action.payload)).pipe(
          map(updateMovieSuccessAction),
          catchError((error) => of(updateMovieFailAction()))
        )
      )
    );

  export const deleteMovieEpic: Epic<
    ActionsType,
    ActionsType,
    RootState,
    unknown
    > = (action$, store) =>
    action$.pipe(
      filter(isOfType(DELETE_MOVIE)),
      switchMap((action) =>
        from(MovieApiService.deleteMovie(action.payload)).pipe(
          map(deleteMovieSuccessAction),
          catchError((error) => of(deleteMovieFailAction()))
        )
      )
    );


export default [getMoviesEpic, addMovieEpic, updateMovieEpic, deleteMovieEpic];