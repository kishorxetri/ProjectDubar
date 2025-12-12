import { useEffect, useRef, useState } from 'react';
import aboutImage from '../assests/Scroll2.jfif';

const About = () => {
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

  const coreValues = [
    { title: 'Unity', description: 'Working together as one community' },
    { title: 'Service', description: 'Dedicated to helping our village' },
    { title: 'Awareness', description: 'Educating and empowering youth' },
    { title: 'Environment', description: 'Protecting our natural heritage' },
    { title: 'Culture', description: 'Preserving our traditions' },
    { title: 'Development', description: 'Building a better tomorrow' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Sticky Image */}
          <div
            className={`transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="Dubar Youth Society"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
              }`}
          >
            {/* Header */}
            <div className="mb-8 group cursor-pointer">
              <h2 className="text-[38px] font-bold text-slate-800 mb-4 inline-block">
                About Us
              </h2>
              <div className="w-20 h-1 bg-green-600 rounded-full transition-all duration-500 ease-out group-hover:w-full"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dubar Youth Society is a community-driven youth organization formed by the young people of Dubar village. We work to promote social welfare, awareness activities, environmental protection, cultural preservation, and community development.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Our Mission
                </h3>
                <p className="text-slate-600">
                  To empower youth and uplift our community through unity, service, and sustainable development initiatives.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Our Vision
                </h3>
                <p className="text-slate-600">
                  A thriving village where youth lead positive change, preserve our heritage, and build a prosperous future for all.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Core Values
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-green-50 border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-md"
                  >
                    <h4 className="font-semibold text-green-700 mb-1">
                      {value.title}
                    </h4>
                    <p className="text-xs text-slate-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mb-8 p-6 bg-slate-50 border-l-4 border-green-600 rounded-r-xl">
              <p className="text-lg italic text-slate-700">
                "Strong youth, strong community."
              </p>
            </div>

            {/* Brief History */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Our Journey
              </h3>
              <p className="text-slate-600">
                Established in 2080 in Dordi Rural Municipality, Lamjung, our society has grown from a small group of passionate youth to a thriving community organization. We continue to serve our village with dedication and hope for a brighter future.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-3 bg-green-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/50">
                <span className="relative z-10">Our Programs</span>
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full bg-green-700 transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                  <div className="w-1/2 h-full bg-green-700 transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                </div>
              </button>

              <button className="px-8 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl transition-all duration-300 hover:bg-slate-200 hover:scale-105 hover:shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
