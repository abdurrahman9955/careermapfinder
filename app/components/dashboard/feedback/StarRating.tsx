'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
  isDark: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ value, onChange, isDark }) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const activeRating = hoverValue !== null ? hoverValue : value;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    starIndex: number
  ) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - left;
    // Check if mouse is on left half or right half of the star
    const isHalf = clickX < width / 2;
    const newRating = isHalf ? starIndex - 0.5 : starIndex;
    setHoverValue(newRating);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    starIndex: number
  ) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - left;
    const isHalf = clickX < width / 2;
    const newRating = isHalf ? starIndex - 0.5 : starIndex;
    onChange(newRating);
  };

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1.5" onMouseLeave={() => setHoverValue(null)}>
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const isFull = activeRating >= starIndex;
          const isHalf = activeRating === starIndex - 0.5;

          return (
            <div
              key={starIndex}
              onMouseMove={(e) => handleMouseMove(e, starIndex)}
              onClick={(e) => handleClick(e, starIndex)}
              className="relative cursor-pointer p-1 transition-transform hover:scale-110 select-none"
            >
              {/* Background Base Star */}
              <Star
                className={`w-5 h-5 ${
                  isDark ? 'text-slate-800 fill-slate-800' : 'text-slate-200 fill-slate-200'
                }`}
              />

              {/* Half or Full Overlay Star */}
              {(isFull || isHalf) && (
                <div
                  className="absolute top-1 left-1 overflow-hidden"
                  style={{ width: isHalf ? '50%' : '100%' }}
                >
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Numerical Badge Indicator */}
      <div className="flex items-center gap-2">
        <span
          className={`text-xs font-bold px-2.5 py-0 rounded-md border ${
            activeRating > 0
              ? 'bg-amber-500/10 text-amber-500 border-amber-500/20'
              : isDark
              ? 'bg-slate-800 border-slate-700 text-slate-400'
              : 'bg-slate-100 border-slate-200 text-slate-500'
          }`}
        >
          {activeRating > 0 ? `${activeRating.toFixed(1)} / 5.0 Rating` : 'Select Rating'}
        </span>
        <span className={`text-[11px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          (Click star sides for half ratings)
        </span>
      </div>
    </div>
  );
};