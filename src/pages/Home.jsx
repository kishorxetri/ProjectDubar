import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import OurPrograms from '../Components/OurPrograms';
import GalleryPreview from '../Components/GalleryPreview';
import NoticeBoard from '../Components/NoticeBoard';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />

      <OurPrograms />

      <GalleryPreview />

      <NoticeBoard />

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

      <Footer />
    </div>
  );
};

export default Home;
