import React, { memo } from 'react';

export const TrustIndicators: React.FC = memo(() => {
  const indicators = [
    {
      icon: 'location_on',
      title: 'Suitable Locations',
      description: 'Carefully selected areas poised for growth, connectivity, and high livability standards.',
    },
    {
      icon: 'verified_user',
      title: 'Transparent Deals',
      description: 'Clear pricing structures, flawless titles, and complete honesty in every transaction.',
    },
    {
      icon: 'directions_car',
      title: 'Site Visit Assistance',
      description: 'Personalized guidance and transport to experience the property firsthand before deciding.',
    },
    {
      icon: 'description',
      title: 'Documentation',
      description: 'Hassle-free legal processing and registry assistance for absolute peace of mind.',
    },
  ];

  return (
    <section className="py-8 sm:py-16 bg-surface max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-12 border-t border-border-light/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-8 lg:gap-12">
        {indicators.map((item, index) => (
          <div
            key={index}
            className="flex flex-row sm:flex-col items-start gap-3.5 sm:gap-0 p-4 sm:p-0 rounded-2xl sm:rounded-none bg-surface-alt/50 sm:bg-transparent border sm:border-0 border-border-light/60 group hover:border-secondary/30 transition-all"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-full bg-surface-alt flex items-center justify-center shrink-0 mb-0 sm:mb-6 group-hover:bg-secondary transition-all duration-300 border border-border-light group-hover:border-secondary">
              <span className="material-symbols-outlined text-[20px] sm:text-[24px] text-secondary group-hover:text-white">
                {item.icon}
              </span>
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold text-primary mb-1 sm:mb-3 tracking-tight font-display">
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed font-light text-xs sm:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

TrustIndicators.displayName = 'TrustIndicators';
