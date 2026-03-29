import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, MessageCircle, Mail } from 'lucide-react';
import { useCart } from '@/store/use-cart';
import { formatPKR } from '@/lib/utils';
import { Button } from '../ui/Button';

export function QuoteCart() {
  const { isOpen, setIsOpen, items, buyer, setBuyer, updateQty, removeItem } = useCart();

  const handleWhatsApp = () => {
    if (!buyer.name || !buyer.city) {
      alert("Please fill in your Name and City before sending an inquiry.");
      return;
    }
    
    const text = `Hi PrimePick.KA — Prime Deals. Prime Picks.\n\nBuyer: ${buyer.name}, ${buyer.city}${buyer.business ? `, ${buyer.business}` : ''}\n\nItems:\n${items.map((i, idx) => `${idx+1}. ${i.name} ${i.variant ? `(${i.variant})` : ''} x${i.qty}`).join('\n')}\n\nPlease share final price, availability, delivery time & courier charges.`;
    
    window.open(`https://wa.me/923116909904?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmail = () => {
    if (!buyer.name || !buyer.city) {
      alert("Please fill in your Name and City before sending an inquiry.");
      return;
    }
    
    const text = `Hi PrimePick.KA — Prime Deals. Prime Picks.\n\nBuyer: ${buyer.name}, ${buyer.city}${buyer.business ? `, ${buyer.business}` : ''}\n\nItems:\n${items.map((i, idx) => `${idx+1}. ${i.name} ${i.variant ? `(${i.variant})` : ''} x${i.qty}`).join('\n')}\n\nPlease share final price, availability, delivery time & courier charges.`;
    
    window.location.href = `mailto:muhamadkaifsiyal@gmail.com?subject=Quote Inquiry - ${buyer.name}&body=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display font-bold text-2xl">Quote Cart</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8 hide-scrollbar">
              {/* Buyer Form */}
              <div className="space-y-4 bg-secondary/50 p-5 rounded-2xl border border-border">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Your Details</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={buyer.name}
                    onChange={(e) => setBuyer({ name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="City *"
                    value={buyer.city}
                    onChange={(e) => setBuyer({ city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Business Name (Optional)"
                    value={buyer.business}
                    onChange={(e) => setBuyer({ business: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              {/* Items */}
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Items ({items.length})
                </h3>
                
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground font-medium">Your cart is empty.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.variant}`} className="flex gap-4 p-4 bg-white rounded-2xl border border-border/50 shadow-sm">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0" style={{ backgroundColor: item.accent ? `${item.accent}15` : '#f1f5f9' }}>
                           {/* Simple initials/icon placeholder for cart to save rendering heavy SVGs */}
                           <div className="w-full h-full flex items-center justify-center text-2xl font-display font-bold" style={{ color: item.accent || '#0f172a' }}>
                             {item.name.charAt(1)}
                           </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-foreground line-clamp-1">{item.name}</p>
                              {item.variant && <p className="text-sm text-muted-foreground">{item.variant}</p>}
                            </div>
                            <button onClick={() => removeItem(item.id, item.variant)} className="text-muted-foreground hover:text-destructive p-1">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-3 bg-secondary rounded-lg p-1">
                              <button onClick={() => updateQty(item.id, item.variant, item.qty - 1)} className="p-1 hover:bg-white rounded-md transition-colors"><Minus className="w-3 h-3" /></button>
                              <span className="text-sm font-semibold w-4 text-center">{item.qty}</span>
                              <button onClick={() => updateQty(item.id, item.variant, item.qty + 1)} className="p-1 hover:bg-white rounded-md transition-colors"><Plus className="w-3 h-3" /></button>
                            </div>
                            <p className="font-semibold text-sm">{formatPKR(item.price * item.qty)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-border bg-white space-y-3">
              <p className="text-xs text-center text-muted-foreground mb-4">Prices are estimates. Final price confirmed on inquiry.</p>
              <Button 
                onClick={handleWhatsApp} 
                disabled={items.length === 0} 
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-[#25D366]/25 border-none h-14 rounded-xl text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Send Inquiry via WhatsApp
              </Button>
              <Button 
                onClick={handleEmail} 
                disabled={items.length === 0} 
                variant="outline" 
                className="w-full h-14 rounded-xl"
              >
                <Mail className="w-5 h-5 mr-2" /> Email Inquiry
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
