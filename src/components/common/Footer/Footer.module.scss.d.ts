declare namespace FooterModuleScssNamespace {
  export interface IFooterModuleScss {
    footer: string;
    footer__baner: string;
  }
}

declare const FooterModuleScssModule: FooterModuleScssNamespace.IFooterModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterModuleScssNamespace.IFooterModuleScss;
};

export = FooterModuleScssModule;
