import fs from 'fs';

let code = fs.readFileSync('src/Root.tsx', 'utf-8');
const regex = /<Composition\s+id="([^"]+)"[\s\S]*?defaultProps={(\{[\s\S]*?lang:\s*'(ja|en|zh-CN)'\s*as\s*const\s*\})}/g;

let match;
const compositions = [];

while ((match = regex.exec(code)) !== null) {
  let props = match[2];
  // Convert DL to ダウンロード as requested
  props = props.replace(/今すぐDL/g, '今すぐダウンロード');
  compositions.push(`  {\n    id: "${match[1]}",\n    props: ${props}\n  }`);
}

const tsContent = `export const videoVariations = [\n${compositions.join(',\n')}\n];\n`;
fs.writeFileSync('src/videoTexts.ts', tsContent);

let newRoot = `import { Composition } from 'remotion';
import { TradeBlockCarousel } from './TradeBlockCarousel';
import ttsMetadata from './ttsMetadata.json';
import { videoVariations } from './videoTexts';

const getDuration = (id: string, props: any) => {
  const meta = (ttsMetadata as Record<string, any>)[id];
  if (!meta) return Math.floor(15.5 * 30);
  const playbackRate = 1.35;
  const slide1 = Math.ceil((meta.hook / playbackRate + 0.3) * 30);
  const slide2 = Math.ceil((meta.empathy / playbackRate + 0.3) * 30);
  const slide3 = Math.ceil((meta.appReveal / playbackRate + 0.3) * 30);
  const slide4 = Math.ceil((meta.cta / playbackRate + 0.3) * 30);
  return slide1 + slide2 + slide3 + slide4;
};

export const RemotionRoot: React.FC = () => {
  const fps = 30;

  return (
    <>
      {videoVariations.map((v) => (
        <Composition
          key={v.id}
          id={v.id}
          component={TradeBlockCarousel}
          durationInFrames={getDuration(v.id, v.props)}
          fps={fps}
          width={1080}
          height={1920}
          defaultProps={v.props}
        />
      ))}
    </>
  );
};
`;

fs.writeFileSync('src/Root.tsx', newRoot);
console.log('Successfully extracted texts to src/videoTexts.ts and refactored Root.tsx!');
