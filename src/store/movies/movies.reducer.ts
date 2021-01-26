import { IMovie } from '../../models/common/interfaces/IMovie';
import { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL, ADD_MOVIE, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAIL,
  UPDATE_MOVIE, UPDATE_MOVIE_SUCCESS, UPDATE_MOVIE_FAIL, DELETE_MOVIE, 
  DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAIL, MoviesActionTypes} from './movies.types'

export interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
}

export const INITIAL_STATE: IMoviesState = {
  movies: [],
  isLoading: false
}

export function moviesReducer(
  state = INITIAL_STATE,
  action: MoviesActionTypes
): IMoviesState {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        isLoading: true
      }
    case GET_MOVIES_SUCCESS:
      return {
        movies: [...action.payload],
        isLoading: false
      }
    case GET_MOVIES_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case ADD_MOVIE:
      return {
        ...state,
        isLoading: true
      }
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case ADD_MOVIE_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case UPDATE_MOVIE:
      return {
        ...state,
        isLoading: true
      }
    case UPDATE_MOVIE_SUCCESS:
      return {
        movies: state.movies.map((movie) => {
          if (movie.id === action.payload.id)
            return action.payload;
          return movie;
        }),
        isLoading: false
      }
    case UPDATE_MOVIE_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case DELETE_MOVIE:
      return {
        ...state,
        isLoading: true
      }
    case DELETE_MOVIE_SUCCESS:
      return {
        movies: state.movies.filter((movie) => movie.id !== action.payload),
        isLoading: false
      }
    case DELETE_MOVIE_FAIL:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}