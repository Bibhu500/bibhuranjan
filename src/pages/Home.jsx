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
  LineChart,
  TrendingUp,
  Star,
  Download,
  Calendar,
  MapPin
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
    <div className="bg-white font-[Inter] scroll-smooth">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Desktop Layout */}
          <div className="hidden sm:grid sm:grid-cols-12 gap-8 items-center">
            {/* Content - 8 columns */}
            <div className="col-span-8 space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for Product Management Roles
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-gray-700">Hi, I'm</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Bibhu Ranjan
                  </span>
                </h1>
                
                <div className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                  Product Manager
                </div>
                
                <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                  I transform complex product challenges into simple, impactful solutions through 
                  <span className="font-semibold text-gray-800"> outcome-driven product strategy</span> and 
                  <span className="font-semibold text-gray-800"> intelligent automation</span>. 
                  Specialized in developing AI-based features, GTM strategies, User Behavior Analysis, Growth Strategies and optimizing UI/UX. </p>
              </div>

              {/* Key Metrics Row */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">300%</div>
                  <div className="text-sm text-gray-600 font-medium">Retention Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">2+</div>
                  <div className="text-sm text-gray-600 font-medium">Years PM Experience</div>
                </div>
                <div className="text-center">
                                  <div className="text-3xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600 font-medium">Users Grown</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="mailto:bibhuranjan621@gmail.com" 
                   className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Mail size={20} />
                  Let's Connect
                  <ArrowRight size={16} />
                </a>
                <a href="https://www.linkedin.com/in/bibhu-ranjan-49569b16a/" target="_blank" 
                   className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold">
                  <Linkedin size={20} />
                  View LinkedIn
                  <ArrowRight size={16} />
                </a>
                <a
  href="https://drive.google.com/file/d/1u-Z1uncU96RYkF6aKi-2Chl-Fct9rNoM/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold"
>
  <Download size={20} />
  Download Resume
</a>

              </div>
            </div>

            {/* Profile Image - 4 columns */}
            <div className="col-span-4 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20 transform scale-110"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                  <img src="/profilepic.png" alt="Bibhu Ranjan - Product Manager" 
                       className="rounded-xl w-80 h-80 object-cover" />
                </div>
                {/* Floating Achievement Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-700">Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="sm:hidden space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20 transform scale-110"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                  <img src="/profilepic.png" alt="Bibhu Ranjan - Product Manager" 
                       className="rounded-xl w-32 h-32 object-cover" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Available for PM Roles
              </div>

              <h1 className="text-3xl font-bold text-gray-900">
                <span className="text-gray-700">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Bibhu Ranjan
                </span>
              </h1>
              
              <div className="text-lg font-semibold text-gray-800">
               Product Manager
              </div>
              
              <p className="text-base text-gray-600 leading-relaxed">
                I transform complex business challenges into simple, impactful solutions through outcome-driven product strategy and intelligent automation. Specialized in developing AI-based features, GTM strategies, User Behavior Analysis, Growth Strategies and optimizing UI/UX.
              </p>

              {/* Mobile Metrics */}
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">300%</div>
                  <div className="text-xs text-gray-600">Retention ↑</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">2+</div>
                  <div className="text-xs text-gray-600">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-xs text-gray-600">Users</div>
                </div>
              </div>

              {/* Mobile CTAs */}
              <div className="space-y-3">
                <a href="mailto:bibhuranjan621@gmail.com" 
                   className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all font-semibold w-full">
                  <Mail size={18} />
                  Let's Connect
                  <ArrowRight size={14} />
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a href="https://www.linkedin.com/in/bibhu-ranjan-49569b16a/" target="_blank" 
                     className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-xl hover:bg-blue-50 transition-all font-semibold text-sm">
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a href="https://drive.google.com/file/d/1u-Z1uncU96RYkF6aKi-2Chl-Fct9rNoM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all font-semibold text-sm">
                    <Download size={16} />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="flex flex-col items-center animate-bounce">
              <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
              <ChevronDown className="text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

            {/* Case Studies Section */}
            <CaseStudiesSection />

      {/* Impact Metrics Dashboard */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Track Record</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quantifiable achievements that demonstrate my ability to drive exceptional business results through strategic product management and data-driven decision making.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>
            
            {/* Primary Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="bg-blue-100 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-blue-600" size={32} />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
                <div className="text-gray-800 font-semibold mb-1">Website Retention</div>
                <div className="text-sm text-gray-600">Increase through analytics-backed features</div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="bg-purple-100 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform">
                  <Users className="text-purple-600" size={32} />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">10M+</div>
                <div className="text-gray-800 font-semibold mb-1">User Reach</div>
                <div className="text-sm text-gray-600">on threads and platforms via contents</div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="bg-green-100 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="text-green-600" size={32} />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
                <div className="text-gray-800 font-semibold mb-1">Automation Efficiency</div>
                <div className="text-sm text-gray-600">Through conversational AI chatbots</div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="bg-orange-100 rounded-2xl p-4 inline-block mb-4 group-hover:scale-110 transition-transform">
                  <Target className="text-orange-600" size={32} />
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">500%</div>
                <div className="text-gray-800 font-semibold mb-1">Test Participation</div>
                <div className="text-sm text-gray-600">Growth through user research & A/B testing</div>
              </div>
            </div>

            {/* Secondary Metrics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <a 
                href="https://www.threads.com/@ielts_appeal?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-2 flex justify-center">
                  <img 
                    src="/ieltsappeals.jpeg" 
                    alt="IELTS Appeal Threads Profile" 
                    className="w-8 h-8 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mb-2">
                  <iframe 
                    height="50px" 
                    width="180px" 
                    frameBorder="0" 
                    src="https://livecounts.nl/threads-realtime/embed/?c=ielts_appeal" 
                    style={{ border: 0, width: '100%', height: '50px', backgroundColor: '#FFF' }}
                    title="Live Threads Follower Count"
                  />
                </div>
                <div className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors">Live Followers</div>
                <div className="text-xs text-gray-500">Click to visit</div>
              </a>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-2xl font-bold text-pink-600 mb-1">7%</div>
                <div className="text-sm text-gray-600">Free-to-paid conversion rate</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-1">40%</div>
                <div className="text-sm text-gray-600">Course completion rate increase</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">50K+</div>
                <div className="text-sm text-gray-600">End users served across platforms</div>
              </div>
            </div>

            {/* Detailed Impact Stories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Briefcase className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">IELTSAPPEAL Growth</h3>
                </div>
                                 <div className="space-y-3 text-gray-600">
                   <p>• Scaled student base from 0 to 50,000+ users through personalization and user behavior categorization</p>
                   <p>• Launched ChatGPT-powered evaluation driving 300% engagement</p>
                   <p>• Deployed conversational AI reducing support queries by 70%</p>
                   <p>• Built intelligent scoring system generating first revenue streams</p>
                 </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Other Impacts</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p>• Impacted 500+ learners at UntraddCareer</p>
                  <p>• Enabled 5+ startups to build initial teams</p>
                  <p>• Served 20+ educational institutions at K12</p>
                  <p>• Boosted operational efficiency by 60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Summary</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Key Points */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Outcome-driven Product Manager with 2 years of hands-on experience developing and launching products, specializing in 
                    <span className="font-semibold text-blue-600"> conversational AI and API integrations</span> and 
                    <span className="font-semibold text-blue-600"> intelligent automation systems</span>. 
                    Successfully scaled user bases through ChatGPT-powered features, automated evaluation systems, and machine learning implementations across multiple edtech platforms.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Strategic Leadership</div>
                        <div className="text-sm text-gray-600">Led product roadmaps and cross-functional teams</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">AI Innovation</div>
                        <div className="text-sm text-gray-600">Implemented AI features driving user engagement</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Technical Expertise</div>
                        <div className="text-sm text-gray-600">MERN stack, Python, DevOps, System Design</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-800">Consulting Experience</div>
                        <div className="text-sm text-gray-600">Advised multiple startups on product strategy</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Key Stats */}
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">Current Role</div>
                      <div className="text-gray-800 font-semibold">Founder and Product Manager</div>
                      <div className="text-sm text-gray-600 font-medium">IELTSAPPEAL</div>
                      <div className="text-sm text-gray-600">Nov 2023 - Present</div>
                      <div className="text-xs text-gray-500 flex items-center justify-center gap-1 mt-2">
                        <MapPin size={12} />
                        Bangalore, India
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">Experience</div>
                      <div className="text-gray-800 font-semibold">2+ Years</div>
                      <div className="text-sm text-gray-600">Product Management</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Section - Redesigned */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From software development to product management - a journey of continuous learning, impact creation, and strategic thinking.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>
            
                         {/* Experience Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              
              {/* IELTSAPPEAL - Founder and Product Manager */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <a href="https://ieltsappeal.in" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-xl hover:bg-blue-200 transition-colors cursor-pointer">
                      <Briefcase className="text-blue-600" size={24} />
                    </a>
                    <div>
                      <a href="https://ieltsappeal.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                        <h3 className="text-xl font-bold text-gray-800">Founder and Product Manager</h3>
                        <p className="text-blue-600 font-semibold">IELTSAPPEAL</p>
                      </a>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Current</span>
                </div>
                <p className="text-gray-600 font-medium mb-4">Nov 2023 - Present</p>
                                 <div className="space-y-2 text-gray-700">
                   <p>• Scaled student base from 0 to 50,000+ users through AI-powered personalization</p>
                   <p>• Developed ChatGPT API-based evaluation system driving 300% retention increase</p>
                   <p>• Built conversational AI chatbot reducing manual workload by 80%</p>
                   <p>• Implemented intelligent test scoring features generating 7% conversion rate</p>
                 </div>
              </div>

              {/* UNTRADDCAREER - Product and Program Manager */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <a href="https://untraddcareer.com" target="_blank" rel="noopener noreferrer" className="bg-purple-100 p-3 rounded-xl hover:bg-purple-200 transition-colors cursor-pointer">
                      <Users className="text-purple-600" size={24} />
                    </a>
                    <div>
                      <a href="https://untraddcareer.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 transition-colors">
                        <h3 className="text-xl font-bold text-gray-800">Product & Program Manager</h3>
                        <p className="text-purple-600 font-semibold">UNTRADDCAREER</p>
                      </a>
                    </div>
                  </div>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Part-time</span>
                </div>
                <p className="text-gray-600 font-medium mb-4">May 2024 - Jun 2025</p>
                <div className="space-y-2 text-gray-700">
                  <p>• Built end-to-end operations impacting 500+ learners</p>
                  <p>• Enabled 5+ startups to build initial teams through platform</p>
                  <p>• Designed in-house LMS increasing course completion by 40%</p>
                  <p>• Boosted operational efficiency by nearly 60%</p>
                </div>
              </div>

              {/* BLACKLINE INDIA - DevOps Engineer */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-600">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Cog className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">DevOps Engineer</h3>
                      <p className="text-green-600 font-semibold">BLACKLINE INDIA</p>
                    </div>
                  </div>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Full-time</span>
                </div>
                <p className="text-gray-600 font-medium mb-4">Apr 2021 - Oct 2023</p>
                <div className="space-y-2 text-gray-700">
                  <p>• Managed production infrastructure using Jenkins, JFrog, GitHub, Docker</p>
                  <p>• Built internal Applicant Tracking System for HR team</p>
                  <p>• Collaborated with international clients and cross-functional teams</p>
                  <p>• Ensured system stability and streamlined CI/CD pipelines</p>
                </div>
              </div>

                             {/* Technology Consultant */}
               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
                 <div className="flex items-start justify-between mb-4">
                   <div className="flex items-center gap-3">
                     <div className="bg-indigo-100 p-3 rounded-xl">
                       <Settings className="text-indigo-600" size={24} />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-gray-800">Technology Consultant</h3>
                       <p className="text-indigo-600 font-semibold">Freelance</p>
                     </div>
                   </div>
                   <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">Consulting</span>
                 </div>
                 <p className="text-gray-600 font-medium mb-4">2022 - Present</p>
                 <div className="space-y-2 text-gray-700">
                   <p>• Advised <a href="https://samarthclinics.com/" target="_blank" className="text-blue-600 hover:underline font-medium">SamarthClinics</a> on AI-driven patient management and telemedicine</p>
                   <p>• Consulted <a href="https://www.cosmosinnovation.in/" target="_blank" className="text-blue-600 hover:underline font-medium">CosmosInnovation</a> on chatbot integration and ML automation</p>
                   <p>• Designed intelligent automation strategies for workflow optimization</p>
                   <p>• Implemented API-first architecture with machine learning capabilities</p>
                 </div>
               </div>

               {/* K12 TECHNO SERVICES - Junior Software Developer */}
               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-600">
                 <div className="flex items-start justify-between mb-4">
                   <div className="flex items-center gap-3">
                     <div className="bg-orange-100 p-3 rounded-xl">
                       <Code className="text-orange-600" size={24} />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-gray-800">Junior Software Developer</h3>
                       <p className="text-orange-600 font-semibold">K12 TECHNO SERVICES</p>
                     </div>
                   </div>
                   <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Full-time</span>
                 </div>
                 <p className="text-gray-600 font-medium mb-4">Jul 2020 - Jan 2021</p>
                 <div className="space-y-2 text-gray-700">
                   <p>• Developed ERP system serving 20+ institutions and 7,000+ users</p>
                   <p>• Implemented 5 new features increasing platform efficiency by 30%</p>
                   <p>• Collaborated with product, development, QA, and DevOps teams</p>
                   <p>• Ensured scalable features aligned with real-world needs</p>
                 </div>
               </div>
             </div>

            {/* Career Progression Summary */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Career Progression</h3>
                <p className="text-gray-600">From technical implementation to strategic product leadership</p>
              </div>
                             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                 <div>
                   <div className="text-2xl font-bold text-orange-600 mb-1">2020</div>
                   <div className="text-sm text-gray-600">Started as Developer</div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold text-green-600 mb-1">2021</div>
                   <div className="text-sm text-gray-600">DevOps Engineer</div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold text-indigo-600 mb-1">2022</div>
                   <div className="text-sm text-gray-600">Freelance and Consultant</div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold text-purple-600 mb-1">2023</div>
                   <div className="text-sm text-gray-600">Product Manager</div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold text-blue-600 mb-1">2024</div>
                   <div className="text-sm text-gray-600">Multi-Platform PM</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Competencies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key capabilities I've developed and applied to drive exceptional product outcomes across multiple platforms.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>
            
            {/* Compact Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Strategic Vision */}
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Strategic Vision</h3>
                    <p className="text-sm text-gray-600">Built comprehensive product roadmaps and strategic plans</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Roadmapping</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Market Analysis</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Strategic Planning</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">OKRs/KPIs</span>
                </div>
              </div>
              
              {/* Data-Driven Decisions */}
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Data-Driven Decisions</h3>
                    <p className="text-sm text-gray-600">Used analytics & user research to drive 300% retention growth</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Analytics</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">User Research</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">A/B Testing</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Metrics</span>
                </div>
              </div>
              
              {/* AI Innovation */}
              <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">AI Innovation</h3>
                    <p className="text-sm text-gray-600">Deployed ChatGPT APIs & AI chatbots reducing workload by 80%</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">ChatGPT API</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">AI Chatbots</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Automation</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">ML Systems</span>
                </div>
              </div>

              {/* Technical Leadership */}
              <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-orange-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Technical Leadership</h3>
                    <p className="text-sm text-gray-600">Led API integrations & system architecture for scalability</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">API Integration</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">System Design</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Architecture</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">DevOps</span>
                </div>
              </div>

              {/* Cross-functional Leadership */}
              <div className="group bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Cross-functional Leadership</h3>
                    <p className="text-sm text-gray-600">Managed diverse teams across engineering, design & business</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Team Mgmt</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Stakeholders</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Agile</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Scrum</span>
                </div>
              </div>

              {/* Business Acumen */}
              <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <LineChart className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Business Acumen</h3>
                    <p className="text-sm text-gray-600">Applied revenue strategies & market analysis across startups</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">Revenue</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">Consulting</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">Market Analysis</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">Strategy</span>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </section>

      {/* Skills & Expertise - Redesigned Compact */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive skill portfolio combining product management expertise with technical implementation capabilities.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            {/* Core PM Skills - Featured */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Core Product Management Skills</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium text-center">Product Lifecycle Management</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium text-center">User Research</span>
                <span className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium text-center">A/B Testing</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium text-center">Roadmapping</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-2 rounded-lg text-sm font-medium text-center">PRD Creation</span>
                <span className="bg-pink-100 text-pink-800 px-3 py-2 rounded-lg text-sm font-medium text-center">Agile/Scrum</span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-2 rounded-lg text-sm font-medium text-center">OKRs/KPIs</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg text-sm font-medium text-center">User Personas</span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-2 rounded-lg text-sm font-medium text-center">GTM Strategies</span>
                <span className="bg-rose-100 text-rose-800 px-3 py-2 rounded-lg text-sm font-medium text-center">Wireframing</span>
                <span className="bg-violet-100 text-violet-800 px-3 py-2 rounded-lg text-sm font-medium text-center">User Stories</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-2 rounded-lg text-sm font-medium text-center">Root Cause Analysis</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-2 rounded-lg text-sm font-medium text-center">UI/UX Optimization</span>
                <span className="bg-slate-100 text-slate-800 px-3 py-2 rounded-lg text-sm font-medium text-center">Customer Journey Mapping</span>
              </div>
            </div>

            {/* Other Skills Grid - Compact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Technical Skills */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Code className="text-blue-600" size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Technical Skills</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Python</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">MERN Stack</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">API Integration</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">SQL</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">AWS</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Payment Systems</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">ChatGPT API</span>
                  </div>
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Wrench className="text-purple-600" size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Tools & Platforms</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Jira</span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Notion</span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Figma</span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Google Analytics</span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Microsoft Clarity</span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Slack</span>
                    <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Confluence</span>
                  </div>
                </div>
              </div>

              {/* Methodologies & Soft Skills */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="text-green-600" size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Leadership & Process</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">Team Management</span>
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">Agile/LEAN</span>
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">Design Thinking</span>
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">System Design</span>
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">Stakeholder Management</span>
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages - Responsive Layout */}
            <div className="mt-6 bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded-lg">
                    <Languages className="text-gray-600" size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">Hindi (Fluent)</span>
                  <span className="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">English (Fluent)</span>
                  <span className="bg-white text-gray-600 px-3 py-1 rounded-lg text-sm">Sanskrit (Beginner)</span>
                  <span className="bg-white text-gray-600 px-3 py-1 rounded-lg text-sm">Russian (Beginner)</span>
                </div>
              </div>
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

            {/* Article 6: ChatGPT Missing Feature */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-lg inline-block mb-4">
                <Zap className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">ChatGPT is Brilliant, But This One Missing Feature is Holding it Back</h3>
              <p className="text-gray-600 mb-4">
                Despite ChatGPT's impressive capabilities, there's one crucial feature that could transform how we interact with AI and win the competitive race.
              </p>
              <a href="https://medium.com/@bibhuranjan621/chatgpt-is-brilliant-but-this-one-missing-feature-is-holding-it-back-to-win-the-race-8203edbbc62a" target="_blank" className="text-blue-600 hover:underline flex items-center">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* EADA Speaker Achievement - Featured */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow lg:col-span-3">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <Users className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">EADA Student Club, Spain</h3>
                  <p className="text-gray-600 text-sm">Guest Speaker on Job Security and Future of Work in AI Era</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Invited as a speaker to discuss the impact of AI on job security and the evolving landscape of work. Shared insights on how professionals can adapt and thrive in an AI-driven future, drawing from my experience in product management and technology consulting.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">International Speaking</span>
                <span className="mx-2">•</span>
                <span>2023</span>
              </div>
            </div>

            {/* Other Achievement Cards */}
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
            {/*Product Decoded Platform */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">productdecoded</h3>
              </div>
              <p className="text-gray-600 mb-4">A platform to help product aspirants practice and learn case studies and get connected through the community</p>
              <a href="https://productdecoded.vercel.app" className="text-blue-600 hover:underline flex items-center">
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

            {/* Navpravaah Foundation */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Users className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold">Navpravaah Foundation</h3>
              </div>
              <p className="text-gray-600 mb-4">NGO to provide soft skills, used devices and technical knowledge to rural Indian students who can't afford it.</p>
              <a href="https://navpravaahfoundation.vercel.app/" target="_blank" className="text-blue-600 hover:underline flex items-center">
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
