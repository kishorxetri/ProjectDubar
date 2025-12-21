import { useEffect, useRef, useState } from 'react';
import { FaBullhorn, FaCalendarAlt } from 'react-icons/fa';
import { noticeAPI } from '../services/api';

const NoticeBoard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
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

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await noticeAPI.getAll();
      // Get only the first 3 notices for homepage preview
      setNotices((response.notices || []).slice(0, 3));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching notices:', error);
      setError('Failed to load notices');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No date';

    try {
      const date = new Date(dateString);

      // Check if date is valid
      if (isNaN(date.getTime())) {
        return 'Invalid date';
      }

      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Invalid date';
    }
  };

  return (
    <section id="notice" ref={sectionRef} className="py-20 bg-white">
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
              Notice Board
            </h2>
            <div className="w-20 h-1 bg-green-600 rounded-full mx-auto transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Latest updates and announcements
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-slate-600">Loading notices...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && notices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No notices available at the moment</p>
            <p className="text-slate-500 text-sm mt-2">Check back later for updates</p>
          </div>
        )}

        {/* Notices List */}
        {!loading && !error && notices.length > 0 && (
          <div
            className={`max-w-4xl mx-auto space-y-4 mb-12 transition-all duration-1000 delay-200 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            {notices.map((notice, index) => (
              <div
                key={notice._id}
                className="group bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  {/* Left: Icon and Title */}
                  <div className="flex items-start gap-3 flex-1">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <FaBullhorn className="w-5 h-5 text-green-600" />
                    </div>

                    {/* Title and NEW Badge */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
                          {notice.title}
                        </h3>
                        {notice.isNew && (
                          <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-semibold rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right: Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg">
                      <FaCalendarAlt className="w-3.5 h-3.5 text-slate-600" />
                      <span className="text-sm font-medium text-slate-600">
                        {formatDate(notice.updatedAt || notice.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed ml-13">
                  {notice.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* View All Notices Button */}
        {!loading && notices.length > 0 && (
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            <button className="group relative px-8 py-4 bg-green-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/50">
              <span className="relative z-10">View All Notices</span>
              {/* Split Curtain Effect */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-green-700 transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
                <div className="w-1/2 h-full bg-green-700 transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NoticeBoard;
