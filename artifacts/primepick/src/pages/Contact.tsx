import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export default function Contact() {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground text-balance">
            We're here to help! Whether you have a question about our products, need an exact price quote, or want to track an order.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-border overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            <div className="p-10 md:p-12 bg-primary text-primary-foreground">
              <h2 className="text-2xl font-bold font-display mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp (Preferred)</h3>
                    <p className="text-white/80 mb-2">Fastest response time for quotes.</p>
                    <a href="https://wa.me/923116909904" target="_blank" rel="noreferrer" className="text-xl font-bold hover:underline">
                      0311-6909904
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Support</h3>
                    <p className="text-white/80 mb-2">For general inquiries and support.</p>
                    <a href="mailto:muhamadkaifsiyal@gmail.com" className="font-medium hover:underline">
                      muhamadkaifsiyal@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-white/80">Online Store based in Pakistan. Nationwide Delivery available.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-12">
              <h2 className="text-2xl font-bold font-display mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" /> How long does delivery take?
                  </h4>
                  <p className="text-muted-foreground text-sm">We offer Nationwide Delivery across Pakistan. Typical delivery times are 3-5 business days. Tracking is shared immediately after dispatch.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" /> Why are these "Demo Prices"?
                  </h4>
                  <p className="text-muted-foreground text-sm">To provide you with the best possible rates based on current market availability and bulk ordering, we finalize all pricing via WhatsApp quotes.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" /> How do I place an order?
                  </h4>
                  <p className="text-muted-foreground text-sm">Simply add your desired items to the Quote Cart and send us the inquiry via WhatsApp or Email. Our team will confirm stock and process your order manually.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}
