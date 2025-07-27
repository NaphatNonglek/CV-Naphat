'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project data with multiple images
  const projectData = {
    project1: {
      title: 'Stage Website',
      description:
        'Designed the UX/UI for Stage, a web-based discussion forum where users can ask questions and interact with each other, and contributed to the front-end development.',
      details: [
        'Features for user login, registration, and password reset.',
        'Notification system that alerts users about updates from followed members and other relevant notifications.',
        'Well-organized category system that clearly classifies discussion topics.',
        'Recent posts panel displaying the latest posts alongside the main feed for easy access.',
        'Dark mode feature for comfortable viewing in low-light environments.'
      ],
      technologies: ['Figma'],
      // แทนที่ URL เหล่านี้ด้วยรูปจริงของคุณ
      mainImage:
        'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Stage+Website',
      images: [
        'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Stage+Image+1',
        'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Stage+Image+2',
        'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Stage+Image+3',
        'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Stage+Image+4',
        'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Stage+Image+5'
      ]
    },
    project2: {
      title: 'Coding Platform ProJect',
      description:
        'Primarily responsible for front-end development and supported UX/UI design for a programming website with a multi-language automatic answer checking system. The project won the first prize.',
      details: [
        'Ported as a PWA (Progressive Web App) for Android and also as a native Android application.',
        'Users can practice solving problems',
        'Ranking system based on problem-solving scores.',
        'User profiles displaying problem-solving history.',
        'Ability to create, edit, delete, and view problems.',
        'The answer evaluation system supports multiple programming languages, including Python 3, Python 2, C, C++, C#, Golang, PHP, Rust, Lua, Java, JavaScript, and TypeScript.'
      ],
      technologies: ['Figma', 'VsCode', 'HTML', 'TailwindCSS'],
      mainImage:
        'https://via.placeholder.com/400x300/ec4899/ffffff?text=Coding+Platform',
      images: [
        'https://via.placeholder.com/800x600/ec4899/ffffff?text=Coding+Image+1',
        'https://via.placeholder.com/800x600/ec4899/ffffff?text=Coding+Image+2',
        'https://via.placeholder.com/800x600/ec4899/ffffff?text=Coding+Image+3',
        'https://via.placeholder.com/800x600/ec4899/ffffff?text=Coding+Image+4',
        'https://via.placeholder.com/800x600/ec4899/ffffff?text=Coding+Image+5'
      ]
    },
    project3: {
      title: 'POS System Website',
      description:
        'Managed document workflows, coordinated team schedules, and ensured project milestones were met on time for POSystem Website, a restaurant management system.',
      details: [
        'User authentication features including login, registration, and password recovery.',
        'User profile creation with support for name, profile picture, and phone number.',
        'The Restaurant page includes features to add categories and menus.',
        'The Menu page allows users to edit or delete existing menu items.',
        'The New Order page is used for placing orders.',
        'The Overview page displays aggregated data after checkout.'
      ],
      technologies: ['Figjam', 'Figma', 'GoogleSheet', 'Word'],
      mainImage:
        'https://via.placeholder.com/400x300/10b981/ffffff?text=POS+System',
      images: [
        'https://via.placeholder.com/800x600/10b981/ffffff?text=POS+Image+1',
        'https://via.placeholder.com/800x600/10b981/ffffff?text=POS+Image+2',
        'https://via.placeholder.com/800x600/10b981/ffffff?text=POS+Image+3',
        'https://via.placeholder.com/800x600/10b981/ffffff?text=POS+Image+4',
        'https://via.placeholder.com/800x600/10b981/ffffff?text=POS+Image+5'
      ]
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
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // Image navigation functions
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Keyboard navigation for modal
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'Escape') {
          closeProjectModal();
        }
      } else if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, mobileMenuOpen, selectedProject]);

  return (
    <>
      <style jsx global>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            sans-serif;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #e0f2ff 0%, #fce7f3 100%);
          min-height: 100vh;
        }

        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: all 0.3s ease;
        }

        .glass-effect:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .project-card {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        /* Image Carousel */
        .carousel-container {
          position: relative;
          width: 100%;
          height: 400px;
          background: #f3f4f6;
          border-radius: 12px;
          overflow: hidden;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .carousel-button:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .carousel-button.prev {
          left: 10px;
        }

        .carousel-button.next {
          right: 10px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
          flex-wrap: wrap;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-dot.active {
          background: #3b82f6;
          transform: scale(1.2);
        }

        .carousel-dot:hover {
          background: #6b7280;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 999;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 32px;
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background: currentColor;
          transition: all 0.3s ease;
        }

        .hamburger.open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        /* Animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .carousel-container {
            height: 300px;
          }

          .carousel-button {
            width: 35px;
            height: 35px;
          }

          .modal-content {
            margin: 10px;
          }
        }
      `}</style>

      <div className="gradient-bg">
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
              <button onClick={toggleMobileMenu} className="md:hidden p-2">
                <div
                  className={`hamburger ${
                    mobileMenuOpen ? 'open' : ''
                  } flex flex-col justify-center items-center w-6 h-6 gap-1`}
                >
                  <div className="hamburger-line"></div>
                  <div className="hamburger-line"></div>
                  <div className="hamburger-line"></div>
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="p-6 border-b border-white/30">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-blue-600">Portfolio</div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
          </div>
          <div className="mobile-menu-content">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl text-gray-700 hover:text-blue-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-2xl text-gray-700 hover:text-blue-600"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-2xl text-gray-700 hover:text-blue-600"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-2xl text-gray-700 hover:text-blue-600"
            >
              Projects
            </button>
          </div>
        </div>

        {/* Section 1: About Me */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20"
        >
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <div className="float-animation mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 flex items-center justify-center">
                  <span className="text-3xl text-white font-bold">NP</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Hello, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
                  Naphat Portfolio
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                I'm a passionate Software Engineering student who loves
                designing clean, intuitive, and accessible UX/UI experiences.
              </p>

              <button
                onClick={toggleAbout}
                className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                {aboutExpanded ? 'Show Less' : 'Learn More'}
              </button>

              {/* Expandable About Section */}
              <div
                className={`mt-12 transition-all duration-500 ${
                  aboutExpanded
                    ? 'opacity-100 max-h-screen'
                    : 'opacity-0 max-h-0'
                } overflow-hidden`}
              >
                <div className="glass-effect rounded-2xl p-8 text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    About Me
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Hello, my name is Naphat Nonglek (Phat). I am 20 years old
                    and currently a third-year Software Engineering student at
                    the University of Phayao. I have a strong interest in UX/UI
                    design and I am actively seeking an internship in this field
                    from November to March.
                  </p>
                  <p className="text-gray-600">
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Education
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="glass-effect rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">U</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Bachelor of Engineering (Software Engineering)
                    </h3>
                    <p className="text-gray-600">University of Phayao</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">2023 - Present</p>
                <p className="text-gray-700">GPA: 3.17</p>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      General Arts Program
                    </h3>
                    <p className="text-gray-600">Phanphittayakom School</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">2023</p>
                <p className="text-gray-700">GPA: 3.59</p>
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Skills
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  {
                    icon: 'fab fa-figma',
                    name: 'Figma',
                    desc: 'UX/UI Design',
                    color: 'text-blue-600'
                  },
                  {
                    icon: 'fas fa-palette',
                    name: 'Canva',
                    desc: 'Design Tool',
                    color: 'text-blue-600'
                  },
                  {
                    icon: 'fab fa-github',
                    name: 'GitHub',
                    desc: 'Version Control',
                    color: 'text-gray-800'
                  },
                  {
                    icon: 'fab fa-microsoft',
                    name: 'Office',
                    desc: 'Word, PowerPoint',
                    color: 'text-blue-600'
                  },
                  {
                    icon: 'fas fa-code',
                    name: 'VS Code',
                    desc: 'Code Editor',
                    color: 'text-blue-500'
                  },
                  {
                    icon: 'fab fa-html5',
                    name: 'HTML',
                    desc: 'Markup Language',
                    color: 'text-orange-600'
                  },
                  {
                    icon: 'fab fa-css3-alt',
                    name: 'CSS',
                    desc: 'Styling',
                    color: 'text-blue-600'
                  },
                  {
                    icon: 'fas fa-wind',
                    name: 'Tailwind',
                    desc: 'CSS Framework',
                    color: 'text-cyan-500'
                  },
                  {
                    icon: 'fas fa-forward',
                    name: 'Next.js',
                    desc: 'React Framework',
                    color: 'text-black'
                  },
                  {
                    icon: 'fab fa-vuejs',
                    name: 'Vue.js',
                    desc: 'JS Framework',
                    color: 'text-green-600'
                  }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 text-center"
                  >
                    <div className={`text-3xl ${skill.color} mb-3`}>
                      <i className={skill.icon}></i>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600">{skill.desc}</p>
                  </div>
                ))}
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Projects
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(projectData).map(([key, project]) => (
                  <div
                    key={key}
                    className="project-card glass-effect rounded-2xl p-6"
                    onClick={() => openProjectModal(key)}
                  >
                    <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                      <img
                        src={project.mainImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">
                      {project.description.substring(0, 100)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div
            className="modal-overlay"
            onClick={(e) => e.target === e.currentTarget && closeProjectModal()}
          >
            <div className="modal-content p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeProjectModal}
                  className="text-gray-500 hover:text-gray-700 text-4xl"
                >
                  ×
                </button>
              </div>

              {/* Image Carousel */}
              <div className="mb-6">
                <div className="carousel-container">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                    className="carousel-image"
                  />

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="carousel-button prev"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button
                        onClick={nextImage}
                        className="carousel-button next"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </>
                  )}
                </div>

                {/* Carousel Dots */}
                {selectedProject.images.length > 1 && (
                  <div className="carousel-dots">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`carousel-dot ${
                          index === currentImageIndex ? 'active' : ''
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Image Counter */}
                <div className="text-center mt-3 text-gray-500">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Project Overview
                </h3>
                <p className="text-gray-600">{selectedProject.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Key Features
                </h3>
                <ul className="text-gray-600 space-y-2">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm"
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
