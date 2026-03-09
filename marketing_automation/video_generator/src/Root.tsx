import { Composition } from 'remotion';
import { TradeBlockCarousel } from './TradeBlockCarousel';

export const RemotionRoot: React.FC = () => {
  const fps = 30;
  // Slide 1,2: 1.5s each. Slide 3,4: 4s each = 11s total
  const durationInFrames = Math.floor(11 * fps);

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
          hookText: '「また無駄なエントリーした…」',
          empathyText: 'それ、手法のせいじゃありません。\n脳が「ポジポジ病」に侵されています。',
          appRevealText: '強制的に、相場からあなたを隔離する。',
          ctaText: '物理ブロックアプリ、今すぐDL',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_6.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: '「取り返さなきゃ…」で資金を溶かす人へ',
          empathyText: '熱くなった時の連打トレード。\nそれがあなたの敗因です。',
          appRevealText: '感情トレードを、システムで物理遮断。',
          ctaText: '強制ロックアプリ、今すぐDL',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_5.png',
          bgImageSrc2A: 'assets/part2/trading_despair_4.png',
          bgImageSrc2B: 'assets/part2/trading_despair_2.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: '勝ってたのに、夜中に利益を飛ばす絶望。',
          empathyText: 'チキン利食いと、深夜の謎エントリー。\n意志の力では防げません。',
          appRevealText: '勝ち逃げ確定。翌朝7時まで強制ロック。',
          ctaText: '資金を守るアプリ、今すぐDL',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_despair_3.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: 'チャートを開くと、ついエントリーしてしまう。',
          empathyText: '「待つのが仕事」と頭では分かっていても、\n指は止められない。',
          appRevealText: 'なら、証券アプリを開けなくすればいい。',
          ctaText: '物理ブロックアプリ、今すぐDL',
          bgImageSrc1A: 'assets/part1/trading_driving_man.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: '"I\'ll make it back on the next trade..."',
          empathyText: 'That\'s Revenge Trading.\nYour brain is hijacking your account.',
          appRevealText: 'Physically lock yourself out of the market.',
          ctaText: 'Download the blocker app.',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_6.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: 'One emotional trade wiping out the week?',
          empathyText: 'Overtrading on tilt is the #1 reason\ntraders blow up their accounts.',
          appRevealText: 'Block your brokerage apps instantly.',
          ctaText: 'Download the blocker app.',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_5.png',
          bgImageSrc2A: 'assets/part2/trading_despair_4.png',
          bgImageSrc2B: 'assets/part2/trading_despair_2.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: 'Giving back today’s profits at midnight?',
          empathyText: 'You secured the bag, then got greedy.\nWillpower isn’t enough to stop you.',
          appRevealText: 'Secure your win. Lock the app until 7AM.',
          ctaText: 'Download the blocker app.',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_despair_3.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: 'Can\'t stop checking the charts?',
          empathyText: 'If your finger is itching to enter,\nyou are already gambling.',
          appRevealText: 'Take the phone out of your own hands.',
          ctaText: 'Download the blocker app.',
          bgImageSrc1A: 'assets/part1/trading_driving_man.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: '“下一单我一定能赚回来…”',
          empathyText: '这就是“报复性交易”。\n你的大脑正在毁掉你的账户。',
          appRevealText: '系统级强制锁定，斩断亏损。',
          ctaText: '立即下载物理防沉迷App',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_6.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: '一次上头，毁掉一周的利润？',
          empathyText: '情绪化的高频交易，\n是90%交易者爆仓的唯一原因。',
          appRevealText: '物理屏蔽所有交易软件。',
          ctaText: '立即下载物理防沉迷App',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_5.png',
          bgImageSrc2A: 'assets/part2/trading_despair_4.png',
          bgImageSrc2B: 'assets/part2/trading_despair_2.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: '半夜盯盘，把白天的利润全亏光？',
          empathyText: '本来已经落袋为安，却又控制不住手痒。\n靠意志力是停不下来的。',
          appRevealText: '保住盈利。强制锁定手机至次日早7点。',
          ctaText: '立即下载防剁手App',
          bgImageSrc1A: 'assets/part1/trading_despair_cn_1.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_despair_3.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
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
          hookText: '空仓就浑身难受，总想开一单？',
          empathyText: '这就是典型的“交易多动症”。\n手痒入场，只会成为市场的燃料。',
          appRevealText: '把手机的控制权，交给系统。',
          ctaText: '立即下载物理防沉迷App',
          bgImageSrc1A: 'assets/part1/trading_driving_man.png',
          bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
          bgImageSrc2A: 'assets/part2/trading_loss_phone_1.png',
          bgImageSrc2B: 'assets/part2/trading_despair_7.png',
          bgImageSrc4: 'assets/part4/part4.mov',
          videoSrc: 'assets/part3/part3.mov'
        }}
      />
    </>
  );
};

