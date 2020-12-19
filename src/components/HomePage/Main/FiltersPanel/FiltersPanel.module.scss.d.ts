declare namespace FiltersPanelModuleScssNamespace {
  export interface IFiltersPanelModuleScss {
    arrow: string;
    down: string;
    filter: string;
    "filter--selected": string;
    filters: string;
    "filters-panel": string;
    sort: string;
    sort__combobox: string;
    sort__title: string;
    up: string;
  }
}

declare const FiltersPanelModuleScssModule: FiltersPanelModuleScssNamespace.IFiltersPanelModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FiltersPanelModuleScssNamespace.IFiltersPanelModuleScss;
};

export = FiltersPanelModuleScssModule;
