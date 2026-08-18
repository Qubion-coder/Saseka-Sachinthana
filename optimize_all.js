import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const webpPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
        
        // Skip if webp already exists
        if (!fs.existsSync(webpPath)) {
          console.log(`Optimizing: ${fullPath}`);
          try {
            await sharp(fullPath)
              .resize({ width: 1200, withoutEnlargement: true })
              .webp({ quality: 75 })
              .toFile(webpPath);
            console.log(`Created: ${webpPath}`);
          } catch (error) {
            console.error(`Error optimizing ${fullPath}:`, error);
          }
        }
      }
    }
  }
}

async function run() {
  console.log('Starting optimization...');
  await processDirectory(publicDir);
  console.log('Done.');
}

run();
