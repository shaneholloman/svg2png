# System Patterns: SVG to PNG Converter

## 1. Architecture

This project follows a simple command-line application architecture:

- **Entry Point:** `svg2png.ts` serves as the main executable script.
- **CLI Parsing:** The `commander` library handles parsing command-line arguments and options.
- **Core Logic:** The `convertSvgToPng` async function encapsulates the main conversion process.
- **Image Processing:** The `sharp` library is used for reading the SVG, performing resizing/background changes, and encoding to PNG.
- **File System Interaction:** Node.js built-in `fs` and `path` modules are used for reading the input file, checking existence, creating directories, and writing the output file.

## 2. Key Technical Decisions

- **TypeScript:** Chosen for type safety and better maintainability compared to plain JavaScript, especially as the script might grow.
- **`sharp` Library:** Selected for its high performance and comprehensive image manipulation capabilities, specifically its robust SVG handling.
- **`commander` Library:** A standard and popular choice for building Node.js CLIs, providing a clean way to define and parse arguments.
- **Async/Await:** Used for handling asynchronous operations like file reading, image processing (`sharp` methods), and file writing, leading to cleaner code than callbacks or promises alone.
- **Standard Node.js Modules:** Leveraging built-in `fs` and `path` for basic file system operations avoids unnecessary external dependencies.

## 3. Design Patterns

- **Command Pattern:** The overall structure aligns with the Command pattern, where the script execution is triggered by a command (`ts-node svg2png.ts` or the globally linked `svg2png`) with specific parameters.
- **Options Object:** `commander` parses arguments into a structured `options` object, simplifying access to user-provided values.
- **Modular Function:** The core logic is encapsulated within the `convertSvgToPng` function, promoting separation of concerns.

## 4. Component Relationships

```mermaid
graph TD
    CLI[Command Line Invocation] --> EntryPoint(svg2png.ts)
    EntryPoint --> Commander(Commander.js)
    Commander --> Options{Parsed Options}
    EntryPoint --> ConvertFunc(convertSvgToPng)
    ConvertFunc --> Options
    ConvertFunc --> FS_Read(fs.readFileSync)
    ConvertFunc --> Sharp(Sharp Library)
    FS_Read --> SVGInput[SVG Buffer]
    SVGInput --> Sharp
    Options --> SharpConfig(Sharp Configuration)
    SharpConfig --> Sharp
    Sharp --> FS_Write(sharp.toFile)
    FS_Write --> OutputDirCheck(fs.existsSync / fs.mkdirSync)
    OutputDirCheck --> FS_Write
    FS_Write --> PNGOutput[Output PNG File]
    ConvertFunc --> Console(console.log / console.error)

    subgraph Node.js Built-ins
        FS_Read
        FS_Write
        OutputDirCheck
        Console
    end

    subgraph External Libraries
        Commander
        Sharp
    end
