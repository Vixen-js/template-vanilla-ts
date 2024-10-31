/// <reference types="@vixen-js/core" />

/**
 * Load Resource as string data
 */
declare module "*?raw" {
  const data: string;
  export default data;
}

/**
 * Load resource as a URL
 */
declare module "*?url" {
  const data: string;
  export default data;
}

declare var win: QMainWindow;
