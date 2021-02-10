import {createSelector, OutputParametricSelector, OutputSelector} from "reselect";
import { IMovie } from '../../models/common/interfaces/IMovie';
import { RootState } from '../store';


const _getMovies = (state: RootState) => state.movies.movies;
const _isLoading = (state: RootState) => state.movies.isLoading;

export const getMoviesSelector: OutputSelector<RootState, IMovie[], (res: IMovie[]) => IMovie[]> = 
    createSelector(_getMovies, movies => movies);

export const getMovieByIdSelector: OutputParametricSelector<RootState, number, IMovie | undefined, (res1: IMovie[], res2: number) => IMovie | undefined> =
    createSelector(
      _getMovies, 
      (_ , selectedMovieId: number) => selectedMovieId,
      (movies, selectedMovieId) => movies.find(movie => movie.id === selectedMovieId));
    
export const isLoadingSelector: OutputSelector<RootState, boolean, (res: boolean) => boolean> = 
    createSelector(_isLoading, isLoading => isLoading);