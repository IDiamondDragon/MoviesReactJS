
export interface IMovie {
  id: number;
  posterPath: string | undefined;
  title: string;
  releaseDate: string;
  overview: string;
  runtime: number;
  geners: string[]; 
}