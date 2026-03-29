export type Category = 'Beauty' | 'Fashion' | 'Tech' | 'Accessories';
export type Tag = 'Best Seller' | 'New' | 'Trending' | '';

export interface ProductVariant {
  label: string;
  options: string[];
}

export interface Product {
  id: string;
  cat: Category;
  name: string;
  tag: Tag;
  price: number;
  popular: number;
  isNew: boolean;
  notes: string;
  desc: string;
  meta: string[];
  accent: string;
  variants?: ProductVariant[];
}

export const THEMES: Record<Category | 'Default', { brand: string, brand2: string, bg1: string, bg2: string }> = {
  Beauty: { brand: '#e91e8c', brand2: '#ff6eb4', bg1: '#fff0f6', bg2: '#ffe4f0' },
  Fashion: { brand: '#7c3aed', brand2: '#a78bfa', bg1: '#f5f0ff', bg2: '#ede9fe' },
  Tech: { brand: '#0ea5e9', brand2: '#38bdf8', bg1: '#f0f9ff', bg2: '#e0f2fe' },
  Accessories: { brand: '#059669', brand2: '#34d399', bg1: '#f0fdf4', bg2: '#dcfce7' },
  Default: { brand: '#0f172a', brand2: '#334155', bg1: '#f8fafc', bg2: '#f1f5f9' },
};

export const products: Product[] = [
  // BEAUTY
  {
    id: 'b1', cat: 'Beauty', name: '"Aura" Lip Gloss', tag: 'Trending', price: 1200, popular: 85, isNew: false,
    notes: 'High Shine, Non-sticky',
    desc: 'Achieve a luscious, mirror-like finish with our "Aura" Lip Gloss. Formulated with nourishing oils to keep lips hydrated and plump all day.',
    meta: ['Cruelty Free', 'Vegan', 'Hydrating'], accent: THEMES.Beauty.brand
  },
  {
    id: 'b2', cat: 'Beauty', name: '"Revive" Vitamin C Serum', tag: 'Best Seller', price: 2500, popular: 98, isNew: false,
    notes: 'Brightening Elixir',
    desc: 'A potent 15% Vitamin C serum that targets dark spots, dullness, and uneven skin tone for a radiant complexion.',
    meta: ['Dermatologist Tested', 'Sulfate Free'], accent: THEMES.Beauty.brand,
    variants: [{ label: 'Size', options: ['30ml', '60ml'] }]
  },
  {
    id: 'b3', cat: 'Beauty', name: '"Silk" Night Face Cream', tag: '', price: 3200, popular: 75, isNew: false,
    notes: 'Deep Hydration',
    desc: 'Wake up to baby-soft skin. This rich, luxurious cream works overnight to repair the skin barrier and lock in moisture.',
    meta: ['Paraben Free', 'For Dry Skin'], accent: THEMES.Beauty.brand
  },
  {
    id: 'b4', cat: 'Beauty', name: '"Precision" Liquid Eyeliner', tag: 'New', price: 950, popular: 60, isNew: true,
    notes: 'Waterproof, Smudge-proof',
    desc: 'Create razor-sharp wings with ease. Our ultra-fine felt tip delivers intense black pigment that lasts up to 24 hours.',
    meta: ['Ophthalmologist Tested', 'Matte Finish'], accent: THEMES.Beauty.brand
  },
  {
    id: 'b5', cat: 'Beauty', name: '"Flawless" Matte Foundation', tag: 'Best Seller', price: 2800, popular: 92, isNew: false,
    notes: 'Full Coverage',
    desc: 'A lightweight yet full-coverage foundation that controls oil and blurs pores for an airbrushed, matte finish.',
    meta: ['Oil-Free', 'Non-comedogenic'], accent: THEMES.Beauty.brand,
    variants: [{ label: 'Shade', options: ['Light', 'Medium', 'Tan', 'Deep'] }]
  },
  {
    id: 'b6', cat: 'Beauty', name: '"Nourish" Argan Hair Oil', tag: '', price: 1800, popular: 80, isNew: false,
    notes: 'Frizz Control & Repair',
    desc: 'Infused with Moroccan Argan oil, this lightweight formula tames frizz, adds incredible shine, and protects against heat damage.',
    meta: ['Cold-pressed', 'Silicone Free'], accent: THEMES.Beauty.brand
  },
  {
    id: 'b7', cat: 'Beauty', name: '"Shield" SPF 50 Sunscreen', tag: 'Trending', price: 1500, popular: 88, isNew: false,
    notes: 'No White Cast',
    desc: 'Broad-spectrum UVA/UVB protection in a featherlight, fast-absorbing gel that leaves zero residue on any skin tone.',
    meta: ['Reef Safe', 'Fragrance Free'], accent: THEMES.Beauty.brand
  },

  // FASHION
  {
    id: 'f1', cat: 'Fashion', name: '"Zoya" Printed Lawn Suit', tag: 'Trending', price: 4500, popular: 85, isNew: false,
    notes: 'Unstitched 3-Piece',
    desc: 'Premium quality summer lawn with vibrant digital prints. Includes shirt, trouser, and a lightweight chiffon dupatta.',
    meta: ['100% Cotton Lawn', 'Summer Collection'], accent: THEMES.Fashion.brand,
    variants: [{ label: 'Size', options: ['Unstitched', 'S', 'M', 'L'] }]
  },
  {
    id: 'f2', cat: 'Fashion', name: '"Zara" Embroidered Kurta', tag: 'Best Seller', price: 3200, popular: 95, isNew: false,
    notes: 'Ready to Wear',
    desc: 'Elegant single shirt piece featuring intricate thread embroidery on the neckline and sleeves. Perfect for smart-casual wear.',
    meta: ['Pre-shrunk', 'Machine Washable'], accent: THEMES.Fashion.brand,
    variants: [{ label: 'Size', options: ['S', 'M', 'L', 'XL'] }]
  },
  {
    id: 'f3', cat: 'Fashion', name: '"Aria" Palazzo Pants', tag: '', price: 1800, popular: 70, isNew: false,
    notes: 'Flowy & Comfortable',
    desc: 'Wide-leg palazzo pants made from breathable fabric. Features a comfortable elasticated waist and functional pockets.',
    meta: ['Breathable', 'Relaxed Fit'], accent: THEMES.Fashion.brand,
    variants: [{ label: 'Size', options: ['S', 'M', 'L'] }]
  },
  {
    id: 'f4', cat: 'Fashion', name: '"Noor" Pashmina Shawl', tag: 'New', price: 2500, popular: 65, isNew: true,
    notes: 'Winter Essential',
    desc: 'Incredibly soft and warm. Wrap yourself in luxury with this beautifully woven traditional pashmina shawl.',
    meta: ['Hand Wash Only', 'Premium Blend'], accent: THEMES.Fashion.brand
  },
  {
    id: 'f5', cat: 'Fashion', name: '"Luna" Leather Handbag', tag: 'Trending', price: 4800, popular: 82, isNew: false,
    notes: 'Minimalist Tote',
    desc: 'Spacious everyday tote bag crafted from high-quality PU leather. Features multiple compartments and a secure zip closure.',
    meta: ['Cruelty-Free Leather', 'Water Resistant'], accent: THEMES.Fashion.brand,
    variants: [{ label: 'Color', options: ['Black', 'Tan'] }]
  },
  {
    id: 'f6', cat: 'Fashion', name: '"Maya" Block Heel Sandals', tag: '', price: 2900, popular: 78, isNew: false,
    notes: '2-inch Comfortable Heel',
    desc: 'Step out in style with these versatile block heels. Designed with a padded insole for all-day comfort.',
    meta: ['Anti-slip Sole', 'Cushioned Footbed'], accent: THEMES.Fashion.brand,
    variants: [{ label: 'Size (EU)', options: ['37', '38', '39', '40', '41'] }]
  },
  {
    id: 'f7', cat: 'Fashion', name: '"Stella" Western Ribbed Top', tag: 'Best Seller', price: 1500, popular: 90, isNew: false,
    notes: 'Everyday Basic',
    desc: 'A wardrobe staple. This fitted ribbed knit top features a square neckline and soft, stretchy fabric that flatters every shape.',
    meta: ['Stretch Fit', 'Cotton Blend'], accent: THEMES.Fashion.brand,
    variants: [{ label: 'Size', options: ['XS', 'S', 'M', 'L'] }]
  },

  // TECH
  {
    id: 't1', cat: 'Tech', name: '"Core" Fast Charging Cable', tag: '', price: 800, popular: 75, isNew: false,
    notes: 'Nylon Braided, 1.5m',
    desc: 'Ultra-durable charging cable designed to withstand 10,000+ bends. Supports fast charging and high-speed data transfer.',
    meta: ['Tangle-free', '1.5 Meter Length'], accent: THEMES.Tech.brand,
    variants: [{ label: 'Type', options: ['Type-C', 'Lightning', 'Micro-USB'] }]
  },
  {
    id: 't2', cat: 'Tech', name: '"Bolt" 20W PD Charger', tag: 'Trending', price: 1800, popular: 88, isNew: false,
    notes: 'Compact Power Adapter',
    desc: 'Charge your devices up to 3x faster. This compact adapter features smart IC tech to protect against overcharging.',
    meta: ['Overheat Protection', 'Universal Compatibility'], accent: THEMES.Tech.brand,
    variants: [{ label: 'Color', options: ['White', 'Black'] }]
  },
  {
    id: 't3', cat: 'Tech', name: '"Sonic" True Wireless Earbuds', tag: 'Best Seller', price: 4500, popular: 96, isNew: false,
    notes: 'ANC Support, 24hr Battery',
    desc: 'Immerse yourself in premium sound. Features Active Noise Cancellation, touch controls, and a sleek charging case.',
    meta: ['Bluetooth 5.3', 'IPX4 Water Resistant'], accent: THEMES.Tech.brand
  },
  {
    id: 't4', cat: 'Tech', name: '"Armor" Clear Phone Case', tag: '', price: 1200, popular: 80, isNew: false,
    notes: 'Shockproof Bumpers',
    desc: 'Show off your phone while keeping it safe. Features reinforced corners and raised bezels to protect screen and camera.',
    meta: ['Anti-Yellowing', 'Drop Tested'], accent: THEMES.Tech.brand,
    variants: [{ label: 'Model', options: ['iPhone 14', 'iPhone 15', 'S23', 'S24'] }]
  },
  {
    id: 't5', cat: 'Tech', name: '"Juice" 10,000mAh Power Bank', tag: 'New', price: 3500, popular: 72, isNew: true,
    notes: 'Ultra Slim Design',
    desc: 'Never run out of battery. This pocket-sized powerhouse can charge an average smartphone up to 3 times.',
    meta: ['Dual Outputs', 'LED Indicators'], accent: THEMES.Tech.brand
  },
  {
    id: 't6', cat: 'Tech', name: '"Glass" Screen Protector', tag: 'Trending', price: 600, popular: 90, isNew: false,
    notes: '9H Hardness',
    desc: 'Premium edge-to-edge protection. Keeps your display safe from scratches, drops, and everyday wear.',
    meta: ['Oleophobic Coating', 'Bubble-free Install'], accent: THEMES.Tech.brand
  },
  {
    id: 't7', cat: 'Tech', name: '"Glow" Selfie Ring Light', tag: '', price: 1500, popular: 68, isNew: false,
    notes: '3 Color Modes, Tripod Stand',
    desc: 'Perfect for content creators. Adjustable brightness and color temperatures for flawless lighting in any environment.',
    meta: ['USB Powered', 'Adjustable Height'], accent: THEMES.Tech.brand
  },

  // ACCESSORIES
  {
    id: 'a1', cat: 'Accessories', name: '"Classic" Aviator Sunglasses', tag: 'Trending', price: 2200, popular: 85, isNew: false,
    notes: 'Polarized Lenses',
    desc: 'Timeless style meets modern eye protection. Lightweight metal frame with 100% UV-blocking polarized lenses.',
    meta: ['UV400 Protection', 'Scratch Resistant'], accent: THEMES.Accessories.brand
  },
  {
    id: 'a2', cat: 'Accessories', name: '"Vanguard" Minimalist Watch', tag: 'Best Seller', price: 5500, popular: 92, isNew: false,
    notes: 'Quartz Movement',
    desc: 'Elevate your wrist game. An ultra-slim profile paired with a premium mesh strap for a sophisticated look.',
    meta: ['3ATM Water Resistant', 'Stainless Steel'], accent: THEMES.Accessories.brand,
    variants: [{ label: 'Color', options: ['Silver', 'Rose Gold', 'Matte Black'] }]
  },
  {
    id: 'a3', cat: 'Accessories', name: '"Essential" Reversible Belt', tag: '', price: 1800, popular: 78, isNew: false,
    notes: 'Genuine Leather',
    desc: 'Two belts in one. Easily switch between black and brown to match any outfit. Finished with a brushed metal buckle.',
    meta: ['1.5" Width', 'Durable Build'], accent: THEMES.Accessories.brand,
    variants: [{ label: 'Size', options: ['32', '34', '36', '38', '40'] }]
  },
  {
    id: 'a4', cat: 'Accessories', name: '"Urban" Baseball Cap', tag: 'New', price: 950, popular: 60, isNew: true,
    notes: 'Adjustable Strap',
    desc: 'A classic 6-panel cap made from breathable cotton twill. Features an embroidered minimalist logo.',
    meta: ['100% Cotton', 'One Size Fits All'], accent: THEMES.Accessories.brand,
    variants: [{ label: 'Color', options: ['Black', 'Navy', 'Olive'] }]
  }
];
