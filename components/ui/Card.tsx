import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = '',
  hoverEffect = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white border border-[#EAE6DF] rounded-xl overflow-hidden ${
        hoverEffect
          ? 'transition-all duration-300 hover:border-[#D0C9BD] hover:shadow-md hover:-translate-y-0.5'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
