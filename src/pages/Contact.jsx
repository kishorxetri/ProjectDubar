import { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Location',
      details: 'Dubar, Dordi Rural Municipality',
      subDetails: 'Lamjung, Nepal',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: '+977 XXX-XXXXXXX',
      subDetails: 'Mon - Fri, 9AM - 5PM',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: 'info@dubaryouth.org',
      subDetails: 'We reply within 24 hours',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white py-20 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any inquiries or to get involved with our community initiatives.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-20 h-1 bg-white/50 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-20 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-transparent hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <info.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white transition-colors duration-300">
                    {info.title}
                  </h3>

                  {/* Details */}
                  <p className="text-slate-700 font-semibold mb-1 group-hover:text-white transition-colors duration-300">
                    {info.details}
                  </p>
                  <p className="text-sm text-slate-500 group-hover:text-white/90 transition-colors duration-300">
                    {info.subDetails}
                  </p>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>

          {/* Map Container */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
              {/* Decorative Top Border */}
              <div className="h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600"></div>

              {/* Map Header */}
              <div className="relative bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-2xl animate-bounce" style={{ animationDuration: '2s' }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">
                      Dubar Youth Society Club House
                    </h3>
                    <p className="text-green-50 text-sm flex items-center gap-2">
                      <FaClock className="w-3.5 h-3.5" />
                      Open daily for community activities
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="relative w-full bg-slate-100" style={{ paddingBottom: '40%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.1508310156037!2d84.4422034!3d28.2331013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39956d0009e9948f%3A0x176aa62d723db707!2sDubar%20youth%20society%20club%20house!5e0!3m2!1sen!2snp!4v1765616325783!5m2!1sen!2snp"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dubar Youth Society Location"
                ></iframe>
              </div>

              {/* Map Footer */}
              <div className="bg-gradient-to-r from-slate-50 to-green-50/30 px-8 py-5 border-t border-slate-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Dordi Rural Municipality</p>
                      <p className="text-xs text-slate-500">Lamjung, Gandaki Province</p>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/dir//Dubar+youth+society+club+house/@28.2331013,84.4422034,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10">Get Directions</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div
            className={`mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 text-center">
              <h4 className="text-2xl font-bold text-slate-800 mb-4">Visit Us Anytime</h4>
              <p className="text-slate-600 leading-relaxed">
                Our club house is located in the heart of Dubar village, serving as a vibrant hub for youth activities,
                community meetings, and social programs. Feel free to visit us during our regular hours or contact us
                to schedule a meeting with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
