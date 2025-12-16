import { useEffect, useRef, useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { memberAPI } from '../services/api';

const Membership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await memberAPI.create(
        formData.name,
        formData.phone,
        formData.address,
        formData.email
      );

      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', address: '', email: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting membership:', err);
      setError(err.response?.data?.message || 'Failed to submit membership application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: FaCheckCircle, text: 'Access to all community programs' },
    { icon: FaCheckCircle, text: 'Participate in decision-making' },
    { icon: FaCheckCircle, text: 'Networking opportunities' },
    { icon: FaCheckCircle, text: 'Skill development workshops' },
    { icon: FaCheckCircle, text: 'Community service recognition' },
    { icon: FaCheckCircle, text: 'Monthly newsletters and updates' },
  ];

  return (
    <section id="membership" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-block group cursor-pointer">
            <h2 className="text-[38px] font-bold text-slate-800 mb-4">
              Become a Member
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Join our vibrant community and be part of positive change in Dubar village
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Benefits */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="lg:sticky lg:top-24">
              {/* Benefits Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Membership Benefits</h3>
                  <p className="text-slate-600">What you'll get as a member</p>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                        <benefit.icon className="w-full h-full text-green-600" />
                      </div>
                      <p className="text-slate-700 font-medium">{benefit.text}</p>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="mt-8 p-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-2">Ready to Join?</h4>
                    <p className="text-green-50 text-sm">
                      Fill out the form to start your journey with us. Together, we can make a difference!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Membership Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-slate-100 relative overflow-hidden">
              {/* Decorative Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600"></div>

              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-slide-down">
                  <FaCheckCircle className="text-green-600 text-xl flex-shrink-0" />
                  <p className="text-green-700 font-medium">
                    Thank you! Your membership application has been submitted successfully.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 transition-colors duration-300">
                      <FaUser className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 transition-colors duration-300">
                      <FaPhone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="+977 XXX-XXXXXXX"
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div className="group">
                  <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-green-600 transition-colors duration-300">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </div>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Enter your complete address"
                    ></textarea>
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-green-600 transition-colors duration-300">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-600/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </span>
                  {/* Split Curtain Hover Effect */}
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full bg-emerald-700 transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                    <div className="w-1/2 h-full bg-emerald-700 transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                  </div>
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-slate-500 text-center mt-4">
                  By submitting this form, you agree to our terms and conditions. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
