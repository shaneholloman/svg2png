#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const commander_1 = require("commander");
const sharp_1 = __importDefault(require("sharp"));
// Define the command-line interface
commander_1.program
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
const options = commander_1.program.opts();
function convertSvgToPng() {
    return __awaiter(this, void 0, void 0, function* () {
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
            let sharpInstance = (0, sharp_1.default)(svgBuffer);
            // Get SVG metadata to calculate dimensions if not specified
            const metadata = yield sharpInstance.metadata();
            // Calculate dimensions
            let width;
            let height;
            if (options.width && options.height) {
                // Both width and height specified
                width = options.width;
                height = options.height;
            }
            else if (options.width) {
                // Only width specified, calculate height to maintain aspect ratio
                width = options.width;
                if (metadata.width && metadata.height) {
                    height = Math.round(options.width * (metadata.height / metadata.width));
                }
            }
            else if (options.height) {
                // Only height specified, calculate width to maintain aspect ratio
                height = options.height;
                if (metadata.width && metadata.height) {
                    width = Math.round(options.height * (metadata.width / metadata.height));
                }
            }
            else if (options.scale !== 1.0) {
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
            yield sharpInstance.toFile(options.output);
            console.log(`Successfully converted ${options.input} to ${options.output}`);
            if (width && height) {
                console.log(`Dimensions: ${width}x${height} pixels`);
            }
        }
        catch (error) {
            console.error('Error converting SVG to PNG:', error);
            process.exit(1);
        }
    });
}
convertSvgToPng();
