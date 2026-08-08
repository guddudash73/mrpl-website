'use client';

import React, { memo, useCallback } from 'react';
import { Plot } from '@/types';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { useAppDispatch } from '@/store/hooks';
import { openSiteVisitModal } from '@/store/modalSlice';

interface PlotCardProps {
  plot: Plot;
}

export const PlotCard: React.FC<PlotCardProps> = memo(({ plot }) => {
  const dispatch = useAppDispatch();

  const handleBookVisit = useCallback(() => {
    dispatch(openSiteVisitModal(plot.title));
  }, [dispatch, plot.title]);

  const getBadgeVariant = (status: Plot['status']) => {
    switch (status) {
      case 'Available':
        return 'available';
      case 'Reserved':
        return 'reserved';
      case 'Sold':
        return 'sold';
      default:
        return 'available';
    }
  };

  return (
    <div className="bg-card-bg rounded-3xl overflow-hidden flex flex-col cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 border border-border-light">
      <div className="h-[220px] sm:h-[280px] relative overflow-hidden p-2.5 sm:p-4">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <div className="absolute top-4 left-4 z-10">
            <Badge variant={getBadgeVariant(plot.status)}>{plot.status}</Badge>
          </div>
          {plot.isFeatured && (
            <div className="absolute top-4 right-4 z-10">
              <Badge variant="featured">Featured</Badge>
            </div>
          )}
          <picture className="w-full h-full">
            <source srcSet={plot.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
            <img
              src={plot.image}
              alt={plot.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </picture>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow justify-between bg-card-bg relative z-20">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              {plot.plotType} • {plot.location}
            </span>
          </div>

          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors font-display">
            {plot.title}
          </h3>

          <p className="text-xs text-text-muted font-light mb-6 line-clamp-2 leading-relaxed">
            {plot.description}
          </p>

          <div className="grid grid-cols-12 gap-2 items-center p-3.5 sm:p-4 rounded-xl bg-surface-alt/60 border border-border-light/50 mb-6">
            <div className="col-span-7">
              <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block mb-0.5">
                Available Plot Sizes
              </span>
              <span className="text-xs sm:text-sm font-bold text-primary font-display leading-tight block">
                {plot.availableSizes || "1200, 1400, 1800, 2000 Sq. Ft."}
              </span>
            </div>
            <div className="col-span-5 text-right border-l border-border-light/40 pl-2">
              <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block mb-0.5">
                Customization
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-secondary leading-tight block">
                {plot.customSizeNote || "Custom sizes on request"}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border-light flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-0.5">
              Pricing & Availability
            </span>
            <span className="text-sm font-bold text-secondary font-display flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">request_quote</span>
              Price Available on Request
            </span>
          </div>
          <Button
            variant={plot.status === 'Available' ? 'secondary' : 'outline'}
            size="sm"
            onClick={handleBookVisit}
            disabled={plot.status === 'Sold'}
          >
            {plot.status === 'Sold' ? 'Sold Out' : 'Inquire Now'}
          </Button>
        </div>
      </div>
    </div>
  );
});

PlotCard.displayName = 'PlotCard';
