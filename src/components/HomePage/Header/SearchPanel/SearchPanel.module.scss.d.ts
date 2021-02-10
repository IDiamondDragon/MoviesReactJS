declare namespace SearchPanelModuleScssNamespace {
  export interface ISearchPanelModuleScss {
    button: string;
    "button--without-background": string;
    input: string;
    search: string;
    "search-panel": string;
    "search-panel__title": string;
    search__button: string;
    search__input: string;
    title: string;
  }
}

declare const SearchPanelModuleScssModule: SearchPanelModuleScssNamespace.ISearchPanelModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SearchPanelModuleScssNamespace.ISearchPanelModuleScss;
};

export = SearchPanelModuleScssModule;
