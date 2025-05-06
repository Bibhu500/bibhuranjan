import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Linkedin, Mail, Briefcase, Code, Cog, Users, Wrench, Languages, Trophy, Award, GitBranch, Globe } from 'lucide-react';

const Home = () => {
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-50 font-[Inter] scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-100 to-indigo-50">
        <div className="container mx-auto px-6">
          {/* Default layout for larger screens */}
          <div className="hidden sm:flex sm:flex-col md:flex-row items-center">
            <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
                Hi, I'm Bibhu Ranjan
                <span className="text-blue-600 block mt-2">AI Product Manager</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Self-taught Product Manager with hands-on experience in developing and launching products, leading cross-functional teams, and leveraging AI-driven solutions to enhance user experience.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:bibhuranjan621@gmail.com" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                  Contact Me
                </a>
                <a href="https://www.linkedin.com/in/bibhu-ranjan-49569b16a/" target="_blank" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="md:w-1/2 order-2 md:order-1 flex justify-center mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <img src="/profilepic.png" alt="Profile" className="relative rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80" />
              </div>
            </div>
          </div>

          {/* Mobile-only layout */}
          <div className="grid grid-cols-5 gap-4 sm:hidden">
            {/* Text content taking 60% */}
            <div className="col-span-3">
              <h1 className="text-2xl font-bold mb-2 text-gray-800">
                Hi, I'm Bibhu Ranjan
                <span className="text-blue-600 block mt-1">AI Product Manager</span>
              </h1>
              <p className="text-sm text-gray-600 mb-4">
                Self-taught Product Manager with hands-on experience in developing and launching products, leading cross-functional teams.
              </p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:bibhuranjan621@gmail.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm text-center">
                  Contact Me
                </a>
                <a href="https://www.linkedin.com/in/bibhu-ranjan-49569b16a/" target="_blank" className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-sm text-center">
                  LinkedIn
                </a>
              </div>
            </div>
            {/* Image taking 40% */}
            <div className="col-span-2 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                <img src="/profilepic.png" alt="Profile" className="relative rounded-full shadow-lg w-24 h-24" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Professional Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

              {/* Experience Items */}
              <div className="relative">
                {/* Product Manager at Bangalore */}
                <div className="mb-16 flex justify-between items-center w-full">
                  <div className="w-5/12"></div>
                  <div className="z-20">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-5/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="font-bold text-lg mb-2">Product Manager</h3>
                    <p className="text-gray-600 mb-2">Nov 2023 - Present</p>
                    <ul className="text-sm text-gray-500 list-disc pl-4 space-y-2">
                      <li>Developed product and product roadmap, managed operations, hiring and social media campaigns</li>
                      <li>Conducted user research and implemented AI-driven features for improved user experience</li>
                      <li>Achieved 20% increase in website retention and enhanced platform engagement</li>
                    </ul>
                  </div>
                </div>

                {/* DevOps Engineer Role */}
                <div className="mb-16 flex justify-between items-center w-full right-timeline">
                  <div className="w-5/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="font-bold text-lg mb-2">DevOps Engineer</h3>
                    <p className="text-gray-600 mb-2">Mar 2021 - Sep 2023</p>
                    <ul className="text-sm text-gray-500 list-disc pl-4 space-y-2">
                      <li>Managed project dependencies, infrastructure, and cloud environments</li>
                      <li>Developed CI/CD pipelines and automated deployment processes</li>
                      <li>Collaborated with teams to streamline development workflows</li>
                    </ul>
                  </div>
                  <div className="z-20">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>

                {/* Junior Software Developer at K12 Techno Services */}
                <div className="mb-16 flex justify-between items-center w-full">
                  <div className="w-5/12"></div>
                  <div className="z-20">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-5/12 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="font-bold text-lg mb-2">Junior Software Developer (MERN Stack)</h3>
                    <p className="text-gray-600 mb-2">Aug 2020 - Mar 2021</p>
                    <ul className="text-sm text-gray-500 list-disc pl-4 space-y-2">
                      <li>Developed a college management system for students and teachers to track academic progress and administrative tasks</li>
                      <li>Contributed to the development of an edtech platform providing solutions for educational institutions</li>
                      <li>Implemented features to enhance user experience and streamline operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Code className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Python, MERN Stack Development</li>
                <li>Platform Payment Integration, APIs</li>
                <li>Data Analysis & Metrics Tracking</li>
                <li>Feature Validation & Feedback Analysis</li>
              </ul>
            </div>

            {/* Development Methodologies */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Cog className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Development Methodologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Agile/LEAN Methodology</li>
                <li>System Design</li>
                <li>Software Development Life Cycle</li>
                <li>Project Management (Jira, Notion)</li>
              </ul>
            </div>

            {/* Managerial Skills */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Managerial Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Team Management</li>
                <li>Design Thinking & System Design</li>
                <li>Problem Solving & Critical Thinking</li>
                <li>Prioritization & Time Management</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Wrench className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Figma, GitHub, Google Analytics</li>
                <li>Microsoft Teams, Google Workspace</li>
                <li>Jira, Notion, Excel, Google Forms</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Languages className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Hindi (Fluent)</li>
                <li>English (Fluent)</li>
                <li>Sanskrit (Beginner)</li>
                <li>Russian (Beginner)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Transitioned into Product Management */}
      <section id="why-product-management" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Why I Transitioned into Product Management</h2>
          <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            <p className="mb-6">
              My journey into product management has been shaped by diverse experiences across multiple roles. It began with my MERN stack development work at K12, followed by an internship with the automation team at BlackLine, where I gained valuable experience automating HR processes. This foundation led to my role as a DevOps Engineer at BlackLine, where I spent over two years collaborating with various stakeholders and cross-functional teams.            
            </p>
            <p className="mb-6">
              A defining moment came when I noticed our HR team struggling with candidate screening. Drawing on my technical background, I took the initiative to build a Smart ATS system. This project became my catalyst for change – I found myself deeply engaged in stakeholder discussions, understanding product requirements, and bridging the gap between technical possibilities and business needs. It was during these interactions that I discovered my genuine passion for product management.
            </p>
            <p className="mb-6">
              The emergence of AI in 2022 added another dimension to my journey. While still at BlackLine, I began experimenting with ChatGPT's API, creating personal projects that fueled my growing interest in AI-driven solutions. This combination of product management aspirations and AI enthusiasm led me to make a pivotal decision – to fully pursue my passion at IELTSappeal.                
            </p>
            <p className="mb-6">
              At IELTSappeal, I finally had the opportunity to fully embrace product management. Here, I've grown from handling basic product tasks to leading teams, conducting thorough feedback analysis, developing product roadmaps, and implementing AI-based features for IELTS aspirants. This journey—from developer to automation engineer, then DevOps Engineer, and now a product manager—has been a natural progression fueled by my curiosity, problem-solving passion, and love for creating impactful solutions. I'm excited to continue growing in this field, especially in building AI-driven products that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Blogs or Articles */}
      <section id="blogs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Blogs or Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">How to Transition from Engineering to Product Management</h3>
              <p className="text-gray-600 mb-4">
                Thinking about switching from engineering to product management? Here's my journey, the skills I leveraged, and tips to make the transition smoother.
              </p>
              <Link to="/PMtransition" className="text-blue-600 hover:underline">Read More →</Link>
            </div>
            
            {/* Article 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">The Art of Understanding User Behavior</h3>
              <p className="text-gray-600 mb-4">
                Learn how to decode user behavior, prioritize features, and build products that truly resonate with your audience.
              </p>
              <Link to="/userbehavior" className="text-blue-600 hover:underline">Read More →</Link>
            </div>

            {/* Article 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">AI in Product Management: The Future is Here</h3>
              <p className="text-gray-600 mb-4">
                Explore how AI is transforming product management, from automating workflows to enhancing user experiences.
              </p>
              <Link to="/pmai" className="text-blue-600 hover:underline">Read More →</Link>
            </div>

            {/* Article 4: Irreplaceable Jobs by AI in 2025 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Irreplaceable Jobs by AI in 2025</h3>
              <p className="text-gray-600 mb-4">
                As AI continues to evolve, which jobs will remain irreplaceable? Discover the roles that require human creativity, empathy, and decision-making.
              </p>
              <Link to="/futurejobs" className="text-blue-600 hover:underline">Read More →</Link>
            </div>
            
            {/* Article 5: Cracking the ATS Code */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Cracking the ATS Code: How Students Can Use AI to Create Resumes That Get Noticed</h3>
              <p className="text-gray-600 mb-4">
                Learn how students can leverage AI tools to craft resumes that pass Applicant Tracking Systems (ATS) and stand out to recruiters.
              </p>
              <a href="https://medium.com/@bibhuranjan621/cracking-the-ats-code-how-students-can-use-ai-to-create-resumes-that-get-noticed-and-thrive-during-08ab4879e3aa" target="_blank" className="text-blue-600 hover:underline">Read More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Achievement Cards */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Trophy className="text-yellow-500 mr-4" size={24} />
                <h3 className="text-xl font-bold">Marketing Leadership</h3>
              </div>
              <p className="text-gray-600">Led marketing efforts for college fest and departmental events. Raised Rs.19000.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="text-yellow-500 mr-4" size={24} />
                <h3 className="text-xl font-bold">Singing Competition</h3>
              </div>
              <p className="text-gray-600">Won Consolation Prize in State and District-level Classical Singing Competition.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <GitBranch className="text-yellow-500 mr-4" size={24} />
                <h3 className="text-xl font-bold">Brain-Computer Interface</h3>
              </div>
              <p className="text-gray-600">Developed a BCI during college to enable direct communication between the brain and external devices.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="text-yellow-500 mr-4" size={24} />
                <h3 className="text-xl font-bold">Community Leadership</h3>
              </div>
              <p className="text-gray-600">Organized monthly meetings with city council executives and raised funds for city welfare initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Projects Section */}
      <section id="fun-projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Fun Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/*AI based PM RCA */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 mr-4" size={24} />
                <h3 className="text-xl font-bold">rcamatters</h3>
              </div>
              <p className="text-gray-600">An innovative AI platform to practice and learn Root Cause Analysis of a product problem</p>
              <a href="#" className="text-blue-600 hover:underline">Visit Project &rarr;</a>
            </div>
            {/* B-Break */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 mr-4" size={24} />
                <h3 className="text-xl font-bold">B-Break</h3>
              </div>
              <p className="text-gray-600">A breathing web app designed for busy professionals to take short breaks and practice mindfulness.</p>
              <a href="https://b-break.vercel.app/" className="text-blue-600 hover:underline">Visit Project &rarr;</a>
            </div>

            {/* My Village Website */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Globe className="text-blue-600 mr-4" size={24} />
                <h3 className="text-xl font-bold">My Village Website</h3>
              </div>
              <p className="text-gray-600">A website dedicated to showcasing the culture, history, and events of my village.</p>
              <a href="#" className="text-blue-600 hover:underline">Visit Project &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">BMS INSTITUTE OF TECHNOLOGY & MANAGEMENT(VTU)</h3>
              <p className="text-gray-600">Bachelor of Engineering (Computer Science and Engineering)</p>
              <p className="text-gray-500">Aug 2020 - Sep 2020 | Bangalore, IND</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">GD PUBLIC SCHOOL(BSEB)</h3>
              <p className="text-gray-600">Higher Secondary Education(Sc)</p>
              <p className="text-gray-500">Apr 2014 - Apr 2016 | Jaipur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Get in Touch</h2>
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="mt-6 text-center">
              <p className="text-gray-600">Reach out directly:</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://wa.me/918789698369?text=Hi%20Bibhu,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!" 
                  target="_blank" 
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                  WhatsApp
                </a>
                <a href="mailto:bibhuranjan621@gmail.com" 
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Email
                </a>
                <a href="https://www.linkedin.com/in/bibhu-ranjan-49569b16a/" 
                  target="_blank" 
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                  LinkedIn
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