import React from 'react';
import { Link } from 'wouter';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-border shadow-xl">
        <div className="w-16 h-16 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold font-display text-foreground mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back to shopping.
        </p>
        <Link href="/">
          <Button size="lg" className="w-full">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
