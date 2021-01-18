
export interface IMovie {
  id: number;
  title: string;
  tagline: string;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  posterPath: string | undefined;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[]; 
  runtime: number;
}