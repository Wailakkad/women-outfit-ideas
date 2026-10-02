import React, { useState } from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number | `${number}`;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function Image({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  className = '',
  sizes,
  style,
  ...rest
}: ImageProps) {
  const [hasError, setHasError] = useState(false);

  const finalStyle: React.CSSProperties = {
    ...style,
    ...(fill
      ? {
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          objectFit: 'cover',
        }
      : {}),
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-stone-100 text-stone-400 text-xs italic ${
          fill ? 'absolute inset-0 w-full h-full' : ''
        } ${className}`}
        style={fill ? undefined : { width: width || '100%', height: height || 240 }}
      >
        <span>{alt || 'Fashion Editorial Photo'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setHasError(true)}
      className={className}
      style={finalStyle}
      {...rest}
    />
  );
}
