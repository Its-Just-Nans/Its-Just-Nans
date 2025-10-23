import { readdirSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const isDev = typeof import.meta.env != "undefined" ? import.meta.env.DEV : true;
const path = isDev ? join(__dirname, "code") : join(__dirname, "..", "..", "Its-Just-Nans/website-articles/fizzbuzzing/code");

const listDir = readdirSync(path).filter((file) => !file.endsWith(".out"));

export const files = listDir.reduce((a, v) => ({ ...a, [v]: readFileSync(join(path, v), "utf-8").toString() }), {});

export const useDirective = (code, condition) => {
    return condition
        ? code.replace("function fizzbuzz(n) {", "%NeverOptimizeFunction(fizzbuzz);\nfunction fizzbuzz(n) {")
        : code;
};
