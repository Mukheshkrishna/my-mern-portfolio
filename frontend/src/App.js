import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true); // Controls initial data fetch loading
  const [showLoadingScreen, setShowLoadingScreen] = useState(true); // Controls the animated loading screen
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    const fetchProfileData = async () => {
      try {
        // In a real application, replace this with your actual backend URL
        // Example: const response = await fetch('https://your-backend-name.onrender.com/api/profile');
        // const data = await response.json();
        // setProfileData(data);

        // For now, use mock data to demonstrate the structure and loading
        const mockData = {
          name: "GUDURU MUKHESH KRISHNA",
          title: "Package App Developer",
          bio: "A dedicated Package App Developer with a strong foundation in Python and Java, currently contributing to application design, development, and support at Accenture. Proficient in machine learning, natural language processing, and database management, with a passion for creating efficient and impactful digital solutions.",
          profileImage: "https://placehold.co/150x150/333333/FFFFFF?text=MK", // Placeholder for your profile image
          skills: [
            { name: "Python", icon: "https://placehold.co/40x40/000000/FFFFFF?text=Py" },
            { name: "Java", icon: "https://placehold.co/40x40/000000/FFFFFF?text=Ja" },
            { name: "MySQL", icon: "https://placehold.co/40x40/000000/FFFFFF?text=SQL" },
            { name: "NLTK", icon: "https://placehold.co/40x40/000000/FFFFFF?text=NLTK" },
            { name: "NLP", icon: "https://placehold.co/40x40/000000/FFFFFF?text=NLP" },
            { name: "ML Algorithms", icon: "https://placehold.co/40x40/000000/FFFFFF?text=ML" },
            { name: "NumPy", icon: "https://placehold.co/40x40/000000/FFFFFF?text=NP" },
            { name: "Pandas", icon: "https://placehold.co/40x40/000000/FFFFFF?text=Pd" },
            { name: "Matplotlib", icon: "https://placehold.co/40x40/000000/FFFFFF?text=MPL" },
            { name: "VS Code", icon: "https://placehold.co/40x40/000000/FFFFFF?text=VS" },
            { name: "IntelliJ", icon: "https://placehold.co/40x40/000000/FFFFFF?text=IJ" },
            { name: "OpenCV", icon: "https://placehold.co/40x40/000000/FFFFFF?text=CV" },
            { name: "BoW", icon: "https://placehold.co/40x40/000000/FFFFFF?text=BoW" },
            { name: "TF-IDF", icon: "https://placehold.co/40x40/000000/FFFFFF?text=TF" },
            { name: "Word2Vec", icon: "https://placehold.co/40x40/000000/FFFFFF?text=W2V" },
            { name: "DL", icon: "https://placehold.co/40x40/000000/FFFFFF?text=DL" },
            { name: "LLAMA-2", icon: "https://placehold.co/40x40/000000/FFFFFF?text=L2" },
            { name: "LORA", icon: "https://placehold.co/40x40/000000/FFFFFF?text=LR" },
            { name: "Oracle PL/SQL", icon: "https://placehold.co/40x40/000000/FFFFFF?text=PL" },
            { name: "Oracle SQL", icon: "https://placehold.co/40x40/000000/FFFFFF?text=SQL" },
            { name: "Oracle APEX", icon: "https://placehold.co/40x40/000000/FFFFFF?text=APEX" },
          ],
          experience: [
            {
              title: "Package App Developer",
              company: "Accenture",
              duration: "August 2024 - Present",
              description: "Designed, built, tested, and supported applications based on business requirements. Integrated technology trends into solutions, contributing to automation and new functionalities. Resolved incidents and provided customer support via voice interaction, email, chat, and remote assistance. Ensured successful solution implementation with strong analytical and problem-solving skills. Technologies Trained: Oracle PL/SQL, Oracle SQL, Oracle APEX Cloud Development."
            },
          ],
          projects: [
            {
              name: "Face Recognition System",
              description: "Implemented K-Nearest Neighbor (K-NN) classification for face recognition. Utilized OpenCV and HaarCascades for precise face detection under 700ms. Achieved an error rate below 3% on a dataset of 1,000 images.",
              technologies: ["Python", "ML(KNN)", "OpenCV"],
              link: "#", // Placeholder link
              image: "https://placehold.co/400x250/000000/FFFFFF?text=Face+Recognition"
            },
            {
              name: "Advanced E-commerce Recommendation System",
              description: "Developed a content-based recommendation system with results within 100ms. Processed 1 million products, improving product recommendations. Achieved 98% accuracy using NLP models like BoW and TF-IDF. Integrated Amazon Product Advertising API for enhanced functionality.",
              technologies: ["Python", "NLP", "BoW", "TF-IDF", "Word2Vec"],
              link: "#", // Placeholder link
              image: "https://placehold.co/400x250/000000/FFFFFF?text=Recommendation+System"
            },
            {
              name: "Optimizing Legal Document Generation",
              description: "Engineered a project revolutionizing legal document generation using NLP and DL techniques. Developed custom algorithms leveraging LLAMA-2 and LORA for fine-tuning models. Achieved significant improvements in document quality and efficiency.",
              technologies: ["Python", "NLP", "DL", "LLAMA-2", "LORA", "Fine-Tuning"],
              link: "#", // Placeholder link
              image: "https://placehold.co/400x250/000000/FFFFFF?text=Legal+Doc+Gen"
            },
          ],
          contact: {
            email: "mukeshguduru444@gmail.com",
            phone: "+91 8247794171", // Added phone number
            linkedin: "https://www.linkedin.com/in/guduru-mukhesh-krishna-25651b228/", // Updated LinkedIn
            github: "https://github.com/Mukheshkrishna", // Updated GitHub
          },
          education: [
            {
              degree: "B.Tech (Computer Science and Engineering)",
              institution: "Vishnu Institute of Technology, Bhimavaram, AP",
              duration: "2020-2024",
              grade: "CGPA: 8.9"
            },
            {
              degree: "Intermediate",
              institution: "Sasi Junior College, Tanuku, AP",
              duration: "2018-2020",
              grade: "CGPA: 9.7"
            },
            {
              degree: "Secondary Education",
              institution: "Montessori School, Tanuku, AP",
              duration: "2017-2018",
              grade: "CGPA: 10"
            }
          ],
          certifications: [
            "Certified Associate in Python Programming - Cisco Python Institute",
            "Certified Associate in SQL - Kaggle",
            "Certified Associate in Java Programming - HackerRank",
            "AI-ML Virtual Internship Certificate - AICTE EduSkills"
          ],
          achievements: [
            "Won the Zone-Level Volleyball Tournament, showcasing teamwork, skills, and sportsmanship.",
            "Won the Cricket Sakshi Tournament, a prestigious state-level competition."
          ]
        };

        setProfileData(mockData);
      } catch (err) {
        setError("Failed to load profile data.");
        console.error("Error fetching profile data:", err);
      } finally {
        setLoading(false); // Data fetching is complete
      }
    };

    fetchProfileData();
  }, []);

  // Effect to manage the animated loading screen
  useEffect(() => {
    if (!loading && profileData) { // Once data is loaded
      const timer = setTimeout(() => {
        setShowLoadingScreen(false); // Hide the animated loading screen
      }, 2000); // Display loading animation for 2 seconds
      return () => clearTimeout(timer);
    }
  }, [loading, profileData]);

  // If initial data is still loading (before any animation)
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Initializing portfolio...
      </div>
    );
  }

  // If there's an error
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-red-500">
        <p>{error}</p>
        <p>Please ensure the backend is running and accessible.</p>
      </div>
    );
  }

  // If no profile data (shouldn't happen if mockData is always set)
  if (!profileData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        No profile data available.
      </div>
    );
  }

  const initials = profileData.name ? profileData.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'JD';

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* The loading screen overlay */}
      {showLoadingScreen && (
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 transition-opacity duration-1000"
             style={{ opacity: showLoadingScreen ? 1 : 0 }}>
          <div className="relative">
            <span className="text-teal-400 text-8xl font-extrabold animate-netflix-logo">
              {initials}
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-t-4 border-teal-500 border-opacity-50 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="fixed w-full bg-gray-800 bg-opacity-90 backdrop-blur-sm z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition duration-300">
            {profileData.name.split(' ')[0]}'s Portfolio
          </a>
          <div className="space-x-6">
            <NavLink href="#home" text="Home" />
            <NavLink href="#about" text="About" />
            <NavLink href="#skills" text="Skills" />
            <NavLink href="#experience" text="Experience" />
            <NavLink href="#projects" text="Projects" />
            <NavLink href="#education" text="Education" />
            <NavLink href="#certifications" text="Certifications" />
            <NavLink href="#achievements" text="Achievements" />
            <NavLink href="#contact" text="Contact" />
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      {/* Home Section */}
      <section id="home" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-center pt-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a202c/FFFFFF?text=Abstract+Background')" }}></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto bg-gray-800 bg-opacity-70 rounded-xl shadow-2xl border border-gray-700 animate-fade-in">
          <img
            src={profileData.profileImage}
            alt={`${profileData.name} Profile`}
            className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-teal-400 shadow-lg object-cover"
          />
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Hi, I'm <span className="text-teal-400">{profileData.name}</span>
          </h1>
          <p className="text-3xl font-semibold text-gray-300 mb-6">
            {profileData.title}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {profileData.bio}
          </p>
          <a
            href="#projects"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://placehold.co/600x400/333333/FFFFFF?text=About+Image"
                alt="About Me"
                className="rounded-lg shadow-xl border border-gray-700 w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 text-lg leading-relaxed">
              <p className="mb-4">
                Hello! I'm {profileData.name}, a dedicated {profileData.title} with a strong foundation in both front-end and back-end development. My journey in tech began with a curiosity for how things work and a passion for creating impactful digital experiences.
              </p>
              <p className="mb-4">
                I specialize in the MERN stack, crafting robust and scalable applications. I thrive in dynamic environments where I can continuously learn and contribute to innovative projects. My goal is to build intuitive, high-performance, and user-centric solutions.
              </p>
              <p>
                Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest industry trends. I believe in continuous improvement and the power of collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {profileData.skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700 hover:shadow-2xl transform hover:scale-105 transition duration-300"
              >
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3 object-contain" />
                <p className="text-lg font-semibold text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Experience</h2>
          <div className="space-y-10">
            {profileData.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700 transform hover:scale-[1.01] transition duration-300"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-xl text-teal-400 mb-1">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.duration}</p>
                <p className="text-lg text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {profileData.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden transform hover:scale-105 transition duration-300 group"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Education</h2>
          <div className="space-y-10">
            {profileData.education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700 transform hover:scale-[1.01] transition duration-300"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-xl text-teal-400 mb-1">{edu.institution}</p>
                <p className="text-gray-400 mb-2">{edu.duration}</p>
                <p className="text-lg text-gray-300 leading-relaxed">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-900 text-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profileData.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 flex items-center justify-center text-center transform hover:scale-105 transition duration-300"
              >
                <p className="text-lg font-semibold text-white">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Achievements</h2>
          <div className="space-y-6">
            {profileData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-[1.01] transition duration-300"
              >
                <p className="text-lg text-gray-300 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="flex items-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              Email Me
            </a>
            {profileData.contact.linkedin && (
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.3 14.8c-.3.3-.7.5-1.1.5h-2.5c-.4 0-.8-.2-1.1-.5-.3-.3-.5-.7-.5-1.1V9.5c0-.4.2-.8.5-1.1.3-.3.7-.5 1.1-.5h2.5c.4 0 .8.2 1.1.5.3.3.5.7.5 1.1v4.2c0 .4-.2.8-.5 1.1zM10 8.5c-.6 0-1.1.2-1.5.6-.4.4-.6.9-.6 1.5v4.2c0 .6.2 1.1.6 1.5.4.4.9.6 1.5.6h2.5c.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5V10c0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.5-.6H10zM5.2 7.5c-.6 0-1.1.2-1.5.6-.4.4-.6.9-.6 1.5v4.2c0 .6.2 1.1.6 1.5.4.4.9.6 1.5.6h2.5c.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5V10c0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.5-.6H5.2z" clipRule="evenodd"></path></svg>
                LinkedIn
              </a>
            )}
            {profileData.contact.github && (
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.419 2.865 8.165 6.839 9.48.5.092.682-.217.682-.483 0-.237-.008-.867-.013-1.7-2.782.604-3.37-1.34-3.37-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.618.069-.606.069-.606 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.832.092-.647.35-1.089.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.27.097-2.659 0 0 .84-.27 2.75 1.025A9.434 9.434 0 0110 4.47c.85.006 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.389.202 2.406.099 2.659.64.698 1.029 1.592 1.029 2.682 0 3.841-2.339 4.687-4.566 4.935.359.307.678.915.678 1.846 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.482C17.135 18.165 20 14.419 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg>
                GitHub
              </a>
            )}
            {profileData.contact.phone && (
              <a
                href={`tel:${profileData.contact.phone}`}
                className="flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.956.77C6.702 4.418 7.979 5 10 5s3.298-.582 4.891-1.23A1 1 0 0116.847 2H19a1 1 0 011 1v14a1 1 0 01-1 1h-2.153a1 1 0 01-.956-.77C13.298 15.582 12.021 15 10 15s-3.298.582-4.891 1.23A1 1 0 013.153 18H1a1 1 0 01-1-1V3z"></path></svg>
                Call Me
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, Tailwind CSS, and a touch of passion.</p>
        </div>
      </footer>
    </div>
  );
};

// Reusable Navigation Link Component
const NavLink = ({ href, text }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-teal-400 font-medium transition duration-300 py-2 px-3 rounded-md hover:bg-gray-700"
  >
    {text}
  </a>
);

export default App;
