import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      
      
      <button className="inline-flex items-center text-primary hover:text-primary-muted transition group-hover:translate-x-1">
        Ver Más <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
}
