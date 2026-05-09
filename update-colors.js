import fs from 'fs';
import path from 'path';

const colorMap = {
  'bg-brand-cool-white': 'bg-brand-sand',
  'text-brand-olive': 'text-brand-dark',
  'hover:text-brand-olive': 'hover:text-brand-gold',
  'bg-brand-olive': 'bg-brand-gold',
  'hover:bg-brand-olive': 'hover:bg-brand-gold-hover',
  'text-brand-pink': 'text-brand-peach',
  'bg-brand-pink': 'bg-brand-peach',
  'hover:bg-brand-pink': 'hover:bg-brand-peach-text',
  'selection:bg-brand-pink': 'selection:bg-brand-peach selection:text-brand-dark'
};

const imgMap = {
  'https://images.unsplash.com/photo-1599385611293-19bd6992ad32?auto=format&fit=crop&q=80': 'https://github.com/liu378592655-rgb/NTP/releases/download/V1/banner-1920.jpg',
};

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace colors
      for (const [oldClass, newClass] of Object.entries(colorMap)) {
        content = content.replaceAll(oldClass, newClass);
      }
      
      // Replace images
      for (const [oldImg, newImg] of Object.entries(imgMap)) {
        content = content.replaceAll(oldImg, newImg);
      }
      
      // Add logo to Header
      if (fullPath.includes('Header.tsx')) {
        content = content.replace(
          '>\\n              NAITANGPAI\\n            </a>',
          '>\\n              <img src="https://github.com/liu378592655-rgb/NTP/releases/download/V1/NTP.logo.png" alt="NAITANGPAI" className="h-6 object-contain" />\\n            </a>'
        );
      }
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

walk('./src');
console.log('Update complete');
