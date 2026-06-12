
import { Shield, Droplets, Wind, Zap, Leaf } from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  notLabel: string;
  notText: string;
  isLabel: string;
  isText: string;
  sensoryText: string;
  quote: string;
}

export const Features: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '防疫',
      notLabel: '不是 A',
      notText: '把病毒抓進濾網的被動機器',
      isLabel: '而是 B',
      isText: '主動分解空氣與表面病毒的生態守護系統',
      sensoryText: '從「家裡隱隱有悶悶的生物味」→ 一進門就聞得出來乾淨、安全，摸任何地方都安心',
      quote: '病毒不只透過空氣傳播。WETOP 讓病毒在孩子的指尖碰到之前，就已經被滅活。',
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: '防霉',
      notLabel: '不是 A',
      notText: '容易發霉的微米級過濾器',
      isLabel: '而是 B',
      isText: '透過表面脫水與主動分解，斷絕塵蟎黴菌食物鏈',
      sensoryText: '從「隱隱潮濕霉味」→ 聞不到霉味、摸起來乾爽，像被太陽曬過的自然狀態',
      quote: '沒有黴菌，就沒有塵蟎。你聞不到霉味的那一刻，過敏源頭已經被徹底切斷。',
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: '去異味',
      notLabel: '不是 A',
      notText: '掩蓋異味的化學芳香劑',
      isLabel: '而是 B',
      isText: '直接瓦解微生物與化學分子的警報解除器',
      sensoryText: '從「回家總有股怪味」→ 推門就聞到真正乾淨的家味，鼻子終於可以放心',
      quote: '你聞不到任何味道——這就是 WETOP 給你的最高安全感。不是掩蓋，是徹底消失。',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '降微塵',
      notLabel: '不是 A',
      notText: '跟灰塵賽跑的被動過濾器',
      isLabel: '而是 B',
      isText: '主動處理產生源、讓空氣活起來的生態循環系統',
      sensoryText: '從「空氣悶悶厚重」→ 聞起來更輕盈、清澈，像雨後山林',
      quote: '你看不到 PM2.5，但你的鼻子聞得到「灰塵味真的不見了」。',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: '節能',
      notLabel: '不是 A',
      notText: '製造高昂電費與耗材無底洞的家電',
      isLabel: '而是 B',
      isText: '解除化學熱負荷、幫助空調顯著節能的基礎建設',
      sensoryText: '從「開了怕貴」→ 24 小時開著卻幾乎無感電費，隨時聞到被守護的乾淨空氣',
      quote: '冷氣調高 3 度，你不只省電費——你還聞得到，空氣變得更乾淨、更舒服。',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">五大特性：從剛需到感官化價值</h2>
          <p className="section-subtitle">不是數據，而是你能聞得出來的差異</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover p-6 rounded-lg bg-card border border-border flex flex-col"
            >
              {/* Image placeholder */}
              <div className="w-full h-40 rounded-lg mb-4 bg-muted/20 border border-border/30 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">圖片待放置</span>
              </div>

              {/* Icon and title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-accent">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              </div>

              {/* Not section */}
              <div className="mb-4 pb-4 border-b border-border/30">
                <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase">
                  {feature.notLabel}
                </p>
                <p className="text-sm text-foreground">{feature.notText}</p>
              </div>

              {/* Is section */}
              <div className="mb-4 pb-4 border-b border-border/30">
                <p className="text-xs text-accent font-semibold mb-2 uppercase">
                  {feature.isLabel}
                </p>
                <p className="text-sm font-bold text-foreground">{feature.isText}</p>
              </div>

              {/* Sensory experience */}
              <div className="mb-4 pb-4 border-b border-border/30 bg-accent/5 rounded p-3">
                <p className="text-xs text-accent font-semibold mb-2 uppercase">感官化體驗</p>
                <p className="text-sm italic text-foreground">{feature.sensoryText}</p>
              </div>

              {/* Quote */}
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase">金句</p>
                <p className="text-sm italic text-foreground">"{feature.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
