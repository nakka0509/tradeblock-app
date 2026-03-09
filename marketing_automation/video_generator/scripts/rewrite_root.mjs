import fs from 'fs';
let code = fs.readFileSync('src/Root.tsx', 'utf-8');

// Add imports
code = code.replace("import { TradeBlockCarousel } from './TradeBlockCarousel';", 
`import { TradeBlockCarousel } from './TradeBlockCarousel';
import ttsMetadata from './ttsMetadata.json';

const getDuration = (id: string) => {
  const meta = (ttsMetadata as Record<string, any>)[id];
  if (!meta) return Math.floor(15.5 * 30);
  const playbackRate = 1.35;
  const slide1 = 4 * 30;
  const slide2 = Math.ceil((meta.empathy / playbackRate + 0.3) * 30);
  const slide3 = Math.ceil((meta.appReveal / playbackRate + 0.3) * 30);
  const slide4 = Math.ceil((meta.cta / playbackRate + 0.3) * 30);
  return slide1 + slide2 + slide3 + slide4;
};`);

// Remove old const
code = code.replace(/const durationInFrames = Math\.floor\(15\.5 \* fps\);/, '');

// Replace durationInFrames
code = code.replace(/<Composition\s+id="([^"]+)"[\s\S]*?durationInFrames=\{durationInFrames\}/g, (match, id) => {
  return match.replace('durationInFrames={durationInFrames}', `durationInFrames={getDuration("${id}")}`);
});

fs.writeFileSync('src/Root.tsx', code);
console.log('Root.tsx rewritten!');
