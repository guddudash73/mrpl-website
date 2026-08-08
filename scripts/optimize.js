const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');

const imagesToOptimize = [
  { name: 'hero-slide-1.jpg', maxWidth: 1920, quality: 80 },
  { name: 'hero-slide-2.jpg', maxWidth: 1920, quality: 80 },
  { name: 'hero-slide-3.jpg', maxWidth: 1920, quality: 80 },
  { name: 'duplex-card-1.jpg', maxWidth: 1200, quality: 80 },
  { name: 'duplex-card-2.jpg', maxWidth: 1200, quality: 80 },
  { name: 'about-foundation.jpg', maxWidth: 1200, quality: 80 },
  { name: 'investment-bhubaneswar.jpg', maxWidth: 1000, quality: 80 },
  { name: 'prime-residential-plot.jpg', maxWidth: 1000, quality: 80 },
];

async function optimize() {
  console.log('Starting image optimization with Sharp...');
  for (const imgConfig of imagesToOptimize) {
    const inputPath = path.join(publicDir, imgConfig.name);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping missing image: ${imgConfig.name}`);
      continue;
    }

    const tempJpgPath = path.join(publicDir, `optimized_${imgConfig.name}`);
    const webpName = imgConfig.name.replace(/\.jpg$/, '.webp');
    const webpPath = path.join(publicDir, webpName);

    console.log(`Processing ${imgConfig.name}...`);
    
    // 1. Optimize JPG version
    await sharp(inputPath)
      .resize({ width: imgConfig.maxWidth, withoutEnlargement: true })
      .jpeg({ quality: imgConfig.quality, mozjpeg: true })
      .toFile(tempJpgPath);

    // 2. Generate WebP version
    await sharp(inputPath)
      .resize({ width: imgConfig.maxWidth, withoutEnlargement: true })
      .webp({ quality: imgConfig.quality })
      .toFile(webpPath);

    // Replace original JPG with optimized JPG
    fs.unlinkSync(inputPath);
    fs.renameSync(tempJpgPath, inputPath);

    const oldStats = fs.statSync(inputPath);
    const webpStats = fs.statSync(webpPath);

    console.log(`✓ ${imgConfig.name}: JPG=${(oldStats.size/1024).toFixed(1)}KB, WebP=${(webpStats.size/1024).toFixed(1)}KB`);
  }
  console.log('All images optimized successfully!');
}

optimize().catch(err => {
  console.error('Optimization error:', err);
  process.exit(1);
});
