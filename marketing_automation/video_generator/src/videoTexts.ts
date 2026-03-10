// ==========================================
// 動画テキスト管理ファイル
// テキストを追加・修正したい場合はここを編集してください。
// 追加後は node scripts/generate_tts_and_metadata.mjs を実行してください。
// ==========================================

type Lang = 'ja' | 'en' | 'zh-CN';
interface VideoProps {
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
  lang: Lang;
}

// ---- 固定アセットのパスを定数化 ----
const PART1_ASSETS = [
  'assets/part1/trading_loss_video_new.mp4',
];
const PART2_ASSETS_A = [
  'assets/part2/trading_loss_phone_1.png',
  'assets/part2/trading_despair_3.png',
  'assets/part2/trading_despair_4.png',
  'assets/part2/trading_despair_7.png',
];
const PART2_ASSETS_B = [
  'assets/part2/trading_despair_2.png',
  'assets/part2/trading_despair_6.png',
  'assets/part2/trading_despair_7.png',
];
const DEFAULT_ASSETS = {
  bgImageSrc1A: PART1_ASSETS[0],
  bgImageSrc1B: 'assets/part1/trading_despair_jp_1.png',
  bgImageSrc2A: PART2_ASSETS_A[0],
  bgImageSrc2B: PART2_ASSETS_B[0],
  bgImageSrc4: 'assets/part4/new_cta_background.mp4',
  videoSrc: 'assets/part3/part3.mp4',
  bgmSrc: 'assets/bgm.mp3',
  visualTint: 'rgba(0,0,0,0.4)'
};

// ---- テキストコンテンツ定義（日本語） ----
// ここに追加するだけでランダム抽出の対象になります。
// 各エントリーのidは必ずユニークにしてください（重複するとバグの原因になります）。
// bgImageSrc1B, bgImageSrc2A, bgImageSrc2Bは省略可（デフォルト値が使用されます）

const japaneseVariations: { id: string; hookText: string; empathyText: string; appRevealText: string; bgImageSrc2A?: string; bgImageSrc2B?: string }[] = [
  // ===== カテゴリ①：ポジポジ病 =====
  { id: 'JA-001', hookText: '「待つのが仕事」と知っていながら、今日も16回エントリーした。', empathyText: '手法が悪いんじゃない。\n指が止められないんだ。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-002', hookText: 'シグナル出てないのに「なんとなくいけそう」でエントリーした瞬間、それがポジポジ病だ。', empathyText: '感覚トレードをやめる唯一の方法は、\n物理的に手を止めることだ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-003', hookText: '今日だけで5回ナンピンした。それがポジポジ病の正体だ。', empathyText: '「一度だけ」が毎回「一度だけ」にならない。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-004', hookText: 'ポジションを持ってない＝負けてる気がして焦ってエントリーしてしまう。', empathyText: '相場にいない時間こそ、\n最高のトレードだ。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-005', hookText: '損切りしたあと1分で同じ方向にまたインした、それ全員通る道だよ。', empathyText: 'リベンジトレードを防ぐには、\nアプリを開けないこと。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-006', hookText: 'デモトレードでは勝てるのに、本番になると25回もエントリーしてしまった。', empathyText: '問題は技術じゃない。\n「焦り」という感情だ。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-007', hookText: '昨日の夜「明日こそノーポジで様子見」と決めたのに、朝9時にはすでにポジってた。', empathyText: '決意レベルでは勝てない。\nシステムこそが唯一の解決策だ。', appRevealText: '勝ち逃げ確定。翌朝まで強制ロック。' },
  { id: 'JA-008', hookText: '「もう1枚だけ」「もう10分だけ」この思考が口座を溶かしていく。', empathyText: 'ポジポジ病の人が99%言うセリフだ。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-009', hookText: 'お気に入りのチャート設定まで変えたのに、また負けた。', empathyText: 'ポジポジ病に、\n「研究」は効かない。', appRevealText: 'なら、証券アプリを開けなくすればいい。' },
  { id: 'JA-010', hookText: 'スプレッド広がる瞬間に「次こそ…」と思った回数、数えたことある？', empathyText: '意志の力では止まらない。\nそれが人間の脳だ。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-066', hookText: '「次のローソク足1本見てから」と言って、気づいたら3時間チャートを眺めていた。', empathyText: 'チャートは引力を持っている。\n離れるには仕組みが必要だ。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-067', hookText: '1日に何十回もスマホを確認して、気づいたら仕事中も食事中もチャートしか見ていない。', empathyText: 'チャートが生活の中心になる日が、\n依存症の定義上の「発症日」だ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-069', hookText: '「ここは絶対抜けない！」と確信してからエントリーして、するりと抜けていくのを何度見たか。', empathyText: '確信の強さと、\n勝率は比例しない。', appRevealText: '強制的に、相場からあなたを隔離する。' },

  // ===== カテゴリ②：リベンジトレード =====
  { id: 'JA-011', hookText: '5万円の損切り直後に10万円でリベンジして、合計15万円溶かした。', empathyText: '「取り返す」という考え自体が、\nカジノ思考だ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-012', hookText: '朝から3連敗。「昼には絶対取り返す」と誓い、夜には口座が半分になっていた。', empathyText: 'リベンジトレードに論理はない。\nあるのは怒りだけだ。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-013', hookText: '「倍返し」で入って、さらに倍を失ったことが3回ある。', empathyText: 'リベンジは人間の本能だ。\nだからシステムで封じるしかない。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-014', hookText: '連敗しているとき「次は必ず勝てる」と思うのは、コイン投げと同じ錯覚だ。', empathyText: '焦っているときの直感は、\n95%外れる。', appRevealText: '勝ち逃げ確定。翌朝まで強制ロック。' },
  { id: 'JA-071', hookText: '10連敗したその日の夜、「今夜こそ取り戻す」とナイトセッションに張り付いた。', empathyText: '疲弊した脳でのトレードが、\n最も負けやすい。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-072', hookText: '大損した翌日、「昨日の失敗は作戦が悪かった」と言い聞かせて同じことをした。', empathyText: '敗因を外に求める人は、\n同じミスを繰り返す。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-075', hookText: '損した金額と全く同じ金額を勝っても、精神的には全然「取り戻した」気分にならない現実。', empathyText: '感情は数字で満足しない。\nだから終わらない。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },

  // ===== カテゴリ③：給料・貯金・生活費（強化・最重要） =====
  { id: 'JA-018', hookText: '給料日から3日で15万円が消えた。家賃分がトレードで溶けた日の気持ち。', empathyText: '後悔は取引終了後に来る。\n感情が静まった後に。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-019', hookText: '半年かけて積み上げた50万円が1週間で消えた。それがレバレッジだ。', empathyText: '損失は一瞬で起きる。\n規律は毎日積み上げる。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-020', hookText: '「今月だけ余剰資金で」と言いながら、生活費にまで手を出している自分がいる。', empathyText: 'これがFX依存の始まりだ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-021', hookText: '副業のつもりが、本業の給料以上の損失を出している現実。', empathyText: '「勝てる」という幻想が、\n現実の損失を見えなくさせる。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-022', hookText: '積立NISAの資金を「一時的に」FXに回したことがある人、手を挙げて。', empathyText: '「一時的」は永遠に\n一時的にならない。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-051', hookText: '奨学金の返済日に、FXで同額を溶かした。', empathyText: '増やそうとして、\nあるものまで失う。これが依存の構造だ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-052', hookText: '老後資金として貯めていた200万円をFXに入金して、今83万円しか残っていない。', empathyText: '焦りと欲が、\n未来の自分を食べていく。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-053', hookText: '「給料が入ったら返す」と自分に言い訳して、今月も生活費を取り崩した。', empathyText: '取り崩し始めたら、\nそれはもうトレードではない。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-054', hookText: 'ボーナス全額をFXに入金した月に、過去最大の損失を出した。', empathyText: '大きな資金は、\n感情トレードをより大きくするだけだ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-055', hookText: '妻にFXをやっていることを3年間隠している。損失を取り返してから話すつもりで。', empathyText: '隠せている間は、\nまだ大丈夫だと思ってしまう。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-056', hookText: '友人に「100万で始めたのに今10万しかない」と打ち明けた日の恥ずかしさ。', empathyText: '損失は数字じゃない。\n自尊心とともに消えていくものだ。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-057', hookText: '子どもの学費に手を出す前に、トレードアプリのロックを設定すべきだった。', empathyText: '最悪の決断は、\n感情が最も高ぶった瞬間に起きる。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-058', hookText: 'カードローンで入金して「絶対に取り戻す」と思った時が、人生で一番危険な瞬間だった。', empathyText: '借金でのトレードは、\n依存の終着点だ。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-059', hookText: '独身時代に貯めた「もしもの時の備え」300万円が、FX歴2年でゼロになった。', empathyText: 'もしもの時のお金は、\nもしもの時のためにある。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-060', hookText: '引越し費用の50万円を「1週間だけ運用する」と言い聞かせてトレードした。', empathyText: '「一時的に」と言える間は、\nまだ自覚がない段階だ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-061', hookText: '税金の支払いに充てるつもりで確保していた30万円が、確定申告前に口座から消えた。', empathyText: 'FXで払えない税金は、\nFXでは絶対に取り戻せない。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-062', hookText: '「3ヶ月で元本2倍にして結婚資金にする」と言って、結局入金した分が消えた。', empathyText: '夢を餌にした入金が、\n最もリスクが高い。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-063', hookText: '年間500万円稼いでいるのに、FXの損失で可処分所得がほぼゼロ。', empathyText: '収入を増やす前に、\n損失を止めることが先決だ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-064', hookText: '医療費の貯金を「少しだけ」FXに使い、風邪でも病院に行けなくなった。', empathyText: '依存症は確実に、\n生活の土台から崩していく。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-065', hookText: '定年後の退職金800万円を「ちょっと増やそう」と思って2年で溶かした父の話。', empathyText: '情報が増えても、\n感情管理がなければ結果は同じだ。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },

  // ===== カテゴリ④：深夜・仕事中 =====
  { id: 'JA-023', hookText: '深夜2時。寝れない。ドル円を眺めながら「ここで売り増しするか」と考えている。', empathyText: '睡眠不足のトレードは、\n負けトレードとほぼ同義だ。', appRevealText: '勝ち逃げ確定。翌朝まで強制ロック。' },
  { id: 'JA-024', hookText: '会議中、スマホのチャートが気になって話が1ミリも入ってこなかった。', empathyText: '相場があなたの人生を\n侵食し始めている。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-025', hookText: '子どもの寝顔を見ながら、スマホでチャートを確認する自分が嫌だ。', empathyText: 'トレードで失うのは\nお金だけじゃない。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-026', hookText: 'トイレに5回行って、毎回値動きを確認した。もう普通じゃないと思った。', empathyText: 'これが「トレード依存」の正体だ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-028', hookText: '深夜3時の損切りライン引き下げ。翌朝、後悔だけが残った。', empathyText: '夜中の判断は、\n昼とは別の脳がやっている。', appRevealText: '勝ち逃げ確定。翌朝まで強制ロック。' },
  { id: 'JA-029', hookText: '家族が寝た深夜にフルレバエントリー。朝に確認したら追証が来ていた。', empathyText: '「バレなければいい」は、\n最悪の判断基準だ。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-076', hookText: '同僚が「最近目の下のクマがすごいね」と言ってきた。深夜トレードの副作用だった。', empathyText: '睡眠負債はパフォーマンスを落とし、\n判断力も奪う。', appRevealText: '勝ち逃げ確定。翌朝まで強制ロック。' },
  { id: 'JA-077', hookText: '在宅勤務になったとたん、FXの損失が3倍になった。理由は明らかだ。', empathyText: '機会が増えれば、\nポジポジ病は加速する。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-080', hookText: '子どものお迎えを忘れてチャートを見ていた日。勝っても取り戻せないものがある。', empathyText: 'FXで守りたいはずの家族を、\nFXで傷つけていないか。', appRevealText: '強制的に、相場からあなたを隔離する。' },

  // ===== カテゴリ⑤：損切りできない =====
  { id: 'JA-030', hookText: '損切りラインを3回下げた後、最終的に強制ロスカットされた。', empathyText: '損切りできない理由は、\n「負けを認めたくない」だけだ。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-031', hookText: '「もう少し待てば戻るはず」と信じ続けて、含み損が3倍になった。', empathyText: '希望と根拠は別物だ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-032', hookText: '損切り注文を入れておいたのに、手動でキャンセルしてしまった。', empathyText: '自分で自分のルールを破るのが、\nFX依存の症状だ。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-034', hookText: 'マイナス10万円を見て「まだ大丈夫」と思えた時点で、感覚が麻痺している。', empathyText: '金銭感覚の麻痺は\nFX依存の初期症状だ。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-081', hookText: '「もう少ししたら戻る」と言い続けて、含み損が給料2ヶ月分になっていた。', empathyText: '根拠のない楽観は、\n最も高くつく感情だ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-083', hookText: 'ルールでは「-2%で切る」と決めていたのに、-10%まで持ち続けてしまった。', empathyText: '自分で決めたルールを守れないなら、\n外部の仕組みに任せるしかない。', appRevealText: '強制的に、相場からあなたを隔離する。' },

  // ===== カテゴリ⑥：過信・慢心 =====
  { id: 'JA-035', hookText: '3連勝した日に「俺は才能あるかも」と思って、翌日フルレバでぶっ込んだ結果。', empathyText: '連勝は技術ではなく運かもしれない。\nそれを証明するのが次のトレードだ。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-036', hookText: '先月プラス20万円だったのに、今月それを全部と元本まで失った。', empathyText: '勝ちを守れない人は、\n永遠に勝ち続けることができない。', appRevealText: '勝ち逃げ確定。翌朝まで強制ロック。' },
  { id: 'JA-086', hookText: '「今月+50万、俺もうプロやん」と思った翌週に-80万した。', empathyText: '相場は謙虚な人間を淘汰しない。\n傲慢な人間を淘汰する。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-088', hookText: '「今日は調子がいい、必ず利益を出せる」という日が最も危険だ。', empathyText: '自信過剰は、\nポジポジ病を引き起こすトリガーだ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-090', hookText: '「先月うまくいったから今月はロットを2倍にしよう」という判断が最も口座を溶かす。', empathyText: '成功体験は、\n次の挑戦を無謀にする。', appRevealText: '勝ち逃げ確定。翌朝まで強制ロック。' },

  // ===== カテゴリ⑦：物理遮断の訴求 =====
  { id: 'JA-039', hookText: '「今日はトレードしない」と決めてから、エントリーするまで30分だった。', empathyText: '決意ではなく、物理的に「できない状態」にすることが\n唯一の解決策だ。', appRevealText: 'なら、証券アプリを開けなくすればいい。' },
  { id: 'JA-040', hookText: '自分にルールを課すより、アプリを開けなくした方が勝率が上がった。', empathyText: '規律は意志ではなく、\n仕組みで作られる。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-041', hookText: '損切り後に同じアプリを開けない状態にしたら、リベンジトレードがゼロになった。', empathyText: 'できないなら、\nやらなくていい。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-091', hookText: '「1時間だけ休憩」のつもりが4時間チャートを見続けた、なら最初から開けなければよかった。', empathyText: '「少しだけ」は人間には無理だ。\nデジタル断食にはロックが必要だ。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-093', hookText: '損切りした後に「次のチャンス」を探し始める思考が始まったら、それがロック発動のサインだ。', empathyText: '次のチャンスは、\n頭が冷えてから探すものだ。', appRevealText: 'なら、証券アプリを開けなくすればいい。' },

  // ===== カテゴリ⑧：自己嫌悪・絶望 =====
  { id: 'JA-043', hookText: '「俺にはFXの才能がない」と思ったことがある人、才能より感情管理の話をしよう。', empathyText: '負けている人のほとんどは技術ではなく、\n感情で負けている。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-044', hookText: 'FXを始めて1年後に残ったのは、40万円の損失と自己嫌悪だけだった。', empathyText: '続けるべきは「努力」ではなく、\n「正しい仕組み」だ。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-045', hookText: '「今月こそ」と思いながら12ヶ月が過ぎた。変わらない自分が嫌いだ。', empathyText: '変わるには決意ではなく、\n環境を変えることが必要だ。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-046', hookText: 'FXやめたいのにやめられない。それはもう依存症の定義そのものだ。', empathyText: '依存は意志で克服するものではなく、\n仕組みで管理するものだ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-047', hookText: '「今日負けたら本当にやめる」と100回言った。結局やめていない。', empathyText: '「やめる」と言える人は、\nまだ本当には覚悟できていない。', appRevealText: 'なら、証券アプリを開けなくすればいい。' },
  { id: 'JA-094', hookText: '毎週「今週こそは」と思い続けて、半年後も同じことを言っている自分が怖い。', empathyText: '繰り返すのは意志が弱いからではない。\n仕組みがないからだ。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-095', hookText: 'FX始める前の方が、お金も心も余裕があった。いつからこうなったんだろう。', empathyText: '始める前に戻りたいなら、\n行動を変えるしかない。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-097', hookText: '損失を取り戻そうとしてさらに大きな損失を出した瞬間に、「俺は終わった」と思った。', empathyText: '終わったのではない。\n今が仕組みを変えるタイミングだ。', appRevealText: '強制的に、相場からあなたを隔離する。' },

  // ===== カテゴリ⑨：比較・普遍化 =====
  { id: 'JA-048', hookText: '同じタイミングでFXを始めた友人が利益を出している中、自分だけが溶かし続けている。', empathyText: '差がつく原因は「エントリーの数」だ。\n少ない方が勝てる。', appRevealText: 'ポジポジ病に、意志は効かない。仕組みで止める。' },
  { id: 'JA-049', hookText: '「月利30%」より「今月トレードゼロ」の人の方が長期で資産を守っている。', empathyText: '活躍するより、\n退場しないことが最大の戦略だ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-050', hookText: '勝てるトレーダーは「何をするか」より「何をしないか」を決めている。', empathyText: 'トレードブロックは、\nあなたの「しない決断」を守るためにある。', appRevealText: 'なら、証券アプリを開けなくすればいい。' },

  // ===== カテゴリ⑩：依存・中毒の本質 =====
  { id: 'JA-098', hookText: '「やめる」よりも「うまくコントロールする」方法を探し続けている人に、本音を言う。', empathyText: '依存症は「うまくやる」ことで解決しない。\n距離を置くことでしか解決しない。', appRevealText: '強制的に、相場からあなたを隔離する。' },
  { id: 'JA-099', hookText: 'FXを開くたびに「これが最後」と思う。それでも開いてしまう。これが依存の正体だ。', empathyText: '「最後」が来ない人には、\n物理的な壁が必要だ。', appRevealText: '感情トレードを、システムで物理遮断。' },
  { id: 'JA-100', hookText: 'トレードに費やしている精神的エネルギーを、本業や家族に使えていたら人生はどうなっていただろう。', empathyText: 'FXはお金だけでなく、\n時間と集中力と人間関係も奪う。', appRevealText: '強制的に、相場からあなたを隔離する。' },
];

// ---- 最終的なバリエーション配列の組み上げ ----
// これが `prepare_daily_video.ts` で抽出される対象です。
export const videoVariations: { id: string; props: VideoProps }[] = [
  // 日本語バリエーション（100種）
  ...japaneseVariations.map(v => ({
    id: v.id,
    props: {
      hookText: v.hookText,
      empathyText: v.empathyText,
      appRevealText: v.appRevealText,
      ctaText: 'トレードブロック、今すぐダウンロード',
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: v.bgImageSrc2A ?? DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: v.bgImageSrc2B ?? DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'ja' as const,
    }
  })),

  // 英語バリエーション（日本語100案の翻訳版）
  {
    id: 'EN-001',
    props: {
      hookText: "I know 'waiting is the job.' I still overtraded 16 times today.",
      empathyText: "It's not your strategy that's broken.\nYour fingers just won't stop.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-002',
    props: {
      hookText: "No signal, just a 'feeling.' That's when overtrading starts.",
      empathyText: "The only way to stop emotional trading\nis to physically stop yourself.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-003',
    props: {
      hookText: "I averaged down 5 times today. That's what overtrading really looks like.",
      empathyText: "'Just once more' never stays\nat just once.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-004',
    props: {
      hookText: "No position feels like losing. So I enter again. Every single time.",
      empathyText: "The time you're NOT in the market\nis your best trade.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-005',
    props: {
      hookText: "I re-entered the same direction 60 seconds after my stop. Everyone does this.",
      empathyText: "To prevent revenge trades,\ndon't let yourself open the app.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-006',
    props: {
      hookText: "Demo: profitable. Live: 25 entries. The problem isn't your method.",
      empathyText: "It's not your skill.\nIt's the anxiety driving you.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-007',
    props: {
      hookText: "Last night I swore 'no trades tomorrow.' By 9 AM I already had a position.",
      empathyText: "Determination isn't enough.\nOnly a system actually works.",
      appRevealText: "Secure your profits. Force-lock the app until morning.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-008',
    props: {
      hookText: "'Just one more contract.' 'Just 10 more minutes.' That loop drains your account.",
      empathyText: "'Just one more' is what 99%\nof overtrade addicts always say.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-009',
    props: {
      hookText: "I even changed my chart colors. And still lost.",
      empathyText: "Overtrading won't be fixed\nby more 'research.'",
      appRevealText: "Take your phone out of your own hands.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-010',
    props: {
      hookText: "How many times have you thought 'next trade will be it' while watching spreads widen?",
      empathyText: "Willpower can't fix this.\nThat's just how the human brain works.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-066',
    props: {
      hookText: "'Just one more candle.' Next thing I know, 3 hours have passed.",
      empathyText: "Charts have gravity.\nYou need a system to break free.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-067',
    props: {
      hookText: "Checking my phone dozens of times a day. Charts during meals. Charts at work. Not normal.",
      empathyText: "The day the chart becomes the center of your life\nis day one of addiction.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-069',
    props: {
      hookText: "I was 100% certain that level would hold. It didn't.",
      empathyText: "Confidence level and win rate\nare not correlated.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-011',
    props: {
      hookText: "Cut ¥50K loss, revenge doubled to ¥100K. Total hole: ¥150K.",
      empathyText: "The idea of 'winning it back'\nis casino thinking in disguise.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-012',
    props: {
      hookText: "3 losses by morning. Vowed to recover by noon. By night, account was half.",
      empathyText: "Revenge trading has no logic.\nOnly rage.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-013',
    props: {
      hookText: "I've doubled down for revenge and lost twice as much — three times.",
      empathyText: "Revenge trading is pure human instinct.\nThe only fix is a system that blocks it.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-014',
    props: {
      hookText: "'This losing streak can't continue' is the gambler's fallacy. Markets don't know your run.",
      empathyText: "Your gut instinct when anxious\nis wrong 95% of the time.",
      appRevealText: "Secure your profits. Force-lock the app until morning.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-071',
    props: {
      hookText: "10 losses in a row. That night: 'I'll recover in the night session.'",
      empathyText: "Trading with an exhausted brain\nis the fastest way to lose more.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-072',
    props: {
      hookText: "Day after a big loss, I said 'yesterday's setup was wrong.' Then did the same thing.",
      empathyText: "People who blame external factors for losses\nrepeat the same mistakes.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-075',
    props: {
      hookText: "Winning back the exact amount I lost still doesn't feel like recovery. That's the trap.",
      empathyText: "Emotions don't get satisfied by numbers.\nThat's why it never ends.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-018',
    props: {
      hookText: "3 days after payday. ¥150K gone. My rent money evaporated.",
      empathyText: "Regret comes after the trade closes,\nwhen your emotions finally cool.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-019',
    props: {
      hookText: "Took 6 months to build ¥500K. 1 week to lose it. That's leverage.",
      empathyText: "Losses happen in an instant.\nDiscipline is built one day at a time.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-020',
    props: {
      hookText: "I keep saying 'just this month's spare cash' — but now I've touched my living expenses.",
      empathyText: "This is how FX dependency starts.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-021',
    props: {
      hookText: "Started as a side hustle. Now my FX losses exceed my salary.",
      empathyText: "The illusion of 'I can win'\nkeeps the losses invisible.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-022',
    props: {
      hookText: "Raise your hand if you moved your NISA savings 'temporarily' into FX.",
      empathyText: "'Temporary' never becomes permanent.\nIt just becomes permanent loss.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-051',
    props: {
      hookText: "On my student loan repayment day, I lost the exact same amount in FX.",
      empathyText: "Trying to grow money and losing what you had.\nThat's the dependency trap.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-052',
    props: {
      hookText: "I put my ¥2M retirement savings into FX. Now I have ¥830K.",
      empathyText: "Anxiety and greed are slowly\neating your future self.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-053',
    props: {
      hookText: "'I'll repay it when my salary comes in.' I've been saying that for months.",
      empathyText: "Once you start dipping in,\nyou're no longer trading.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-054',
    props: {
      hookText: "The month I deposited my entire bonus into FX, I hit my biggest loss ever.",
      empathyText: "More capital just means\nbigger emotional trades.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-055',
    props: {
      hookText: "Hiding my FX trading from my partner for 3 years. Waiting to 'win it back first.'",
      empathyText: "As long as you can hide it,\nyou think you're still okay.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-056',
    props: {
      hookText: "I told a friend 'I started with ¥1M and have ¥100K left.' Most shameful day of my life.",
      empathyText: "A loss isn't just a number.\nIt disappears with your self-respect.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-057',
    props: {
      hookText: "I should have set a lock before I ever touched my kid's education fund.",
      empathyText: "The worst decisions happen\nat the moment emotions are highest.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-058',
    props: {
      hookText: "Borrowed from a credit line with a 'guaranteed plan to win it back.' My lowest point.",
      empathyText: "Trading with borrowed money\nis the final stop of dependency.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-059',
    props: {
      hookText: "My ¥3M emergency fund from before I was married. Zero after 2 years of FX.",
      empathyText: "Emergency money exists for emergencies.\nNot for trading.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-060',
    props: {
      hookText: "I told myself the moving fund was 'just for one week of trading.' That was a lie.",
      empathyText: "As long as you can say 'just temporarily,'\nyou still haven't realized.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-061',
    props: {
      hookText: "The ¥300K I set aside for taxes was gone before tax filing day.",
      empathyText: "Money lost to FX can never be\nrecovered by more FX.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-062',
    props: {
      hookText: "'I'll double this in 3 months for our wedding fund.' The money is gone.",
      empathyText: "Using a dream as bait for a deposit\nis the highest-risk trade of all.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-063',
    props: {
      hookText: "Earning ¥5M a year but FX losses leave my disposable income near zero.",
      empathyText: "Stop growing income first.\nStop the losses first.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-064',
    props: {
      hookText: "I used my medical emergency fund 'just a little' for FX. Then couldn't see a doctor when I got sick.",
      empathyText: "Dependency systematically destroys\nthe foundation of your life.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-065',
    props: {
      hookText: "My father's ¥8M retirement lump sum. 2 years 'trying to grow it a little.' Now gone.",
      empathyText: "More information won't help\nif emotional control is zero.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-023',
    props: {
      hookText: "2 AM. Can't sleep. Staring at USD/JPY, wondering if I should add to my short.",
      empathyText: "Sleep-deprived trading is basically\na guaranteed losing trade.",
      appRevealText: "Secure your profits. Force-lock the app until morning.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-024',
    props: {
      hookText: "In a meeting. Charts on my phone. Didn't catch a single word of what was said.",
      empathyText: "The market has started\ninvading your real life.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-025',
    props: {
      hookText: "Looking at my sleeping child's face while secretly checking the chart. I hate that version of me.",
      empathyText: "FX doesn't only take money.\nIt takes everything.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-026',
    props: {
      hookText: "Went to the toilet 5 times just to check price action. I knew that wasn't normal.",
      empathyText: "This is what trading addiction\nactually looks like.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-028',
    props: {
      hookText: "3 AM. Moved my stop loss down. Woke up to nothing but regret.",
      empathyText: "3 AM judgment is made by a completely\ndifferent brain than midday judgment.",
      appRevealText: "Secure your profits. Force-lock the app until morning.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-029',
    props: {
      hookText: "Family asleep. Full leverage at midnight. Woke up to a margin call.",
      empathyText: "'As long as no one finds out'\nis the worst decision-making standard.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-076',
    props: {
      hookText: "Coworker said 'You've got really bad bags lately.' Late night trading does that.",
      empathyText: "Sleep debt kills your performance\nand steals your judgment.",
      appRevealText: "Secure your profits. Force-lock the app until morning.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-077',
    props: {
      hookText: "Started WFH. My FX losses tripled. The reason is obvious.",
      empathyText: "More opportunity means overtrading\naccelerates.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-080',
    props: {
      hookText: "Forgot to pick up my kid because I was watching charts. Even a winning trade can't undo that.",
      empathyText: "Are you hurting the family\nyou wanted FX to protect?",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-030',
    props: {
      hookText: "I moved my stop loss 3 times. Then got auto-liquidated.",
      empathyText: "The only reason you can't cut losses:\nyou don't want to admit you're wrong.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-031',
    props: {
      hookText: "'It'll bounce if I wait.' My drawdown tripled.",
      empathyText: "Hope and evidence are two\nvery different things.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-032',
    props: {
      hookText: "I had a stop order set. Then I manually cancelled it.",
      empathyText: "Breaking the rules you set for yourself\nis the symptom of FX dependency.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-034',
    props: {
      hookText: "Seeing -¥100K and thinking 'I'm still fine' — your senses are numb.",
      empathyText: "Financial numbness is an early symptom\nof FX addiction.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-081',
    props: {
      hookText: "'It'll turn around.' And now my unrealized loss is 2 months of salary.",
      empathyText: "Baseless optimism is the\nmost expensive emotion.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-083',
    props: {
      hookText: "My rule was 'cut at -2%.' I held to -10%. Every. Single. Time.",
      empathyText: "If you can't follow the rules you set yourself,\nlet an external system do it.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-035',
    props: {
      hookText: "3 wins in a row. 'Maybe I have talent.' Next day: full leverage. You know the rest.",
      empathyText: "A winning streak might be skill.\nOr luck. The next trade will reveal which.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-036',
    props: {
      hookText: "+¥200K last month. Lost it all and the principal this month.",
      empathyText: "Those who can't protect their wins\nwill never win consistently.",
      appRevealText: "Secure your profits. Force-lock the app until morning.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-086',
    props: {
      hookText: "+¥500K this month, maybe going pro. The next week: -¥800K.",
      empathyText: "Markets don't eliminate humble traders.\nThey eliminate arrogant ones.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-088',
    props: {
      hookText: "'Today I'm perfectly in the zone. I'm going to win.' That's the most dangerous state.",
      empathyText: "Overconfidence is the trigger\nthat sets off overtrading.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-090',
    props: {
      hookText: "'Last month worked, so I'll double my lot this month.' That's the trade that ruins accounts.",
      empathyText: "Past success makes the next risk feel like\nwisdom instead of gambling.",
      appRevealText: "Secure your profits. Force-lock the app until morning.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-039',
    props: {
      hookText: "Decided 'no trades today.' 30 minutes later I had a position.",
      empathyText: "It's not about willpower.\nYou need to physically make it impossible.",
      appRevealText: "Take your phone out of your own hands.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-040',
    props: {
      hookText: "Blocking myself from the app raised my win rate more than any rule I ever made.",
      empathyText: "Discipline isn't built through willpower.\nIt's built through systems.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-041',
    props: {
      hookText: "After cutting a loss, I blocked the app. Revenge trades went to zero.",
      empathyText: "If you can't do it,\nyou don't have to do it.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-091',
    props: {
      hookText: "'Just a 1-hour break' turned into 4 hours of chart watching. So just don't open it.",
      empathyText: "'Just a little' is impossible for humans.\nDigital detox needs a hard lock.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-093',
    props: {
      hookText: "The moment you start looking for 'the next opportunity' after a stop — lock now.",
      empathyText: "The next opportunity should be found\nafter your head cools down.",
      appRevealText: "Take your phone out of your own hands.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-043',
    props: {
      hookText: "Thought 'I have no talent for FX.' Let's talk about emotional control instead.",
      empathyText: "Most losers aren't defeated by skill.\nThey're defeated by emotion.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-044',
    props: {
      hookText: "1 year into FX. What remained: ¥400K loss and self-hatred.",
      empathyText: "What you should be continuing is not 'effort'\nbut 'the right system.'",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-045',
    props: {
      hookText: "12 months of 'this month will be different.' Still the same.",
      empathyText: "Change doesn't come from determination.\nIt comes from changing the environment.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-046',
    props: {
      hookText: "I want to quit FX but I can't. By definition, that's addiction.",
      empathyText: "Addiction isn't overcome by willpower.\nIt's managed through systems.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-047',
    props: {
      hookText: "Said 'if I lose today I'll quit' 100 times. I never quit.",
      empathyText: "Anyone who can still say 'I'll quit'\nhasn't truly committed yet.",
      appRevealText: "Take your phone out of your own hands.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-094',
    props: {
      hookText: "Every week 'this week will be different.' 6 months later, identical. That scares me.",
      empathyText: "Repeating isn't because your will is weak.\nIt's because there's no system.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-095',
    props: {
      hookText: "I had more money and peace before I started FX. When did it go wrong?",
      empathyText: "If you want to go back to before,\nyou have to change your behavior.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-097',
    props: {
      hookText: "Tried to recover losses. Lost even more. In that moment I thought: 'I'm done.'",
      empathyText: "You're not done.\nNow is the moment to change the system.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-048',
    props: {
      hookText: "My friend who started FX same time as me is profitable. I'm still blowing up.",
      empathyText: "The difference comes down to number of trades.\nFewer is more.",
      appRevealText: "Overtrading can't be fixed by willpower. Block it with a system.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-049',
    props: {
      hookText: "'30% monthly return' accounts get beaten long-term by the 'zero trades this month' account.",
      empathyText: "The best strategy isn't to outperform.\nIt's to not get eliminated.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-050',
    props: {
      hookText: "Winning traders decide what NOT to do — not what to do.",
      empathyText: "Trade Block exists to protect\nyour 'no-trade decisions.'",
      appRevealText: "Take your phone out of your own hands.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-098',
    props: {
      hookText: "Still looking for a way to 'control it better' instead of quitting? Real talk incoming.",
      empathyText: "Addiction isn't solved by 'getting better at it.'\nOnly distance solves it.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-099',
    props: {
      hookText: "Every time I open the app: 'this is the last time.' Then I open it again. That's addiction.",
      empathyText: "For someone whose 'last time' never comes,\na physical wall is the answer.",
      appRevealText: "Block emotional trades with a system, not a promise.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },
  {
    id: 'EN-100',
    props: {
      hookText: "What if all the mental energy you spend on trading went to your career and family?",
      empathyText: "FX takes not just money.\nIt takes time, focus, and relationships.",
      appRevealText: "Force yourself out of the market. One system. No exceptions.",
      ctaText: "Download Trade Block now.",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'en' as const,
    }
  },

  // 中国語バリエーション（日本語100案の翻訳版）
  {
    id: 'CN-001',
    props: {
      hookText: "明知道「等待就是工作」，今天我还是进场了16次。",
      empathyText: "不是你的策略有问题。\n是你的手停不下来。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-002',
    props: {
      hookText: "没有信号，只是「感觉可以」。那一刻就是频繁交易的开始。",
      empathyText: "阻止情绪化交易的唯一方法，\n就是物理上阻止自己。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-003',
    props: {
      hookText: "今天我加仓5次。这就是频繁交易的真实面目。",
      empathyText: "「就这一次」从来不会只有一次。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-004',
    props: {
      hookText: "没有持仓感觉就像在亏损。所以我又进场了。每一次都是这样。",
      empathyText: "不在市场中的时间，\n才是你最好的交易。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-005',
    props: {
      hookText: "止损后60秒我又反向进场了。每个人都经历过这个。",
      empathyText: "要防止报复性交易，\n就不要让自己打开App。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-006',
    props: {
      hookText: "在模拟账户我能赚钱。在实盘我进场了25次。问题不在你的方法。",
      empathyText: "不是你的技术。\n是焦虑在驱使你。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-007',
    props: {
      hookText: "昨晚我发誓「明天不交易」。早上9点我已经有持仓了。",
      empathyText: "光靠决心是不够的。\n只有系统才真正有效。",
      appRevealText: "保住盈利。强制锁定App到早上。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-008',
    props: {
      hookText: "「就再做一单」「就再等10分钟」。这个循环正在掏空你的账户。",
      empathyText: "「就再来一次」是99%的频繁交易者\n永远挂在嘴边的话。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-009',
    props: {
      hookText: "我甚至换了图表颜色。还是亏了。",
      empathyText: "频繁交易不是靠更多「研究」\n能解决的。",
      appRevealText: "把手机的控制权，交给系统。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-010',
    props: {
      hookText: "当点差扩大时，你脑子里想过多少次「下一单一定行」？",
      empathyText: "意志力无法解决这个问题。\n这就是人脑的运作方式。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-066',
    props: {
      hookText: "「就再看一根K线」。结果3个小时过去了。",
      empathyText: "图表有引力。\n你需要一个系统来挣脱它。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-067',
    props: {
      hookText: "一天查手机几十次。吃饭时看图。工作时看图。这不正常。",
      empathyText: "当图表成为你生活核心的那天，\n就是成瘾的第一天。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-069',
    props: {
      hookText: "我100%确定那个位置能守住。结果没有。",
      empathyText: "你有多确信和胜率，\n没有关联。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-011',
    props: {
      hookText: "止损5万，加倍到10万去报复。总亏损：15万。",
      empathyText: "「把钱赢回来」这个想法，\n本质就是赌场思维。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-012',
    props: {
      hookText: "早上亏了3次。发誓中午要追回来。到晚上，账户少了一半。",
      empathyText: "报复性交易没有逻辑。\n只有愤怒。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-013',
    props: {
      hookText: "我已经三次用2倍的仓位报复，然后亏了2倍。",
      empathyText: "报复性交易是人类的本能。\n唯一的解决方法是一个能封锁它的系统。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-014',
    props: {
      hookText: "认为「这个亏损不可能继续」是赌徒谬误。市场不知道你的连败。",
      empathyText: "你焦虑时的直觉判断，\n95%的概率是错的。",
      appRevealText: "保住盈利。强制锁定App到早上。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-071',
    props: {
      hookText: "连亏10次。那天晚上：「夜盘一定能追回来」。",
      empathyText: "用耗尽的大脑进行交易，\n是亏损更多的最快方式。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-072',
    props: {
      hookText: "大亏后的第二天，我说「昨天的策略不对」。然后做了同样的事。",
      empathyText: "把亏损归因于外部因素的人，\n会不断重蹈覆辙。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-075',
    props: {
      hookText: "就算赚回了完全相同的亏损金额，感觉上也没有「追回来」。这就是陷阱。",
      empathyText: "感情不会因为数字而满足。\n这就是为什么它永无止境。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-018',
    props: {
      hookText: "发薪日3天后，15万日元消失了。我的房租钱蒸发了。",
      empathyText: "后悔在交易结束后才来，\n在你的情绪终于冷静之后。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-019',
    props: {
      hookText: "花了6个月积累了50万日元。花了1周亏掉。这就是杠杆。",
      empathyText: "亏损发生在一瞬间。\n纪律要一天一天地建立。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-020',
    props: {
      hookText: "我一直说「就用这个月的多余资金」——但现在动用了生活费。",
      empathyText: "这就是FX依赖的开始。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-021',
    props: {
      hookText: "一开始把它当副业。现在我的FX亏损超过了工资。",
      empathyText: "「我能赢」的幻觉，\n让你看不见真实的亏损。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-022',
    props: {
      hookText: "有没有人曾经「临时」把NISA存款挪去做FX？举手。",
      empathyText: "「临时」永远不会变成永久的。\n它只会变成永久的亏损。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-051',
    props: {
      hookText: "学生贷款还款日那天，我在FX亏了同样金额的钱。",
      empathyText: "想要赚更多钱，结果连本金也赔了。\n这就是依赖的陷阱。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-052',
    props: {
      hookText: "我把200万日元的退休金存款投入FX。现在只剩83万日元。",
      empathyText: "焦虑和贪婪正在慢慢吞噬你的未来。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-053',
    props: {
      hookText: "「等发工资了就补回来」。这句话我说了好几个月了。",
      empathyText: "一旦你开始动用它，\n你做的就不再是交易了。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-054',
    props: {
      hookText: "我把全部奖金存入FX的那个月，创下了有史以来最大的亏损。",
      empathyText: "更多的资本只意味着\n更大的情绪化交易。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-055',
    props: {
      hookText: "向伴侣隐瞒FX交易已经3年了。等着把钱赚回来再说。",
      empathyText: "只要还能隐瞒，\n你就以为自己还没问题。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-056',
    props: {
      hookText: "我告诉朋友「我用100万开始，现在只剩10万」。我人生中最羞耻的一天。",
      empathyText: "亏损不只是一个数字。\n它和你的自尊心一起消失。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-057',
    props: {
      hookText: "在我动用孩子的教育基金之前，我就应该设置交易锁定。",
      empathyText: "最糟糕的决定，发生在\n情绪最高涨的那一刻。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-058',
    props: {
      hookText: "我用信用贷款进场，带着「一定能赚回来」的计划。那是我最低谷的时刻。",
      empathyText: "用借来的钱交易，\n是依赖症的终点。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-059',
    props: {
      hookText: "独身时存下的300万日元紧急备用金。2年FX之后归零。",
      empathyText: "紧急备用金是为紧急情况准备的。\n不是为了交易。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-060',
    props: {
      hookText: "我告诉自己搬家基金「只用来交易一周」。那是谎言。",
      empathyText: "只要你还能说「只是暂时的」，\n你就还没有真正认清自己。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-061',
    props: {
      hookText: "我为纳税预留的30万日元在报税前就消失了。",
      empathyText: "在FX中亏损的钱，\n永远无法用更多FX来弥补。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-062',
    props: {
      hookText: "「我3个月内把这些钱翻倍当婚礼基金」。那笔钱消失了。",
      empathyText: "用梦想作为入金的诱饵，\n是所有交易中风险最高的。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-063',
    props: {
      hookText: "年收入500万日元，但FX亏损让我的可支配收入接近零。",
      empathyText: "不要先想着增加收入。\n先止血。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-064',
    props: {
      hookText: "我「就用一点」医疗备用金做FX。然后我生病了，去不起医院。",
      empathyText: "依赖症会系统性地摧毁\n你生活的基础。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-065',
    props: {
      hookText: "我父亲800万日元的退休金。2年「想稍微增值一下」。现在没了。",
      empathyText: "如果情绪控制力为零，\n再多的信息也没用。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-023',
    props: {
      hookText: "凌晨2点。睡不着。盯着美元日元，想着要不要加仓做空。",
      empathyText: "睡眠不足的交易，基本就等于\n一笔注定亏损的交易。",
      appRevealText: "保住盈利。强制锁定App到早上。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-024',
    props: {
      hookText: "开会的时候。手机上看图表。会议上一个字也没听进去。",
      empathyText: "市场已经开始侵蚀\n你的现实生活了。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-025',
    props: {
      hookText: "看着孩子熟睡的脸，悄悄查看图表。我讨厌那个自己。",
      empathyText: "FX不只拿走钱。\n它拿走一切。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-026',
    props: {
      hookText: "上班时去了5次厕所只是为了看价格走势。我知道这不正常。",
      empathyText: "这就是交易成瘾的\n真实面目。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-028',
    props: {
      hookText: "凌晨3点。我把止损下移了。醒来只剩后悔。",
      empathyText: "凌晨3点的判断，是由和中午\n完全不同的大脑做出的。",
      appRevealText: "保住盈利。强制锁定App到早上。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-029',
    props: {
      hookText: "家人睡觉了。午夜满仓杠杆入场。醒来收到追加保证金通知。",
      empathyText: "「只要没人发现就好」，\n是最糟糕的决策标准。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-076',
    props: {
      hookText: "同事说「你最近黑眼圈好严重」。深夜交易造成的。",
      empathyText: "睡眠债会摧毁你的表现，\n也会偷走你的判断力。",
      appRevealText: "保住盈利。强制锁定App到早上。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-077',
    props: {
      hookText: "开始居家办公。我的FX亏损增加了3倍。原因很明显。",
      empathyText: "更多的机会意味着\n频繁交易会加速。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-080',
    props: {
      hookText: "我忘了去接孩子，因为我在看图表。就算那笔交易赢了，有些事情也无法弥补。",
      empathyText: "你是否正在伤害，\n你本想用FX来保护的家人？",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-030',
    props: {
      hookText: "我把止损移了3次。然后被强制平仓了。",
      empathyText: "你无法止损的唯一原因：\n你不想承认自己错了。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-031',
    props: {
      hookText: "「再等等就会反弹」。我的浮亏变成了3倍。",
      empathyText: "希望和依据是两回事。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-032',
    props: {
      hookText: "我设置了止损单。然后我手动取消了它。",
      empathyText: "打破你为自己设定的规则，\n是FX依赖的症状。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-034',
    props: {
      hookText: "看到亏损10万日元还觉得「还好」——你的感觉已经麻木了。",
      empathyText: "金钱感觉麻木是FX成瘾的\n早期症状。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-081',
    props: {
      hookText: "「很快就会好转的」。现在我的浮亏已经是两个月工资了。",
      empathyText: "毫无根据的乐观，是最昂贵的情绪。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-083',
    props: {
      hookText: "我的规则是「亏2%就止损」。我每次都持有到-10%。每一次。",
      empathyText: "如果你无法遵守自己设定的规则，\n就让外部系统来替你执行。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-035',
    props: {
      hookText: "连赢3次。「也许我真的有天赋」。第二天：满仓杠杆。你知道结果如何。",
      empathyText: "连胜可能是技术，也可能是运气。\n下一笔交易会揭晓答案。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-036',
    props: {
      hookText: "上个月盈利20万日元。这个月把它和本金都亏光了。",
      empathyText: "无法保住盈利的人，\n永远无法持续获胜。",
      appRevealText: "保住盈利。强制锁定App到早上。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-086',
    props: {
      hookText: "+50万日元这个月，也许要成为职业交易员了。下周：-80万。",
      empathyText: "市场不会淘汰谦逊的交易者。\n它淘汰傲慢的那些人。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-088',
    props: {
      hookText: "「今天我状态完美。我一定能赢」。那是最危险的状态。",
      empathyText: "过度自信是引发频繁交易的导火索。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-090',
    props: {
      hookText: "「上个月不错，所以这个月把仓位翻倍」。那就是毁掉账户的那笔交易。",
      empathyText: "过去的成功让下一次冒险看起来像智慧，\n而不是赌博。",
      appRevealText: "保住盈利。强制锁定App到早上。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-039',
    props: {
      hookText: "我决定「今天不交易」。30分钟后我已经有持仓了。",
      empathyText: "这不是意志力的问题。\n你需要物理上让它变得不可能。",
      appRevealText: "把手机的控制权，交给系统。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-040',
    props: {
      hookText: "封锁自己无法打开App，比我制定的任何交易规则都更能提高胜率。",
      empathyText: "纪律不是靠意志力建立的。\n它是靠系统建立的。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-041',
    props: {
      hookText: "止损后，我封锁了App。报复性交易降到了零。",
      empathyText: "如果你做不到，\n你就不必做。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-091',
    props: {
      hookText: "「就休息1小时」结果看了4小时图表。那就从一开始不要打开。",
      empathyText: "「就一点点」对人类来说是不可能的。\n数字戒断需要硬性锁定。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-093',
    props: {
      hookText: "止损后开始寻找「下一个机会」的那一刻——现在就锁定。",
      empathyText: "下一个机会应该在\n头脑冷静下来之后再去寻找。",
      appRevealText: "把手机的控制权，交给系统。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-043',
    props: {
      hookText: "认为「我没有FX天赋」。让我们来谈谈情绪控制。",
      empathyText: "大多数亏损者不是被技术打败的。\n他们是被情绪打败的。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-044',
    props: {
      hookText: "FX一年后。剩下的只有：40万日元亏损和自我厌恶。",
      empathyText: "你应该坚持的不是「努力」，\n而是「正确的系统」。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-045',
    props: {
      hookText: "12个月的「这个月会不一样」。还是一样。",
      empathyText: "改变不来自决心。\n来自改变环境。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-046',
    props: {
      hookText: "我想戒掉FX但我做不到。按定义，这已经是成瘾了。",
      empathyText: "成瘾不是靠意志力克服的。\n它是通过系统来管理的。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-047',
    props: {
      hookText: "说过100次「今天如果亏损就要戒掉」。我没有戒掉。",
      empathyText: "还能说「我要戒掉」的人，\n还没有真正下定决心。",
      appRevealText: "把手机的控制权，交给系统。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-094',
    props: {
      hookText: "每周「这周会不一样」。6个月后还在说同样的话。这让我感到恐惧。",
      empathyText: "你一再重蹈覆辙不是因为意志薄弱。\n而是因为没有系统。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-095',
    props: {
      hookText: "开始FX之前，我有更多钱，也更安心。是什么时候开始出问题的？",
      empathyText: "如果你想回到以前，\n你必须改变自己的行为。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-097',
    props: {
      hookText: "我试图追回损失，却亏得更多。那一刻我想：「我完了」。",
      empathyText: "你没有完了。\n现在是改变系统的时候。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-048',
    props: {
      hookText: "和我同时开始FX的朋友是盈利的。我还在不断爆仓。",
      empathyText: "差异归结于交易次数。\n越少越好。",
      appRevealText: "意志力无法解决频繁交易的问题。用系统来封锁它。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-049',
    props: {
      hookText: "「月化30%」的账户，长期上被「这个月零交易」的人打败。",
      empathyText: "最好的策略不是跑赢市场。\n而是不被淘汰出局。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-050',
    props: {
      hookText: "获胜的交易者决定什么「不做」——而不是什么「做」。",
      empathyText: "Trade Block的存在，是为了保护\n你的「不交易的决定」。",
      appRevealText: "把手机的控制权，交给系统。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-098',
    props: {
      hookText: "还在找「更好地控制它」的方法而不是戒掉它？我们来说说实话。",
      empathyText: "成瘾的解决方法不是「学会更好地处理它」。\n只有保持距离才能解决。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-099',
    props: {
      hookText: "每次打开App我都想「这是最后一次」。然后我又打开了。这就是成瘾。",
      empathyText: "对于「最后一次」永远不会来临的人，\n物理屏障才是答案。",
      appRevealText: "用系统，而不是承诺，来封锁情绪化交易。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
  {
    id: 'CN-100',
    props: {
      hookText: "如果你把花在交易上的所有精神能量，转移到事业和家庭上，会怎样？",
      empathyText: "FX不只拿走钱。\n它拿走时间、专注力和人际关系。",
      appRevealText: "强制让自己离开市场。一个系统，无例外。",
      ctaText: "立即下载 Trade Block",
      bgImageSrc1A: DEFAULT_ASSETS.bgImageSrc1A,
      bgImageSrc1B: DEFAULT_ASSETS.bgImageSrc1B,
      bgImageSrc2A: DEFAULT_ASSETS.bgImageSrc2A,
      bgImageSrc2B: DEFAULT_ASSETS.bgImageSrc2B,
      bgImageSrc4: DEFAULT_ASSETS.bgImageSrc4,
      videoSrc: DEFAULT_ASSETS.videoSrc,
      lang: 'zh-CN' as const,
    }
  },
];
