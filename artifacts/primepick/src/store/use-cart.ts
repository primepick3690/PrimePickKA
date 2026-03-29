import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  cat: string;
  price: number;
  qty: number;
  variant?: string;
  accent?: string;
}

export interface BuyerDetails {
  name: string;
  city: string;
  business: string;
}

interface CartState {
  items: CartItem[];
  buyer: BuyerDetails;
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'qty'> & { qty?: number }) => void;
  removeItem: (id: string, variant?: string) => void;
  updateQty: (id: string, variant: string | undefined, qty: number) => void;
  clearCart: () => void;
  setBuyer: (buyer: Partial<BuyerDetails>) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      buyer: { name: '', city: '', business: '' },
      isOpen: false,
      
      addItem: (newItem) => set((state) => {
        const existing = state.items.find(
          (i) => i.id === newItem.id && i.variant === newItem.variant
        );
        if (existing) {
          return {
            items: state.items.map((i) =>
              i === existing ? { ...i, qty: i.qty + (newItem.qty || 1) } : i
            )
          };
        }
        return { items: [...state.items, { ...newItem, qty: newItem.qty || 1 }] };
      }),
      
      removeItem: (id, variant) => set((state) => ({
        items: state.items.filter((i) => !(i.id === id && i.variant === variant))
      })),
      
      updateQty: (id, variant, qty) => set((state) => ({
        items: state.items.map((i) =>
          (i.id === id && i.variant === variant) ? { ...i, qty: Math.max(1, qty) } : i
        )
      })),
      
      clearCart: () => set({ items: [] }),
      
      setBuyer: (details) => set((state) => ({ buyer: { ...state.buyer, ...details } })),
      setIsOpen: (isOpen) => set({ isOpen }),
    }),
    {
      name: 'primepick-cart-storage',
      partialize: (state) => ({ items: state.items, buyer: state.buyer }), // don't persist isOpen
    }
  )
);
