import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'secondary';
}

export function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variant === 'default' && "bg-primary text-primary-foreground shadow-sm",
        variant === 'secondary' && "bg-secondary text-secondary-foreground",
        variant === 'outline' && "text-foreground border border-border",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
