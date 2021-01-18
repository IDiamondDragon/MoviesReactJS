import { IMovie } from '../../models/common/interfaces/IMovie';
import { IMovieResponse } from '../../models/common/interfaces/IMovieResponse';

export function convertMovieServerToMovieClientFormatData(movie: IMovieResponse): IMovie {
  return {
    id: movie.id,
    title: movie.title,
    tagline: movie.tagline,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
    posterPath: movie.poster_path,
    overview: movie.overview,
    releaseDate: movie.release_date,
    budget: movie.budget,
    revenue: movie.revenue,
    runtime: movie.runtime,
    genres: movie.genres
  }
}