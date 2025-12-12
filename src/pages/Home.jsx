import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-slate-50"
      >
        <div className="text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Us
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Rooted in our village traditions, growing towards a brighter future
          </p>
        </div>
      </section>

      <section
        id="programs"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Programs
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Community initiatives that bring positive change to our village
          </p>
        </div>
      </section>

      <section
        id="gallery"
        className="min-h-screen flex items-center justify-center bg-slate-50"
      >
        <div className="text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Gallery
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Capturing moments of growth and togetherness in our community
          </p>
        </div>
      </section>

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
