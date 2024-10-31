import { execSync } from "child_process";
import { cwd } from "process";
import fs from "fs";

const currentDir = cwd();

if (!fs.existsSync(`${currentDir}/node_modules`)) {
  console.error(
    "You have to execute this script after installing the dependencies",
  );
  process.exit(1);
}

const pkgManager = detectPackageMgr();
console.log(`Detected package manager: ${pkgManager}`);

console.log("Compiling Vixen Core...");
const response = execSync(
  `cd ./node_modules/@vixen-js/core && ${pkgManager} install`,
);

execSync(`cd ${currentDir}`);

function detectPackageMgr() {
  if (fs.existsSync(`${currentDir}/pnpm-lock.yaml`)) {
    return "pnpm";
  } else if (fs.existsSync(`${currentDir}/yarn.lock`)) {
    return "yarn";
  } else if (fs.existsSync(`${currentDir}/package-lock.json`)) {
    return "npm";
  }
}
