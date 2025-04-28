# SVG to PNG Converter (`svg2png`)

A command-line tool built with Node.js and TypeScript to convert SVG files to PNG format with customizable output dimensions, scaling, and background color.

## Features

- Convert SVG files to PNG format.
- Specify exact output width and/or height.
- Automatically maintains aspect ratio if only width or height is provided.
- Scale SVG images by a factor.
- Set a custom background color (defaults to transparent).
- Handles file system operations (reading input, creating output directory if needed, writing output).
- Provides clear command-line feedback and error handling.
- Includes an automated test suite using Jest.

## Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Native build tools might be required for the `sharp` library installation (e.g., `python`, `make`, `g++` or Xcode Command Line Tools on macOS, build-essentials on Debian/Ubuntu).

## Installation

1. **Clone the repository (if applicable) or download the files.**
2. **Navigate to the project directory:**

    ```sh
    cd path/to/svg2png
    ```

3. **Install dependencies:**

    ```sh
    npm install
    ```

4. **Build the TypeScript code:**

    ```sh
    npm run build
    ```

    (This step compiles `.ts` files to `.js` in the `dist/` directory, although `ts-node` allows running directly from `.ts` files via `npm start`)

## Usage

You can run the script using `ts-node` via the npm script:

```sh
npm start -- [options]
```

Or directly with `ts-node`:

```sh
ts-node svg2png.ts [options]
```

**Required Options:**

- `-i, --input <file>`: Path to the input SVG file.
- `-o, --output <file>`: Path for the output PNG file.

**Optional Options:**

- `-w, --width <number>`: Output width in pixels.
- `-h, --height <number>`: Output height in pixels.
- `-s, --scale <number>`: Scale factor (e.g., `2.0` for 2x size). Default: `1.0`.
- `-b, --background <color>`: Background color (e.g., `#ffffff`, `rgba(255,0,0,0.5)`, `transparent`). Default: `transparent`.

**Examples:**

```sh
# Basic conversion (output size matches input SVG)
npm start -- --input assets/icon.svg --output output/icon-default.png

# Set specific width (height calculated automatically)
npm start -- --input assets/icon.svg --output output/icon-width-100.png --width 100

# Set specific height (width calculated automatically)
npm start -- --input assets/icon.svg --output output/icon-height-80.png --height 80

# Set specific width and height
npm start -- --input assets/icon.svg --output output/icon-120x90.png --width 120 --height 90

# Scale by 1.5x
npm start -- --input assets/icon.svg --output output/icon-scaled.png --scale 1.5

# Set a white background
npm start -- --input assets/icon.svg --output output/icon-white-bg.png --background "#ffffff"
```

## Testing

Run the automated test suite using Jest:

```sh
npm test
```

## Global Installation (Optional)

To make the `svg2png` command available system-wide, you can use `npm link`:

1. **Navigate to the project directory:**

    ```sh
    cd path/to/svg2png
    ```

2. **Ensure the project is built:** The `npm link` command relies on the compiled JavaScript file specified in the `bin` section of `package.json`. Run the build command if you haven't already:

    ```sh
    npm run build
    ```

    *(Note: This creates `svg2png.js` in the project root based on the default `tsconfig.json`. If your `outDir` is different, ensure the `bin` path in `package.json` matches.)*
3. **Link the package globally:**

    ```sh
    npm link
    ```

    This creates a symbolic link from the global Node modules directory to your project directory, making the command specified in the `bin` field (`svg2png`) accessible in your PATH.

**Using the Linked Command:**

Once linked, you can use the command directly from any directory:

```sh
svg2png --input path/to/your/icon.svg --output path/to/your/output.png --width 200
```

**Unlinking:**

To remove the global link later:

```sh
npm unlink svg2png
```

*(You might need to run this with `sudo` depending on your system permissions.)*

## Dependencies

- **Runtime:**
    - `sharp`: High-performance image processing.
    - `commander`: Command-line interface framework.
- **Development:**
    - `typescript`: TypeScript language support.
    - `ts-node`: Execute TypeScript directly.
    - `@types/node`, `@types/sharp`, `@types/jest`: Type definitions.
    - `jest`, `ts-jest`: Testing framework.
