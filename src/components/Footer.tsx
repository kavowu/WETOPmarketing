
import wetopLogo from '../assets/WETOP-LOGO-紅.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <img src={wetopLogo} alt="WETOP Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-lg">WETOP</span>
            </div>
            <p className="text-muted-foreground text-sm">
              重建大自然自潔力的生態系統
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <h4 className="font-bold text-foreground mb-4">快速連結</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#pain-points"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  環境威脅
                </a>
              </li>
              <li>
                <a
                  href="#comparison"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  破題定位
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  五大特性
                </a>
              </li>
              <li>
                <a
                  href="#sensory"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  感官證據
                </a>
              </li>
            </ul>
          </div>

          {/* Official Website */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-foreground mb-2">官方網站</h4>
            <a
              href="https://www.wetoptec.com.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors text-sm"
            >
              www.wetoptec.com.tw
            </a>
            <a
              href="https://www.pict-inside.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors text-sm"
            >
              www.pict-inside.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© 2024 WETOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
