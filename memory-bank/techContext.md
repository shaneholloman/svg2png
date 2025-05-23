# Tech Context: SVG to PNG Converter

## 1. Core Technologies

- **Runtime:** Node.js (Version specified by the environment, assumed LTS)
- **Language:** TypeScript (Compiled to JavaScript for execution)
- **Package Manager:** npm (Node Package Manager)

## 2. Key Libraries & Dependencies

### Runtime Dependencies (`dependencies`)

- **`sharp`:** High-performance Node.js image processing library. Used for reading SVG, resizing, applying background color, and converting to PNG format. Requires native compilation, which might necessitate build tools (like `python`, `make`, `g++`) on the host system during installation.
- **`commander`:** Library for creating user-friendly command-line interfaces. Used to parse arguments (`--input`, `--output`, `--width`, etc.) and options.

### Development Dependencies (`devDependencies`)

- **`typescript`:** The TypeScript compiler (tsc). Used to transpile TypeScript code (`.ts`) into JavaScript (`.js`).
- **`@types/node`:** TypeScript definitions for the Node.js runtime API (like `fs`, `path`). Provides type checking and autocompletion for Node.js modules.
- **`ts-node`:** Allows direct execution of TypeScript files without pre-compiling them to JavaScript. Useful for development and running the script via `npm start`.
- **`@types/sharp`:** TypeScript definitions for the `sharp` library. Enables type checking and autocompletion when using `sharp`.

## 3. Development Setup

- **Initialization:** Project setup via `npm init -y`.
- **TypeScript Configuration:** `tsconfig.json` generated by `npx tsc --init` defines the TypeScript compiler options (target JavaScript version, module system, strictness, output directory, etc.). Default settings are generally sufficient for this project but can be customized.
- **Building:** `npm run build` (using `tsc`) compiles TypeScript files (specifically `svg2png.ts`) into JavaScript, typically placing them in a `dist` directory (as per `tsconfig.json` defaults).
- **Running (Development):** `npm start` (using `ts-node svg2png.ts`) executes the TypeScript script directly. Requires command-line arguments to be passed after `--`, e.g., `npm start -- --input input.svg --output output.png`. Alternatively, `ts-node svg2png.ts --input ...` can be used directly.
- **Running (Production/Compiled):** After `npm run build`, the compiled JavaScript file can be run using `node dist/svg2png.js --input ...`.

## 4. Technical Constraints & Considerations

- **`sharp` Installation:** Requires native C++ build tools. Installation might fail if these are not present on the user's system. Common on minimal Docker images or systems without a development environment.
- **Cross-Platform Compatibility:** Node.js, TypeScript, and the libraries used are generally cross-platform (macOS, Linux, Windows). However, `sharp`'s native dependency installation might have platform-specific nuances.
- **Memory Usage:** `sharp` can be memory-intensive, especially when processing very large SVG files or generating high-resolution PNGs.
- **SVG Complexity:** Extremely complex SVGs (e.g., those with intricate filters or embedded scripts) might pose challenges for `sharp`'s rendering engine (librsvg).
