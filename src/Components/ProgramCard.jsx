import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ProgramCard = ({ image, title, description, slug }) => {
  return (
    <Link
      to={`/programs/${slug}`}
      className="block group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all duration-300">
          <span>Learn More</span>
          <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default ProgramCard;
