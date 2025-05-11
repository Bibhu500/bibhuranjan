import React, { useRef, useState } from 'react';
import CaseStudyCard from './CaseStudyCard';
import { ChevronLeft, ChevronRight, LineChart, BarChart3, Search, RefreshCw, Lightbulb, FileText, Settings, Users, DollarSign } from 'lucide-react';

const CaseStudiesSection = () => {
  const scrollContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('RCA');

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const caseStudies = {
    RCA: [
      {
        title: "Rapido's Driver Rating Dropped by 15%",
        type: "RCA",
        icon: <Search className="text-blue-600" size={24} />,
        slug: "rapido-driver-rating",
        description: "Root cause analysis and comprehensive strategy to address the sudden drop in driver ratings for Rapido, a bike taxi service.",
        isDetailed: true
      },
      {
        title: "E-commerce Checkout Abandonment",
        type: "RCA",
        icon: <Search className="text-blue-600" size={24} />,
        slug: "ecommerce-checkout",
        description: "Investigating why 35% of users abandon their cart at checkout and implementing solutions to reduce abandonment rate.",
        isDetailed: true
      },
      {
        title: "Mobile App Crash Analysis",
        type: "RCA",
        icon: <Search className="text-blue-600" size={24} />,
        slug: "app-crash-analysis",
        description: "Identifying the root causes of frequent app crashes and implementing a robust error handling system."
      }
    ],
    Design: [
      {
        title: "Digital Wallet Payment Flow Redesign",
        type: "Design",
        icon: <RefreshCw className="text-purple-600" size={24} />,
        slug: "wallet-redesign",
        description: "Redesigning the payment flow for a digital wallet application to reduce drop-offs and improve user satisfaction.",
        isDetailed: true
      },
      {
        title: "Healthcare App UI/UX Overhaul",
        type: "Design",
        icon: <RefreshCw className="text-purple-600" size={24} />,
        slug: "healthcare-app-design",
        description: "Complete redesign of a healthcare app interface to improve accessibility and user engagement for elderly users."
      },
      {
        title: "E-commerce Product Page Redesign",
        type: "Design",
        icon: <RefreshCw className="text-purple-600" size={24} />,
        slug: "product-page-redesign",
        description: "Redesigning product pages to increase conversion rates and improve the overall shopping experience."
      }
    ],
    Metrics: [
      {
        title: "E-commerce Conversion Rate Optimization",
        type: "Metrics",
        icon: <LineChart className="text-green-600" size={24} />,
        slug: "ecommerce-conversion-rate",
        description: "Data-driven approach to identify and implement key optimizations to improve an e-commerce platform's conversion rate by 22%.",
        isDetailed: true
      },
      {
        title: "SaaS Product Retention Analysis",
        type: "Metrics",
        icon: <LineChart className="text-green-600" size={24} />,
        slug: "saas-retention",
        description: "Analyzing user behavior patterns to identify factors affecting retention and implementing targeted improvements."
      },
      {
        title: "Mobile App Engagement Metrics",
        type: "Metrics",
        icon: <LineChart className="text-green-600" size={24} />,
        slug: "app-engagement",
        description: "Developing and tracking key engagement metrics to improve user retention and daily active users."
      }
    ],
    "Product Improvement": [
      {
        title: "Subscription Service Revenue Strategy",
        type: "Strategy",
        icon: <BarChart3 className="text-yellow-600" size={24} />,
        slug: "subscription-strategy",
        description: "Strategic overhaul of subscription pricing and features to increase revenue by 35% while improving customer satisfaction.",
        isDetailed: true
      },
      {
        title: "AI Feature Prioritization Framework",
        type: "Framework",
        icon: <Lightbulb className="text-blue-600" size={24} />,
        slug: "ai-prioritization",
        description: "Creating and implementing a framework to prioritize AI features based on impact, feasibility, and strategic alignment."
      },
      {
        title: "Product Launch Strategy",
        type: "Strategy",
        icon: <FileText className="text-blue-600" size={24} />,
        slug: "product-launch",
        description: "Developing and executing a successful product launch strategy for a new mobile application."
      }
    ]
  };

  const tabIcons = {
    RCA: <Search className="mr-2" size={18} />,
    Design: <RefreshCw className="mr-2" size={18} />,
    Metrics: <LineChart className="mr-2" size={18} />,
    "Product Improvement": <Settings className="mr-2" size={18} />
  };

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Case Studies</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Real-world product challenges I've tackled, showcasing my problem-solving approach, analytical thinking, and impact-driven solutions.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {Object.keys(caseStudies).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tabIcons[tab]}
              {tab}
            </button>
          ))}
        </div>

        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors -ml-4 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 scrollbar-hide snap-x scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {caseStudies[activeTab].map((study, index) => (
              <div key={index} className="snap-start shrink-0">
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors -mr-4 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection; 