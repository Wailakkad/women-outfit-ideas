import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
  children: React.ReactNode;
}

export default function Link({
  href,
  children,
  onClick,
  className,
  target,
  ...rest
}: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (
      !e.defaultPrevented &&
      e.button === 0 && // primary click
      (!target || target === '_self') && // not opening in new window
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.shiftKey &&
      href &&
      !href.startsWith('http') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:') &&
      !href.startsWith('#')
    ) {
      e.preventDefault();
      if (window.location.pathname !== href) {
        window.history.pushState({}, '', href);
        window.dispatchEvent(new Event('applet-navigate'));
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} target={target} {...rest}>
      {children}
    </a>
  );
}
