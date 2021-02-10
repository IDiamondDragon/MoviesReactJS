declare namespace MovieDetailsPanelModuleScssNamespace {
  export interface IMovieDetailsPanelModuleScss {
    button: string;
    "button--without-background": string;
    input: string;
    "movie-details-panel": string;
    "movie-details__overview": string;
    "movie-details__release-date": string;
    "movie-details__runtime": string;
    "movie-details__tagline": string;
    "movie-details__title": string;
    "movie-details__wrap-title-vote-average": string;
    "movie-image": string;
    title: string;
    "vote-average": string;
    "vote-average__number": string;
  }
}

declare const MovieDetailsPanelModuleScssModule: MovieDetailsPanelModuleScssNamespace.IMovieDetailsPanelModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MovieDetailsPanelModuleScssNamespace.IMovieDetailsPanelModuleScss;
};

export = MovieDetailsPanelModuleScssModule;
