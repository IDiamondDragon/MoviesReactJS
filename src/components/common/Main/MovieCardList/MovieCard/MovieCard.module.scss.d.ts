declare namespace MovieCardModuleScssNamespace {
  export interface IMovieCardModuleScss {
    "movie-card": string;
    "movie-card__dropdown-menu": string;
    "movie-card__geners": string;
    "movie-card__image": string;
    "movie-card__release-date": string;
    "movie-card__title": string;
    "movie-card__wrapper": string;
  }
}

declare const MovieCardModuleScssModule: MovieCardModuleScssNamespace.IMovieCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MovieCardModuleScssNamespace.IMovieCardModuleScss;
};

export = MovieCardModuleScssModule;
