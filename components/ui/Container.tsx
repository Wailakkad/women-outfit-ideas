import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'prose';
  children: React.ReactNode;
}

export function Container({
  className = '',
  size = 'lg',
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    prose: 'max-w-3xl',
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
