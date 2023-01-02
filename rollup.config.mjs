import { readdirSync, statSync } from "fs";

import replace from "@rollup/plugin-replace";
import typescript from "rollup-plugin-typescript2";
import cleanup from "rollup-plugin-cleanup";
import prettier from "rollup-plugin-prettier";

import packageJson from "./package.json" assert { type: "json" };
import prettierConfig from "./.prettierrc.json" assert { type: "json" };

const nodeInput = ["./src/index.ts"];
const webInput = {
  index: "./src/index.ts"
};

for (const directory of readdirSync("./src/apis")) {
  const path = `./src/apis/${directory}`;
  if (!statSync(path).isDirectory()) continue;
  const file = `${path}/index.ts`;

  webInput[directory] = file;
  nodeInput.push(file);
}

const output = {
  compact: true,
  generatedCode: {
    constBindings: true,
    arrowFunctions: true,
    objectShorthand: true
  },
  externalLiveBindings: false,
  minifyInternalExports: true
};

/** @type {import('rollup').RollupOptions} */
const configNode = {
  input: nodeInput,
  external: ["crypto", "axios"],
  output: [
    {
      dir: "./dist/cjs",
      format: "commonjs",
      exports: "named",
      preserveModules: true,
      entryFileNames: "[name].js",
      ...output
    },
    {
      dir: "./dist/esm",
      format: "module",
      exports: "named",
      preserveModules: true,
      entryFileNames: "[name].mjs",
      ...output
    }
  ],
  treeshake: {
    unknownGlobalSideEffects: false,
    moduleSideEffects: false,
    correctVarValueBeforeDeclaration: false,
    preset: "smallest",
    annotations: false,
    propertyReadSideEffects: false
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      tsconfigOverride: {
        compilerOptions: {
          module: "ESNext"
        }
      }
    }),

    replace({
      values: {
        "process.env.USER_AGENT_STRING": JSON.stringify(
          `${packageJson.name}/${packageJson.version} (+https://npmjs.com/package/${packageJson.name})`
        )
      },
      preventAssignment: true
    }),
    cleanup({
      extensions: ["js", "ts", "mjs"],
      comments: ["jsdoc"],
      compactComments: true
    }),

    prettier({
      ...prettierConfig,
      parser: "babel-ts"
    })
  ]
};

export default [configNode];
