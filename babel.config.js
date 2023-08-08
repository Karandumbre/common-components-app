const developmentConfig = {
  plugins: ["babel-plugin-styled-components"],
  presets: ["@babel/preset-env", "@babel/react", "@babel/flow"],
};

const testConfig = {
  plugins: ["babel-plugin-styled-components"],
  presets: ["@babel/preset-env", "@babel/react", "@babel/flow"],
};

module.exports = {
  env: {
    test: testConfig,
    development: developmentConfig,
    production: developmentConfig,
  },
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {},
      },
    ],
  ],
};
