import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudyCard = ({ title, type, icon, slug, description, isDetailed = false }) => {
  return (
    <div className="min-w-[300px] md:min-w-[350px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col mx-2 my-4 overflow-hidden">
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-50 rounded-md">
            {icon}
          </div>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            type === 'RCA' ? 'bg-red-100 text-red-800' : 
            type === 'Design' ? 'bg-purple-100 text-purple-800' : 
            type === 'Metrics' ? 'bg-green-100 text-green-800' : 
            type === 'Strategy' ? 'bg-yellow-100 text-yellow-800' : 
            type === 'Product Enhancement' ? 'bg-indigo-100 text-indigo-800' : 
            'bg-blue-100 text-blue-800'
          }`}>
            {type}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
      <div className="p-4 border-t border-gray-100">
        {isDetailed ? (
          <Link to={`/case-studies/${slug}`} className="text-blue-600 font-medium flex items-center hover:text-blue-800">
            View full case study <ArrowRight size={16} className="ml-1" />
          </Link>
        ) : (
          <span className="text-gray-400 text-sm">Coming soon</span>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard; 