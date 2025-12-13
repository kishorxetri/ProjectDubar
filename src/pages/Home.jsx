import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import OurPrograms from '../Components/OurPrograms';
import GalleryPreview from '../Components/GalleryPreview';
import NoticeBoard from '../Components/NoticeBoard';
import LocationMap from '../Components/LocationMap';
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

      <LocationMap />

      <Footer />
    </div>
  );
};

export default Home;
