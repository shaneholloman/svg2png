import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

// Helper function to run the script via CLI
const runScript = (args: string): Promise<{ stdout: string; stderr: string }> => {
  return execPromise(`ts-node svg2png.ts ${args}`);
};

// Define paths
const inputSvgPath = 'assets/icon.svg';
const outputDir = 'test-output';
const baseOutputPath = path.join(outputDir, 'test-icon');

// Ensure input file exists
if (!fs.existsSync(inputSvgPath)) {
  throw new Error(`Input SVG file not found at ${inputSvgPath}. Please ensure it exists.`);
}

// Get original dimensions for comparison
let originalWidth: number | undefined;
let originalHeight: number | undefined;

beforeAll(async () => {
  // Create output directory for test files
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  // Get original dimensions
  const metadata = await sharp(inputSvgPath).metadata();
  originalWidth = metadata.width;
  originalHeight = metadata.height;
  if (!originalWidth || !originalHeight) {
    throw new Error('Could not read dimensions from input SVG.');
  }
});

afterAll(() => {
  // Clean up test output directory
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
});

describe('svg2png CLI', () => {
  test('should convert SVG to PNG with default settings', async () => {
    const outputPath = `${baseOutputPath}-default.png`;
    const args = `--input ${inputSvgPath} --output ${outputPath}`;

    const { stdout } = await runScript(args);

    expect(stdout).toContain(`Successfully converted ${inputSvgPath} to ${outputPath}`);
    expect(fs.existsSync(outputPath)).toBe(true);

    // Verify dimensions (should match original)
    const outputMetadata = await sharp(outputPath).metadata();
    expect(outputMetadata.width).toBe(originalWidth);
    expect(outputMetadata.height).toBe(originalHeight);
    expect(outputMetadata.format).toBe('png');
  });

  test('should convert SVG to PNG with specified width', async () => {
    const outputPath = `${baseOutputPath}-width.png`;
    const targetWidth = 100;
    const args = `--input ${inputSvgPath} --output ${outputPath} --width ${targetWidth}`;

    const { stdout } = await runScript(args);

    expect(stdout).toContain(`Successfully converted ${inputSvgPath} to ${outputPath}`);
    expect(fs.existsSync(outputPath)).toBe(true);

    // Verify dimensions (width should match, height maintains aspect ratio)
    const outputMetadata = await sharp(outputPath).metadata();
    const expectedHeight = Math.round(targetWidth * (originalHeight! / originalWidth!));
    expect(outputMetadata.width).toBe(targetWidth);
    expect(outputMetadata.height).toBe(expectedHeight);
    expect(outputMetadata.format).toBe('png');
    expect(stdout).toContain(`Dimensions: ${targetWidth}x${expectedHeight} pixels`);
  });

  test('should convert SVG to PNG with specified height', async () => {
    const outputPath = `${baseOutputPath}-height.png`;
    const targetHeight = 80;
    const args = `--input ${inputSvgPath} --output ${outputPath} --height ${targetHeight}`;

    const { stdout } = await runScript(args);

    expect(stdout).toContain(`Successfully converted ${inputSvgPath} to ${outputPath}`);
    expect(fs.existsSync(outputPath)).toBe(true);

    // Verify dimensions (height should match, width maintains aspect ratio)
    const outputMetadata = await sharp(outputPath).metadata();
    const expectedWidth = Math.round(targetHeight * (originalWidth! / originalHeight!));
    expect(outputMetadata.width).toBe(expectedWidth);
    expect(outputMetadata.height).toBe(targetHeight);
    expect(outputMetadata.format).toBe('png');
    expect(stdout).toContain(`Dimensions: ${expectedWidth}x${targetHeight} pixels`);
  });

  test('should convert SVG to PNG with specified width and height', async () => {
    const outputPath = `${baseOutputPath}-wh.png`;
    const targetWidth = 120;
    const targetHeight = 90;
    const args = `--input ${inputSvgPath} --output ${outputPath} --width ${targetWidth} --height ${targetHeight}`;

    const { stdout } = await runScript(args);

    expect(stdout).toContain(`Successfully converted ${inputSvgPath} to ${outputPath}`);
    expect(fs.existsSync(outputPath)).toBe(true);

    // Verify dimensions
    const outputMetadata = await sharp(outputPath).metadata();
    expect(outputMetadata.width).toBe(targetWidth);
    expect(outputMetadata.height).toBe(targetHeight);
    expect(outputMetadata.format).toBe('png');
    expect(stdout).toContain(`Dimensions: ${targetWidth}x${targetHeight} pixels`);
  });

  test('should convert SVG to PNG with scaling factor', async () => {
    const outputPath = `${baseOutputPath}-scale.png`;
    const scaleFactor = 1.5;
    const args = `--input ${inputSvgPath} --output ${outputPath} --scale ${scaleFactor}`;

    const { stdout } = await runScript(args);

    expect(stdout).toContain(`Successfully converted ${inputSvgPath} to ${outputPath}`);
    expect(fs.existsSync(outputPath)).toBe(true);

    // Verify dimensions
    const outputMetadata = await sharp(outputPath).metadata();
    const expectedWidth = Math.round(originalWidth! * scaleFactor);
    const expectedHeight = Math.round(originalHeight! * scaleFactor);
    expect(outputMetadata.width).toBe(expectedWidth);
    expect(outputMetadata.height).toBe(expectedHeight);
    expect(outputMetadata.format).toBe('png');
    expect(stdout).toContain(`Dimensions: ${expectedWidth}x${expectedHeight} pixels`);
  });

  test('should convert SVG to PNG with background color', async () => {
    const outputPath = `${baseOutputPath}-bg.png`;
    const background = '#ff0000'; // Red
    // Add quotes around the background argument to prevent shell interpretation issues with '#'
    const args = `--input ${inputSvgPath} --output ${outputPath} --background "${background}"`;

    const { stdout } = await runScript(args);

    expect(stdout).toContain(`Successfully converted ${inputSvgPath} to ${outputPath}`);
    expect(fs.existsSync(outputPath)).toBe(true);

    // Verify dimensions (should match original) and format
    const outputMetadata = await sharp(outputPath).metadata();
    expect(outputMetadata.width).toBe(originalWidth);
    expect(outputMetadata.height).toBe(originalHeight);
    expect(outputMetadata.format).toBe('png');
    // Note: Verifying the actual background color programmatically is complex with sharp's metadata.
    // Manual inspection or more advanced image analysis would be needed for full verification.
  });

  test('should show error for non-existent input file', async () => {
    const nonExistentInput = 'non-existent.svg';
    const outputPath = `${baseOutputPath}-error.png`;
    const args = `--input ${nonExistentInput} --output ${outputPath}`;

    await expect(runScript(args)).rejects.toThrow(/Error: Input file .* does not exist/);
    expect(fs.existsSync(outputPath)).toBe(false); // Output should not be created
  });

  test('should show error for non-SVG input file', async () => {
    const nonSvgInput = 'package.json'; // Use an existing non-svg file
    const outputPath = `${baseOutputPath}-error.png`;
    const args = `--input ${nonSvgInput} --output ${outputPath}`;

    await expect(runScript(args)).rejects.toThrow(/Error: Input file must be an SVG file/);
    expect(fs.existsSync(outputPath)).toBe(false); // Output should not be created
  });
});
