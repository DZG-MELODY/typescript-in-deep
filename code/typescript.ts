import fs from "fs";

function readFile(file: string): void {
  fs.readFileSync(file);
}

function add(a: number, b: number): number {
  return Math.floor(a) + Math.ceil(b);
}

export default add;
export { readFile };

