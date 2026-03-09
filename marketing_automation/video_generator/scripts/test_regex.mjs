import fs from 'fs';
const code = fs.readFileSync('src/Root.tsx', 'utf-8');
const regex = /<Composition[\s\S]*?id="([^"]+)"[\s\S]*?hookText:\s*'([^']+)'.*?empathyText:\s*'([^']+)'.*?appRevealText:\s*'([^']+)'.*?ctaText:\s*'([^']+)'.*?lang:\s*'(ja|en|zh-CN)'/gs;
let match;
let count = 0;
while ((match = regex.exec(code)) !== null) {
  count++;
}
console.log('Matches:', count);
