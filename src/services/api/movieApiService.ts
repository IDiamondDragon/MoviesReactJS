
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { IMovie } from '../../models/common/interfaces/IMovie';
import { IMovieResponse } from '../../models/common/interfaces/IMovieResponse';
import { IMoviesGetResponse } from '../../models/common/interfaces/IMoviesGetResponse';

import API_PATHS from '../../constants/apiPaths';
import { convertMovieServerToMovieClientFormatData } from '../helpers/convertMovieServerToMovieClientFormatData';
import { convertMovieClientToMovieServerFormatData } from '../helpers/convertMovieClientToMovieServerFormatData';
import { IFilters } from '../../models/common/interfaces/IFilters';

export class MovieApiService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static pendingRequests:  Promise<any>[] = [];
  
  
  static getMovies(filters: IFilters): Promise<IMovie[]>  {
    const config: AxiosRequestConfig = { params: filters};

    const request = axios.get<IMoviesGetResponse>(`${API_PATHS.movies}`, config).then( (response) => { 
      return response.data.data.map(movieData => {
        return convertMovieServerToMovieClientFormatData(movieData);
      }
    ) 
    });

    this.pendingRequests.push(request);

    return request;
  }

  static addMovie(movie: IMovie): Promise<IMovie>  {
    const serverMovieFormatData = convertMovieClientToMovieServerFormatData(movie);
    delete serverMovieFormatData.id;
    
    const request = axios.post<IMovieResponse>(`${API_PATHS.movies}`, serverMovieFormatData).then( (response) => { 
      return convertMovieServerToMovieClientFormatData(response.data)
    });

    this.pendingRequests.push(request);

    return request;
  }

  static updateMovie(movie: IMovie): Promise<IMovie>  {
    const serverMovieFormatData = convertMovieClientToMovieServerFormatData(movie);

    const request = axios.put<IMovieResponse>(`${API_PATHS.movies}`, serverMovieFormatData).then( (response) => { 
      return convertMovieServerToMovieClientFormatData(response.data)
    }); 
    
    this.pendingRequests.push(request);

    return request;
  }

  static deleteMovie(id: number | undefined): Promise<number | undefined>  {

    const request = axios.delete(`${API_PATHS.movies}/${id}`).then(() => id);
    
    this.pendingRequests.push(request);

    return request;
  }
}
