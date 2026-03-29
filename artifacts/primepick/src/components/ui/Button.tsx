import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variant === 'default' && "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/30 hover:-translate-y-0.5",
          variant === 'outline' && "border-2 border-border bg-background hover:bg-secondary hover:text-secondary-foreground hover:border-primary/50",
          variant === 'ghost' && "hover:bg-secondary hover:text-secondary-foreground",
          variant === 'link' && "text-primary underline-offset-4 hover:underline",
          size === 'sm' && "h-9 px-3 text-sm",
          size === 'md' && "h-11 px-6 py-2",
          size === 'lg' && "h-14 px-8 text-lg rounded-2xl",
          size === 'icon' && "h-11 w-11",
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
