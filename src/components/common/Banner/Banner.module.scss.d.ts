declare namespace BannerModuleScssNamespace {
  export interface IBannerModuleScss {
    baner: string;
  }
}

declare const BannerModuleScssModule: BannerModuleScssNamespace.IBannerModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BannerModuleScssNamespace.IBannerModuleScss;
};

export = BannerModuleScssModule;
