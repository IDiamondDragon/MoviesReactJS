import { IMovieResponse } from './IMovieResponse';

export interface IMoviesGetResponse {
  data: IMovieResponse[]
  limit: number
  offset: number
  totalAmount: number
  
}