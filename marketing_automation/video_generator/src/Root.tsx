import { Composition } from 'remotion';
import { TradeBlockCarousel } from './TradeBlockCarousel';
import { TradeBlockAruaruCarousel } from './TradeBlockAruaruCarousel';
import ttsMetadata from './ttsMetadata.json';
import { videoVariations } from './videoTexts';

const getDuration = (id: string, props: any) => {
  const meta = (ttsMetadata as Record<string, any>)[id];
  if (!meta) return Math.floor(15.5 * 30);
  const playbackRate = 1.65;
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
      {/* Standard Templates */}
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

      {/* Relatable (Aruaru) Templates - with Double Tap animation */}
      {videoVariations.map((v) => (
        <Composition
          key={`ARUARU-${v.id}`}
          id={`ARUARU-${v.id}`}
          component={TradeBlockAruaruCarousel}
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
