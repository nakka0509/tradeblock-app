import fs from 'fs';
import { videoVariations } from './src/videoTexts.ts'; // Cannot do this easily in node without ts-node or transpilation

// actually just regex it out to simple json
let code = fs.readFileSync('src/videoTexts.ts', 'utf-8');
code = code.replace("export const videoVariations = ", "");
code = code.replace(/;?\s*$/, "");
// This is JS, not strict JSON. Evaluating it is easy:
const getObj = new Function("return " + code);
const arr = getObj();
fs.writeFileSync('src/videoTexts.json', JSON.stringify(arr, null, 2));
