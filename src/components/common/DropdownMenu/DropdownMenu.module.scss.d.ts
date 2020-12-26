declare namespace DropdownMenuModuleScssNamespace {
  export interface IDropdownMenuModuleScss {
    menu: string;
    menu__item: string;
    "menu__tree-dots": string;
  }
}

declare const DropdownMenuModuleScssModule: DropdownMenuModuleScssNamespace.IDropdownMenuModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DropdownMenuModuleScssNamespace.IDropdownMenuModuleScss;
};

export = DropdownMenuModuleScssModule;
