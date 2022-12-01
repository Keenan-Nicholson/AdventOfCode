import { readFileSync } from "fs";

export const readFile = (filename: string) => readFileSync(filename, "utf-8");
