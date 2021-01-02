import { IMovie } from '../../models/common/interfaces/Movie'

import movies from '../../assets/data/movies.json'

export function loadData(): IMovie[] {
  return movies.map(movieData => {
      const movie: IMovie = {
        id: movieData.id,
        title: movieData.title,
        posterPath: movieData.poster_path,
        releaseDate: movieData.release_date,
        overview: movieData.overview,
        runtime: movieData.runtime,
        geners: movieData.genres
      }

      return movie;
    }
  )
}