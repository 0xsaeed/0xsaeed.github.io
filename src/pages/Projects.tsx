import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from "@phosphor-icons/react";
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../services/projectService';

const Projects: React.FC = () => {
    const allProjects = getAllProjects();

    return (
        <div className="pt-24">
            <section className="section bg-white dark:bg-dark-800">
                <div className="container">
                    <div className="flex items-center mb-8">
                        <Link to="/" className="flex items-center text-primary-500 dark:text-primary-400 hover:underline">
                            <ArrowLeft size={18} className="mr-1" />
                            Back to Home
                        </Link>
                    </div>

                    <AnimatedSection>
                        <h2 className="section-title">All <span className="gradient-text">Projects</span></h2>
                        <p className="text-center text-dark-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                            A showcase of my work across AI, robotics, and blockchain technologies.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {allProjects.map((project, index) => (
                            <AnimatedSection key={project.id} delay={0.05 * (index + 1)}>
                                <ProjectCard project={project} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;