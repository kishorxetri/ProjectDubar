import { useEffect, useRef, useState } from 'react';
import gallery1 from '../assests/Gallery1.jfif';
import gallery2 from '../assests/Gallery2.jfif';
import gallery3 from '../assests/Gallery3.jfif';
import gallery4 from '../assests/Gallery4.jfif';
import gallery5 from '../assests/Gallery5.jfif';
import gallery6 from '../assests/Gallery6.jfif';

const GalleryPreview = () => {
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

  const galleryImages = [
    { id: 1, src: gallery1, alt: 'Village scenery' },
    { id: 2, src: gallery2, alt: 'Community landscape' },
    { id: 3, src: gallery3, alt: 'Group activity' },
    { id: 4, src: gallery4, alt: 'Community gathering' },
    { id: 5, src: gallery5, alt: 'Health program' },
    { id: 6, src: gallery6, alt: 'Cleaning campaign' },
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-slate-50">
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
              Moments from Our Community
            </h2>
            <div className="w-20 h-1 bg-green-600 rounded-full mx-auto transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            A glimpse of our activities and village life
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div
          className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          <button className="group relative px-8 py-4 bg-green-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/50">
            <span className="relative z-10">View Full Gallery</span>
            {/* Split Curtain Effect */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full bg-green-700 transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
              <div className="w-1/2 h-full bg-green-700 transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
