const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

(async () => {
  const inputPath = path.resolve(__dirname, '..', 'public', 'favicon.png');
  const outputPath = path.resolve(__dirname, '..', 'src', 'app', 'favicon.ico');

  if (!fs.existsSync(inputPath)) {
    console.error('Input PNG not found at', inputPath);
    process.exit(1);
  }

  try {
    const icoBuffer = await pngToIco(inputPath);
    await fs.promises.writeFile(outputPath, icoBuffer);
    console.log('Favicon written to', outputPath);
  } catch (error) {
    console.error('Conversion failed:', error);
    process.exit(1);
  }
})();




