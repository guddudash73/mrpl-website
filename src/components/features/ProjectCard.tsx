'use client';

import React, { memo } from 'react';
import { Project } from '@/types';
import { Badge } from '@/components/common/Badge';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = memo(({ project }) => {
  return (
    <div className="bg-card-bg rounded-3xl overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-all duration-500 border border-border-light">
      <div className="h-[320px] relative overflow-hidden p-4">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <div className="absolute top-4 left-4 z-10">
            <Badge variant={project.status === 'Ongoing' ? 'featured' : 'available'}>
              {project.status}
            </Badge>
          </div>
          <picture className="w-full h-full">
            <source srcSet={project.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">
              {project.category}
            </span>
            <h4 className="text-xl font-bold font-display">{project.title}</h4>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-2">
            {project.location}
          </p>
          <p className="text-sm text-text-muted font-light leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.features.map((feat, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-surface-alt text-primary font-medium px-3 py-1 rounded-full border border-border-light/50"
              >
                ✓ {feat}
              </span>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-border-light flex justify-between items-center text-xs font-semibold text-text-muted">
          {project.totalUnits != null && <span>Units: {project.totalUnits}</span>}
          <span className="ml-auto">
            {project.completionYear.includes(':')
              ? project.completionYear
              : `Target Completion: ${project.completionYear}`}
          </span>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
