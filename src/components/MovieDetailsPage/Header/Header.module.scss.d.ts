declare namespace HeaderModuleScssNamespace {
  export interface IHeaderModuleScss {
    header: string;
    header__baner: string;
    header__panel: string;
    "header__search-icon": string;
  }
}

declare const HeaderModuleScssModule: HeaderModuleScssNamespace.IHeaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderModuleScssNamespace.IHeaderModuleScss;
};

export = HeaderModuleScssModule;
