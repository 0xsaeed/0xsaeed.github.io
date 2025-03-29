import React from 'react';
import { Link } from 'react-router-dom';
import { GithubLogo, LinkedinLogo, XLogo, EnvelopeSimple } from '@phosphor-icons/react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold gradient-text">Soodoo</Link>
            <p className="mt-4 text-dark-600 dark:text-gray-400 max-w-md">
              Computer Engineer specializing in AI, Robotics, and Web3 Development.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/0xsaeed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubLogo size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saeedsaadati/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} />
              </a>
              <a
                href="https://x.com/soodoo_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <XLogo size={20} />
              </a>
              <a
                href="mailto:contact@soodoo.me"
                className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <EnvelopeSimple size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/#projects" className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Projects</Link></li>
              <li><Link to="/#skills" className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Skills</Link></li>
              <li><Link to="/#education" className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Education</Link></li>
              <li><Link to="/#experience" className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Experience</Link></li>
              {/* <li><Link to="/blog" className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Blog</Link></li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-dark-600 dark:text-gray-400">contact@soodoo.me</li>
              <li className="text-dark-600 dark:text-gray-400">Italy, Padova</li>
              <li><Link to="/#contact" className="text-primary-500 dark:text-primary-400 hover:underline transition-colors">Send a message</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Soodoo. All rights reserved.
          </p>
          {/* <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-dark-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;