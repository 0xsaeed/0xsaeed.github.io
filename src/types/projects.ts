export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    technologies: string[];
    githubUrl?: string; 
    mediumUrl?: string;
    liveUrl?: string;
    featured: boolean;
}