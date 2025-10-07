'use client';

import { useMemo } from 'react';

interface CommonHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  breadcrumbs?: string[];
}

export default function CommonHeader({
  title,
  subtitle,
  description,
  backgroundImage = '/luxuary-clothes.jpg',
  breadcrumbs = ['Home', title],
}: CommonHeaderProps) {
  const heroBackgroundStyle = useMemo(
    () => ({
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }),
    [backgroundImage]
  );

  return (
    <section
      className="relative text-white min-h-[50vh] flex flex-col justify-center py-24 overflow-hidden"
      style={heroBackgroundStyle}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center lg:text-left space-y-6 lg:space-y-8 max-w-4xl">
          {/* Breadcrumb */}
          {breadcrumbs && (
            <nav className="text-sm text-white mb-4">
              {breadcrumbs.map((crumb, i) => (
                <span key={i}>
                  {i > 0 && <span className="mx-2 text-gold">/</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-gold">{crumb}</span>
                  ) : (
                    <span>{crumb}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-wide text-gold">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-white text-lg font-light leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="text-white leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
