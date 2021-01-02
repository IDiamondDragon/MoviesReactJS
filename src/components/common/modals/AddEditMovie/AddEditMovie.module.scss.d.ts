declare namespace AddEditMovieModuleScssNamespace {
  export interface IAddEditMovieModuleScss {
    "add-edit-movie": string;
    "add-edit-movie-form__buttons": string;
    "add-edit-movie-form__last": string;
    "add-edit-movie-form__reset": string;
  }
}

declare const AddEditMovieModuleScssModule: AddEditMovieModuleScssNamespace.IAddEditMovieModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AddEditMovieModuleScssNamespace.IAddEditMovieModuleScss;
};

export = AddEditMovieModuleScssModule;
