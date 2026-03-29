import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { products, THEMES, Category } from '@/data/store';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/Button';

const CATEGORIES: { name: Category; desc: string; icon: string }[] = [
  { name: 'Beauty', desc: 'Skincare & Cosmetics', icon: '✨' },
  { name: 'Fashion', desc: 'Apparel & Footwear', icon: '👗' },
  { name: 'Tech', desc: 'Gadgets & Accessories', icon: '⚡' },
  { name: 'Accessories', desc: 'Watches & Essentials', icon: '⌚' },
];

export default function Home() {
  useTheme('Default');

  const featuredProducts = [
    ...products.filter(p => p.cat === 'Beauty').slice(0, 2),
    ...products.filter(p => p.cat === 'Fashion').slice(0, 2),
    ...products.filter(p => p.cat === 'Tech').slice(0, 2),
    ...products.filter(p => p.cat === 'Accessories').slice(0, 2),
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-24 py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-white to-secondary/50 -z-10" />
        
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white border border-border text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-6 shadow-sm">
              Welcome to PrimePick.KA
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-foreground tracking-tight leading-[1.1] mb-8">
              Prime Deals. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Prime Picks.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 text-balance mx-auto">
              Curated premium collections delivered right to your doorstep. Nationwide Delivery — Tracking shared after dispatch.
            </p>
            <Link href="/catalog">
              <Button size="lg" className="rounded-full shadow-primary/20">
                Shop the Collection <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Explore Categories</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => {
            const theme = THEMES[cat.name];
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/catalog?cat=${cat.name}`}>
                  <div 
                    className="group relative overflow-hidden rounded-3xl p-8 h-64 flex flex-col justify-end border border-border/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{ backgroundColor: theme.bg1 }}
                  >
                    <div className="absolute top-6 right-6 text-4xl opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
                      {cat.icon}
                    </div>
                    {/* Decorative abstract shape */}
                    <div 
                      className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"
                      style={{ backgroundColor: theme.brand }}
                    />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:translate-x-2 transition-transform">{cat.name}</h3>
                      <p className="text-muted-foreground font-medium group-hover:translate-x-2 transition-transform delay-75">{cat.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Picks</h2>
            <p className="text-muted-foreground">Our most loved items across all categories.</p>
          </div>
          <Link href="/catalog" className="hidden sm:flex items-center text-primary font-semibold hover:underline">
            View All <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
        <div className="mt-10 sm:hidden">
          <Link href="/catalog">
            <Button variant="outline" className="w-full">View All Products</Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
