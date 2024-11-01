/// <reference types="@vixen-js/core" />

/**
 * Load Resource as string data
 */
declare module "*?raw" {
  const data: string;
  export default data;
}

/**
 * Load Png Images
 */
declare module "*.png" {
  const data: string;
  export default data;
}

/**
 * Load Svg Images
 */
declare module "*.svg" {
  const data: string;
  export default data;
}

declare var win: QMainWindow;
