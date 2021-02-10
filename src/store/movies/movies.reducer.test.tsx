import { getMoviesAction, getMoviesSuccessAction, getMoviesFailAction, addMovieAction, addMovieSuccessAction, addMovieFailAction, updateMovieAction, updateMovieSuccessAction, updateMovieFailAction, deleteMovieAction, deleteMovieSuccessAction, deleteMovieFailAction } from './movies.actions';
import { moviesReducer, IMoviesState } from './movies.reducer';
import { intialValueMovie } from '../../services/data/initialValueMovie';

describe('moviesReducer', () => {
   const moviePaylod = intialValueMovie();
   moviePaylod.title = "First movie";
   moviePaylod.id = 1;

   const moviesPaylod = [moviePaylod, intialValueMovie()];
   moviesPaylod[1].id = 2;
   moviesPaylod[1].title = "Second movie";

   test("default", () => {
    const state: IMoviesState = moviesReducer(undefined, {type: 'none'} as any)
    expect(state.movies).toEqual([]);
    expect(state.isLoading).toEqual(false);
  })

  test("GET_MOVIES", () => {
      const state: IMoviesState = moviesReducer(undefined, getMoviesAction())
      expect(state.movies).toEqual([]);
      expect(state.isLoading).toEqual(true);
  })

  test("GET_MOVIES_SUCCESS", () => {
      const state: IMoviesState = moviesReducer(undefined, getMoviesSuccessAction(moviesPaylod))
      expect(state.movies).toEqual(moviesPaylod);
      expect(state.isLoading).toEqual(false);
  })

  test("GET_MOVIES_FAIL", () => {
      const state: IMoviesState = moviesReducer(undefined, getMoviesFailAction())
      expect(state.movies).toEqual([]);
      expect(state.isLoading).toEqual(false);
  })

  test("ADD_MOVIE", () => {
      const state: IMoviesState = moviesReducer(undefined, addMovieAction(moviePaylod))
      expect(state.movies).toEqual([]);
      expect(state.isLoading).toEqual(true);
  })

  test("ADD_MOVIE_SUCCESS", () => {
      const state: IMoviesState = moviesReducer(undefined, addMovieSuccessAction(moviePaylod))
      expect(state.movies).toEqual([]);
      expect(state.isLoading).toEqual(false);
  })
  
  test("ADD_MOVIE_FAIL", () => {
      const state: IMoviesState = moviesReducer(undefined, addMovieFailAction())
      expect(state.movies).toEqual([]);
      expect(state.isLoading).toEqual(false);
  })
    
  test("UPDATE_MOVIE", () => {
      const state: IMoviesState = moviesReducer(undefined, updateMovieAction(moviePaylod))
      expect(state.movies).toEqual([]);
      expect(state.isLoading).toEqual(true);
  })
    
  test("UPDATE_MOVIE_SUCCESS", () => {
      const oldMovie = intialValueMovie();
      oldMovie.id = 1;
      oldMovie.title = "Third movie";
      const stateValue = {movies: [oldMovie], isLoading: false};

      const state: IMoviesState = moviesReducer(stateValue, updateMovieSuccessAction(moviePaylod))
      expect(state.movies).toEqual([moviePaylod]);
      expect(state.isLoading).toEqual(false);
  })

  test("UPDATE_MOVIE_FAIL", () => {
      const state: IMoviesState = moviesReducer(undefined, updateMovieFailAction())
      expect(state.movies).toEqual([]);
      expect(state.isLoading).toEqual(false);
  })
  
  test("DELETE_MOVIE", () => {
      const state: IMoviesState = moviesReducer(undefined, deleteMovieAction(1))
      expect(state.movies).toEqual([]);
      expect(state.isLoading).toEqual(true);
  })
  
  test("DELETE_MOVIE_SUCCESS", () => {
      const oldMovie = intialValueMovie();
      oldMovie.id = 1;
      oldMovie.title = "Third movie";
      const stateValue = {movies: [oldMovie], isLoading: false};

      const state: IMoviesState = moviesReducer(stateValue, deleteMovieSuccessAction(1))
      expect(state.movies).toEqual([]);
      expect(state.isLoading).toEqual(false);
  })

  test("DELETE_MOVIE_FAIL", () => {
      const state: IMoviesState = moviesReducer(undefined, deleteMovieFailAction())
      expect(state.movies).toEqual([]);
      expect(state.isLoading).toEqual(false);
  })
});
