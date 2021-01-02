import { IMovie } from '../../models/common/interfaces/IMovie'

import movies from '../../assets/data/movies.json'

export function loadData(): IMovie[] {
  return movies.map(movieData => {
      const movie: IMovie = {
        id: movieData.id,
        title: movieData.title,
        tagline: movieData.tagline,
        voteAverage: movieData.vote_average,
        voteCount: movieData.vote_count,
        posterPath: movieData.poster_path,
        overview: movieData.overview,
        releaseDate: movieData.release_date,
        budget: movieData.budget,
        revenue: movieData.revenue,
        runtime: movieData.runtime,
        genres: movieData.genres
      }

      return movie;
    }
  )
}