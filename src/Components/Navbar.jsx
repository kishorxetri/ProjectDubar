import { useState, useEffect } from 'react';
import logo from '../assests/Logo.jfif';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Notice', href: '#notice' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-green-200/50'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <img
              src={logo}
              alt="Dubar Youth Society Logo"
              className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 transition-all duration-300 ${isScrolled
                ? 'ring-green-500 shadow-md shadow-green-500/30'
                : 'ring-white/50 shadow-lg'
                }`}
            />
            <div className="hidden sm:flex flex-col">
              <span
                className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'
                  }`}
              >
                Dubar Youth Society
              </span>
              <span
                className={`text-xs font-medium transition-colors duration-300 ${isScrolled ? 'text-green-600' : 'text-green-100'
                  }`}
              >
                Growing Together
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-4 lg:px-5 py-2.5 overflow-hidden rounded-lg"
              >
                <span
                  className={`relative z-10 font-medium text-sm transition-colors duration-300 ${isScrolled
                    ? 'text-slate-700 group-hover:text-green-600'
                    : 'text-white/95 group-hover:text-white'
                    }`}
                >
                  {link.name}
                </span>
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${isScrolled
                    ? 'bg-green-50 opacity-0 group-hover:opacity-100'
                    : 'bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100'
                    }`}
                ></div>
                <span
                  className={`absolute bottom-1 left-4 lg:left-5 right-4 lg:right-5 h-0.5 rounded-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${isScrolled ? 'bg-green-600' : 'bg-white'
                    }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 sm:p-2.5 rounded-xl transition-all duration-300 ${isScrolled
              ? 'text-slate-700 hover:bg-green-50'
              : 'text-white hover:bg-white/10 backdrop-blur-sm'
              }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 rounded-full bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-green-200/80 px-4 sm:px-6 py-4 sm:py-6 space-y-2 shadow-xl">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 sm:px-5 py-3 sm:py-3.5 text-slate-700 hover:text-green-600 hover:bg-green-50 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
