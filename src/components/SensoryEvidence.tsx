

import biWenImg from '../assets/鼻聞為實.png';

export const SensoryEvidence: React.FC = () => {
  return (
    <section id="sensory" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">嗅覺證據：從「眼見為憑」到「鼻聞為實」</h2>
          <p className="section-subtitle">
            傳統清淨機讓你「看」數據；WETOP 讓你「聞」結果
          </p>
        </div>

        {/* Full Image */}
        <div className="rounded-2xl overflow-hidden border border-border">
          <img
            src={biWenImg}
            alt="鼻聞為實 - WETOP 讓你的鼻子成為最值得信賴的空氣檢測儀"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
