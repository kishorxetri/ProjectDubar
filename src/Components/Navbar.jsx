import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assests/Logo.jfif';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', type: 'hash' },
    { name: 'Programs', href: '#programs', type: 'hash' },
    { name: 'Gallery', href: '/gallery', type: 'link' },
    { name: 'Notice', href: '#notice', type: 'hash' },
    { name: 'Contact', href: '/contact', type: 'link' },
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
          <Link
            to="/"
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
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              link.type === 'link' ? (
                <Link
                  key={link.name}
                  to={link.href}
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
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
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
              )
            ))}

            {/* Admin Button */}
            <Link
              to="/admin/login"
              className="group relative ml-3 px-5 lg:px-6 py-2.5 overflow-hidden rounded-xl transition-all duration-500 hover:scale-105"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${isScrolled
                ? 'bg-gradient-to-r from-green-600 via-green-500 to-emerald-600'
                : 'bg-gradient-to-r from-green-500 via-emerald-500 to-green-600'
                }`}></div>

              {/* Animated Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Content */}
              <span className="relative z-10 font-bold text-sm text-white flex items-center gap-2">
                <svg
                  className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="tracking-wide">Admin</span>
              </span>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-xl ring-2 ring-green-400/50 group-hover:ring-green-300 group-hover:ring-4 transition-all duration-300"></div>
            </Link>
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
            link.type === 'link' ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-slate-700 hover:text-green-600 hover:bg-green-50 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-slate-700 hover:text-green-600 hover:bg-green-50 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            )
          ))}

          {/* Admin Button - Mobile */}
          <Link
            to="/admin/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group relative flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4 overflow-hidden rounded-xl font-bold transition-all duration-500 transform hover:scale-[1.02] mt-4"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 rounded-xl"></div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>

            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Content */}
            <svg
              className="w-5 h-5 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-white relative z-10 tracking-wide">Admin Login</span>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-xl ring-2 ring-green-400/50 group-hover:ring-green-300 group-hover:ring-4 transition-all duration-300"></div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
