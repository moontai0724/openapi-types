import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";

export default [
  // dts
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
      sourcemap: false,
    },
    plugins: [typescript(), dts()],
  },
];
