import React from 'react';
import { cn } from '@/lib/utils';
import { THEMES, Category } from '@/data/store';

interface ProductImageProps {
  id: string;
  cat: Category;
  className?: string;
}

export function ProductImage({ id, cat, className }: ProductImageProps) {
  const theme = THEMES[cat] || THEMES.Default;
  
  // Deterministic pattern based on ID
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const cx = 30 + (hash % 40);
  const cy = 30 + ((hash * 2) % 40);
  
  return (
    <svg viewBox="0 0 400 400" className={cn("w-full h-full object-cover", className)}>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.bg1} />
          <stop offset="100%" stopColor={theme.bg2} />
        </linearGradient>
        <radialGradient id={`glow-${id}`} cx={`${cx}%`} cy={`${cy}%`} r="60%">
          <stop offset="0%" stopColor={theme.brand} stopOpacity="0.15" />
          <stop offset="100%" stopColor={theme.brand} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#grad-${id})`} />
      <rect width="400" height="400" fill={`url(#glow-${id})`} />
      
      {/* Abstract geometric shape representing the product */}
      <g transform={`translate(${200}, ${200}) scale(${1 + (hash%20)/100})`}>
        {cat === 'Beauty' && (
          <path d="M-40,20 C-40,-30 0,-60 0,-60 C0,-60 40,-30 40,20 C40,50 20,70 0,70 C-20,70 -40,50 -40,20 Z" fill={theme.brand} opacity="0.8" />
        )}
        {cat === 'Fashion' && (
          <polygon points="0,-50 40,30 -40,30" fill={theme.brand} opacity="0.8" />
        )}
        {cat === 'Tech' && (
          <rect x="-35" y="-35" width="70" height="70" rx="15" fill={theme.brand} opacity="0.8" />
        )}
        {cat === 'Accessories' && (
          <circle cx="0" cy="0" r="40" fill={theme.brand} opacity="0.8" />
        )}
      </g>
    </svg>
  );
}
