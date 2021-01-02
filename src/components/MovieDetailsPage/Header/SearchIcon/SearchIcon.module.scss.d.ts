declare namespace SearchIconModuleScssNamespace {
  export interface ISearchIconModuleScss {
    "search-icon": string;
  }
}

declare const SearchIconModuleScssModule: SearchIconModuleScssNamespace.ISearchIconModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SearchIconModuleScssNamespace.ISearchIconModuleScss;
};

export = SearchIconModuleScssModule;
