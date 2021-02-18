module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // transform: {
  //   '^.+\\.tsx?$': 'babel7-jest',
  // },

  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(scss|less|css)$": "identity-obj-proxy"
  },
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)?$",
  //   "!**/node_modules/**",
  //   "!**/vendor/**",
  //   "!**/useTimeout.ts/**",
  // ],
  // coverageThreshold: {
  //   global: {
  //     "branches": 80,
  //     "functions": 80,
  //     "lines": 80,
  //     "statements": -10
  //   }
  // }
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
    "!**/*.module.scss.d.ts",
    "!**/useTimeout.ts/**",
  ],
  coverageThreshold: {
    "global": {
      "lines": 90,
      "statements": 90
    }
  },
  testPathIgnorePatterns: [
    "<rootDir>/path/to/ignore/"
  ]
};