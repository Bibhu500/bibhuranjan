import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CaseStudiesSection from '../components/CaseStudiesSection';
import { 
  Linkedin, 
  Mail, 
  Briefcase, 
  Code, 
  Cog, 
  Users, 
  Wrench, 
  Languages, 
  Trophy, 
  Award, 
  GitBranch, 
  Globe,
  ArrowRight,
  ChevronDown,
  BarChart3,
  Lightbulb,
  Search,
  RefreshCw,
  FileText,
  Settings,
  Zap,
  Target,
  PieChart,
  LineChart
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Add scroll spy for navigation highlighting
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-blue-600');
        if (link.getAttribute('href') && link.getAttribute('href').substring(1) === current) {
          link.classList.add('text-blue-600');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Animation on scroll
    const handleScrollAnimation = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="bg-gray-50 font-[Inter] scroll-smooth">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Default layout for larger screens */}
          <div className="hidden sm:flex sm:flex-col md:flex-row items-center">
            <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
              {/* <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Product Manager
              </div> */}
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                Hi, I'm <span className="text-blue-600">Bibhu Ranjan</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
              I turn complex challenges into simple, impactful solutions through outcome-driven product strategy and AI innovation.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:bibhuranjan621@gmail.com" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                  Contact Me <ArrowRight size={16} className="ml-2" />
                </a>
                <a href="https://www.linkedin.com/in/bibhu-ranjan-49569b16a/" target="_blank" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition flex items-center">
                  LinkedIn <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 order-2 md:order-1 flex justify-center mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <img src="/profilepic.png" alt="Profile" className="relative rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-white" />
              </div>
            </div>
          </div>

          {/* Mobile-only layout */}
          <div className="grid grid-cols-5 gap-4 sm:hidden">
            {/* Text content taking 60% */}
            <div className="col-span-3">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-2">
                Product Manager
              </div>
              <h1 className="text-2xl font-bold mb-2 text-gray-800">
                Hi, I'm <span className="text-blue-600">Bibhu Ranjan</span>
              </h1>
              <p className="text-sm text-gray-600 mb-4">
              I turn complex challenges into simple, impactful solutions through outcome-driven product strategy and AI innovation.
              </p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:bibhuranjan621@gmail.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm text-center flex items-center justify-center">
                  Contact Me <ArrowRight size={14} className="ml-1" />
                </a>
                <a href="https://www.linkedin.com/in/bibhu-ranjan-49569b16a/" target="_blank" className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-sm text-center flex items-center justify-center">
                  LinkedIn <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
            {/* Image taking 40% */}
            <div className="col-span-2 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <img src="/profilepic.png" alt="Profile" className="relative rounded-full shadow-lg w-24 h-24 border-2 border-white" />
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
              <ChevronDown className="text-gray-400 animate-bounce" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">How I Create Impact</h2>
            <p className="text-gray-600 text-lg">
              I combine my diversetechnical expertise with product thinking to deliver solutions that drive business growth and user satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Strategic Vision</h3>
              <p className="text-gray-600">
                Developing product roadmaps aligned with business objectives and market opportunities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                <PieChart className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Data-Driven Decisions</h3>
              <p className="text-gray-600">
                Leveraging analytics and user insights to inform product strategy and prioritization.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Zap className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">AI Innovation</h3>
              <p className="text-gray-600">
                Implementing AI-driven features that enhance user experience and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Timeline */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Professional Journey</h2>
            <p className="text-gray-600 text-lg">
              My path from software development to product management has equipped me with a unique perspective on building successful products.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

              {/* Experience Items */}
              <div className="relative">
                {/* Product Manager at Bangalore */}
                <div className="mb-16 flex justify-between items-center w-full">
                  <div className="w-5/12"></div>
                  <div className="z-20">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Briefcase className="text-white" size={16} />
                    </div>
                  </div>
                  <div className="w-5/12 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-2">
                      <h3 className="font-bold text-lg">Product Manager</h3>
                      <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Current</span>
                    </div>
                    <p className="text-gray-600 mb-2">Nov 2023 - Present</p>
                    <ul className="text-sm text-gray-500 list-disc pl-4 space-y-2">
                      <li>Developed product and product roadmap, managed operations, hiring and social media campaigns</li>
                      <li>Conducted user research and implemented AI-driven features for improved user experience</li>
                      <li>Achieved 20% increase in website retention and enhanced platform engagement to increase platform revenue.</li>
                    </ul>
                  </div>
                </div>

                {/* Technology Consultant */}
                <div className="mb-16 flex justify-between items-center w-full right-timeline">
                  <div className="w-5/12 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-2">
                      <h3 className="font-bold text-lg">Technology Consultant</h3>
                    </div>
                    <p className="text-gray-600 mb-2">2022 - Present</p>
                    <ul className="text-sm text-gray-500 list-disc pl-4 space-y-2">
                      <li>
                        Advised <a href="https://samarthclinics.com/" target="_blank" className="text-blue-600 hover:underline">SamarthClinics</a>, a leading physiotherapy chain, on:
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                          <li>Digital transformation of patient management systems</li>
                          <li>Implementation of automated appointment scheduling</li>
                          <li>Integration of telemedicine solutions for remote consultations</li>
                        </ul>
                      </li>
                      <li>
                        Consulted for <a href="https://www.cosmosinnovation.in/" target="_blank" className="text-blue-600 hover:underline">CosmosInnovation</a>, a technology solutions provider, on:
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                          <li>Product strategy for SaaS platforms and mobile applications</li>
                          <li>AI implementation in chatbot and automation solutions</li>
                          <li>Scalable architecture design for enterprise applications</li>
                        </ul>
                      </li>
                      <li>Provided strategic guidance on technology adoption and digital optimization for multiple businesses, focusing on:
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                          <li>User-centric design implementation</li>
                          <li>Performance optimization and scalability</li>
                          <li>Integration of AI and automation solutions</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="z-20">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Settings className="text-white" size={16} />
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </div>

                {/* DevOps Engineer Role */}
                <div className="mb-16 flex justify-between items-center w-full">
                  <div className="w-5/12"></div>
                  <div className="z-20">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Cog className="text-white" size={16} />
                    </div>
                  </div>
                  <div className="w-5/12 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-2">
                      <h3 className="font-bold text-lg">DevOps Engineer</h3>
                    </div>
                    <p className="text-gray-600 mb-2">Mar 2021 - Sep 2023</p>
                    <ul className="text-sm text-gray-500 list-disc pl-4 space-y-2">
                      <li>Managed project dependencies, infrastructure, and cloud environments</li>
                      <li>Developed CI/CD pipelines and automated deployment processes</li>
                      <li>Collaborated with teams to streamline development workflows</li>
                    </ul>
                  </div>
                </div>

                {/* Junior Software Developer at K12 Techno Services */}
                <div className="mb-16 flex justify-between items-center w-full right-timeline">
                  <div className="w-5/12 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-2">
                      <h3 className="font-bold text-lg">Junior Software Developer (MERN Stack)</h3>
                    </div>
                    <p className="text-gray-600 mb-2">Aug 2020 - Mar 2021</p>
                    <ul className="text-sm text-gray-500 list-disc pl-4 space-y-2">
                      <li>Developed a college management system for students and teachers to track academic progress and administrative tasks</li>
                      <li>Contributed to the development of an edtech platform providing solutions for educational institutions</li>
                      <li>Implemented features to enhance user experience and streamline operations</li>
                    </ul>
                  </div>
                  <div className="z-20">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Code className="text-white" size={16} />
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Visual Cards */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills & Expertise</h2>
            <p className="text-gray-600 text-lg">
              A diverse skill set that combines technical knowledge with product management capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Technical Skills */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Code className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Python, MERN Stack Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Platform Payment Integration, APIs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Data Analysis & Metrics Tracking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Feature Validation & Feedback Analysis
                </li>
              </ul>
            </div>

            {/* Development Methodologies */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                <Cog className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Development Methodologies</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                  Agile/LEAN Methodology
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                  System Design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                  Software Development Life Cycle
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                  Project Management (Jira, Notion)
                </li>
              </ul>
            </div>

            {/* Managerial Skills */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Managerial Skills</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Team Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Design Thinking & System Design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Problem Solving & Critical Thinking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Prioritization & Time Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Product Roadmapping
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 p-3 rounded-lg inline-block mb-4">
                <Wrench className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></div>
                  Google Analytics, Microsoft Clarity.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></div>
                  Microsoft Teams, Google Workspace, Slack
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></div>
                  Excel, Google Forms
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></div>
                  Figma, Jira, Notion, Confluence
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-lg inline-block mb-4">
                <Languages className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  Hindi (Fluent)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  English (Fluent)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  Sanskrit (Beginner)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  Russian (Beginner)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Transitioned into Product Management */}
      <section id="why-product-management" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why I Transitioned into Product Management</h2>
            <p className="text-gray-600 text-lg">
              My journey from engineering to product management has been driven by a passion for creating impactful solutions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                    <Lightbulb className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">The Catalyst</h3>
                  <p className="text-gray-600 mb-6">
                    My journey into product management has been shaped by diverse experiences across multiple roles. It began with my MERN stack development work at K12, followed by an internship with the automation team at BlackLine, where I gained valuable experience automating HR processes.
                  </p>
                  <p className="text-gray-600">
                    A defining moment came when I noticed our HR team struggling with candidate screening. Drawing on my technical background, I took the initiative to build a Smart ATS system.
                  </p>
                </div>
                <div>
                  <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                    <Target className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">The Evolution</h3>
                  <p className="text-gray-600 mb-6">
                    The emergence of AI in 2022 added another dimension to my journey. While still at BlackLine, I began experimenting with ChatGPT's API, creating personal projects that fueled my growing interest in AI-driven solutions.
                  </p>
                  <p className="text-gray-600">
                    At IELTSappeal, I finally had the opportunity to fully embrace product management. Here, I've grown from handling basic product tasks to leading teams, conducting thorough feedback analysis, and implementing AI-based features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Blogs or Articles */}
      <section id="blogs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Blogs & Articles</h2>
            <p className="text-gray-600 text-lg">
              Insights and perspectives on product management, AI, and career transitions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Article 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <FileText className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">How to Transition from Engineering to Product Management</h3>
              <p className="text-gray-600 mb-4">
                Thinking about switching from engineering to product management? Here's my journey, the skills I leveraged, and tips to make the transition smoother.
              </p>
              <Link to="/PMtransition" className="text-blue-600 hover:underline flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Article 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">The Art of Understanding User Behavior</h3>
              <p className="text-gray-600 mb-4">
                Learn how to decode user behavior, prioritize features, and build products that truly resonate with your audience.
              </p>
              <Link to="/userbehavior" className="text-blue-600 hover:underline flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Article 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Lightbulb className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">AI in Product Management: The Future is Here</h3>
              <p className="text-gray-600 mb-4">
                Explore how AI is transforming product management, from automating workflows to enhancing user experiences.
              </p>
              <Link to="/pmai" className="text-blue-600 hover:underline flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Article 4: Irreplaceable Jobs by AI in 2025 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 p-3 rounded-lg inline-block mb-4">
                <Target className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Irreplaceable Jobs by AI in 2025</h3>
              <p className="text-gray-600 mb-4">
                As AI continues to evolve, which jobs will remain irreplaceable? Discover the roles that require human creativity, empathy, and decision-making.
              </p>
              <Link to="/futurejobs" className="text-blue-600 hover:underline flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Article 5: Cracking the ATS Code */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-lg inline-block mb-4">
                <Search className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cracking the ATS Code: How Students Can Use AI to Create Resumes That Get Noticed</h3>
              <p className="text-gray-600 mb-4">
                Learn how students can leverage AI tools to craft resumes that pass Applicant Tracking Systems (ATS) and stand out to recruiters.
              </p>
              <a href="https://medium.com/@bibhuranjan621/cracking-the-ats-code-how-students-can-use-ai-to-create-resumes-that-get-noticed-and-thrive-during-08ab4879e3aa" target="_blank" className="text-blue-600 hover:underline flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Achievements</h2>
            <p className="text-gray-600 text-lg">
              Milestones and accomplishments that showcase my diverse skills and impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Achievement Cards */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <Trophy className="text-yellow-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">Marketing Leadership</h3>
              </div>
              <p className="text-gray-600">Led marketing efforts for college fest and departmental events. Raised Rs.19000.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">Singing Competition</h3>
              </div>
              <p className="text-gray-600">Won Consolation Prize in State and District-level Classical Singing Competition.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <GitBranch className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">Brain-Computer Interface</h3>
              </div>
              <p className="text-gray-600">Developed a BCI during college to enable direct communication between the brain and external devices.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Users className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">Community Leadership</h3>
              </div>
              <p className="text-gray-600">Organized monthly meetings with city council executives and raised funds for city welfare initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Projects Section */}
      <section id="fun-projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Fun Projects</h2>
            <p className="text-gray-600 text-lg">
              Personal projects that showcase my creativity and technical skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/*AI based PM RCA */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">rcamatters</h3>
              </div>
              <p className="text-gray-600 mb-4">An innovative AI platform to practice and learn Root Cause Analysis of a product problem</p>
              <a href="https://rcamatters.vercel.app" className="text-blue-600 hover:underline flex items-center">
                Visit Project <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            
            {/* B-Break */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Briefcase className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">B-Break</h3>
              </div>
              <p className="text-gray-600 mb-4">A breathing web app designed for busy professionals to take short breaks and practice mindfulness.</p>
              <a href="https://b-break.vercel.app/" className="text-blue-600 hover:underline flex items-center">
                Visit Project <ArrowRight size={16} className="ml-1" />
              </a>
            </div>

            {/* My Village Website */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Globe className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">My Village Website</h3>
              </div>
              <p className="text-gray-600 mb-4">A website dedicated to showcasing the culture, history, and events of my village.</p>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                Visit Project <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      {/* <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Education</h2>
            <p className="text-gray-600 text-lg">
              My academic background that laid the foundation for my career.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Trophy className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">BMS INSTITUTE OF TECHNOLOGY & MANAGEMENT(VTU)</h3>
                  <p className="text-gray-600">Bachelor of Engineering (Computer Science and Engineering)</p>
                  <p className="text-gray-500 text-sm">Aug 2020 - Sep 2020 | Bangalore, IND</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">GD PUBLIC SCHOOL(BSEB)</h3>
                  <p className="text-gray-600">Higher Secondary Education(Sc)</p>
                  <p className="text-gray-500 text-sm">Apr 2014 - Apr 2016 | Jaipur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Speaking Engagements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Speaking Engagements</h2>
            <p className="text-gray-600 text-lg">
              Sharing insights and expertise on technology, AI, and the future of work.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">EADA Student Club, Spain</h3>
                  <p className="text-gray-600">Guest Speaker on Job Security and Future of Work in AI Era</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Invited as a speaker to discuss the impact of AI on job security and the evolving landscape of work. Shared insights on how professionals can adapt and thrive in an AI-driven future, drawing from my experience in product management and technology consulting.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">International Speaking</span>
                <span className="mx-2">•</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 text-lg">
              Let's connect and discuss how I can contribute to your team.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-6">Reach out directly:</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="https://wa.me/918789698369?text=Hi%20Bibhu,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!" 
                  target="_blank" 
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center">
                  <span>WhatsApp</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
                <a href="mailto:bibhuranjan621@gmail.com" 
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center">
                  <span>Email</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
                <a href="https://www.linkedin.com/in/bibhu-ranjan-49569b16a/" 
                  target="_blank" 
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition flex items-center justify-center">
                  <span>LinkedIn</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home; 