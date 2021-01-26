import { IMovie } from '../../models/common/interfaces/IMovie';
import { IFilters } from '../../models/common/interfaces/IFilters';
import { Action } from 'redux';

export const GET_MOVIES = '[MOVIES] GET_MOVIES'
export const GET_MOVIES_SUCCESS = '[MOVIES] GET_MOVIES_SUCCESS'
export const GET_MOVIES_FAIL = '[MOVIES] GET_MOVIES_FAIL'

export const ADD_MOVIE = '[MOVIES] ADD_MOVIE'
export const ADD_MOVIE_SUCCESS = '[MOVIES] ADD_MOVIE_SUCCESS'
export const ADD_MOVIE_FAIL = '[MOVIES] ADD_MOVIE_FAIL'

export const UPDATE_MOVIE = '[MOVIES] UPDATE_MOVIE'
export const UPDATE_MOVIE_SUCCESS = '[MOVIES] UPDATE_MOVIE_SUCCESS'
export const UPDATE_MOVIE_FAIL = '[MOVIES] UPDATE_MOVIE_FAIL'

export const DELETE_MOVIE = '[MOVIES] DELETE_MOVIE'
export const DELETE_MOVIE_SUCCESS = '[MOVIES] DELETE_MOVIE_SUCCESS'
export const DELETE_MOVIE_FAIL = '[MOVIES] DELETE_MOVIE_FAIL'

export interface GetMoviesAction extends Action {
  type: typeof GET_MOVIES,
  payload: IFilters | undefined
}

interface GetMoviesSuccessAction extends Action  {
  type: typeof GET_MOVIES_SUCCESS
  payload: IMovie[]
}

interface GetMoviesFailAction extends Action  {
  type: typeof GET_MOVIES_FAIL
}

interface AddMovieAction extends Action  {
  type: typeof ADD_MOVIE
  payload: IMovie
}

interface AddMovieSuccessAction extends Action  {
  type: typeof ADD_MOVIE_SUCCESS
  payload: IMovie
}

interface AddMovieFailAction extends Action  {
  type: typeof ADD_MOVIE_FAIL
}

interface UpdateMovieAction extends Action  {
  type: typeof UPDATE_MOVIE
  payload: IMovie
}

interface UpdateMovieSuccessAction extends Action  {
  type: typeof UPDATE_MOVIE_SUCCESS
  payload: IMovie
}

interface UpdateMovieFailAction extends Action  {
  type: typeof UPDATE_MOVIE_FAIL
}


interface DeleteMovieAction extends Action  {
  type: typeof DELETE_MOVIE
  payload: number | undefined
}

interface DeleteMovieSuccessAction extends Action  {
  type: typeof DELETE_MOVIE_SUCCESS
  payload: number | undefined
}

interface DeleteMovieFailAction extends Action  {
  type: typeof DELETE_MOVIE_FAIL
}

export type MoviesActionTypes = GetMoviesAction | GetMoviesSuccessAction | GetMoviesFailAction 
  | AddMovieAction | AddMovieSuccessAction | AddMovieFailAction 
  | UpdateMovieAction | UpdateMovieSuccessAction | UpdateMovieFailAction
  | DeleteMovieAction | DeleteMovieSuccessAction | DeleteMovieFailAction;