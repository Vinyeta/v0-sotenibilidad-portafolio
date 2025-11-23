'use client';

import { useState } from 'react';
import ProjectCard from './project-card';

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: 'Gestor de Residuos Inteligente',
      description: 'Plataforma IoT para optimizar la gestión de residuos en ciudades mediante sensores y análisis de datos.',
      category: 'IoT',
      technologies: ['ThingWorx', 'React', 'Node.js'],
    },
    {
      id: 2,
      title: 'Dashboard de Energía Renovable',
      description: 'Sistema de monitoreo en tiempo real de plantas de energía solar y eólica.',
      category: 'Dashboard',
      technologies: ['React', 'JavaScript', 'API REST'],
    },
    {
      id: 3,
      title: 'App Huella de Carbono Personal',
      description: 'Aplicación web que ayuda usuarios a calcular y reducir su huella de carbono.',
      category: 'Aplicación Web',
      technologies: ['Vue', 'JavaScript', 'Laravel'],
    },
  ];

  return (
    <section id="proyectos" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Proyectos Destacados</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Una selección de proyectos sostenibles donde he aplicado mis habilidades en desarrollo web e IoT.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
