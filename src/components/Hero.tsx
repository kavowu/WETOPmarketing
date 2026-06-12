
import heroBg from '../assets/wetop_hero_background.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70 z-0" />
      
      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        {/* Main title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          WETOP —{' '}
          <span className="glow-text">把森林與陽光的潔淨力搬進你家。</span>
        </h1>

        {/* Subtitle */}
        <div className="mb-8 space-y-4">
          <p className="text-lg md:text-xl text-foreground">
            傳統空氣清淨機是被動的過濾機器。
          </p>
          <p className="text-lg md:text-xl">
            WETOP 是{' '}
            <span className="text-accent font-bold">
              主動重建大自然自潔機制的環境淨化系統。
            </span>
          </p>
        </div>

        {/* Italic description */}
        <p className="text-foreground/70 italic mb-12 text-base md:text-lg">
          把森林與陽光的潔淨力搬進你家。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.wetoptec.com.tw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            重新認識 WETOP →
          </a>
          <a
            href="#features"
            className="btn-secondary inline-block"
          >
            看五大特性 →
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20 -z-10" />
    </section>
  );
};
