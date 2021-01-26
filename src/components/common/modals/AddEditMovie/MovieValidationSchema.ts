import * as Yup from 'yup';

export const MovieValidationSchema = Yup.object({
  title: Yup.string().required(),
  releaseDate: Yup.date().required(), 
  posterPath: Yup.string().required().matches(/(.*?)\.(jpeg|jpg|png|JPEG|GIF|gif|GIF)$/, {
    message:'Inccorect format. Example https://image.tmdb.org/image.jpg',
    excludeEmptyString: true
  }),
  genres: Yup.array().min(1).required(),
  overview: Yup.string().required(),
  runtime: Yup.number().integer().min(0).required(),
}).defined();