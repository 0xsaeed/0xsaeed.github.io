import React from 'react';
import { GithubLogo, ArrowSquareOut, ArticleMedium } from "@phosphor-icons/react";
import { Project } from '../types/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="card group h-full flex flex-col" >
            <div className="relative overflow-hidden rounded-lg mb-4" >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end" >
                    <div className="p-4 w-full" >
                        <div className="flex justify-end space-x-3" >
                            {
                                project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-full backdrop-blur-sm text-white hover:bg-white/40 transition-colors" >
                                        <GithubLogo size={18} />
                                    </a>
                                )}
                            {
                                project.mediumUrl && (
                                    <a href={project.mediumUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-full backdrop-blur-sm text-white hover:bg-white/40 transition-colors" >
                                        <ArticleMedium size={18} />
                                    </a>
                                )
                            }
                            {
                                project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-full backdrop-blur-sm text-white hover:bg-white/40 transition-colors" >
                                        <ArrowSquareOut size={18} />
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            < div className="flex-1" >
                <div className="flex items-center mb-3 flex-wrap gap-2" >
                    {
                        project.tags.map((tag, i) => {
                            // Alternating tag colors
                            const tagClasses = [
                                "bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300",
                                "bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300",
                                "bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300"
                            ];

                            return (
                                <span
                                    key={i}
                                    className={`text-xs font-medium ${tagClasses[i % tagClasses.length]} px-2.5 py-0.5 rounded-full`
                                    }
                                >
                                    {tag}
                                </span>
                            );
                        })}
                </div>
                < h3 className="text-xl font-bold mb-2" > {project.title} </h3>
                < p className="text-dark-600 dark:text-gray-400 mb-4" >
                    {project.description}
                </p>
            </div>
            < div className="mt-auto pt-4 border-t border-gray-200 dark:border-dark-600" >
                <div className="flex flex-wrap gap-2" >
                    {
                        project.technologies.map((tech, i) => (
                            <span key={i} className="text-xs bg-gray-100 dark:bg-dark-700 px-2 py-1 rounded" > {tech} </span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;