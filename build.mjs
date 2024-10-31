import * as esbuild from "esbuild";
import importFlat from "@vixen-js/plugin-import-flat";

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
    plugins: [
      importFlat(),
      importFlat({
        filterRegexp: /\?url$/,
        namespace: Math.random().toString(36).slice(2),
        transform: async (_content, args) => args.path,
      }),
    ],
  });
} catch (e) {
  console.error(e);
}
