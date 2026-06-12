

export const Comparison: React.FC = () => {
  const traditionalPoints = [
    '被動等污染飄進來',
    '只抓空氣中的懸浮物',
    '表面污染（門把、沙發）無效',
    '濾網需頻繁更換成本高',
    '關機就失效',
  ];

  const wetopPoints = [
    '主動釋放淨化因子到每個角落',
    '空氣 + 所有物體表面同步淨化',
    '主動分解污染源不只是吸附',
    '零耗材沒有後續開銷',
    '24/7 不間斷守護',
  ];

  return (
    <section id="comparison" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            WETOP 環境淨化，不是傳統空氣清淨而是
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Traditional */}
          <div className="p-8 rounded-lg bg-card border-2 border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              ❌ 傳統空氣清淨機
            </h3>
            <ul className="space-y-4">
              {traditionalPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/80">
                  <span className="text-foreground/40 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WETOP */}
          <div className="p-8 rounded-lg bg-card border-2 border-accent">
            <h3 className="text-2xl font-bold mb-6 text-accent">
              ✓ WETOP 環境淨化系統
            </h3>
            <ul className="space-y-4">
              {wetopPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <span className="text-accent mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Essence Box */}
        <div className="p-8 rounded-lg bg-card border-2 border-accent text-center">
          <p className="text-sm font-semibold text-foreground/70 mb-3 uppercase tracking-wider">
            WETOP 的本質
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-accent mb-4 glow-text-sm">
            重建大自然自潔力的生態系統
          </h3>
          <p className="text-lg text-foreground">
            不是家電，而是安全艙
          </p>
        </div>
      </div>
    </section>
  );
};
