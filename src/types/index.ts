export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  percentage?: string;
  cgpa?: string;
}