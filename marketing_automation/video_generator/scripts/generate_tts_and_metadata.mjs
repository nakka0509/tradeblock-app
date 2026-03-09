/**
 * generate_tts_and_metadata.mjs
 *
 * Reads the exported `videoVariations` array from videoTexts.ts
 * and generates TTS audio + metadata.
 */

import fs from 'fs';
import path from 'path';
import * as googleTTS from 'google-tts-api';
import { execSync } from 'child_process';
import { pathToFileURL } from 'url';
import os from 'os';

const tempJsFile = path.resolve('scripts/temp_videoTexts.mjs');
const tsFilePath = path.resolve('src/videoTexts.ts');

try {
    execSync(`npx esbuild "${tsFilePath}" --outfile="${tempJsFile}" --format=esm --platform=node`);
} catch (e) {
    console.error("Failed to compile videoTexts.ts", e.stdout ? e.stdout.toString() : e);
    process.exit(1);
}

const moduleUrl = pathToFileURL(tempJsFile).href;
const { videoVariations } = await import(moduleUrl);

const outputDir = path.join('public', 'assets', 'tts');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function getDuration(filePath) {
    try {
        const platform = os.platform();
        if (platform === 'darwin') {
            // macOS: use natively available afinfo
            const output = execSync(`afinfo "${filePath}" | grep "estimated duration" | awk '{print $3}'`).toString();
            return parseFloat(output.trim());
        } else {
            // Linux/Ubuntu: use ffprobe (for GitHub Actions)
            const output = execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filePath}"`).toString();
            return parseFloat(output.trim());
        }
    } catch (e) {
        console.error('Failed to get duration for', filePath);
        return 0; // Remotion fallback will handle it
    }
}

async function run() {
    const metadata = {};

    console.log(`Starting TTS generation for ${videoVariations.length} variations...`);

    for (const variation of videoVariations) {
        const id = variation.id;
        const props = variation.props;

        console.log(`Processing ${id}...`);
        metadata[id] = {};

        const texts = {
            hook: props.hookText.replace(/\\n/g, ' '),
            empathy: props.empathyText.replace(/\\n/g, ' '),
            appReveal: props.appRevealText.replace(/\\n/g, ' '),
            cta: props.ctaText.replace(/\\n/g, ' ')
        };

        for (const [key, text] of Object.entries(texts)) {
            const fileName = `${id}_${key}.mp3`;
            const filePath = path.join(outputDir, fileName);

            try {
                if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
                    metadata[id][key] = getDuration(filePath);
                    continue;
                }

                const b64 = await googleTTS.getAudioBase64(text, { lang: props.lang, slow: false });
                fs.writeFileSync(filePath, Buffer.from(b64, 'base64'));

                const duration = getDuration(filePath);
                metadata[id][key] = duration;
            } catch (e) {
                console.error(`Error with ${id} ${key}:`, e);
            }
        }
    }

    fs.writeFileSync('src/ttsMetadata.json', JSON.stringify(metadata, null, 2));
    console.log('Successfully generated all TTS audio and src/ttsMetadata.json!');

    fs.unlinkSync(tempJsFile);
}

run();
