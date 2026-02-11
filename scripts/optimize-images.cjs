const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public');
const outputDir = inputDir;

if (!fs.existsSync(inputDir)) {
    console.error('Public directory not found');
    process.exit(1);
}

const files = fs.readdirSync(inputDir);

files.forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

        console.log(`Converting ${file} to WebP...`);

        sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath)
            .then(info => {
                console.log(`Converted ${file} to ${path.basename(outputPath)}`);
            })
            .catch(err => {
                console.error(`Error converting ${file}:`, err);
            });
    }
});
