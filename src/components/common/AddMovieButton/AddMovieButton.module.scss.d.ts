declare namespace AddMovieButtonModuleScssNamespace {
  export interface IAddMovieButtonModuleScss {
    "add-movie-button": string;
  }
}

declare const AddMovieButtonModuleScssModule: AddMovieButtonModuleScssNamespace.IAddMovieButtonModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AddMovieButtonModuleScssNamespace.IAddMovieButtonModuleScss;
};

export = AddMovieButtonModuleScssModule;
