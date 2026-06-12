

interface PainPointCard {
  emoji: string;
  title: string;
  description: string;
}

export const PainPoints: React.FC = () => {
  const painPoints: PainPointCard[] = [
    {
      emoji: '👁️',
      title: '看不見的效果',
      description: '真的乾淨了嗎？還是只把髒東西藏在濾網裡？',
    },
    {
      emoji: '💰',
      title: '持續維護壓力',
      description: '濾網要一直換、電費貴、不敢 24 小時開',
    },
    {
      emoji: '🏠',
      title: '表面污染無效',
      description: '門把、沙發、牆面還是髒的，油煙、菸味、黴味一直回來',
    },
    {
      emoji: '😷',
      title: '病毒不只在空氣中',
      description: '孩子摸了門把、玩具、地板，清淨機根本管不到',
    },
  ];

  return (
    <section id="pain-points" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">你家的隱形威脅</h2>
          <p className="section-subtitle">
            這些不是「想要更好」的選項，而是每個家庭都在面對的日常焦慮
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="card-hover p-6 rounded-lg bg-card border border-border"
            >
              <div className="text-4xl mb-4">{point.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
