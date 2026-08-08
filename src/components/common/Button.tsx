import React, { memo } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = memo(({
  variant = 'secondary',
  size = 'md',
  icon,
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-bold tracking-wider transition-all duration-300 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary text-white dark:text-surface hover:bg-primary-light shadow-md shadow-primary/10',
    secondary: 'bg-secondary text-white hover:bg-secondary-light shadow-lg shadow-secondary/20',
    outline: 'bg-card-bg border border-border-light text-primary hover:bg-surface-alt hover:border-primary',
    ghost: 'bg-transparent text-primary hover:bg-surface-alt hover:text-secondary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
      {children}
    </button>
  );
});

Button.displayName = 'Button';
