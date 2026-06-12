

import { useState } from 'react';
import { EyeOff, DollarSign, Sparkles, Skull, X } from 'lucide-react';
import imgFilter from '../assets/看不見的效果.png';
import imgMaintenance from '../assets/持續維護壓力.jpg';
import imgSofa from '../assets/表面汙染無效.png';
import imgVirus from '../assets/病毒不只在空氣中.png';

interface PainPointItem {
  icon: React.ReactNode;
  image: string;
  title: string;
  subTitle: string;
  threatText: string;
  impactText: string;
  quote: string;
}

export const PainPoints: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const painPoints: PainPointItem[] = [
    {
      icon: <EyeOff className="w-6 h-6" />,
      image: imgFilter,
      title: '看不見的過濾限制',
      subTitle: '真的乾淨了嗎？還是只把髒汙藏在濾網裡？',
      threatText: '傳統空氣清淨機僅能被動吸入部分空氣，而過濾網中塞滿的灰塵與黴菌在台灣潮濕氣候下極易二次滋生，反而可能成為室內過敏源的隱性孵化器。',
      impactText: '看似開著清淨機求心安，實際上每次開機都在吹散被二次釋放的微小懸浮物與黴菌孢子。',
      quote: '濾網不是黑洞，髒汙不會憑空消失。被動吸附的極限，就是把威脅留在你與家人的呼吸範圍內。',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      image: imgMaintenance,
      title: '無止境的維護壓力',
      subTitle: '昂貴的濾網耗材、心疼的電費，讓守護打折',
      threatText: '為了維持過濾效率，必須頻繁更換高價的 HEPA 濾網；加上高瓦數運轉帶來的電費負擔，使許多家庭因心疼費用而縮短開機時間，失去全天候防護的意義。',
      impactText: '「開了嫌貴、不開怕髒」的兩難心態，讓本該 24 小時守護家人的空氣防線形同虛設。',
      quote: '健康不該被標價，當守護家人的代價變成月月支付的昂貴帳單，這種被動防禦註定難以持久。',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      image: imgSofa,
      title: '表面接觸的防護真空',
      subTitle: '沙發、牆面與邊角，清淨機管不到的死角',
      threatText: '高達 80% 的生活病毒與病菌實際上依附在物體表面（如沙發、把手、牆壁），傳統被動式清淨機僅能處理懸浮在空中的塵埃，對於桌椅表面和角落的接觸性污染完全無能為力。',
      impactText: '空氣看似被過濾了，但家人雙手摸到的沙發、抱枕和把手上依然潛藏著大量活性病菌。',
      quote: '如果威脅落在了物體表面，空氣清淨機再強，也吹不走孩子指尖即將碰到的危險。',
    },
    {
      icon: <Skull className="w-6 h-6" />,
      image: imgVirus,
      title: '主動蔓延的生物病菌',
      subTitle: '流感、腸病毒在家人間的接觸式交叉感染',
      threatText: '當家中有成員感冒或帶回病菌時，飛沫與表面病菌會在密閉空間中迅速擴散。傳統清淨機吸氣速度緩慢，根本趕不及在病毒被下一個人吸入前將其清除。',
      impactText: '家庭內部最常見的「一人感冒，全家中標」現象，正是被動過濾防禦力不足的鐵證。',
      quote: '在病毒與家人呼吸的賽跑中，被動等待過濾永遠慢了一步。我們需要的是在病菌擴散瞬間將其瓦解的防線。',
    },
  ];

  const active = painPoints[activeIndex];

  return (
    <section id="pain-points" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">你家的隱形威脅</h2>
          <p className="section-subtitle">
            這些不是「想要更好」的選項，而是每個家庭都在面對的日常焦慮
          </p>
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
                className="w-full max-h-[240px] sm:max-h-[360px] object-contain rounded-lg transition-all duration-500 ease-out hover:scale-105 cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              />
            </div>

            {/* Right: Content */}
            <div className="p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-accent p-2.5 bg-accent/15 rounded-xl">{active.icon}</div>
                <h3 className="text-2xl font-bold text-foreground">{active.title}</h3>
              </div>
              <p className="text-lg font-bold text-accent mb-6">{active.subTitle}</p>

              <div className="space-y-6 mb-6">
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-bold text-red-500 bg-red-500/10 px-2.5 py-1 rounded whitespace-nowrap mt-1">
                    現實威脅
                  </span>
                  <p className="text-base text-foreground/95 leading-relaxed font-normal">{active.threatText}</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-xs font-bold text-foreground/70 bg-white/10 px-2.5 py-1 rounded whitespace-nowrap mt-1">
                    衍生危害
                  </span>
                  <p className="text-base text-foreground/85 leading-relaxed font-normal">{active.impactText}</p>
                </div>
              </div>

              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                <p className="text-xs text-red-400 font-semibold mb-2 uppercase tracking-wider">日常警示</p>
                <p className="text-base italic text-foreground/95 leading-relaxed">「{active.quote}」</p>
              </div>
            </div>
          </div>

          {/* Thumbnail Row */}
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-3 pb-4 scrollbar-none snap-x snap-mandatory">
            {painPoints.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative shrink-0 w-28 sm:w-32 lg:w-auto lg:shrink rounded-xl overflow-hidden border-2 transition-all duration-300 group snap-center ${
                  i === activeIndex
                    ? 'border-accent shadow-lg shadow-accent/20 scale-105'
                    : 'border-border hover:border-accent/50 opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-20 sm:h-24 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className={`absolute inset-0 flex flex-col items-center justify-end pb-2 transition-all duration-300 ${
                  i === activeIndex ? 'bg-background/30' : 'bg-background/45 group-hover:bg-background/25'
                }`}>
                  <div className={`mb-1 transition-colors ${i === activeIndex ? 'text-accent' : 'text-foreground'}`}>
                    {p.icon}
                  </div>
                  <span className={`text-[10px] sm:text-xs font-bold ${i === activeIndex ? 'text-accent' : 'text-foreground'}`}>
                    {p.title}
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
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};
