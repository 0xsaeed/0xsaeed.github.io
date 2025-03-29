import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  DownloadSimple,
  PaperPlaneTilt,
  Certificate,
  Code,
  CurrencyEth,
  Brain,
  Graph,
  Database,
  Trophy,
  Briefcase,
  GraduationCap,
  EnvelopeSimple,
  Browser,
  At,
  DotsThree,
  LinktreeLogo,
  ArrowSquareOut,
  Robot
} from "@phosphor-icons/react";
import AnimatedSection from '../components/AnimatedSection';
import { getFeaturedProjects } from '../services/projectService';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

const featuredProjects = getFeaturedProjects();

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-gray-100 dark:from-dark-800 dark:to-dark-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">

            {/* Profile Image */}
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-float flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-800 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/images/profile/profile.JPG" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -bottom-1 -right-2 bg-white dark:bg-dark-700 rounded-full p-3 shadow-lg">
                  <motion.div
                    animate={{ rotate: [0, 40, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <Graph size={32} className="text-primary-500" />
                  </motion.div>
                </div>
                <div className="absolute -top-1 -left-2 bg-white dark:bg-dark-700 rounded-full p-3 shadow-lg">
                  <motion.div
                    animate={{ rotate: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <CurrencyEth size={32} className="text-secondary-500" />
                  </motion.div>
                </div>
                <div className="absolute -top-1 -right-2 bg-white dark:bg-dark-700 rounded-full p-3 shadow-lg">
                  <motion.div
                    animate={{ rotate: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                  >
                    <Code size={32} className="text-secondary-500" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Hero Text */}
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="gradient-text">AI, Robotics & Web3</span> Engineer
                </h1>
                <h2 className="text-2xl md:text-3xl text-dark-500 dark:text-gray-400 mb-4">
                  <span className="text-primary-500">Soodoo | Saeed Saadati Pour</span>
                </h2>
                <p className="text-lg md:text-xl text-dark-600 dark:text-gray-300 mb-8 max-w-lg">
                  Building the future with cutting-edge technology. Specializing in artificial intelligence, robotics, and blockchain solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#projects" className="btn btn-primary">
                    View Projects <ArrowRight size={18} className="ml-2" />
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    Contact Me
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-white dark:bg-dark-800">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.1 * (index + 1)}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-outline inline-flex items-center">
              View All Projects <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-gray-50 dark:bg-dark-900">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Programming */}
            <AnimatedSection delay={0.1}>
              <div className="card h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    <Code size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Programming</h3>
                </div>
                <ul className="space-y-3 text-dark-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    Python (Advanced)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    C/C++ (Intermediate)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    JavaScript/TypeScript (Intermediate)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    SQL
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    Bash/Shell Scripting
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            { /* Web Development */}
            <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
                    <Browser size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Web Development</h3>
                </div>
                <ul className="space-y-3 text-dark-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                    Django
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                    React.js, Next.js, Node.js
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                    HTML/CSS, Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                    PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                    Docker
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            {/* AI & Machine Learning */}
            <AnimatedSection delay={0.1}>
              <div className="card h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    <Brain size={28} />
                  </div>
                  <h3 className="text-xl font-bold">AI/ML</h3>
                </div>
                <ul className="space-y-3 text-dark-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    OpenCV
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    PyTorch, TensorFlow
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    PySpark
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    NumPy, Pandas, Matplotlib, SciPy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    LangChain, NLTK
                  </li>
                </ul>
              </div>
            </AnimatedSection>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            {/* Blockchain & Web3 */}
            <AnimatedSection delay={0.3}>
              <div className="card h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mr-4">
                    <CurrencyEth size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Blockchain & Web3</h3>
                </div>
                <ul className="space-y-3 text-dark-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    Ethereum, Solidity
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    Web3.js & Ethers.js
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    Hardhat
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    OpenZeppelin, ChainLink
                  </li>
                </ul>
              </div>
            </AnimatedSection>


            {/* Robotics & IoT */}
            <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
                    <Robot size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Robotics & IoT</h3>
                </div>
                <ul className="space-y-3 text-dark-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                    Robot Operating System (ROS)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                    MoveIt
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                    UnityVR
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                    Raspberry Pi
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Miscellaneous */}
            <AnimatedSection delay={0.4}>
              <div className="card h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mr-4">
                    <DotsThree size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Miscellaneous</h3>
                </div>
                <ul className="space-y-3 text-dark-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    Git
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    Linux/Unix
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    Selenium
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mr-2"></div>
                    Dune
                  </li>
                </ul>
              </div>
            </AnimatedSection>

          </div>
          
          {/* Programming Languages */}
          {/* <AnimatedSection delay={0.4} className="mt-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-6">Programming Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
                    <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <span className="text-sm text-dark-600 dark:text-gray-300">Python (95%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
                    <div className="bg-secondary-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <span className="text-sm text-dark-600 dark:text-gray-300">JavaScript (90%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
                    <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-sm text-dark-600 dark:text-gray-300">C++ (85%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
                    <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-sm text-dark-600 dark:text-gray-300">Solidity (80%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
                    <div className="bg-secondary-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-sm text-dark-600 dark:text-gray-300">TypeScript (75%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
                    <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <span className="text-sm text-dark-600 dark:text-gray-300">Rust (70%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
                    <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-sm text-dark-600 dark:text-gray-300">Java (65%)</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
                    <div className="bg-secondary-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-sm text-dark-600 dark:text-gray-300">Go (60%)</span>
                </div>
              </div>
            </div>
          </AnimatedSection> */}

          
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section bg-white dark:bg-dark-800">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title"><span className="gradient-text">Academic</span> Background</h2>
          </AnimatedSection>
          
          <div className="mt-12 space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <GraduationCap size={32} className="text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">M.S. in Computer Enigneering - Artificial Intelligence & Robotics</h3>
                      <span className="text-sm text-dark-500 dark:text-gray-400 mt-1 md:mt-0">2021 - Present</span>
                    </div>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-2">University of Padova</h4>
                    {/* <p className="text-dark-600 dark:text-gray-300 mb-4">
                      Specialized in Artificial Intelligence and Robotics. Thesis on "Deep Reinforcement Learning for Autonomous Robot Navigation in Dynamic Environments."
                    </p> */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Machine Learning</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Artificial Intelligence</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Robotics</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Computer Vision</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="p-4 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg">
                      <GraduationCap size={32} className="text-secondary-600 dark:text-secondary-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">M.S. Computer Science (Erasmus+ Exchange Student)</h3>
                      <span className="text-sm text-dark-500 dark:text-gray-400 mt-1 md:mt-0">Feb 2023 - Jun 2023</span>
                    </div>
                    <h4 className="text-lg text-secondary-600 dark:text-secondary-400 mb-2">Graz University of Technology </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Data Mining</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Virtual Reality</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Natural Language Processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="p-4 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                      <GraduationCap size={32} className="text-accent-600 dark:text-accent-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">B.S. in Computer Engineering - Computer Systems Architecture</h3>
                      <span className="text-sm text-dark-500 dark:text-gray-400 mt-1 md:mt-0">2015 - 2020</span>
                    </div>
                    <h4 className="text-lg text-accent-600 dark:text-accent-400 mb-2">University of Tabriz</h4>
                    {/* <p className="text-dark-600 dark:text-gray-300 mb-4">
                      Focus on Embedded Systems and IoT. Completed research project on "Secure Communication Protocols for IoT Devices."
                    </p> */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Digital Electronics</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Microprocessors</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Algorithms</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Data Structures</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section bg-gray-50 dark:bg-dark-900">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
          </AnimatedSection>
          
          <div className="mt-12 space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <Briefcase size={32} className="text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">Intern Web3 Developer </h3>
                      <span className="text-sm text-dark-500 dark:text-gray-400 mt-1 md:mt-0">Sep 2024 — Dec 2024</span>
                    </div>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-2">HexaLab</h4>
                    <p className="text-dark-600 dark:text-gray-300 mb-4">
                      Developed and audited smart contracts for a AMM DEX on Tiako Chain. 
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Solidity</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Hardhat</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Ethers.js</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="p-4 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg">
                      <Briefcase size={32} className="text-secondary-600 dark:text-secondary-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">Research Assistant</h3>
                      <span className="text-sm text-dark-500 dark:text-gray-400 mt-1 md:mt-0">Sep 2019 — Feb 2020</span>
                    </div>
                    <h4 className="text-lg text-secondary-600 dark:text-secondary-400 mb-2">Prof. Pedram Salehpour’s Lab</h4>
                    <p className="text-dark-600 dark:text-gray-300 mb-4">
                      {/* here */}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">TensorFlow</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">PyTorch</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Computer Vision</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Reinforcement Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="p-4 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                      <Briefcase size={32} className="text-accent-600 dark:text-accent-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">Junior Back-End Develope</h3>
                      <span className="text-sm text-dark-500 dark:text-gray-400 mt-1 md:mt-0">Dec 2018 — Nov 2019</span>
                    </div>
                    <h4 className="text-lg text-accent-600 dark:text-accent-400 mb-2">Zhooll(Rahgoshayan-Honar-Sepehr-Avazeh)</h4>
                    <p className="text-dark-600 dark:text-gray-300 mb-4">
                      {/* here */}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Python</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">Django</span>
                      <span className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded">PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certificates & Honors Section */}
      <section id="certificates" className="section bg-white dark:bg-dark-800">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Certificates & <span className="gradient-text">Honors</span></h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimatedSection delay={0.3}>
              <div className="card h-full">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mr-4">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1"><a href='https://warpcast.com/betashop.eth/0xaf1b228c'><span className="gradient-text">1st</span> Place with <span className="gradient-text">~3000$</span> Reward</a></h3>
                    <p className="text-dark-500 dark:text-gray-400 text-sm mb-3">Moxie Protocol Dune Dashboard Competition • 2024</p>
                    <p className="text-dark-600 dark:text-gray-300">
                      Awarded for creating a comprehensive <a href='https://dune.com/soodoo/moxie' className="text-gray-500 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Dune dashboard</a> for Moxie Protocol, showcasing advanced data visualization and analytics on Base chain.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="card h-full">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Honorable Mention</h3>
                    <p className="text-dark-500 dark:text-gray-400 text-sm mb-3">Regional ACM-ICPC • 2017 & 2019</p>
                    <p className="text-dark-600 dark:text-gray-300">
                      Awarded for for solving complex algorithmic problems using C++, data structures, and efficient coding practices
                      in a team-based competition under time constraints. 
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="card h-full">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                    <Certificate size={24} />
                  </div>
                  <div>
                    <a href="https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/Soodoo/2025-03-17.png" target="_blank" rel="noopener noreferrer" className="text-black-500 dark:text-white-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      <h3 className="text-xl font-bold mb-1">AI Agents Fundamentals Certificate</h3>
                    </a>
                    <p className="text-dark-500 dark:text-gray-400 text-sm mb-3">Hugging Face • 2025</p>
                    <p className="text-dark-600 dark:text-gray-300">
                      Certification in building intelligent AI agents using Large Language Models (LLMs).
                      Covers agent architectures, reasoning techniques, tool usage, and autonomous decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
                    <Certificate size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Certified Ethereum Developer</h3>
                    <p className="text-dark-500 dark:text-gray-400 text-sm mb-3">ConsenSys Academy • 2020</p>
                    <p className="text-dark-600 dark:text-gray-300">
                      Professional certification for blockchain development on the Ethereum platform.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection> */}
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gray-50 dark:bg-dark-900">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
            <p className="text-center text-dark-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </AnimatedSection>
          
          <div className="flex justify-center">
            <AnimatedSection delay={0.1} className='max-w-xl w-full'>
              <div className="card h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
                      <EnvelopeSimple size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <a href="mailto:contact@soodoo.me" className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        contact@soodoo.me
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Work Inquiries</h4>
                      <p className="text-dark-600 dark:text-gray-300">
                        Open for freelance projects and job opportunities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mr-4">
                      <LinktreeLogo size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Social Profiles</h4>
                      <div className="flex space-x-4 mt-2">
                        <a href="https://github.com/0xsaeed" target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                          GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/saeedsaadati/" target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                          LinkedIn
                        </a>
                        <a href="https://x.com/soodoo_eth" target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                          X
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center ">
                    <a
                      href="mailto:contact@soodoo.me"
                      className="btn btn-primary inline-flex items-center px-6 py-3"
                    >
                      <PaperPlaneTilt size={20} weight="bold" className="mr-2" />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full">
                    Send Message <Send size={18} className="ml-2" />
                  </button>
                </form>
              </div>
            </AnimatedSection> */}
          </div>
        </div>
      </section>

      {/* Download Resume */}
      <section className="py-16 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Want to know more about my work?</h2>
              <p className="text-white/80">Download my resume for a complete overview of my experience and skills.</p>
            </div>
            <a href="#" className="btn bg-white text-primary-600 hover:bg-gray-100 flex items-center">
              Download Resume <DownloadSimple size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;