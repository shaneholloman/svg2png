# Product Context: SVG to PNG Converter

## 1. Problem Solved

Developers and designers often need to convert scalable vector graphics (SVG) into rasterized PNG format for various platforms and use cases (e.g., web icons, app assets, social media images). Manually exporting SVGs at different sizes using design software can be tedious and inefficient, especially for automated workflows or batch processing. This tool provides a scriptable, command-line solution for this conversion process.

## 2. How It Should Work

The tool should be invoked from the command line, taking the input SVG file and desired output PNG file as mandatory arguments. Users should be able to optionally specify:

- Exact output dimensions (width and height).
- Only width or only height (the other dimension should be calculated to maintain the original aspect ratio).
- A scaling factor to resize the SVG proportionally.
- A background color for the output PNG (e.g., '#ffffff' for white, defaulting to transparent).

The script should:

- Validate the input file existence and type (.svg).
- Read the SVG content.
- Use the `sharp` library to perform the conversion and resizing.
- Apply the specified background color or keep it transparent.
- Optimize the output PNG.
- Create the output directory if it doesn't exist.
- Write the resulting PNG file to the specified path.
- Provide informative console messages about success or errors.

## 3. User Experience Goals

- **Simple CLI:** Easy-to-understand command-line arguments and options.
- **Flexible Sizing:** Offer multiple ways to control output size (exact dimensions, aspect ratio preservation, scaling).
- **Informative Feedback:** Clear messages indicating successful conversion, output dimensions, or specific errors encountered.
- **Reliable:** Robust error handling for common issues like missing files or invalid inputs.
- **Easy Setup:** Straightforward installation using npm.
- **Globally Accessible:** Option to install globally for use anywhere on the system.
