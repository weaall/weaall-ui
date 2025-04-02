import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import path from "path";

export default {
  input: "src/index.ts",
  output: [
    { dir: "dist", format: "cjs", entryFileNames: "index.js", sourcemap: true },
    { dir: "dist", format: "esm", entryFileNames: "index.mjs", sourcemap: true },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss({
      extract: path.resolve("dist/styles.css"),
      minimize: true,
      sourceMap: true,
      inject: false,
      verbose: true,
    }),
  ],
  external: ["react", "react-dom"],
};
