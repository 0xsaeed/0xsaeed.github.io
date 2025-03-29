import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  List,
  X,
  Moon,
  Sun,
  GithubLogo,
  LinkedinLogo,
  XLogo
} from '@phosphor-icons/react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Education', path: '/#education' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Certificates', path: '/#certificates' },
    { name: 'Contact', path: '/#contact' },
    // { name: 'Blog', path: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);

    // Handle hash navigation
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 0);
      }
    }
  }, [location]);

  const handleNavClick = (path: string) => {
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.includes('#')) {
      const element = document.querySelector(path.substring(path.indexOf('#')));
      if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    if (path.includes('#')) {
      return location.hash === path.substring(path.indexOf('#'));
    }
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => handleNavClick('/')}
          >
            <span className="text-2xl font-bold gradient-text">Soodoo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => handleNavClick(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle and Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/0xsaeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <GithubLogo size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/saeedsaadati/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={20} />
            </a>
            <a
              href="https://x.com/soodoo_eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              aria-label="Twitter"
            >
              <XLogo size={20} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-800 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link text-lg ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.path)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-gray-200 dark:border-dark-600">
              <a
                href="https://github.com/0xsaeed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                aria-label="GitHub"
              >
                <GithubLogo size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saeedsaadati/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} />
              </a>
              <a
                href="https://x.com/soodoo_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                aria-label="Twitter"
              >
                <XLogo size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;