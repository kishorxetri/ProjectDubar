import { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaDirections } from 'react-icons/fa';

const LocationMap = () => {
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
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: '+977 XXX-XXXXXXX',
      subDetails: 'Mon - Fri, 9AM - 5PM',
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: 'info@dubaryouth.org',
      subDetails: 'We reply within 24 hours',
      gradient: 'from-purple-500 to-pink-600',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <section id="location" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-block group cursor-pointer">
            <h2 className="text-[38px] font-bold text-slate-800 mb-4">
              Visit Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Find us at our community club house in the heart of Dubar village
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-transparent hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 ${info.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <info.icon className={`w-7 h-7 ${info.iconColor} group-hover:text-white transition-colors duration-300`} />
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
          className={`transition-all duration-1000 delay-300 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 hover:shadow-green-200/50 transition-all duration-500">
            {/* Decorative Top Border */}
            <div className="h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600"></div>

            {/* Map Header */}
            <div className="relative bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 px-8 py-6 overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div className="relative flex items-center gap-4">
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
            <div className="relative w-full bg-slate-100" style={{ paddingBottom: '35%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.1508310156037!2d84.4422034!3d28.2331013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39956d0009e9948f%3A0x176aa62d723db707!2sDubar%20youth%20society%20club%20house!5e0!3m2!1sen!2snp!4v1765616325783!5m2!1sen!2snp"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dubar Youth Society Location"
              ></iframe>

              {/* Map Overlay Gradient (subtle) */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent"></div>
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
                  <span className="relative z-10 flex items-center gap-2">
                    <FaDirections className="w-4 h-4" />
                    Get Directions
                  </span>
                  {/* Button Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info with Icon */}
        <div
          className={`mt-12 transition-all duration-1000 delay-400 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">About Our Location</h4>
                <p className="text-slate-600 leading-relaxed">
                  Our club house is located in the heart of Dubar village, serving as a vibrant hub for youth activities,
                  community meetings, and social programs. The facility is easily accessible and welcomes visitors during
                  regular hours. Feel free to visit us or contact us to schedule a meeting with our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
