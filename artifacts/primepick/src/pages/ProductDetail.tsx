import React, { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products } from '@/data/store';
import { useTheme } from '@/hooks/use-theme';
import { formatPKR } from '@/lib/utils';
import { useCart } from '@/store/use-cart';
import { toast } from '@/store/use-toast-store';
import NotFound from './not-found';
import { ProductImage } from '@/components/ProductImage';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProductCard } from '@/components/ProductCard';

export default function ProductDetail() {
  const [, params] = useRoute('/product/:id');
  const id = params?.id;
  
  const product = products.find(p => p.id === id);
  
  useTheme(product?.cat || 'Default');

  const [qty, setQty] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  
  const addItem = useCart(s => s.addItem);
  const setIsOpen = useCart(s => s.setIsOpen);

  // Reset state on product change
  useEffect(() => {
    if (product) {
      setQty(1);
      const defaults: Record<string, string> = {};
      product.variants?.forEach(v => { defaults[v.label] = v.options[0]; });
      setSelectedVariants(defaults);
      window.scrollTo(0, 0);
    }
  }, [product?.id]);

  if (!product) return <NotFound />;

  const handleAddCart = () => {
    const variantStr = Object.values(selectedVariants).join(' / ');
    addItem({
      id: product.id,
      name: product.name,
      cat: product.cat,
      price: product.price,
      qty,
      variant: variantStr || undefined,
      accent: product.accent
    });
    toast({ title: 'Added to Quote Cart', message: `${qty}x ${product.name} added.` });
    setIsOpen(true);
  };

  const handleWhatsApp = () => {
    const variantStr = Object.values(selectedVariants).join(' / ');
    const text = `Hi PrimePick.KA!\nI'm interested in:\n${product.name} ${variantStr ? `(${variantStr})` : ''} x${qty}\n\nPlease share final price, availability & delivery details.`;
    window.open(`https://wa.me/923116909904?text=${encodeURIComponent(text)}`, '_blank');
  };

  const related = products.filter(p => p.cat === product.cat && p.id !== product.id).slice(0, 4);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-24 min-h-screen bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Product Area */}
        <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-border flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Image Gallery */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            <motion.div 
              layoutId={`img-${product.id}`}
              className="aspect-square rounded-3xl overflow-hidden bg-secondary border border-border/50 relative"
            >
              <ProductImage id={product.id} cat={product.cat} />
              {product.tag && (
                <div className="absolute top-4 left-4">
                  <Badge className="text-sm px-4 py-1">{product.tag}</Badge>
                </div>
              )}
            </motion.div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto hide-scrollbar">
              {[1, 2, 3].map((num) => (
                <button key={num} className={`w-24 h-24 rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-colors ${num === 1 ? 'border-primary' : 'border-border opacity-60 hover:opacity-100'}`}>
                   <ProductImage id={`${product.id}-${num}`} cat={product.cat} />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">{product.cat}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-4">
              {product.name}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {product.meta.map(m => (
                <span key={m} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  <Check className="w-3.5 h-3.5" /> {m}
                </span>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.desc}
            </p>

            <div className="bg-secondary/30 p-6 rounded-2xl mb-8 border border-border">
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Demo Price</p>
              <p className="text-3xl font-bold text-foreground">{formatPKR(product.price)}</p>
              <p className="text-xs text-muted-foreground mt-2">Prices shown are for sorting purposes. Exact price confirmed via WhatsApp.</p>
            </div>

            {/* Variants */}
            {product.variants && product.variants.map((v) => (
              <div key={v.label} className="mb-8">
                <h4 className="font-semibold mb-3 uppercase tracking-wide text-sm">{v.label}</h4>
                <div className="flex flex-wrap gap-3">
                  {v.options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setSelectedVariants(prev => ({...prev, [v.label]: opt}))}
                      className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        selectedVariants[v.label] === opt 
                          ? 'bg-primary text-white shadow-md' 
                          : 'bg-white border-2 border-border text-foreground hover:border-primary/50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-between bg-secondary rounded-xl p-1 h-14 w-full sm:w-32 flex-shrink-0">
                <button onClick={() => setQty(Math.max(1, qty-1))} className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm hover:text-primary transition-colors"><Minus className="w-4 h-4" /></button>
                <span className="font-semibold">{qty}</span>
                <button onClick={() => setQty(qty+1)} className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm hover:text-primary transition-colors"><Plus className="w-4 h-4" /></button>
              </div>
              <Button size="lg" className="flex-1" onClick={handleAddCart}>
                <ShoppingBag className="w-5 h-5 mr-2" /> Add to Quote Cart
              </Button>
            </div>
            
            <Button variant="outline" size="lg" className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5 mr-2" /> Request Exact Price on WhatsApp
            </Button>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </div>
        )}
        
      </div>
    </motion.div>
  );
}
