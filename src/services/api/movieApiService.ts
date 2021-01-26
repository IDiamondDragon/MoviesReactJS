
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { IMovie } from '../../models/common/interfaces/IMovie';
import { IMovieResponse } from '../../models/common/interfaces/IMovieResponse';
import { IMoviesGetResponse } from '../../models/common/interfaces/IMoviesGetResponse';

import API_PATHS from '../../constants/apiPaths';
import { convertMovieServerToMovieClientFormatData } from '../helpers/convertMovieServerToMovieClientFormatData';
import { convertMovieClientToMovieServerFormatData } from '../helpers/convertMovieClientToMovieServerFormatData';
import { IFilters } from '../../models/common/interfaces/IFilters';

export class MovieApiService {
  // static getMovies(sortByField: string, filterByGenre: string): Promise<IMovie[]>  {
  //   const config: AxiosRequestConfig = { params: {sortBy: sortByField, sortOrder: 'asc', filter: filterByGenre}};
  static getMovies(filters: IFilters): Promise<IMovie[]>  {
    const config: AxiosRequestConfig = { params: filters};

    return axios.get<IMoviesGetResponse>(`${API_PATHS.movies}`, config).then( (response) => { 
      return response.data.data.map(movieData => {
        return convertMovieServerToMovieClientFormatData(movieData);
      }
    ) 
    });
  }

  static addMovie(movie: IMovie): Promise<IMovie>  {
    const serverMovieFormatData = convertMovieClientToMovieServerFormatData(movie);
    delete serverMovieFormatData.id;
    
    return axios.post<IMovieResponse>(`${API_PATHS.movies}`, serverMovieFormatData).then( (response) => { 
      return convertMovieServerToMovieClientFormatData(response.data)
    });
  }

  static updateMovie(movie: IMovie): Promise<IMovie>  {
    const serverMovieFormatData = convertMovieClientToMovieServerFormatData(movie);

    return axios.put<IMovieResponse>(`${API_PATHS.movies}`, serverMovieFormatData).then( (response) => { 
      return convertMovieServerToMovieClientFormatData(response.data)
    });
  }

  static deleteMovie(id: number | undefined): Promise<number | undefined>  {
    return axios.delete(`${API_PATHS.movies}/${id}`).then(() => id);
  }
}