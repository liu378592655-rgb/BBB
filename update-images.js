import fs from 'fs';
import path from 'path';

const imgMap = [
  'https://github.com/liu378592655-rgb/NTP/releases/download/V1/01.jpg',
  'https://github.com/liu378592655-rgb/NTP/releases/download/V1/02.jpg',
  'https://github.com/liu378592655-rgb/NTP/releases/download/V1/03.jpg',
  'https://github.com/liu378592655-rgb/NTP/releases/download/V1/04.jpg',
  'https://github.com/liu378592655-rgb/NTP/releases/download/V1/05.jpg',
  'https://github.com/liu378592655-rgb/NTP/releases/download/V1/06.jpg',
  'https://github.com/liu378592655-rgb/NTP/releases/download/V1/07.jpg',
  'https://github.com/liu378592655-rgb/NTP/releases/download/V1/08.jpg',
  'https://github.com/liu378592655-rgb/NTP/releases/download/V1/20.jpg',
  'https://github.com/liu378592655-rgb/NTP/releases/download/V1/30.jpg',
];

let imgIndex = 0;

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      content = content.replace(/https:\/\/images\.unsplash\.com\/[^\s"']+/g, (match) => {
        modified = true;
        const newImg = imgMap[imgIndex % imgMap.length];
        imgIndex++;
        return newImg;
      });
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

walk('./src');
console.log('Update complete');
