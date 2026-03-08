import { Composition } from 'remotion';
import { TradeBlockCarousel } from './TradeBlockCarousel';

export const RemotionRoot: React.FC = () => {
  const fps = 30;
  // 1.5s + 1.5s + 4.0s + 1.5s = 8.5 seconds total
  const durationInFrames = Math.floor(8.5 * fps);

  return (
    <>
      <Composition
        id="TradeBlockCarousel"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: 'なぜ90%のデイトレーダーは\n資金を溶かすのか…',
          empathyText: '手法が悪いのではありません。\n脳の「興奮状態」が原因です。',
          appRevealText: '強制的に、相場から離れろ。',
          ctaText: 'プロフィールから\n無料ダウンロード',
        }}
      />
    </>
  );
};
