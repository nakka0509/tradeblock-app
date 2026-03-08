import { Composition } from 'remotion';
import { TradeBlockCarousel } from './TradeBlockCarousel';

export const RemotionRoot: React.FC = () => {
  const fps = 30;
  // Slide 1,2: 3s each. Slide 3,4: 4s each = 14s total
  const durationInFrames = Math.floor(14 * fps);

  return (
    <>
      <Composition
        id="Feature1-TimeLock"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: 'なぜ90%のデイトレーダーは資金を溶かすのか…',
          empathyText: '手法が悪いのではありません。脳の「興奮状態」が原因です。',
          appRevealText: '強制的に、相場から離れろ。',
          ctaText: 'プロフィールから今すぐダウンロード',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_6.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
      <Composition
        id="Feature2-TradeLog"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: '自分のトレードを客観視できていますか？',
          empathyText: '負けトレードを直視しない限り、成長はありません。',
          appRevealText: 'すべての記録を、このアプリに。',
          ctaText: 'プロフィールから今すぐダウンロード',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_5.png',
          bgImageSrc2A: 'assets/part2/trading_despair_4.png',
          bgImageSrc2B: 'assets/part2/trading_despair_2.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
      <Composition
        id="Feature3-SecureProfit"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: '「今日の利益を、明日まで守りきれるか？」',
          empathyText: 'せっかく勝ったのに、夜中に溶かしていませんか？',
          appRevealText: '勝ち逃げ確定。翌朝7時まで強制ロック。',
          ctaText: 'プロフィールから今すぐダウンロード',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_despair_3.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
      <Composition
        id="Feature4-Questionnaire"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: '「ポジションを持たないと落ち着かない…」',
          empathyText: 'それ、ポジポジ病です。無駄なエントリーは命取り。',
          appRevealText: 'ロック解除前に、もう一度自分に問いかけろ。',
          ctaText: 'プロフィールから今すぐダウンロード',
          bgImageSrc1A: 'assets/part1/trading_driving_man.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />

      {/* --- ENGLISH VERSIONS --- */}
      <Composition
        id="Feature1-TimeLock-EN"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: 'Why do 90% of day traders\nlose their money?',
          empathyText: 'It’s not your strategy.\nIt’s your emotional brain.',
          appRevealText: 'Force yourself to\nstep away from the charts.',
          ctaText: 'Download now\nfrom the profile link.',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_6.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
      <Composition
        id="Feature2-TradeLog-EN"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: 'Are you truly objective\nabout your trades?',
          empathyText: 'You can’t grow if you ignore\nyour losing streaks.',
          appRevealText: 'Keep all your records\nin one place.',
          ctaText: 'Download now\nfrom the profile link.',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_5.png',
          bgImageSrc2A: 'assets/part2/trading_despair_4.png',
          bgImageSrc2B: 'assets/part2/trading_despair_2.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
      <Composition
        id="Feature3-SecureProfit-EN"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: 'Can you protect today’s profit\nuntil tomorrow?',
          empathyText: 'Stop giving back your gains\nwith late-night overtrading.',
          appRevealText: 'Secure your wins.\nLock the app until 7 AM.',
          ctaText: 'Download now\nfrom the profile link.',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_despair_3.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
      <Composition
        id="Feature4-Questionnaire-EN"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: 'Anxious without a position?',
          empathyText: 'That’s overtrading.\nUseless entries destroy accounts.',
          appRevealText: 'Force yourself to rethink\nbefore you unlock.',
          ctaText: 'Download now\nfrom the profile link.',
          bgImageSrc1A: 'assets/part1/trading_driving_man.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
      {/* --- CHINESE (SIMPLIFIED) VERSIONS --- */}
      <Composition
        id="Feature1-TimeLock-CN"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: '为什么90%的日内交易者都亏损？',
          empathyText: '不是策略的问题，是大脑的"冲动模式"在作怪。',
          appRevealText: '强制让自己离开市场。',
          ctaText: '点击主页链接立即下载',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_6.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
      <Composition
        id="Feature2-TradeLog-CN"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: '你真的能客观看待自己的交易吗？',
          empathyText: '不直视亏损交易，就无法进步。',
          appRevealText: '将所有记录汇总于此。',
          ctaText: '点击主页链接立即下载',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_5.png',
          bgImageSrc2A: 'assets/part2/trading_despair_4.png',
          bgImageSrc2B: 'assets/part2/trading_despair_2.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
      <Composition
        id="Feature3-SecureProfit-CN"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: '今天的盈利，你能守到明天吗？',
          empathyText: '好不容易赚到的钱，别在深夜再次输掉。',
          appRevealText: '保住盈利。强制锁定至次日早7点。',
          ctaText: '点击主页链接立即下载',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_despair_3.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
      <Composition
        id="Feature4-Questionnaire-CN"
        component={TradeBlockCarousel}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: '不持仓就坐立难安？',
          empathyText: '这就是过度交易。无谓的入场是毁掉账户的元凶。',
          appRevealText: '解锁前，再问一次自己。',
          ctaText: '点击主页链接立即下载',
          bgImageSrc1A: 'assets/part1/trading_driving_man.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/ScreenRecording_03-08-2026 14-36-25_1.mov',
          videoSrc: 'assets/part3/ScreenRecording_03-08-2026 14-38-49_1.mov'
        }}
      />
    </>
  );
};

