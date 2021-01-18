import {createSelector, OutputSelector} from "reselect";
import { IMovie } from '../../models/common/interfaces/IMovie';
import { RootState } from '../store';


const _getMovies = (state: RootState) => state.movies.movies;
const _isLoading = (state: RootState) => state.movies.isLoading;

export const getMoviesSelector: OutputSelector<RootState, IMovie[], (res: IMovie[]) => IMovie[]> = 
    createSelector(_getMovies, movies => movies);

export const isLoadingSelector: OutputSelector<RootState, boolean, (res: boolean) => boolean> = 
    createSelector(_isLoading, isLoading => isLoading);