
export interface IMovieResponse {
  id?: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string | undefined;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[]; 
  runtime: number;
}