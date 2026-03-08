import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  Img,
  Video,
  staticFile
} from 'remotion';

export const TradeBlockCarousel: React.FC<{
  hookText: string;
  empathyText: string;
  appRevealText: string;
  ctaText: string;
}> = ({ hookText, empathyText, appRevealText, ctaText }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Timing constants (in frames, assuming 30fps) - Fast-paced tempo for TikTok/Reels
  const slide1Duration = Math.floor(1.5 * fps); // 1.5 seconds
  const slide2Duration = Math.floor(1.5 * fps); // 1.5 seconds
  const slide3Duration = 4 * fps;               // 4 seconds
  const slide4Duration = Math.floor(1.5 * fps); // 1.5 seconds

  return (
    <AbsoluteFill style={{ backgroundColor: '#121212', color: 'white', fontFamily: 'sans-serif' }}>
      {/* Slide 1: Hook */}
      <Sequence from={0} durationInFrames={slide1Duration}>
        <SlideText text={hookText} />
      </Sequence>

      {/* Slide 2: Empathy */}
      <Sequence from={slide1Duration} durationInFrames={slide2Duration}>
        <SlideText text={empathyText} />
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
            {/* 
              Placeholder for the actual screen recording video.
              In a real setup, you'd pass the file path or import it.
              For now we use a placeholder styling matching the Canva design.
            */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: 160, marginBottom: 40 }}>🔒</div>
              <div style={{ fontSize: 80, fontWeight: 'bold' }}>00:15:00</div>
              <div style={{ fontSize: 30, color: '#94a3b8' }}>REMAINING</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Slide 4: CTA */}
      <Sequence from={slide1Duration + slide2Duration + slide3Duration} durationInFrames={slide4Duration}>
        <SlideText text={ctaText} isCta />
      </Sequence>
    </AbsoluteFill>
  );
};

// Helper component for text slides with a simple fast fade-in
const SlideText: React.FC<{ text: string, isCta?: boolean }> = ({ text, isCta }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in over the first 10 frames (0.33s) for a snappier feel
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Slide up slightly
  const translateY = interpolate(frame, [0, 15], [50, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', opacity, transform: `translateY(${translateY}px)` }}>
      <h1
        style={{
          fontSize: isCta ? 70 : 80,
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: 1.4,
          padding: '0 80px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {text}
      </h1>
      {isCta && (
        <div style={{ marginTop: 80, fontSize: 150 }}>
          ⬇️
        </div>
      )}
    </AbsoluteFill>
  );
};
