import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import wetopLogo from './src/assets/WETOP-LOGO-紅.png';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: '環境威脅', href: '#pain-points' },
    { label: '破題定位', href: '#comparison' },
    { label: '五大特性', href: '#features' },
    { label: '感官證據', href: '#sensory' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-nav border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="https://www.wetoptec.com.tw"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img src={wetopLogo} alt="WETOP Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-lg hidden sm:inline">WETOP</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b border-border">
          <div className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
