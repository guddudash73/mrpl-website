import React, { memo } from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'available' | 'reserved' | 'sold' | 'featured' | 'accent';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = memo(({
  children,
  variant = 'available',
  className = '',
}) => {
  const variants = {
    available: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    reserved: 'bg-amber-50 text-amber-700 border border-amber-200',
    sold: 'bg-neutral-100 text-neutral-500 border border-neutral-200',
    featured: 'bg-secondary/10 text-secondary border border-secondary/20',
    accent: 'bg-surface-alt text-secondary border border-secondary/20',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';
