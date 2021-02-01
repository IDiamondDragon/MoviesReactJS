declare namespace DeleteMovieModuleScssNamespace {
  export interface IDeleteMovieModuleScss {
    button: string;
    "button--without-background": string;
    "delete-movie": string;
    "delete-movie__confirm": string;
  }
}

declare const DeleteMovieModuleScssModule: DeleteMovieModuleScssNamespace.IDeleteMovieModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DeleteMovieModuleScssNamespace.IDeleteMovieModuleScss;
};

export = DeleteMovieModuleScssModule;
