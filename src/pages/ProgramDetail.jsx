import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import program1 from '../assets/program1.jfif';
import program2 from '../assets/Program2.jfif';
import program3 from '../assets/Program3.jfif';

const ProgramDetail = () => {
  const { programId } = useParams();
  const navigate = useNavigate();

  const programsData = {
    'cleaning-campaign': {
      id: 1,
      slug: 'cleaning-campaign',
      image: program1,
      title: 'Cleaning Campaign',
      shortDescription: 'Activities focused on village cleanliness, waste management, and environmental awareness through youth participation.',
      fullDescription: 'Our Cleaning Campaign is a cornerstone initiative of the Dubar Youth Society, dedicated to maintaining the pristine beauty of our village while fostering environmental consciousness among community members. This comprehensive program goes beyond simple cleanup activities to create lasting change in how our community approaches waste management and environmental stewardship.',
      objectives: [
        'Maintain village cleanliness and hygiene',
        'Promote environmental awareness among youth and community',
        'Establish sustainable waste management practices',
        'Create a cleaner, healthier living environment for all residents',
      ],
      activities: [
        'Regular village cleanup drives every month',
        'Waste segregation awareness programs',
        'Tree plantation and green space maintenance',
        'Educational workshops on environmental conservation',
        'Community engagement events for sustainable practices',
      ],
    },
    'health-first-aid': {
      id: 2,
      slug: 'health-first-aid',
      image: program2,
      title: 'Health & First Aid Program',
      shortDescription: 'Awareness and basic first aid programs conducted to promote health, safety, and emergency preparedness in the community.',
      fullDescription: 'The Health & First Aid Program is designed to equip our community members with essential medical knowledge and emergency response skills. Through partnerships with local health professionals and medical institutions, we provide comprehensive training that can save lives and improve overall community health outcomes.',
      objectives: [
        'Provide basic first aid training to community members',
        'Promote health awareness and preventive care',
        'Build emergency response capabilities in the village',
        'Create a network of trained first responders',
      ],
      activities: [
        'First aid training workshops and certification programs',
        'Health awareness camps and medical checkups',
        'Emergency response drills and simulations',
        'Distribution of first aid kits to households',
        'Collaboration with local health centers for regular health camps',
      ],
    },
    'sports-competition': {
      id: 3,
      slug: 'sports-competition',
      image: program3,
      title: 'Sports Competition',
      shortDescription: 'Friendly sports competitions organized to encourage teamwork, physical fitness, and youth engagement.',
      fullDescription: 'Our Sports Competition program brings together youth from across the village and neighboring communities to celebrate sportsmanship, teamwork, and healthy competition. These events serve as a platform for talent discovery, physical fitness promotion, and community bonding through the universal language of sports.',
      objectives: [
        'Promote physical fitness and healthy lifestyle among youth',
        'Foster teamwork and sportsmanship values',
        'Provide platform for talent showcase and development',
        'Strengthen inter-community relationships through sports',
      ],
      activities: [
        'Annual inter-village sports tournaments',
        'Regular practice sessions and coaching camps',
        'Football, volleyball, and traditional sports competitions',
        'Youth talent identification and mentorship programs',
        'Sports equipment provision and facility maintenance',
      ],
    },
  };

  const program = programsData[programId];

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Program Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {program.title}
              </h1>
              <p className="text-lg text-green-50 leading-relaxed">
                {program.shortDescription}
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {/* About Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">About This Program</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {program.fullDescription}
              </p>
            </div>

            {/* Objectives */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Objectives</h2>
              <ul className="space-y-4">
                {program.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0 text-xl" />
                    <span className="text-slate-600 text-lg">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Key Activities</h2>
              <div className="grid gap-4">
                {program.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                  >
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-slate-700 text-lg">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Involved */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
              <p className="text-green-50 mb-6 max-w-2xl mx-auto">
                Interested in participating or supporting this program? We'd love to have you join our community initiatives.
              </p>
              <button
                onClick={() => navigate('/#membership')}
                className="px-8 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
              >
                Get Membership
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramDetail;
