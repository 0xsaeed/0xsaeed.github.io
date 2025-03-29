import projectsData from '../data/projects.json';
import { Project } from '../types/projects';

// Get all projects
export const getAllProjects = (): Project[] => {
    return projectsData;
};

// Get only featured projects
export const getFeaturedProjects = (): Project[] => {
    return projectsData.filter(project => project.featured);
};

// Get projects that are not featured
export const getNonFeaturedProjects = (): Project[] => {
    return projectsData.filter(project => !project.featured);
};

// Get a specific project by ID
export const getProjectById = (id: number): Project | undefined => {
    return projectsData.find(project => project.id === id);
};

// Get projects by tag
export const getProjectsByTag = (tag: string): Project[] => {
    return projectsData.filter(project =>
        project.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
};

// Get projects by technology
export const getProjectsByTech = (tech: string): Project[] => {
    return projectsData.filter(project =>
        project.technologies.some(t => t.toLowerCase() === tech.toLowerCase())
    );
};