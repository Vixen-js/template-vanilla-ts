import * as esbuild from "esbuild";
import importFlat from "@vixen-js/plugin-import-flat";
import vixenAssets from "@vixen-js/plugin-vixen-assets";

try {
  await esbuild.build({
    entryPoints: ["src/**/*.ts"],
    outdir: "dist",
    outExtension: {
      ".js": ".cjs",
    },
    bundle: true,
    platform: "node",
    target: "node18",
    format: "cjs",
    minify: true,
    tsconfig: "./tsconfig.json",
    packages: "external",
    plugins: [importFlat(), vixenAssets()],
  });
} catch (e) {
  console.error(e);
}
