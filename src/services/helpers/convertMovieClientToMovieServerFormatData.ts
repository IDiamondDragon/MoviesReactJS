import { IMovie } from '../../models/common/interfaces/IMovie';
import { IMovieResponse } from '../../models/common/interfaces/IMovieResponse';

export function convertMovieClientToMovieServerFormatData(movie: IMovie): IMovieResponse {
  return {
    id: movie.id,
    title: movie.title,
    tagline: movie.tagline,
    vote_average: movie.voteAverage,
    vote_count: movie.voteCount,
    poster_path: movie.posterPath,
    overview: movie.overview,
    release_date: movie.releaseDate,
    budget: movie.budget,
    revenue: movie.revenue,
    runtime: movie.runtime,
    genres: movie.genres
  }
}