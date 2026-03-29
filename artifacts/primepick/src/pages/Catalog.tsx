import React, { useState, useMemo } from 'react';
import { useLocation, useSearch } from 'wouter';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { products, Category } from '@/data/store';
import { ProductCard } from '@/components/ProductCard';

type SortOption = 'popular' | 'new' | 'price_low' | 'price_high' | 'az';

export default function Catalog() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  
  const currentCat = (searchParams.get('cat') as Category) || null;
  const currentSort = (searchParams.get('sort') as SortOption) || 'popular';
  const currentQuery = searchParams.get('q') || '';

  const [, setLocation] = useLocation();

  // Apply theme dynamically based on category
  useTheme(currentCat || 'Default');

  const [localSearch, setLocalSearch] = useState(currentQuery);

  const updateUrl = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchString);
    Object.entries(updates).forEach(([key, val]) => {
      if (val === null) params.delete(key);
      else params.set(key, val);
    });
    setLocation(`/catalog?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateUrl({ q: localSearch || null });
  };

  // Filter & Sort
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (currentCat) {
      result = result.filter(p => p.cat === currentCat);
    }

    if (currentQuery) {
      const q = currentQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.notes.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );
    }

    switch (currentSort) {
      case 'popular':
        result.sort((a, b) => b.popular - a.popular);
        break;
      case 'new':
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case 'price_low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [currentCat, currentQuery, currentSort]);

  const categories: (Category | 'All')[] = ['All', 'Beauty', 'Fashion', 'Tech', 'Accessories'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-24 min-h-screen"
    >
      {/* Header Banner */}
      <div className="bg-primary/5 border-y border-primary/10 py-12 mb-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4 transition-colors">
            {currentCat ? `${currentCat} Collection` : 'All Products'}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium items. Demo prices shown for sorting purposes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Sidebar / Filters (Desktop) */}
          <div className="w-full md:w-64 flex-shrink-0 space-y-8 sticky top-24">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow shadow-sm"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
            </form>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><SlidersHorizontal className="w-5 h-5" /> Categories</h3>
              <div className="flex flex-row md:flex-col flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => updateUrl({ cat: cat === 'All' ? null : cat })}
                    className={`px-4 py-2.5 rounded-xl text-left text-sm font-medium transition-all ${
                      (cat === 'All' && !currentCat) || cat === currentCat
                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                        : 'bg-white border border-border text-foreground hover:border-primary hover:text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Sort By</h3>
              <div className="flex flex-col gap-2">
                {[
                  { value: 'popular', label: 'Most Popular' },
                  { value: 'new', label: 'Newest Arrivals' },
                  { value: 'price_low', label: 'Price: Low to High' },
                  { value: 'price_high', label: 'Price: High to Low' },
                  { value: 'az', label: 'Alphabetical (A-Z)' },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="sort"
                      checked={currentSort === opt.value}
                      onChange={() => updateUrl({ sort: opt.value })}
                      className="w-4 h-4 text-primary bg-secondary border-border focus:ring-primary focus:ring-offset-2"
                    />
                    <span className={`text-sm transition-colors ${currentSort === opt.value ? 'font-semibold text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1 w-full">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-border">
                <Search className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
                <button 
                  onClick={() => { setLocalSearch(''); updateUrl({ q: null, cat: null }); }}
                  className="mt-6 text-primary font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
