import fs from 'fs';
import path from 'path';
import * as googleTTS from 'google-tts-api';

const code = fs.readFileSync('src/Root.tsx', 'utf-8');
const regex = /<Composition[^>]*id="([^"]+)"[\s\S]*?hookText:\s*'([^']+)'[\s\S]*?empathyText:\s*'([^']+)'[\s\S]*?lang:\s*'([^']+)'/g;

const outputDir = path.join('public', 'assets', 'tts');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

let match;
const promises = [];

while ((match = regex.exec(code)) !== null) {
    const [_, id, hook, empathy, lang] = match;

    const cleanHook = hook.replace(/\\n/g, ' ');
    const cleanEmpathy = empathy.replace(/\\n/g, ' ');

    console.log(`Generating TTS for ${id}...`);

    promises.push(
        googleTTS.getAudioBase64(cleanHook, { lang, slow: false })
            .then(b64 => fs.writeFileSync(path.join(outputDir, `${id}_hook.mp3`), Buffer.from(b64, 'base64')))
            .catch(err => console.error(`Error generating hook for ${id}:`, err))
    );

    promises.push(
        googleTTS.getAudioBase64(cleanEmpathy, { lang, slow: false })
            .then(b64 => fs.writeFileSync(path.join(outputDir, `${id}_empathy.mp3`), Buffer.from(b64, 'base64')))
            .catch(err => console.error(`Error generating empathy for ${id}:`, err))
    );
}

Promise.all(promises).then(() => {
    console.log('Successfully generated all TTS audio files locally.');
});
