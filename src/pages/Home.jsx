import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import OurPrograms from '../Components/OurPrograms';
import GalleryPreview from '../Components/GalleryPreview';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />

      <OurPrograms />

      <GalleryPreview />

      <section
        id="notice"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Notice Board
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Stay connected with the latest news and updates from our village
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-slate-50"
      >
        <div className="text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Contact Us
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Reach out and be part of our growing community
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
