import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, X, Info } from 'lucide-react';
import { useToastStore } from '@/store/use-toast-store';

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed bottom-0 right-0 z-[100] p-4 sm:p-6 md:p-8 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className="pointer-events-auto bg-white border border-border shadow-xl rounded-2xl p-4 flex gap-4 items-start"
          >
            <div className="flex-shrink-0 mt-0.5">
              {toast.type === 'error' ? (
                <div className="w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center"><X className="w-4 h-4" /></div>
              ) : toast.type === 'info' ? (
                <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center"><Info className="w-4 h-4" /></div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"><Check className="w-4 h-4" /></div>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground text-sm">{toast.title}</h4>
              {toast.message && <p className="text-sm text-muted-foreground mt-1">{toast.message}</p>}
            </div>
            <button onClick={() => removeToast(toast.id)} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
