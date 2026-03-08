import React, { useState, useEffect } from 'react';
import { loadDefaultJapaneseParser } from 'budoux';
import {
  continueRender,
  delayRender,
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  Img,
  staticFile,
  spring,
  Video,
  Audio
} from 'remotion';
import { getVideoMetadata } from '@remotion/media-utils';

export const TradeBlockCarousel: React.FC<{
  hookText: string;
  empathyText: string;
  appRevealText: string;
  ctaText: string;
  bgImageSrc1A: string;
  bgImageSrc1B: string;
  bgImageSrc2A: string;
  bgImageSrc2B: string;
  bgImageSrc4: string;
  videoSrc: string;
}> = ({ hookText, empathyText, appRevealText, ctaText, bgImageSrc1A, bgImageSrc1B, bgImageSrc2A, bgImageSrc2B, bgImageSrc4, videoSrc }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Timing constants (in frames, assuming 30fps) - User requested 3s, 3s, 4s, 4s
  const slide1Duration = 3 * fps;
  const slide2Duration = 3 * fps;
  const slide3Duration = 4 * fps;
  const slide4Duration = 4 * fps;

  const [handle] = useState(() => delayRender('Loading video metadata', { timeoutInMilliseconds: 120000 }));
  const [part3Duration, setPart3Duration] = useState<number | null>(null);
  const [part4Duration, setPart4Duration] = useState<number | null>(null);

  const isPart4Video = bgImageSrc4.toLowerCase().endsWith('.mov') || bgImageSrc4.toLowerCase().endsWith('.mp4');

  useEffect(() => {
    let unmounted = false;
    const loadMetadata = async () => {
      try {
        const meta3 = await getVideoMetadata(staticFile(videoSrc));
        if (unmounted) return;
        setPart3Duration(meta3.durationInSeconds);
      } catch (err) {
        console.warn('Failed to load part3 video metadata. Using fallback 5s.', err);
        if (unmounted) return;
        setPart3Duration(5);
      }

      if (isPart4Video) {
        try {
          const meta4 = await getVideoMetadata(staticFile(bgImageSrc4));
          if (unmounted) return;
          setPart4Duration(meta4.durationInSeconds);
        } catch (err) {
          console.warn('Failed to load part4 video metadata. Using fallback 5s.', err);
          if (unmounted) return;
          setPart4Duration(5);
        }
      } else {
        setPart4Duration(slide4Duration / fps);
      }

      continueRender(handle);
    };
    loadMetadata();
    return () => { unmounted = true; };
  }, [videoSrc, bgImageSrc4, isPart4Video, handle, fps, slide4Duration]);

  return (
    <AbsoluteFill style={{
      backgroundColor: '#121212',
      color: 'white',
      fontFamily: '"Noto Sans CJK JP", "Noto Sans CJK SC", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif'
    }}>
      <Audio src={staticFile('assets/bgm.mp3')} volume={0.6} />

      {/* Slide 1: Hook */}
      <Sequence from={0} durationInFrames={slide1Duration}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          {/* 2 Medias per slide (approx 1.5s each = 45 frames) */}
          <Sequence from={0} durationInFrames={fps * 1.5}>
            <AnimatedMedia src={bgImageSrc1A} type={'zoomIn'} />
          </Sequence>
          <Sequence from={fps * 1.5} durationInFrames={fps * 1.5}>
            <AnimatedMedia src={bgImageSrc1B} type={'zoomOut'} />
          </Sequence>

          <SlideText text={hookText} />
        </AbsoluteFill>
      </Sequence>

      {/* Slide 2: Empathy */}
      <Sequence from={slide1Duration} durationInFrames={slide2Duration}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Sequence from={0} durationInFrames={fps * 1.5}>
            <AnimatedMedia src={bgImageSrc2A} type={'zoomOut'} />
          </Sequence>
          <Sequence from={fps * 1.5} durationInFrames={fps * 1.5}>
            <AnimatedMedia src={bgImageSrc2B} type={'panRight'} />
          </Sequence>

          <SlideText text={empathyText} />
        </AbsoluteFill>
      </Sequence>

      {/* Slide 3: App Reveal */}
      <Sequence from={slide1Duration + slide2Duration} durationInFrames={slide3Duration}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ fontSize: 60, fontWeight: 'bold', textAlign: 'center', marginBottom: 60, marginTop: 100 }}>
            {appRevealText}
          </h1>
          {/* Mockup Container */}
          <div
            style={{
              width: 500,
              height: 1000,
              backgroundColor: '#222',
              borderRadius: 60,
              border: '12px solid #444',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              boxShadow: '0 0 100px rgba(255, 255, 255, 0.1)',
            }}
          >
            <Video
              src={staticFile(videoSrc)}
              playbackRate={(part3Duration || (slide3Duration / fps)) / (slide3Duration / fps)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              muted
            />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Slide 4: CTA */}
      <Sequence from={slide1Duration + slide2Duration + slide3Duration} durationInFrames={slide4Duration}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          {isPart4Video ? (
            <Video
              src={staticFile(bgImageSrc4)}
              playbackRate={(part4Duration || (slide4Duration / fps)) / (slide4Duration / fps)}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.6,
              }}
              muted
            />
          ) : (
            <Img
              src={staticFile(bgImageSrc4)}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.6,
              }}
            />
          )}

          {/* Dark gradient overlay so text doesn't clash with video */}
          <AbsoluteFill style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.9) 100%)' }} />

          <SlideText text={ctaText} isCta />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

// Helper component for background images with varied animations
const AnimatedMedia: React.FC<{ src: string; type: 'zoomIn' | 'zoomOut' | 'panRight' }> = ({ src, type }) => {
  const frame = useCurrentFrame();

  // Calculate different animations
  const zoomIn = interpolate(frame, [0, 60], [1, 1.15], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const zoomOut = interpolate(frame, [0, 60], [1.15, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const panX = interpolate(frame, [0, 60], [0, -20], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  let transform = '';
  if (type === 'zoomIn') transform = `scale(${zoomIn})`;
  if (type === 'zoomOut') transform = `scale(${zoomOut})`;
  if (type === 'panRight') transform = `scale(1.15) translateX(${panX}px)`;

  return (
    <Img
      src={staticFile(src)}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.35,
        transform,
      }}
    />
  );
};

// Helper component for advanced TikTok-style text animations
const SlideText: React.FC<{ text: string, isCta?: boolean }> = ({ text, isCta }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Split text into lines if user provided manual \n or literal \n
  const lines = text.replace(/\\n/g, '\n').split('\n');

  // Use BudouX ML parser for flawless Japanese typographic line splitting
  // This computationally detects valid phrases and prevents breaking Katakana/Kanji/Punctuation at line ends
  const parser = React.useMemo(() => loadDefaultJapaneseParser(), []);

  let globalLetterIndex = 0;

  return (
    <AbsoluteFill style={{
      justifyContent: isCta ? 'flex-end' : 'center',
      alignItems: 'center',
      paddingBottom: isCta ? 250 : 0
    }}>
      <div style={{
        textAlign: 'center',
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {lines.map((line, lineIdx) => {
          // Semantically tokenize the text into unbreakable phrase chunks using BudouX
          const words = parser.parse(line);

          return (
            <div key={lineIdx} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 15, width: '100%' }}>
              {words.map((word: string, wordIdx: number) => (
                <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                  {word.split('').map((char: string, charIdx: number) => {
                    // Stagger animation based on letter index - Much faster now (0.8 instead of 1.5)
                    const delay = globalLetterIndex * 0.8; // frames delay per letter
                    if (char.trim() !== '') {
                      globalLetterIndex++; // Only increment delay for visible characters
                    } else {
                      globalLetterIndex += 0.3; // smaller delay for spaces
                    }

                    // Spring animation for popping up
                    const scale = spring({
                      fps,
                      frame: frame - delay,
                      config: {
                        damping: 12,
                        stiffness: 150,
                      },
                    });

                    // Opacity fade in
                    const opacity = interpolate(
                      frame - delay,
                      [0, 5],
                      [0, 1],
                      { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
                    );

                    // Slide up effect
                    const translateY = interpolate(
                      frame - delay,
                      [0, 10],
                      [40, 0],
                      { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
                    );

                    return (
                      <span
                        key={charIdx}
                        style={{
                          display: 'inline-block',
                          opacity,
                          transform: `translateY(${translateY}px) scale(${scale})`,
                          fontSize: isCta ? 60 : 70, // Slightly reduced to ensure wide fits
                          fontWeight: 'bold',
                          color: 'white',
                          // Add text shadow to ensure visibility over backgrounds
                          textShadow: '0px 4px 15px rgba(0,0,0,0.8), 0px 0px 40px rgba(0,0,0,0.6)',
                          lineHeight: 1.4,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      {isCta && (
        <div style={{
          marginTop: 60,
          fontSize: 150,
          opacity: Math.max(0, interpolate(frame, [30, 45], [0, 1])),
          transform: `translateY(${interpolate(frame, [30, 45], [50, 0], { extrapolateRight: 'clamp' })}px)`
        }}>
          ⬇️
        </div>
      )}
    </AbsoluteFill>
  );
};
