import { Audio, staticFile } from 'remotion';
import React from 'react';

export const TTSAudio: React.FC<{
    fileName: string;
    playbackRate?: number;
}> = ({ fileName, playbackRate = 1.25 }) => {
    return <Audio src={staticFile(`assets/tts/${fileName}.mp3`)} playbackRate={playbackRate} />;
};
