import fs from 'fs';
import path from 'path';
import { videoVariations } from '../src/videoTexts';

const lang = process.argv[2] || 'ja';

// Filter variations by chosen language
const availableVariations = videoVariations.filter(v => v.props.lang === lang);

if (availableVariations.length === 0) {
    console.error(`No variations found for lang: ${lang}`);
    process.exit(1);
}

// 1. Pick a random text snippet (Hook & Empathy)
const randomIndex = Math.floor(Math.random() * availableVariations.length);
const selectedVariation = availableVariations[randomIndex];
const props = { ...selectedVariation.props };

// 2. Pick random background assets from public directories
const pickRandomFile = (dirPath: string, allowedExts: string[]) => {
    const fullPath = path.join(process.cwd(), 'public', dirPath);
    if (!fs.existsSync(fullPath)) return null;

    const files = fs.readdirSync(fullPath).filter(file =>
        allowedExts.some(ext => file.toLowerCase().endsWith(ext))
    );

    if (files.length === 0) return null;
    const randFile = files[Math.floor(Math.random() * files.length)];
    return path.join(dirPath, randFile); // e.g., 'assets/part1/video.mp4'
};

const bgImageSrc1A = pickRandomFile('assets/part1', ['.mp4']);
const bgImageSrc1B = pickRandomFile('assets/part1', ['.png', '.jpg', '.jpeg']);
const bgImageSrc2A = pickRandomFile('assets/part2', ['.png', '.jpg', '.jpeg']);
const bgImageSrc2B = pickRandomFile('assets/part2', ['.png', '.jpg', '.jpeg']);
const bgImageSrc4 = pickRandomFile('assets/part4', ['.mp4']);
const bgmSrc = pickRandomFile('assets', ['.mp3']); // Finds MP3s directly in /assets/

if (bgImageSrc1A) props.bgImageSrc1A = bgImageSrc1A;
if (bgImageSrc1B) props.bgImageSrc1B = bgImageSrc1B;
// Ensure we don't pick the same image twice for part2 if there are multiple options
if (bgImageSrc2A) props.bgImageSrc2A = bgImageSrc2A;
if (bgImageSrc2B && bgImageSrc2B !== bgImageSrc2A) {
    props.bgImageSrc2B = bgImageSrc2B;
}
if (bgImageSrc4) props.bgImageSrc4 = bgImageSrc4;
if (bgmSrc) props.bgmSrc = bgmSrc;

// 2.5 Pick random visual tint
const tints = [
    'rgba(0, 0, 0, 0.4)',      // Default dark
    'rgba(0, 0, 0, 0.5)',      // Darker
    'rgba(20, 0, 0, 0.45)',    // Subtle red (loss/danger vibe)
    'rgba(0, 10, 20, 0.45)',   // Subtle blue (cold/calculated vibe)
    'rgba(15, 10, 0, 0.45)'    // Subtle brown/sepia (gritty vibe)
];
props.visualTint = tints[Math.floor(Math.random() * tints.length)];

// 3. Output the exact props payload as a JSON file so Remotion CLI can override the default props
fs.writeFileSync('src/dailyOverride.json', JSON.stringify(props, null, 2));

// 4. Expose the base composition ID to GitHub Actions
console.log(selectedVariation.id);
