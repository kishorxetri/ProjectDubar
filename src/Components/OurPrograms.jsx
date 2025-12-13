import { useEffect, useRef, useState } from 'react';
import ProgramCard from './ProgramCard';
import program1 from '../assests/program1.jfif';
import program2 from '../assests/Program2.jfif';
import program3 from '../assests/Program3.jfif';

const OurPrograms = () => {
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

  const programs = [
    {
      id: 1,
      image: program1,
      title: 'Cleaning Campaign',
      description:
        'Activities focused on village cleanliness, waste management, and environmental awareness through youth participation.',
    },
    {
      id: 2,
      image: program2,
      title: 'Health & First Aid Program',
      description:
        'Awareness and basic first aid programs conducted to promote health, safety, and emergency preparedness in the community.',
    },
    {
      id: 3,
      image: program3,
      title: 'Sports Competition',
      description:
        'Friendly sports competitions organized to encourage teamwork, physical fitness, and youth engagement.',
    },
  ];

  return (
    <section id="programs" ref={sectionRef} className="py-20 bg-white">
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
              Our Programs
            </h2>
            <div className="w-20 h-1 bg-green-600 rounded-full mx-auto transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Community initiatives that bring positive change to our village
          </p>
        </div>

        {/* Programs Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              image={program.image}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
