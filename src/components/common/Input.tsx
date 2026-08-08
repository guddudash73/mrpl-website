import React, { memo } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = memo(({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label htmlFor={inputId} className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full px-3.5 py-2.5 bg-surface border border-border-light rounded-lg text-primary text-xs font-medium focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
