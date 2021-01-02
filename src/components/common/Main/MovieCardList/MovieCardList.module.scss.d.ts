declare namespace MovieCardListModuleScssNamespace {
  export interface IMovieCardListModuleScss {
    "movie-card-list": string;
    "right-margin": string;
  }
}

declare const MovieCardListModuleScssModule: MovieCardListModuleScssNamespace.IMovieCardListModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MovieCardListModuleScssNamespace.IMovieCardListModuleScss;
};

export = MovieCardListModuleScssModule;
