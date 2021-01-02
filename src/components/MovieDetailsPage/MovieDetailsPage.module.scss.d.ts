declare namespace MovieDetailsPageModuleScssNamespace {
  export interface IMovieDetailsPageModuleScss {
    "movie-details-page": string;
    stretch: string;
  }
}

declare const MovieDetailsPageModuleScssModule: MovieDetailsPageModuleScssNamespace.IMovieDetailsPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MovieDetailsPageModuleScssNamespace.IMovieDetailsPageModuleScss;
};

export = MovieDetailsPageModuleScssModule;
