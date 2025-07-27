'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Project data
  const projectData = {
    project1: {
      title: 'Stage Website',
      description:
        'A comprehensive redesign of an e-commerce mobile application focusing on user experience improvements and modern design principles.',
      details: [
        'Conducted user research with 50+ participants',
        'Redesigned the entire user flow for better conversion',
        'Implemented a new design system with consistent components',
        'Improved checkout process reducing cart abandonment by 35%',
        'Created interactive prototypes for user testing'
      ],
      technologies: ['Figma'],
      image: 'Stage Web'
    },
    project2: {
      title: 'Coding Platform ProJect',
      description:
        'A secure and intuitive banking application interface designed with accessibility and user security in mind.',
      details: [
        'Designed with security-first approach',
        'Implemented biometric authentication flows',
        'Created accessible interfaces following WCAG guidelines',
        'Developed comprehensive design system',
        'Conducted extensive usability testing'
      ],
      technologies: ['Figma', 'VsCode', 'HTML', 'TailwindCSS'],
      image: 'Codding Web'
    },
    project3: {
      title: 'POS System Website',
      description:
        'An intuitive food ordering and delivery service design that simplifies the ordering process while maintaining visual appeal.',
      details: [
        'Streamlined ordering process to 3 simple steps',
        'Implemented real-time tracking functionality',
        'Designed for both iOS and Android platforms',
        'Created engaging micro-interactions',
        'Optimized for accessibility and performance'
      ],
      technologies: ['Figjam', 'Figma', 'GoogleSheet', 'Word'],
      image: 'POS System'
    }
  };

  const toggleAbout = () => {
    setAboutExpanded(!aboutExpanded);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openProjectModal = (projectId) => {
    setSelectedProject(projectData[projectId]);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Close mobile menu when clicking outside
  const handleMobileMenuBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    // Close mobile menu when pressing Escape key
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      observer.disconnect();
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <style jsx global>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .slide-in {
          animation: slideIn 0.3s ease-out;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #e0f2ff 0%, #fce7f3 100%);
        }

        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .skill-glow {
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
        }

        .project-card {
          transition: all 0.3s ease;
          transform: translateY(0);
        }

        /* Desktop hover effects */
        @media (hover: hover) and (pointer: fine) {
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          .glass-effect:hover {
            transform: scale(1.05);
          }
          .skill-glow:hover {
            transform: scale(1.05);
          }
        }

        /* Touch device interactions */
        @media (hover: none) and (pointer: coarse) {
          .project-card:active {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          .glass-effect:active {
            transform: scale(0.98);
          }
          .skill-glow:active {
            transform: scale(0.98);
          }
        }

        body {
          margin: 0;
          padding: 0;
        }

        /* Mobile menu styles */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 60;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .mobile-menu-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <div className="gradient-bg min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/25 border-b border-white/18">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-600">
                Portfolio
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('education')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      mobileMenuOpen
                        ? 'rotate-45 translate-y-1'
                        : '-translate-y-0.5'
                    }`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                      mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span
                    className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      mobileMenuOpen
                        ? '-rotate-45 -translate-y-1'
                        : 'translate-y-0.5'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
          onClick={handleMobileMenuBackdropClick}
        >
          <div className="mobile-menu-header">
            <div className="text-xl font-bold text-blue-600">Portfolio</div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm rotate-45 translate-y-1"></span>
                <span className="bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -rotate-45 -translate-y-1"></span>
              </div>
            </button>
          </div>

          <div className="mobile-menu-content">
            <div className="space-y-8">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-2xl text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="block text-2xl text-gray-700 hover:text-blue-600 transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block text-2xl text-gray-700 hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-2xl text-gray-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: About Me */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20"
        >
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <div className="float-animation mb-6 sm:mb-8">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-34 lg:h-34 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
                    NP
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 fade-in-up">
                Hello, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
                  Naphat Portfolio
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 fade-in-up px-4">
                I'm a passionate Software Engineering student who loves
                designing clean, intuitive, and accessible UX/UI experiences.
              </p>

              <button
                onClick={toggleAbout}
                className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 sm:px-8 py-3 rounded-full hover:from-blue-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 active:scale-95 fade-in-up"
              >
                {aboutExpanded ? 'Show Less' : 'Learn More'}
              </button>

              {/* Expandable About Me Section */}
              <div
                className={`mt-8 sm:mt-12 transition-all duration-500 ease-in-out ${
                  aboutExpanded
                    ? 'opacity-100 max-h-screen'
                    : 'opacity-0 max-h-0'
                } overflow-hidden`}
              >
                <div className="glass-effect rounded-2xl p-6 sm:p-8 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                    About Me
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Hello, my name is Naphat Nonglek (Phat). I am 20 years old
                    and currently a third-year Software Engineering student at
                    the University of Phayao. I have a strong interest in UX/UI
                    design and I am actively seeking an internship in this field
                    from November to March. I am eager to gain real-world
                    experience, develop my skills, and deepen my understanding
                    of design and user needs. My goal is to become a
                    well-rounded designer and developer in the future.
                  </p>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    In the future, I aim to strengthen my coding skills to
                    complement my design work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Education */}
        <section
          id="education"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 sm:mb-16">
              Education
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 sm:space-y-8">
                <div className="glass-effect rounded-2xl p-6 sm:p-8 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm sm:text-base">
                        U
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                        Bachelor of Engineering (Software Engineering)
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        University of Phayao
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    2023 - Present
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    GPA : 3.17
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-6 sm:p-8 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm sm:text-base">
                        C
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                        General Arts Program (Thai, English, Social Studies)
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Phanphittayakom School
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    2023
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    GPA : 3.59
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Skills */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 sm:mb-16">
              Skills
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {/* UX/UI Design Tools */}
                <div className="glass-effect rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 skill-glow">
                  <div className="text-2xl sm:text-3xl text-blue-600 mb-3">
                    <i className="fab fa-figma"></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                    Figma
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    UX/UI Design
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 skill-glow">
                  <div className="text-2xl sm:text-3xl text-blue-600 mb-3">
                    <i className="fas fa-palette"></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                    Canva
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Design Tool
                  </p>
                </div>

                {/* Development Tools */}
                <div className="glass-effect rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 skill-glow">
                  <div className="text-2xl sm:text-3xl text-gray-800 mb-3">
                    <i className="fab fa-github"></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                    GitHub
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Version Control
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 skill-glow">
                  <div className="text-2xl sm:text-3xl text-blue-600 mb-3">
                    <i className="fab fa-microsoft"></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                    Office
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Word, PowerPoint
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 skill-glow">
                  <div className="text-2xl sm:text-3xl text-blue-500 mb-3">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                    VS Code
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Code Editor
                  </p>
                </div>

                {/* Web Technologies */}
                <div className="glass-effect rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 skill-glow">
                  <div className="text-2xl sm:text-3xl text-orange-600 mb-3">
                    <i className="fab fa-html5"></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                    HTML
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Markup Language
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 skill-glow">
                  <div className="text-2xl sm:text-3xl text-blue-600 mb-3">
                    <i className="fab fa-css3-alt"></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                    CSS
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">Styling</p>
                </div>

                <div className="glass-effect rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 skill-glow">
                  <div className="text-2xl sm:text-3xl text-cyan-500 mb-3">
                    <i className="fas fa-wind"></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                    Tailwind
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    CSS Framework
                  </p>
                </div>

                {/* JavaScript Frameworks */}
                <div className="glass-effect rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 skill-glow">
                  <div className="text-2xl sm:text-3xl text-black mb-3">
                    <i className="fas fa-forward"></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                    Next.js
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    React Framework
                  </p>
                </div>

                <div className="glass-effect rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 skill-glow">
                  <div className="text-2xl sm:text-3xl text-green-600 mb-3">
                    <i className="fab fa-vuejs"></i>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1">
                    Vue.js
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    JS Framework
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Projects */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 sm:mb-16">
              Projects
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    id: 'project1',
                    title: 'Stage',
                    desc: 'This project focuses on designing the UX/UI for an optimal user experience and modern interface.',
                    img: 'Stage Web'
                  },
                  {
                    id: 'project2',
                    title: 'Coding Platform ProJect',
                    desc: 'Contributed to frontend development and collaborated on refining UX/UI for better user engagement and responsive design.',
                    img: 'Coding Web'
                  },
                  {
                    id: 'project3',
                    title: 'POS System Website',
                    desc: 'Coordinated team workflow and timelines to deliver POSystem, a restaurant management website, on schedule.',
                    img: 'POS System'
                  }
                ].map((project, index) => (
                  <div
                    key={project.id}
                    className="project-card glass-effect rounded-2xl p-6 cursor-pointer"
                    onClick={() => openProjectModal(project.id)}
                  >
                    <div
                      className={`w-full h-40 sm:h-48 bg-gradient-to-r ${
                        index % 2 === 0
                          ? 'from-blue-400 to-pink-400'
                          : 'from-pink-400 to-blue-400'
                      } rounded-xl mb-4 flex items-center justify-center`}
                    >
                      <span className="text-white text-xl sm:text-2xl font-bold text-center px-2">
                        {project.img}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {project.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 pr-4">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeProjectModal}
                  className="text-gray-500 hover:text-gray-700 text-3xl sm:text-4xl leading-none p-2 -m-2"
                >
                  ×
                </button>
              </div>

              <div className="mb-6">
                <div className="w-full h-48 sm:h-64 bg-gradient-to-r from-blue-400 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white text-2xl sm:text-3xl font-bold text-center px-4">
                    {selectedProject.image}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                  Project Overview
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                  Key Features
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
