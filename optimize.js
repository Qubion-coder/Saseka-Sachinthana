import sharp from 'sharp';

const imagePath = 'public/ChatGPT Image Aug 11, 2026, 01_01_47 AM.png';
const webpPath = 'public/ChatGPT Image Aug 11, 2026, 01_01_47 AM.webp';

async function optimizeImage() {
  try {
    console.log('Optimizing image to WebP...');
    await sharp(imagePath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 70 })
      .toFile(webpPath);
    console.log('Optimized successfully.');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
