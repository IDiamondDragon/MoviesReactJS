import { IMovie } from '../../models/common/interfaces/IMovie';
import { IFilters } from '../../models/common/interfaces/IFilters';
import { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL, ADD_MOVIE, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAIL,
  UPDATE_MOVIE, UPDATE_MOVIE_SUCCESS, UPDATE_MOVIE_FAIL, DELETE_MOVIE, 
  DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAIL, MoviesActionTypes} from './movies.types'


export function getMoviesAction(filters?: IFilters): MoviesActionTypes {
  return {
    type: GET_MOVIES,
    payload: filters
  }
}

export function getMoviesSuccessAction(movies: IMovie[]): MoviesActionTypes {
  return {
    type: GET_MOVIES_SUCCESS,
    payload: movies
  }
}

export function getMoviesFailAction(): MoviesActionTypes {
  return {
    type: GET_MOVIES_FAIL
  }
}

export function addMovieAction(movie: IMovie): MoviesActionTypes {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

export function addMovieSuccessAction(movie: IMovie): MoviesActionTypes {
  return {
    type: ADD_MOVIE_SUCCESS,
    payload: movie
  }
}

export function addMovieFailAction(): MoviesActionTypes {
  return {
    type: ADD_MOVIE_FAIL
  }
}

export function updateMovieAction(movie: IMovie): MoviesActionTypes {
  return {
    type: UPDATE_MOVIE,
    payload: movie
  }
}

export function updateMovieSuccessAction(movie: IMovie): MoviesActionTypes {
  return {
    type: UPDATE_MOVIE_SUCCESS,
    payload: movie
  }
}

export function updateMovieFailAction(): MoviesActionTypes {
  return {
    type: UPDATE_MOVIE_FAIL
  }
}

export function deleteMovieAction(id: number | undefined): MoviesActionTypes {
  return {
    type: DELETE_MOVIE,
    payload: id
  }
}

export function deleteMovieSuccessAction(id: number | undefined): MoviesActionTypes {
  return {
    type: DELETE_MOVIE_SUCCESS,
    payload: id
  }
}

export function deleteMovieFailAction(): MoviesActionTypes {
  return {
    type: DELETE_MOVIE_FAIL
  }
}