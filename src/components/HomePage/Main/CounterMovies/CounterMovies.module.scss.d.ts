declare namespace CounterMoviesModuleScssNamespace {
  export interface ICounterMoviesModuleScss {
    "counter-movies": string;
    "counter-movies__count": string;
  }
}

declare const CounterMoviesModuleScssModule: CounterMoviesModuleScssNamespace.ICounterMoviesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CounterMoviesModuleScssNamespace.ICounterMoviesModuleScss;
};

export = CounterMoviesModuleScssModule;
