import { Link } from 'react-router-dom';
import { FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Notice Board', href: '#notice' },
    { name: 'Visit Us', href: '#location' },
  ];

  const socialLinks = [
    { icon: FaPhone, href: 'tel:+977XXXXXXXXX', color: 'hover:bg-green-600', label: 'Phone' },
    { icon: FaFacebook, href: '#', color: 'hover:bg-blue-600', label: 'Facebook' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Dubar Youth Society
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              A community-driven youth organization dedicated to promoting social welfare,
              awareness activities, and sustainable development in Dubar village and beyond.
            </p>

            {/* Social Media */}
            <div>
              <p className="text-sm font-semibold text-slate-400 mb-3">Connect With Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-10 h-10 bg-slate-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-slate-300 hover:text-green-400 transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-green-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 group">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <FaMapMarkerAlt className="text-green-400 w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Dubar, Dordi</p>
                  <p className="text-xs text-slate-400">Lamjung, Nepal</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-300 group">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <FaPhone className="text-blue-400 w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">+977 XXX-XXXXXXX</p>
                  <p className="text-xs text-slate-400">Mon - Fri, 9AM - 5PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-300 group">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <FaEnvelope className="text-purple-400 w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">info@dubaryouth.org</p>
                  <p className="text-xs text-slate-400">24/7 Support</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-1 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-400 flex items-center gap-2">
            © 2025 Dubar Youth Society. Made with
            <FaHeart className="text-red-500 w-4 h-4 animate-pulse" />
            for our community
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/admin/login"
              className="text-slate-500 hover:text-green-400 transition-colors duration-300 text-xs font-medium"
            >
              Admin
            </Link>
            <span className="text-slate-600">|</span>
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
