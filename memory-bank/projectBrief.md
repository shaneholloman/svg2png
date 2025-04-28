# Project Brief: SVG to PNG Converter

## 1. Project Goal

Create a command-line tool using Node.js and TypeScript to convert SVG files to PNG format with customizable output dimensions, scaling, and background color.

## 2. Core Requirements

- Accept input SVG file path.
- Accept output PNG file path.
- Allow specifying output width and/or height.
- Maintain aspect ratio if only one dimension is provided.
- Allow scaling the SVG by a factor.
- Allow specifying a background color (defaulting to transparent).
- Handle file system operations (reading input, creating output directory if needed, writing output).
- Provide clear command-line feedback and error handling.
- Be installable globally via npm link.

## 3. Target Users

Developers or designers who need a scriptable way to convert SVG assets to PNG format for various use cases (web development, asset generation, etc.).

## 4. Key Technologies

- Node.js
- TypeScript
- `sharp` library (for image processing)
- `commander` library (for CLI argument parsing)
