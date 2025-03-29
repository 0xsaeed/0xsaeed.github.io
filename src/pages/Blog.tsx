import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarBlank, Clock, User, Tag, MagnifyingGlass } from '@phosphor-icons/react';
import AnimatedSection from '../components/AnimatedSection';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Robotics: Trends to Watch",
    excerpt: "Exploring the latest advancements in AI and how they're transforming the field of robotics, from autonomous navigation to human-robot interaction.",
    date: "May 15, 2023",
    readTime: "8 min read",
    author: "Soodoo",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    tags: ["AI", "Robotics", "Machine Learning"]
  },
  {
    id: 2,
    title: "Building Secure Smart Contracts: Best Practices",
    excerpt: "A comprehensive guide to developing secure and efficient smart contracts for blockchain applications, with practical examples and common pitfalls to avoid.",
    date: "April 22, 2023",
    readTime: "12 min read",
    author: "Soodoo",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    tags: ["Blockchain", "Smart Contracts", "Security"]
  },
  {
    id: 3,
    title: "Computer Vision for Autonomous Navigation",
    excerpt: "How computer vision algorithms are enabling robots and autonomous vehicles to perceive and navigate complex environments with increasing accuracy.",
    date: "March 10, 2023",
    readTime: "10 min read",
    author: "Soodoo",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80",
    tags: ["Computer Vision", "Autonomous Systems", "Deep Learning"]
  },
  {
    id: 4,
    title: "The Rise of Decentralized Finance (DeFi)",
    excerpt: "An in-depth analysis of how DeFi is revolutionizing traditional financial systems and creating new opportunities for financial inclusion and innovation.",
    date: "February 18, 2023",
    readTime: "15 min read",
    author: "Soodoo",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1797&q=80",
    tags: ["DeFi", "Blockchain", "Cryptocurrency"]
  },
  {
    id: 5,
    title: "Reinforcement Learning in Robotic Control",
    excerpt: "How reinforcement learning algorithms are enabling robots to learn complex tasks through trial and error, with real-world applications and case studies.",
    date: "January 25, 2023",
    readTime: "9 min read",
    author: "Soodoo",
    category: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1706&q=80",
    tags: ["Reinforcement Learning", "Robotics", "AI"]
  },
  {
    id: 6,
    title: "Web3 Development: Building the Decentralized Web",
    excerpt: "A practical guide to developing applications for the decentralized web, covering key technologies, frameworks, and design considerations.",
    date: "December 12, 2022",
    readTime: "11 min read",
    author: "Soodoo",
    category: "Web3",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80",
    tags: ["Web3", "Decentralized Apps", "Blockchain"]
  }
];

const categories = [
  "All Categories",
  "Artificial Intelligence",
  "Blockchain",
  "Computer Vision",
  "Robotics",
  "Web3"
];

const popularTags = [
  "AI",
  "Blockchain",
  "Robotics",
  "Smart Contracts",
  "Machine Learning",
  "Computer Vision",
  "DeFi",
  "Web3",
  "Autonomous Systems"
];

const Blog: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Blog Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-500 to-secondary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Insights & Thoughts
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 mb-8"
            >
              Exploring the intersection of AI, robotics, and blockchain technology through in-depth articles and tutorials.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-xl mx-auto"
            >
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
                <MagnifyingGlass size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <AnimatedSection>
                <div className="flex flex-wrap items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold">Latest Articles</h2>
                  <div className="flex space-x-2 overflow-x-auto pb-2 max-w-full">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                          index === 0
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <AnimatedSection key={post.id} delay={index * 0.1}>
                    <div className="card group h-full flex flex-col">
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center text-sm text-dark-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center mr-4">
                            <CalendarBlank size={14} className="mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-dark-600 dark:text-gray-400 mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="mt-auto pt-4">
                        <a href="#" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:underline">
                          Read More <ArrowRight size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.3} className="mt-12 flex justify-center">
                <button className="btn btn-outline">
                  Load More Articles
                </button>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <AnimatedSection delay={0.1}>
                <div className="card mb-8">
                  <h3 className="text-xl font-bold mb-6">About the Author</h3>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB"
                      alt="Author"
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">Soodoo</h4>
                      <p className="text-dark-600 dark:text-gray-400">Tech enthusiast & developer</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;