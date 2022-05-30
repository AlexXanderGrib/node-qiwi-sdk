const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/*.(spec|test).[jt]s"],
  clearMocks: true,
  moduleDirectories: ["node_modules", "./"],
  coverageDirectory: "coverage",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json"
    }
  }
};
