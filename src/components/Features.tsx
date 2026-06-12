
import { useState } from 'react';
import { Shield, Droplets, Wind, Zap, Leaf, X } from 'lucide-react';
import imgFangYi from '../assets/行銷-防疫_0.png';
import imgFangMei from '../assets/行銷-防霉_0.png';
import imgQuYiWei from '../assets/行銷-去異味_0.png';
import imgJiangWeiChen from '../assets/行銷-降微塵_0.png';
import imgJieNeng from '../assets/行銷-節能_0.png';

interface FeatureItem {
  icon: React.ReactNode;
  image: string;
  title: string;
  notText: string;
  isText: string;
  sensoryText: string;
  quote: string;
}

export const Features: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const features: FeatureItem[] = [
    {
      icon: <Droplets className="w-6 h-6" />,
      image: imgFangMei,
      title: '防霉',
      notText: '容易發霉的微米級過濾器',
      isText: '透過表面脫水與主動分解，斷絕塵蟎黴菌食物鏈',
      sensoryText: '從「隱隱潮濕霉味」→ 聞不到霉味、摸起來乾爽，像被太陽曬過的自然狀態',
      quote: '沒有黴菌，就沒有塵蟎。你聞不到霉味的那一刻，過敏源頭已經被徹底切斷。',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      image: imgFangYi,
      title: '防疫',
      notText: '把病毒抓進濾網的被動機器',
      isText: '主動分解空氣與表面病毒的生態守護系統',
      sensoryText: '從「家裡隱隱有悶悶的生物味」→ 一進門就聞得出來乾淨、安全，摸任何地方都安心',
      quote: '病毒不只透過空氣傳播。WETOP 讓病毒在孩子的指尖碰到之前，就已經被滅活。',
    },
    {
      icon: <Wind className="w-6 h-6" />,
      image: imgQuYiWei,
      title: '去異味',
      notText: '掩蓋異味的化學芳香劑',
      isText: '直接瓦解微生物與化學分子的警報解除器',
      sensoryText: '從「回家總有股怪味」→ 推門就聞到真正乾淨的家味，鼻子終於可以放心',
      quote: '你聞不到任何味道——這就是 WETOP 給你的最高安全感。不是掩蓋，是徹底消失。',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      image: imgJiangWeiChen,
      title: '降微塵',
      notText: '跟灰塵賽跑的被動過濾器',
      isText: '主動處理產生源、讓空氣活起來的生態循環系統',
      sensoryText: '從「空氣悶悶厚重」→ 聞起來更輕盈、清澈，像雨後山林',
      quote: '你看不到 PM2.5，但你的鼻子聞得到「灰塵味真的不見了」。',
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      image: imgJieNeng,
      title: '節能',
      notText: '製造高昂電費與耗材無底洞的家電',
      isText: '解除化學熱負荷、幫助空調顯著節能的基礎建設',
      sensoryText: '從「開了怕貴」→ 24 小時開著卻幾乎無感電費，隨時聞到被守護的乾淨空氣',
      quote: '冷氣調高 3 度，你不只省電費——你還聞得到，空氣變得更乾淨、更舒服。',
    },
  ];

  const active = features[activeIndex];

  return (
    <section id="features" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">五大特性：從剛需到感官化價值</h2>
          <p className="section-subtitle">不是數據，而是你能聞得出來的差異</p>
        </div>

        {/* Dashboard Layout */}
        <div className="flex flex-col gap-4">

          {/* Main Display */}
          <div className="rounded-2xl overflow-hidden border border-border bg-card grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="flex items-center justify-center bg-card p-4 overflow-hidden">
              <img
                key={activeIndex}
                src={active.image}
                alt={active.title}
                className="w-full max-h-[240px] sm:max-h-[360px] object-contain transition-all duration-500 ease-out hover:scale-105 cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              />
            </div>

            {/* Right: Content */}
            <div className="p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-accent p-2 bg-accent/10 rounded-lg">{active.icon}</div>
                <h3 className="text-3xl font-bold text-foreground">{active.title}</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4 items-start">
                  <span className="text-sm font-bold text-foreground/60 bg-white/10 px-2.5 py-1 rounded whitespace-nowrap mt-0.5">
                    不是
                  </span>
                  <p className="text-base text-foreground/85 leading-relaxed font-normal">{active.notText}</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-sm font-bold text-accent bg-accent/15 px-2.5 py-1 rounded whitespace-nowrap mt-0.5">
                    而是
                  </span>
                  <p className="text-lg font-bold text-foreground leading-relaxed">{active.isText}</p>
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <p className="text-xs text-accent font-semibold mb-2 uppercase tracking-wider">感官化體驗</p>
                <p className="text-base italic text-foreground/95 leading-relaxed">{active.sensoryText}</p>
              </div>

              <p className="text-base text-foreground/85 italic leading-relaxed">「{active.quote}」</p>
            </div>
          </div>

          {/* Thumbnail Row */}
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-3 pb-4 scrollbar-none snap-x snap-mandatory">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative shrink-0 w-24 sm:w-28 lg:w-auto lg:shrink rounded-xl overflow-hidden border-2 transition-all duration-300 group snap-center ${
                  i === activeIndex
                    ? 'border-accent shadow-lg shadow-accent/20 scale-105'
                    : 'border-border hover:border-accent/50 opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-20 sm:h-24 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className={`absolute inset-0 flex flex-col items-center justify-end pb-2 transition-all duration-300 ${
                  i === activeIndex ? 'bg-background/30' : 'bg-background/45 group-hover:bg-background/25'
                }`}>
                  <div className={`mb-1 transition-colors ${i === activeIndex ? 'text-accent' : 'text-foreground'}`}>
                    {f.icon}
                  </div>
                  <span className={`text-[10px] sm:text-xs font-bold ${i === activeIndex ? 'text-accent' : 'text-foreground'}`}>
                    {f.title}
                  </span>
                </div>
                {i === activeIndex && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent animate-pulse" />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white/75 hover:text-accent p-2 transition-colors z-[110]"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X size={32} />
          </button>
          
          {/* Image container */}
          <div className="max-w-[95%] max-h-[95%] flex items-center justify-center p-4">
            <img
              src={active.image}
              alt={active.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scale-up"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </div>
        </div>
      )}
    </section>
  );
};
