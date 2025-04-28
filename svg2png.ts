#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import { program } from 'commander';
import sharp from 'sharp';

// Define the command-line interface
program
  .name('svg2png')
  .description('Convert SVG files to PNG with customizable size')
  .version('1.0.0')
  .requiredOption('-i, --input <file>', 'Input SVG file path')
  .requiredOption('-o, --output <file>', 'Output PNG file path')
  .option('-w, --width <number>', 'Output width in pixels', parseInt)
  .option('-h, --height <number>', 'Output height in pixels', parseInt)
  .option('-s, --scale <number>', 'Scale factor (default: 1.0)', parseFloat, 1.0)
  .option('-b, --background <color>', 'Background color (default: transparent)', 'transparent')
  .parse(process.argv);

const options = program.opts();

async function convertSvgToPng() {
  try {
    // Validate input file
    if (!fs.existsSync(options.input)) {
      console.error(`Error: Input file '${options.input}' does not exist`);
      process.exit(1);
    }

    if (path.extname(options.input).toLowerCase() !== '.svg') {
      console.error('Error: Input file must be an SVG file');
      process.exit(1);
    }

    // Read SVG file
    const svgBuffer = fs.readFileSync(options.input);

    // Create sharp instance with the SVG
    let sharpInstance = sharp(svgBuffer);

    // Get SVG metadata to calculate dimensions if not specified
    const metadata = await sharpInstance.metadata();

    // Calculate dimensions
    let width: number | undefined;
    let height: number | undefined;

    if (options.width && options.height) {
      // Both width and height specified
      width = options.width;
      height = options.height;
    } else if (options.width) {
      // Only width specified, calculate height to maintain aspect ratio
      width = options.width;
      if (metadata.width && metadata.height) {
        height = Math.round(options.width * (metadata.height / metadata.width));
      }
    } else if (options.height) {
      // Only height specified, calculate width to maintain aspect ratio
      height = options.height;
      if (metadata.width && metadata.height) {
        width = Math.round(options.height * (metadata.width / metadata.height));
      }
    } else if (options.scale !== 1.0) {
      // Use scale factor
      if (metadata.width && metadata.height) {
        width = Math.round(metadata.width * options.scale);
        height = Math.round(metadata.height * options.scale);
      }
    }

    // Configure the conversion
    sharpInstance = sharpInstance.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    });

    // Apply dimensions if specified
    if (width || height) {
      sharpInstance = sharpInstance.resize(width, height, {
        fit: 'fill',
        background: options.background
      });
    }

    // Create directory for output file if it doesn't exist
    const outputDir = path.dirname(options.output);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Save the PNG file
    await sharpInstance.toFile(options.output);

    console.log(`Successfully converted ${options.input} to ${options.output}`);
    if (width && height) {
      console.log(`Dimensions: ${width}x${height} pixels`);
    }
  } catch (error) {
    console.error('Error converting SVG to PNG:', error);
    process.exit(1);
  }
}

convertSvgToPng();
