declare namespace MovieDetaislPanelModuleScssNamespace {
  export interface IMovieDetaislPanelModuleScss {
    button: string;
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

declare const MovieDetaislPanelModuleScssModule: MovieDetaislPanelModuleScssNamespace.IMovieDetaislPanelModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MovieDetaislPanelModuleScssNamespace.IMovieDetaislPanelModuleScss;
};

export = MovieDetaislPanelModuleScssModule;
