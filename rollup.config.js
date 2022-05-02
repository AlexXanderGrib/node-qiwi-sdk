import typescript from "rollup-plugin-typescript2";
import { builtinModules } from "module";
import { dependencies, devDependencies, name, version } from "./package.json";
import replace from "@rollup/plugin-replace";
import glob from "glob";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: ["./src/index.ts", ...glob.sync("./src/apis/**/index.ts")],
  external: [
    ...builtinModules,
    ...Object.keys({ ...devDependencies, ...dependencies })
  ],
  output: [
    {
      dir: "./dist/cjs",
      format: "commonjs",
      exports: "named",
      preserveModules: true,
      chunkFileNames: "[name].js",
      entryFileNames: "[name].js"
    },
    {
      dir: "./dist/esm",
      format: "module",
      exports: "named",
      preserveModules: true,
      chunkFileNames: "[name].mjs",
      entryFileNames: "[name].mjs"
    }
  ],
  plugins: [
    typescript({ tsconfig: "./tsconfig.build.json" }),
    replace({
      values: {
        "process.env.USER_AGENT_STRING": JSON.stringify(
          `${name}/${version} (+https://npmjs.com/package/${name})`
        )
      },
      preventAssignment: true
    })
  ]
};

export default config;
