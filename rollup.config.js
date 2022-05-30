import typescript from "rollup-plugin-typescript2";
import { name, version } from "./package.json";
import replace from "@rollup/plugin-replace";
import cleanup from "rollup-plugin-cleanup";
import prettier from "rollup-plugin-prettier";

import prettierConfig from "./.prettierrc.json";
import { readdirSync, statSync } from "fs";

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

const treeshake = {
  unknownGlobalSideEffects: false,
  moduleSideEffects: false,
  correctVarValueBeforeDeclaration: false,
  preset: "smallest",
  annotations: false,
  propertyReadSideEffects: false
};

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

const plugins = [
  replace({
    values: {
      "process.env.USER_AGENT_STRING": JSON.stringify(
        `${name}/${version} (+https://npmjs.com/package/${name})`
      )
    },
    preventAssignment: true
  }),
  cleanup({
    extensions: ["js", "ts", "mjs"],
    comments: ["jsdoc"],
    compactComments: true
  })
];

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
  treeshake,
  plugins: [
    typescript({
      tsconfig: "./tsconfig.build.json",
      useTsconfigDeclarationDir: true
    }),
    ...plugins,
    prettier({
      ...prettierConfig,
      parser: "babel-ts"
    })
  ]
};

/** @type {import('rollup').RollupOptions} */
const configWeb = {
  input: webInput,
  external: ["axios"],
  output: [
    {
      dir: "./dist/web",
      format: "module",
      exports: "named",
      entryFileNames: "[name].js",
      chunkFileNames: "[name].js",
      ...output
    }
  ],
  treeshake,
  plugins: [
    typescript({
      tsconfig: "./tsconfig.web.json",
      useTsconfigDeclarationDir: true
    }),
    ...plugins
  ]
};

export default [configWeb, configNode];
