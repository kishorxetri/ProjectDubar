import { useState, useEffect, useRef } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import all gallery images
import Gallery1 from '../assests/Gallery1.jfif';
import Gallery2 from '../assests/Gallery2.jfif';
import Gallery3 from '../assests/Gallery3.jfif';
import Gallery4 from '../assests/Gallery4.jfif';
import Gallery5 from '../assests/Gallery5.jfif';
import Gallery6 from '../assests/Gallery6.jfif';
import Gallery7 from '../assests/Gallery7.jfif';
import Gallery8 from '../assests/Gallery8.jfif';
import Gallery9 from '../assests/Gallery9.jfif';
import Program1 from '../assests/program1.jfif';
import Program2 from '../assests/Program2.jfif';
import Program3 from '../assests/Program3.jfif';
import Scroll1 from '../assests/scroll1.jfif';
import Scroll2 from '../assests/Scroll2.jfif';
import Scroll3 from '../assests/Scroll3.jfif';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const sectionRef = useRef(null);

  const galleryImages = [
    { src: Gallery1, title: 'Health Campaign', category: 'Programs' },
    { src: Gallery2, title: 'Village Landscape', category: 'Village' },
    { src: Gallery3, title: 'Health Campaign', category: 'Programs' },
    { src: Gallery4, title: 'Group Photo', category: 'People' },
    { src: Gallery5, title: 'Team Gathering', category: 'People' },
    { src: Gallery6, title: 'Group Photo', category: 'People' },
    { src: Gallery7, title: 'Cleaning Campaign', category: 'Programs' },
    { src: Gallery8, title: 'Community Event', category: 'Events' },
    { src: Gallery9, title: 'Meeting', category: 'People' },
    { src: Program1, title: 'Cleaning Campaign', category: 'Programs' },
    { src: Program2, title: 'Health Program', category: 'Programs' },
    { src: Program3, title: 'Sports Competition', category: 'Programs' },
    { src: Scroll1, title: 'Village Scene', category: 'Village' },
    { src: Scroll2, title: 'Group Photo', category: 'People' },
    { src: Scroll3, title: 'Youth Activity', category: 'Events' },
  ];

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

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
    setIsZoomed(false);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
    setIsZoomed(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

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
          <div className="inline-block mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaImages className="text-4xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto">
            Capturing moments of growth, togetherness, and community spirit in Dubar village
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-20 h-1 bg-white/50 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-20 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">{galleryImages.length}</div>
              <div className="text-sm text-slate-600">Total Photos</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {galleryImages.filter(img => img.category === 'People').length}
              </div>
              <div className="text-sm text-slate-600">People</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {galleryImages.filter(img => img.category === 'Programs').length}
              </div>
              <div className="text-sm text-slate-600">Programs</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {galleryImages.filter(img => img.category === 'Village').length}
              </div>
              <div className="text-sm text-slate-600">Village</div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onClick={() => openLightbox(index)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 transition-all duration-300 backdrop-blur-sm">
          {/* Backdrop (clickable area to close) */}
          <div
            className="absolute inset-0 z-0"
            onClick={closeLightbox}
          ></div>

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-[60] group"
            aria-label="Close"
          >
            <FaTimes className="text-white text-xl group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Previous Button / Only show if not zoomed for better experience */}
          {!isZoomed && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 group border border-white/10"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-white text-2xl group-hover:-translate-x-1 transition-transform" />
            </button>
          )}

          {/* Next Button / Only show if not zoomed */}
          {!isZoomed && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 group border border-white/10"
              aria-label="Next"
            >
              <FaChevronRight className="text-white text-2xl group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          {/* Image Container */}
          <div className={`relative z-10 transition-all duration-500 ease-out ${isZoomed ? 'scale-100 max-w-full max-h-full' : 'scale-95 max-w-6xl max-h-[85vh]'} flex flex-col items-center justify-center`}>
            <div
              className={`relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className={`w-full transition-all duration-700 ease-in-out ${isZoomed ? 'h-auto max-h-screen object-cover scale-110' : 'h-full max-h-[75vh] object-contain'}`}
              />

              {/* Zoom Instruction Overlay (fades out) */}
              {!isZoomed && (
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
                    Click to enlarge
                  </span>
                </div>
              )}
            </div>

            {/* Caption - Only show when not zoomed for focus */}
            {!isZoomed && (
              <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="px-4 py-1 bg-green-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    {selectedImage.category}
                  </span>
                  <span className="text-white/40 text-sm font-medium">
                    {currentIndex + 1} of {galleryImages.length}
                  </span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                  {selectedImage.title}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
