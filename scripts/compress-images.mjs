import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imageDir = path.resolve(__dirname, "../public/images");

const compressBackgroundImage = async (inputFile, outputFile) =>
  sharp(inputFile)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(outputFile);

const compressSmallImage = async (inputFile, outputFile) =>
  sharp(inputFile).webp({ quality: 85 }).toFile(outputFile);

async function processImages() {
  if (!fs.existsSync(imageDir)) {
    throw new Error(`Image directory does not exist: ${imageDir}`);
  }

  const pngFiles = fs
    .readdirSync(imageDir)
    .filter(
      (file) =>
        file.toLowerCase().endsWith(".png") &&
        fs.statSync(path.join(imageDir, file)).isFile(),
    );

  console.log(`Found ${pngFiles.length} PNG files to compress`);

  for (const file of pngFiles) {
    const inputPath = path.join(imageDir, file);
    const stats = fs.statSync(inputPath);
    const fileSizeInMB = stats.size / (1024 * 1024);
    const outputPath = path.join(imageDir, file.replace(/\.png$/i, ".webp"));

    console.log(`Processing ${file} (${fileSizeInMB.toFixed(2)} MB)`);

    try {
      if (fileSizeInMB > 1) {
        await compressBackgroundImage(inputPath, outputPath);
      } else {
        await compressSmallImage(inputPath, outputPath);
      }

      const newStats = fs.statSync(outputPath);
      const newFileSizeInMB = newStats.size / (1024 * 1024);
      const savingsPercent =
        stats.size > 0
          ? (((stats.size - newStats.size) / stats.size) * 100).toFixed(2)
          : "0.00";

      console.log(
        `Compressed ${file} to ${newFileSizeInMB.toFixed(2)} MB (saved ${savingsPercent}%)`,
      );
    } catch (error) {
      console.error(`Failed to compress ${file}:`, error);
      process.exitCode = 1;
    }
  }
}

processImages().catch((error) => {
  console.error("Image compression failed:", error);
  process.exitCode = 1;
});
