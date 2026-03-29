import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Product } from '@/data/store';
import { formatPKR } from '@/lib/utils';
import { useCart } from '@/store/use-cart';
import { toast } from '@/store/use-toast-store';
import { ProductImage } from './ProductImage';
import { Badge } from './ui/Badge';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCart((s) => s.addItem);
  const setIsOpen = useCart((s) => s.setIsOpen);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Pick first variant if exists as default
    const variant = product.variants?.[0]?.options[0];
    
    addItem({
      id: product.id,
      name: product.name,
      cat: product.cat,
      price: product.price,
      variant,
      accent: product.accent
    });
    
    toast({ title: 'Added to Quote Cart', message: `${product.name} has been added.` });
    setIsOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="group"
    >
      <Link href={`/product/${product.id}`} className="block h-full">
        <div className="h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col hover:-translate-y-1">
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary/50">
            <ProductImage id={product.id} cat={product.cat} className="group-hover:scale-105 transition-transform duration-500" />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.tag && (
                <Badge variant={product.tag === 'Best Seller' ? 'default' : 'secondary'}>
                  {product.tag}
                </Badge>
              )}
            </div>

            {/* Quick Add overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <button
                onClick={handleQuickAdd}
                className="w-full bg-white/90 backdrop-blur text-foreground font-semibold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
              >
                <ShoppingBag className="w-4 h-4" /> Quick Add
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="p-5 flex flex-col flex-grow">
            <p className="text-sm font-medium text-muted-foreground mb-1">{product.cat}</p>
            <h3 className="font-display font-semibold text-lg text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-1">{product.notes}</p>
            
            <div className="mt-auto pt-4 border-t border-border flex items-end justify-between">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Demo Price</p>
                <p className="font-semibold text-lg">{formatPKR(product.price)}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
