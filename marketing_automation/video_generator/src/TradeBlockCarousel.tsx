import React, { useState, useEffect } from 'react';
import { loadDefaultJapaneseParser, loadDefaultSimplifiedChineseParser } from "budoux";
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
  Video,
  Audio
} from 'remotion';
import { getVideoMetadata } from '@remotion/media-utils';
import { TTSAudio } from './TTSAudio';
import ttsMetadata from './ttsMetadata.json';

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
  bgmSrc?: string;
  visualTint?: string;
  lang: 'ja' | 'en' | 'zh-CN';
}> = ({ hookText, empathyText, appRevealText, ctaText, bgImageSrc1A, bgImageSrc1B, bgImageSrc2A, bgImageSrc2B, bgImageSrc4, videoSrc, bgmSrc, visualTint, lang }) => {
  const { fps, id } = useVideoConfig();

  // Dynamic timing calculation based on generated audio length
  const meta = (ttsMetadata as Record<string, any>)[id] || { hook: 3, empathy: 3, appReveal: 3, cta: 3 };
  const playbackRate = 1.65;
  const buffer = 0.3; // Give 0.3s of visual breathing room after the text is read
  const slide1Duration = Math.ceil((meta.hook / playbackRate) * fps); // No buffer for Part1 → avoids gap before Part2
  const slide2Duration = Math.ceil((meta.empathy / playbackRate + buffer) * fps);
  const slide3Duration = Math.ceil((meta.appReveal / playbackRate + buffer) * fps);
  const slide4Duration = Math.ceil((meta.cta / playbackRate + buffer) * fps);

  const [handle] = useState(() => delayRender('Loading video metadata', { timeoutInMilliseconds: 120000 }));

  const isPart4Video = bgImageSrc4.toLowerCase().endsWith('.mov') || bgImageSrc4.toLowerCase().endsWith('.mp4');

  const [part3VideoDuration, setPart3VideoDuration] = useState<number | null>(null);
  const [part4VideoDuration, setPart4VideoDuration] = useState<number | null>(null);

  useEffect(() => {
    let unmounted = false;
    const loadMetadata = async () => {
      try {
        const p3Meta = await getVideoMetadata(staticFile(videoSrc));
        if (unmounted) return;
        setPart3VideoDuration(p3Meta.durationInSeconds);
      } catch (err) {
        console.warn('Failed to load part3 video metadata. Using fallback 5s.', err);
        if (unmounted) return;
      }

      if (isPart4Video) {
        try {
          const p4Meta = await getVideoMetadata(staticFile(bgImageSrc4));
          if (unmounted) return;
          setPart4VideoDuration(p4Meta.durationInSeconds);
        } catch (err) {
          console.warn('Failed to load part4 video metadata. Using fallback 5s.', err);
          if (unmounted) return;
        }
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
      fontFamily: lang === 'en'
        ? '"Inter", "Montserrat", "Helvetica", sans-serif'
        : lang === 'zh-CN'
          ? '"PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Microsoft YaHei", sans-serif'
          : '"Noto Sans CJK JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif'
    }}>
      <Audio src={staticFile(bgmSrc || 'assets/bgm.mp3')} volume={0.15} />

      <Sequence from={0} durationInFrames={slide1Duration}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Audio src={staticFile('assets/part1/警告音1.mp3')} volume={0.5} />
          <Video src={staticFile(bgImageSrc1A)} playbackRate={(8.234 * fps) / slide1Duration} style={{ position: 'absolute', width: '100%', height: 'auto', objectFit: 'contain', opacity: 0.8 }} muted />
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', backgroundColor: visualTint || 'rgba(0,0,0,0.4)', zIndex: 0 }} />

          <SlideText text={hookText} lang={lang} />
          {/* TTS Audio starts reading immediately as the slide begins */}
          <TTSAudio fileName={`${id}_hook`} playbackRate={1.65} />
        </AbsoluteFill>
      </Sequence>

      {/* Slide 2: Empathy */}
      <Sequence from={slide1Duration} durationInFrames={slide2Duration}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Audio src={staticFile('assets/part2/決定ボタンを押す3.mp3')} volume={0.5} />
          <Sequence from={0} durationInFrames={Math.floor(slide2Duration / 2)}>
            <AnimatedMedia src={bgImageSrc2A} type={'zoomOut'} durationFrames={Math.floor(slide2Duration / 2)} />
          </Sequence>
          <Sequence from={Math.floor(slide2Duration / 2)} durationInFrames={Math.ceil(slide2Duration / 2)}>
            <Audio src={staticFile('assets/part3/2枚目.mp3')} volume={0.4} />
            <AnimatedMedia src={bgImageSrc2B} type={'panRight'} durationFrames={Math.ceil(slide2Duration / 2)} />
          </Sequence>

          <SlideText text={empathyText} lang={lang} />
          <TTSAudio fileName={`${id}_empathy`} playbackRate={1.65} />
        </AbsoluteFill>
      </Sequence>

      {/* Slide 3: App Reveal */}
      <Sequence from={slide1Duration + slide2Duration} durationInFrames={slide3Duration}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Audio src={staticFile('assets/part3/決定ボタンを押す47.mp3')} volume={0.4} />
          <h1 style={{
            width: '90%',
            wordBreak: lang === 'en' ? 'break-word' : 'keep-all',
            whiteSpace: 'pre-wrap',
            lineHeight: 1.3,
            fontSize: lang === 'en' ? 45 : 60,
            fontFamily: lang === 'en' ? '"Inter", "Montserrat", "Helvetica", sans-serif' : undefined,
            fontWeight: '900',
            color: '#ffffff',
            WebkitTextStroke: lang === 'en' ? '5px #e8a900' : '7px #e8a900',
            paintOrder: 'stroke fill',
            textShadow: '0px 4px 12px rgba(0,0,0,0.95)',
            textAlign: 'center',
            marginBottom: 60,
            marginTop: 100,
            zIndex: 10
          }}>
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
              zIndex: 10,
            }}
          >
            <Video
              src={staticFile(videoSrc)}
              playbackRate={part3VideoDuration ? (part3VideoDuration * fps) / slide3Duration : 1}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              muted={false}
            />
          </div>
          <TTSAudio fileName={`${id}_appReveal`} playbackRate={1.65} />
        </AbsoluteFill>
      </Sequence>

      {/* Slide 4: CTA */}
      <Sequence from={slide1Duration + slide2Duration + slide3Duration} durationInFrames={slide4Duration}>
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Audio src={staticFile('assets/part4/決定ボタンを押す40.mp3')} volume={0.5} />
          <Video
            src={staticFile(bgImageSrc4)}
            playbackRate={isPart4Video && part4VideoDuration ? (part4VideoDuration * fps) / slide4Duration : 1}
            style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
            muted
          />
          <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', backgroundColor: visualTint || 'rgba(0,0,0,0.6)', opacity: 0.8, zIndex: 0 }} />

          {/* Dark gradient overlay so text doesn't clash with video */}
          <AbsoluteFill style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.9) 100%)' }} />

          <SlideText text={ctaText} isCta lang={lang} />
          <TTSAudio fileName={`${id}_cta`} playbackRate={1.65} />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};

// Helper component for background images with varied animations
const AnimatedMedia: React.FC<{ src: string; type: 'zoomIn' | 'zoomOut' | 'panRight', durationFrames?: number }> = ({ src, type, durationFrames = 30 }) => {
  const frame = useCurrentFrame();

  // Calculate different animations (accelerated length)
  const zoomIn = interpolate(frame, [0, durationFrames], [1, 1.15], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const zoomOut = interpolate(frame, [0, durationFrames], [1.15, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const panX = interpolate(frame, [0, durationFrames], [0, -20], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  let transform = '';
  if (type === 'zoomIn') transform = `scale(${zoomIn})`;
  if (type === 'zoomOut') transform = `scale(${zoomOut})`;
  if (type === 'panRight') transform = `scale(1.15) translateX(${panX}px)`;

  const isVideo = src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.mov');
  const style: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.35,
    transform,
  };

  if (isVideo) {
    return <Video src={staticFile(src)} style={style} muted />;
  }

  return <Img src={staticFile(src)} style={style} />;
};

// Helper component for advanced TikTok-style text animations
const SlideText: React.FC<{ text: string, isCta?: boolean, lang?: 'ja' | 'en' | 'zh-CN' }> = ({ text, isCta, lang = 'ja' }) => {
  const frame = useCurrentFrame();

  // Split text into lines if user provided manual \n or literal \n
  const lines = text.replace(/\\n/g, '\n').split('\n');

  // Use BudouX ML parser for flawless Japanese/Chinese typographic line splitting
  const parser = React.useMemo(() => {
    if (lang === 'zh-CN') return loadDefaultSimplifiedChineseParser();
    if (lang === 'ja') return loadDefaultJapaneseParser();
    return null; // For English, standard browser word-wrapper suffices
  }, [lang]);

  const isEn = lang === 'en';

  return (
    <AbsoluteFill style={{
      justifyContent: isCta ? 'flex-end' : 'center',
      alignItems: 'center',
      paddingBottom: isCta ? 250 : 0
    }}>
      <div style={{
        textAlign: 'center',
        width: '100%',
        maxWidth: isEn ? '90%' : '85%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        wordBreak: isEn ? 'break-word' : 'keep-all',
      }}>
        {lines.map((line, lineIdx) => {
          // English separates by space natively, CJK parsing uses BudouX
          const words = parser ? parser.parse(line) : line.split(' ');

          return (
            <div key={lineIdx} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 15, width: '100%' }}>
              {words.map((word: string, wordIdx: number) => {
                const addSpace = isEn && wordIdx < words.length - 1;
                return (
                  <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: isEn ? 'pre-wrap' : 'pre' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: isEn ? (isCta ? 50 : 55) : (isCta ? 65 : 78),
                        fontFamily: isEn ? '"Inter", "Montserrat", "Helvetica", sans-serif' : undefined,
                        fontWeight: 900,
                        letterSpacing: isEn ? '0em' : '0.05em',
                        color: '#ffffff',
                        WebkitTextStroke: isEn ? '5px #e8a900' : '7px #e8a900',
                        paintOrder: 'stroke fill',
                        textShadow: '0px 4px 12px rgba(0,0,0,0.95), 0px 0px 30px rgba(0,0,0,0.9)',
                        lineHeight: 1.4,
                      }}
                    >
                      {word}{addSpace ? ' ' : ''}
                    </span>
                  </span>
                )
              })}
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
