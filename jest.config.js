const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/*.(spec|test).[jt]s"],
  clearMocks: true,
  moduleDirectories: ["node_modules", __dirname],
  coverageDirectory: "coverage",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src/"
  }),

  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json"
    }
  }
};
