# Active Context: SVG to PNG Converter - Initial Setup

## 1. Current Focus

Implementing and testing global installation via `npm link`.

## 2. Recent Changes

- Completed initial project setup, testing, and documentation (`README.md`).
- Added `bin` field to `package.json`.
- Executed `npm link` to create global symlink.
- Successfully tested the globally linked `svg2png` command (`svg2png --input assets/icon.svg --output output/icon-linked.png`).

## 3. Next Steps

1. **[DONE]** Run the test suite (`npm test`). All tests passed (before move).
2. **[DONE]** Re-run the test suite (`npm test`). All tests passed from `tests/` directory.
3. **[DONE]** Create `README.md`.
4. **[DONE]** Implement global installation steps (`npm link`).
5. **[DONE]** Test globally linked command.

## 4. Active Decisions & Considerations

- Added `bin` field to `package.json` pointing to the compiled `svg2png.js`.
- Used `npm link` to create the global command.
- Tested the linked `svg2png` command directly to confirm functionality.
- Global installation successful and verified.
