import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFileDownload } from 'react-icons/fa'
import Skills from './components/Skills'

const App: React.FC = () => {
  const handleDownloadCV = () => {
    // TODO: Replace with actual CV PDF link
    const cvUrl = '/DeividAraya_CV.pdf'
    window.open(cvUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="container h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Deivid Araya</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-700 hover:text-accent transition-colors duration-200">About</a>
            <a href="#skills" className="text-gray-700 hover:text-accent transition-colors duration-200">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-accent transition-colors duration-200">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-accent transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-accent transition-colors duration-200">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container">
          <div className="flex items-start justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                React Developer 👋
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Hi, I'm Deivid Araya. A passionate Frontend Developer with 6 years of experience, based in Heredia, Costa Rica. Currently expanding my expertise in AI prompting and exploring cutting-edge technologies to stay at the forefront of web development.
              </p>
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md"
              >
                <FaFileDownload className="w-5 h-5" />
                Download CV
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <a 
                href="https://github.com/Daveveloper" 
                target="_blank" 
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
                title="Visit my GitHub profile"
              >
                <FaGithub className="w-10 h-10 text-gray-700 hover:text-accent" />
              </a>
              <a 
                href="https://www.linkedin.com/in/davelopercr/" 
                target="_blank" 
                rel="noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
                title="Connect with me on LinkedIn"
              >
                <FaLinkedin className="w-10 h-10 text-gray-700 hover:text-accent" />
              </a>
              <a 
                href="mailto:dave.webdeveloper@gmail.com"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <FaEnvelope className="w-10 h-10 text-gray-700 hover:text-accent" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="about" className="bg-gray-50">
          <div className="container section">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">About Me</h2>
            <div className="flex items-center gap-12">
              <div className="flex-shrink-0">
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-accent shadow-lg">
                  <img 
                    src="https://placehold.co/400x400/png" 
                    alt="Deivid Araya" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed">
                  I am a 34-year-old React Developer with 6 years of experience in building modern web applications. 
                  Based in the beautiful city of Heredia, Costa Rica, I specialize in creating responsive and 
                  user-friendly interfaces using React and its ecosystem. My passion lies in writing clean, 
                  maintainable code and implementing best practices in web development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white">
          <div className="container section">
            <Skills />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-gray-50">
          <div className="container section">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Experience</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Senior React Developer & People Manager - Publicis Sapient</h3>
                  <span className="text-sm text-gray-500">Jan 2021 - Present</span>
                </div>
                <p className="text-gray-600 mb-4">4 years of experience at Publicis Sapient</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Lead React developer for enterprise-level applications</li>
                  <li>People Manager responsible for team growth and career development</li>
                  <li>Conduct technical interviews and participate in talent acquisition</li>
                  <li>Mentor junior developers and conduct regular code reviews</li>
                  <li>Architect and implement scalable frontend solutions</li>
                  <li>Collaborate with global teams on large-scale projects</li>
                  <li>Drive adoption of modern React practices and performance optimizations</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">React Developer - Accenture</h3>
                  <span className="text-sm text-gray-500">Nov 2018 - Dec 2020</span>
                </div>
                <p className="text-gray-600 mb-4">2 years of experience at Accenture</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Developed and maintained React-based web applications for enterprise clients</li>
                  <li>Collaborated with cross-functional teams in an agile environment</li>
                  <li>Implemented responsive and accessible user interfaces</li>
                  <li>Worked with enterprise-level codebases and development practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white">
          <div className="container section">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Optum Healthcare Platform</h3>
                  <p className="text-gray-500 text-sm">Publicis Sapient (2023-Present)</p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600">
                    Developing features for Optum's healthcare platform, a United Health Group solution.
                    Implementing components and functionality for healthcare management and service delivery
                    using Next.js and AEM integration.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">GraphQL</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">SASS</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">AEM</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Soriana E-commerce Platform</h3>
                  <p className="text-gray-500 text-sm">Publicis Sapient (2022-2023)</p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600">
                    Developed key features for Soriana's e-commerce platform using Salesforce's React-based framework.
                    Focused on implementing shopping functionalities and user interface components for Mexico's major retail chain.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Salesforce Commerce</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">PWA</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">BJ's Restaurant - Digital Platform</h3>
                  <p className="text-gray-500 text-sm">Publicis Sapient (2021-2022)</p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600">
                    Developed features for BJ's Restaurant's digital platform using React and Next.js.
                    Implemented components and functionality to enhance the dining and ordering experience.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">GraphQL</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">SASS</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Nissan Global - Vehicle Configurator</h3>
                  <p className="text-gray-500 text-sm">Publicis Sapient (2021)</p>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600">
                    Developed features for Nissan's global vehicle configuration application.
                    Implemented components that allow customers to customize and explore vehicle options.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Vue.js</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">AEM</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">REST APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50">
          <div className="container section">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Get In Touch</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <FaEnvelope className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">Let's connect via email</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:dave.webdeveloper@gmail.com"
                    className="text-gray-700 hover:text-accent transition-colors duration-200 font-medium block"
                  >
                    dave.webdeveloper@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <FaPhone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">Available for calls</p>
                    </div>
                  </div>
                  <a 
                    href="tel:+50687626435"
                    className="text-gray-700 hover:text-accent transition-colors duration-200 font-medium block"
                  >
                    <img 
                      src="https://flagcdn.com/w20/cr.png"
                      srcSet="https://flagcdn.com/w40/cr.png 2x"
                      width="20"
                      height="13"
                      alt="Costa Rica"
                      className="inline-block mr-2"
                    />
                    (+506) 8762-6435
                  </a>
                </motion.div>
              </div>

              <div className="flex justify-center gap-8">
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  href="https://github.com/Daveveloper"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="bg-accent/10 p-4 rounded-full mb-2 group-hover:bg-accent/20 transition-colors duration-200">
                    <FaGithub className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-gray-700 group-hover:text-accent transition-colors duration-200">GitHub</span>
                </motion.a>

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  href="https://www.linkedin.com/in/davelopercr/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="bg-accent/10 p-4 rounded-full mb-2 group-hover:bg-accent/20 transition-colors duration-200">
                    <FaLinkedin className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-gray-700 group-hover:text-accent transition-colors duration-200">LinkedIn</span>
                </motion.a>
              </div>
            </div>

            <p className="text-sm text-gray-500 italic text-center mt-16">
              This CV was created using{' '}
              <a 
                href="https://cursor.ai" 
                target="_blank" 
                rel="noreferrer" 
                className="text-accent hover:underline"
              >
                cursor.ai
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container text-center text-gray-600">
          <p>© {new Date().getFullYear()} Deivid Araya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App 