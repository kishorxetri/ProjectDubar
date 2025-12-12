import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slide1 from '../assests/scroll1.jfif';
import slide2 from '../assests/Scroll2.jfif';
import slide3 from '../assests/Scroll3.jfif';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { id: 1, image: slide1, alt: 'Dubar Youth Society Community' },
    { id: 2, image: slide2, alt: 'Village Activities' },
    { id: 3, image: slide3, alt: 'Youth Programs' },
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  // Auto-scroll to next section after 8 seconds
  useEffect(() => {
    const scrollTimer = setTimeout(() => {
      const nextSection = document.querySelector('#about');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 8000);

    return () => clearTimeout(scrollTimer);
  }, []);

  // Slider auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Image Slider - Simple Fade */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-100 text-sm font-medium">
                Empowering Communities Since 2080
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              Dubar Youth Society
            </h1>

            {/* Subtext */}
            <p className="text-xl sm:text-2xl text-green-100 mb-6 font-medium">
              Established in 2080 • Located in Dordi, Lamjung
            </p>

            {/* Quote */}
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              "Empowering youth to uplift our village through unity, service, and awareness."
            </p>

            {/* Buttons with Curtain Effect */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-green-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-600/50">
                <span className="relative z-10">Explore Programs</span>
                {/* Split Curtain Effect */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full bg-green-700 transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                  <div className="w-1/2 h-full bg-green-700 transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                </div>
              </button>

              <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                <span className="relative z-10">View Gallery</span>
                {/* Split Curtain Effect */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full bg-white/20 transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                  <div className="w-1/2 h-full bg-white/20 transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <FaChevronRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </section>
  );
};

export default Hero;
