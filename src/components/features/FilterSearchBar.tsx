'use client';

import React, { memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setLocation, setPlotType, setSizeRange } from '@/store/filterSlice';

interface FilterSearchBarProps {
  onSearchSubmit?: () => void;
}

export const FilterSearchBar: React.FC<FilterSearchBarProps> = memo(({ onSearchSubmit }) => {
  const dispatch = useAppDispatch();
  const { location, plotType, sizeRange } = useAppSelector((state) => state.filter);

  const handleLocationChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setLocation(e.target.value));
    },
    [dispatch]
  );

  const handlePlotTypeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setPlotType(e.target.value));
    },
    [dispatch]
  );

  const handleSizeRangeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSizeRange(e.target.value));
    },
    [dispatch]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit();
  };

  return (
    <div className="bg-card-bg p-8 rounded-2xl shadow-[0_40px_80px_-20px_rgba(61,43,31,0.08)] border border-border-light">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
        {/* Preferred Location */}
        <div className="flex flex-col space-y-3 md:border-r border-border-light pr-8">
          <label className="text-xs font-semibold text-text-muted uppercase tracking-[0.15em]">
            Preferred Location
          </label>
          <div className="relative">
            <select
              value={location}
              onChange={handleLocationChange}
              className="appearance-none w-full bg-transparent pr-8 font-medium text-lg text-primary outline-none focus:ring-0 cursor-pointer [&>option]:bg-card-bg [&>option]:text-primary"
            >
              <option value="All Locations">All Locations</option>
              <option value="Saheed Nagar">Saheed Nagar</option>
              <option value="Khandagiri">Khandagiri</option>
              <option value="Patia">Patia</option>
              <option value="Hanspal">Hanspal</option>
              <option value="Pahala">Pahala</option>
            </select>
            <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-sm">
              expand_more
            </span>
          </div>
        </div>

        {/* Plot Type */}
        <div className="flex flex-col space-y-3 md:border-r border-border-light pr-8 pl-0 md:pl-4">
          <label className="text-xs font-semibold text-text-muted uppercase tracking-[0.15em]">
            Plot Type
          </label>
          <div className="relative">
            <select
              value={plotType}
              onChange={handlePlotTypeChange}
              className="appearance-none w-full bg-transparent pr-8 font-medium text-lg text-primary outline-none focus:ring-0 cursor-pointer [&>option]:bg-card-bg [&>option]:text-primary"
            >
              <option value="All Types">All Plot Types</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Investment">Investment</option>
            </select>
            <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-sm">
              expand_more
            </span>
          </div>
        </div>

        {/* Plot Size (Sq. Ft.) */}
        <div className="flex flex-col space-y-3 md:border-r border-border-light pr-8 pl-0 md:pl-4">
          <label className="text-xs font-semibold text-text-muted uppercase tracking-[0.15em]">
            Plot Size (Sq. Ft.)
          </label>
          <div className="relative">
            <select
              value={sizeRange}
              onChange={handleSizeRangeChange}
              className="appearance-none w-full bg-transparent pr-8 font-medium text-lg text-primary outline-none focus:ring-0 cursor-pointer [&>option]:bg-card-bg [&>option]:text-primary"
            >
              <option value="Any Size">Any Size</option>
              <option value="1000 - 2000">1000 - 2000</option>
              <option value="2000 - 4000">2000 - 4000</option>
              <option value="4000+">4000+</option>
            </select>
            <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-sm">
              expand_more
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="w-full inline-flex items-center justify-center px-6 py-4 bg-secondary text-white rounded-lg text-sm font-bold tracking-[0.15em] uppercase hover:bg-secondary-light transition-all duration-300 h-[56px] shadow-lg shadow-secondary/20 ml-0 md:ml-4 cursor-pointer"
          type="submit"
        >
          <span className="material-symbols-outlined mr-2 text-[20px]">search</span> Explore Plots
        </button>
      </form>
    </div>
  );
});

FilterSearchBar.displayName = 'FilterSearchBar';
