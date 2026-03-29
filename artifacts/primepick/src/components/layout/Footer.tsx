import React from 'react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-display font-bold text-2xl tracking-tight text-foreground flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-lg shadow-md">
                P
              </span>
              PrimePick<span className="text-primary">.KA</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 text-balance">
              Prime Deals. Prime Picks. Your premium online destination with nationwide delivery.
            </p>
            <div className="text-sm text-foreground/80 space-y-2">
              <p>Email: <a href="mailto:muhamadkaifsiyal@gmail.com" className="hover:text-primary font-medium transition-colors">muhamadkaifsiyal@gmail.com</a></p>
              <p>WhatsApp: <a href="https://wa.me/923116909904" target="_blank" rel="noreferrer" className="hover:text-primary font-medium transition-colors">0311-6909904</a></p>
              <p>Location: Pakistan (Online Store)</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/catalog?cat=Beauty" className="hover:text-primary transition-colors">Beauty</Link></li>
              <li><Link href="/catalog?cat=Fashion" className="hover:text-primary transition-colors">Fashion</Link></li>
              <li><Link href="/catalog?cat=Tech" className="hover:text-primary transition-colors">Tech</Link></li>
              <li><Link href="/catalog?cat=Accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Information</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/policies" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link href="/policies" className="hover:text-primary transition-colors">Return Policy</Link></li>
              <li><Link href="/policies" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PrimePick.KA. All rights reserved.</p>
          <p className="bg-secondary px-3 py-1 rounded-full font-medium">Nationwide Delivery — Tracking shared after dispatch</p>
        </div>
      </div>
    </footer>
  );
}
