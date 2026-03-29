import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Truck, RefreshCw, FileText } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export default function Policies() {
  useTheme('Default');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 min-h-screen bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Store Policies</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Everything you need to know about shopping with PrimePick.KA.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Shipping */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Truck className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold font-display">Shipping Policy</h2>
            </div>
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p>At PrimePick.KA, we are proud to offer <strong>Nationwide Delivery</strong> across Pakistan. Our shipping process is designed to be transparent and efficient.</p>
              <ul>
                <li><strong>Dispatch Time:</strong> Orders are typically processed and dispatched within 24-48 hours after confirmation via WhatsApp.</li>
                <li><strong>Tracking:</strong> Tracking information is shared immediately after dispatch so you can monitor your package's journey.</li>
                <li><strong>Delivery Time:</strong> Standard delivery takes 3-5 business days depending on your city.</li>
                <li><strong>Courier Charges:</strong> Exact shipping rates are calculated based on package weight and destination city, and will be communicated to you during the quote process.</li>
              </ul>
            </div>
          </div>

          {/* Returns */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <RefreshCw className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold font-display">Return & Exchange</h2>
            </div>
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p>We want you to love your purchase. If you receive a damaged or incorrect item, please contact us within 48 hours of delivery.</p>
              <ul>
                <li>Items must be unused and in their original packaging to be eligible for an exchange.</li>
                <li>To initiate a return/exchange, simply message us on WhatsApp with photos of the product and your order details.</li>
                <li>Please note that due to hygiene reasons, cosmetics and skincare items cannot be returned unless the seal is broken during transit.</li>
              </ul>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Shield className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold font-display">Privacy Policy</h2>
            </div>
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p>Your privacy is important to us. The details you provide (Name, City, Contact Info) are solely used for processing your inquiry and dispatching your orders.</p>
              <p>We do not share, sell, or rent your personal information to third parties. All communication happens securely via direct WhatsApp or Email channels.</p>
            </div>
          </div>

          {/* Terms */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <FileText className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold font-display">Terms of Service</h2>
            </div>
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p>By using the PrimePick.KA storefront and submitting a quote inquiry, you agree to the following terms:</p>
              <ul>
                <li>The prices displayed on the website are "Demo Prices" and may vary slightly based on actual market stock. Final pricing is established during WhatsApp communication.</li>
                <li>We reserve the right to refuse service or cancel inquiries if items are out of stock.</li>
                <li>Product images are illustrative SVGs. Actual product packaging may differ slightly.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
