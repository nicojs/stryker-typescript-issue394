module.exports = function(config) {
  config.set({
    files: [],
    testRunner: "karma",
    reporter: ["clear-text", "progress"],
    coverageAnalysis: "off",
    mutator: 'typescript',
    transpilers: [
      "typescript"
    ],
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts"],
    logLevel: "debug",
    karmaConfig: {
      browsers: ['Chrome'],
      plugins: ['karma-chrome-launcher', 'karma-jasmine']
    }
  });
};
