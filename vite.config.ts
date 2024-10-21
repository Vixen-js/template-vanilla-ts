import { resolve } from "path";
import { defineConfig } from "vite";
import externalize from "vite-plugin-externalize-dependencies";

export default defineConfig({
  publicDir: "src/assets",
  build: {
    assetsDir: "assets",
    rollupOptions: {
      external: ["@vixen-js/core", /^vixen-js-plugin-*/, "fs", "path"],
    },
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["cjs"],
      fileName: "main",
    },
  },
  plugins: [
    externalize({
      externals: ["@vixen-js/core", /^vixen-js-plugin-*/, "fs", "path"],
    }),
  ],
  resolve: {
    alias: {
      "./images": resolve(__dirname, "src/assets/images"),
      "./styles": resolve(__dirname, "src/assets/styles"),
    },
  },
});
