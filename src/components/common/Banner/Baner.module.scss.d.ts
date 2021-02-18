declare namespace BanerModuleScssNamespace {
  export interface IBanerModuleScss {
    baner: string;
  }
}

declare const BanerModuleScssModule: BanerModuleScssNamespace.IBanerModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BanerModuleScssNamespace.IBanerModuleScss;
};

export = BanerModuleScssModule;
