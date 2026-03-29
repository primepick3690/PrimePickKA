import { useEffect } from 'react';
import { THEMES, Category } from '@/data/store';

export function useTheme(cat?: Category | 'Default' | null) {
  useEffect(() => {
    const themeKey = cat && THEMES[cat as keyof typeof THEMES] ? cat : 'Default';
    const theme = THEMES[themeKey as keyof typeof THEMES];
    
    const root = document.documentElement;
    root.style.setProperty('--brand', theme.brand);
    root.style.setProperty('--brand2', theme.brand2);
    root.style.setProperty('--bg1', theme.bg1);
    root.style.setProperty('--bg2', theme.bg2);
  }, [cat]);
}
