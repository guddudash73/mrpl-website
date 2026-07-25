import React, { memo } from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = memo(({
  subtitle,
  title,
  description,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {subtitle && (
        <span className="inline-block text-[10px] font-bold text-secondary uppercase tracking-[0.25em] mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight leading-[1.15] font-display">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-text-muted font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
});

SectionHeader.displayName = 'SectionHeader';
