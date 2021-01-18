import { IMovie } from '../../models/common/interfaces/IMovie'


export function intialValueMovie(): IMovie {
  return  {
    id: 0,
    title: 'None',
    tagline: 'None',
    voteAverage: 0,
    voteCount: 0,  
    posterPath: '',
    releaseDate: 'None',
    overview: 'None',
    budget: 0,
    revenue: 0,
    runtime: 0,
    genres: []
  };
}