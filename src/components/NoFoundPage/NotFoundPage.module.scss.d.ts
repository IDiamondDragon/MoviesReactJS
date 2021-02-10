declare namespace NotFoundPageModuleScssNamespace {
  export interface INotFoundPageModuleScss {
    content: string;
    "go-back-to-home-button": string;
    image404: string;
    message: string;
    "not-found-page": string;
  }
}

declare const NotFoundPageModuleScssModule: NotFoundPageModuleScssNamespace.INotFoundPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NotFoundPageModuleScssNamespace.INotFoundPageModuleScss;
};

export = NotFoundPageModuleScssModule;
