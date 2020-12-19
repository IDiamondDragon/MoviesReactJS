declare namespace SearchPanelModuleScssNamespace {
  export interface ISearchPanelModuleScss {
    search: string;
    "search-panel": string;
    "search-panel__title": string;
    search__button: string;
    search__input: string;
  }
}

declare const SearchPanelModuleScssModule: SearchPanelModuleScssNamespace.ISearchPanelModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SearchPanelModuleScssNamespace.ISearchPanelModuleScss;
};

export = SearchPanelModuleScssModule;
