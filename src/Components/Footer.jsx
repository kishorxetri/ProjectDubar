import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dubar Youth Society</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A community-driven youth organization working to promote social welfare,
              awareness activities, and community development in Dubar village.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-300 hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-slate-300 hover:text-green-400 transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-slate-300 hover:text-green-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#notice" className="text-slate-300 hover:text-green-400 transition-colors">
                  Notice Board
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <FaMapMarkerAlt className="text-green-400" />
                <span>Dordi, Lamjung, Nepal</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <FaPhone className="text-green-400" />
                <span>+977 XXX-XXXXXXX</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <FaEnvelope className="text-green-400" />
                <span>info@dubaryouth.org</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 Dubar Youth Society. All rights reserved.
          </p>

          {/* Admin Link */}
          <Link
            to="/admin/login"
            className="text-slate-500 hover:text-green-400 text-sm transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
