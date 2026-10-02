import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap shrink-0 rounded-md';

  const variants = {
    primary: 'bg-[#1C1917] text-white hover:bg-[#2E2A27] active:scale-[0.99] shadow-sm',
    secondary: 'bg-[#EFECE6] text-[#1C1917] hover:bg-[#E5E1D9] active:scale-[0.99]',
    outline: 'border border-[#D8D2C5] text-[#1C1917] hover:border-[#1C1917] hover:bg-stone-50',
    ghost: 'text-[#1C1917] hover:bg-[#EFECE6] active:bg-[#E5E1D9]',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
