# Generalized Workflow for Building a Node.js/TypeScript CLI Tool

This document outlines a standardized, step-by-step process for creating command-line interface (CLI) tools using Node.js and TypeScript. It emphasizes best practices like documentation-driven development (via a "Memory Bank"), automated testing, and clean project structure.

## Phase 0: Understanding the Request

**Goal:** Fully comprehend the requirements for the new CLI tool.

1. **Analyze Requirements:**
   - Thoroughly read and understand the primary input document specifying the tool's requirements (e.g., `requested-new-tool-setup.md` or a similar user request).
   - Identify:
        - Core purpose and goals of the tool.
        - Required features and functionality.
        - Expected command-line arguments and options.
        - Input data/formats.
        - Output data/formats.
        - Error conditions to handle.
        - Any specific constraints or dependencies mentioned.

## Phase 1: Project Foundation & Environment Setup

**Goal:** Establish the project structure, initial documentation, and core development environment.

1. **Initialize Documentation (Memory Bank & Rules):**

    - **Crucial Step:** Create and maintain documentation from the start. This is vital for context, especially for iterative development or AI collaboration.
    - Create the `memory-bank/` directory: `mkdir memory-bank`
    - Create core Memory Bank files based on Phase 0 analysis:
        - `memory-bank/projectBrief.md`: High-level goals, scope, target users.
        - `memory-bank/productContext.md`: The "why" - problem solved, user experience.
        - `memory-bank/systemPatterns.md`: Initial thoughts on architecture, key decisions, patterns.
        - `memory-bank/techContext.md`: Core technologies, libraries, setup details.
        - `memory-bank/activeContext.md`: Current focus (e.g., "Initial Setup"), next steps.
        - `memory-bank/progress.md`: What works, what's left, status, known issues.
    - Create `.clinerules`: Define project standards (code style, documentation format, commit conventions, etc.). Adapt rules from a template or define new ones.

2. **Initialize Node.js Project:**

   - Run `npm init -y` in the project root. This creates the initial `package.json`.

3. **Setup TypeScript:**

    - Install core TypeScript dev dependencies:

    ```sh
    npm install typescript @types/node ts-node --save-dev
    ```

   - Generate `tsconfig.json`:

    ```sh
    npx tsc --init
    ```

    - Configure `tsconfig.json`: Ensure the following options are set (uncomment and modify as needed):

    ```json
    {
        "compilerOptions": {
            "target": "es2016", // Or a later version like es2020
            "module": "commonjs",
            "outDir": "./dist", // Specify output directory
            "strict": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true
            // ... other options
        },
        "include": ["src/**/*", "<tool-name>.ts"], // Adjust if using src dir
        "exclude": ["node_modules", "dist", "tests"]
    }
    ```

    _(Adjust `include` based on whether you place source files in `src/` or the root)_

## Phase 2: Core Logic & Dependencies

**Goal:** Implement the primary functionality of the CLI tool.

1. **Install Core Dependencies:**

    - Install necessary runtime libraries identified in Phase 0:

    ```sh
    npm install <core-dependency-1> <core-dependency-2>
    ```

   - Install `commander` for CLI argument parsing:

    ```sh
    npm install commander
    ```

2. **Install Development Dependencies:**

    - Install type definitions for runtime dependencies:

    ```sh
    npm install @types/<core-dependency-1> @types/commander --save-dev
    ```

3. **Implement Core Logic:**

    - Create the main source file (e.g., `<tool-name>.ts` in the root, or `src/<tool-name>.ts`).
    - Add the shebang at the top: `#!/usr/bin/env node`
    - Import necessary modules (`commander`, core dependencies, `fs`, `path`, etc.).
    - Define the CLI interface using `commander`:

    ```typescript
    import { program } from "commander";

    program
        .name("<tool-name>")
        .description("<Tool description>")
        .version("<tool-version>") // e.g., '1.0.0'
        .requiredOption("-i, --input <file>", "<Input description>")
        .requiredOption("-o, --output <file>", "<Output description>")
        .option("-f, --force", "<Optional flag description>")
        // Add other options/arguments as needed
        .parse(process.argv);

    const options = program.opts();
    // Access arguments via program.args if needed
    ```

    - Implement the main tool logic within functions (preferably async if I/O is involved).
    - Include robust input validation (check file existence, types, required values).
    - Implement clear error handling (use `try...catch`, log descriptive errors to `console.error`, exit with non-zero code: `process.exit(1)`).
    - Provide informative success messages using `console.log`.
    - **Update Memory Bank:** Document significant implementation details or decisions in `systemPatterns.md` or `activeContext.md`.

## Phase 3: Configuration & Build Setup

**Goal:** Configure the project for building, running, and distribution.

1. **Configure `package.json`:**

    - Set `"main": "dist/<tool-name>.js"`.
    - Add the `"bin"` field for the CLI command:

    ```json
    "bin": {
        "<tool-name>": "dist/<tool-name>.js"
    },
    ```

    - Add/update `"scripts"`:

    ```json
    "scripts": {
        "clean": "rm -rf dist",
        "build": "npm run clean && tsc",
        "start": "ts-node <path-to-main-script>.ts", // e.g., ts-node src/<tool-name>.ts
        "test": "jest" // Add later
    },
    ```

2. **Configure `.gitignore`:**

   - Ensure `node_modules/`, `dist/`, logs, `.env*`, and OS-specific files are ignored. Example:

    ```gitignore
    node_modules/
    dist/
    test-output/ # If tests create output
    .DS_Store
    *.log
    .env*
    *.tsbuildinfo
    ```

## Phase 4: Testing

**Goal:** Implement automated tests to ensure tool correctness and prevent regressions.

1. **Install Testing Framework:**

    ```sh
    npm install jest @types/jest ts-jest --save-dev
    ```

2. **Configure Jest:**

    - Create `jest.config.js` in the project root:

    ```javascript
    /** @type {import('ts-jest').JestConfigWithTsJest} */
    module.exports = {
        preset: "ts-jest",
        testEnvironment: "node",
        testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore compiled files
        clearMocks: true,
        // coverageDirectory: "coverage", // Optional for coverage reports
    };
    ```

   - Update `package.json` test script (if not already done): `"test": "jest"`

3. **Write Tests:**
    - Create a `tests/` directory.
    - Create test file(s) named like `<feature>.test.ts` or `<tool-name>.test.ts`.
    - Import necessary modules.
    - Write tests using Jest's `describe`, `test`/`it`, and `expect` functions.
    - Cover:
        - Successful execution with default options.
        - Each command-line option/argument.
        - Edge cases (empty inputs, specific values).
        - Expected error handling (invalid inputs, missing files).
    - **Tip:** For testing the CLI behavior directly, consider using `child_process.exec` or `child_process.spawn` to run the tool as a separate process within your tests.

4. **Run Tests:**
    - Execute `npm test`.
    - Debug and fix any failing tests. Ensure all tests pass.
    - **Update Memory Bank:** Note test suite implementation and status in `progress.md`.

## Phase 5: Documentation & Finalization

**Goal:** Provide clear documentation for users and finalize project state.

1. **Create README:**
    - Create `README.md` in the project root.
    - Include sections for:
        - Project Title/Description
        - Features
        - Prerequisites
        - Installation Steps (`npm install`, `npm run build`)
        - Usage Instructions (CLI options, examples)
        - Testing (`npm test`)
        - Global Installation (Optional - see Phase 6)
        - Dependencies

2. **Update Memory Bank:**
    - Review and update all Memory Bank files (`activeContext.md`, `progress.md`, etc.) to reflect the completed state of the project. Ensure `Next Steps` and `Current Status` are accurate.

## Phase 6: Build & Global Linking (Optional)

**Goal:** Build the final distributable and make the command globally accessible.

1. **Build Project:**
    - Run `npm run build`. Verify the `dist/` directory is created with compiled `.js` files.
2. **Link Globally:**
    - Run `npm link`. This uses the `bin` field in `package.json` to create a global symlink.
3. **Test Linked Command:**
    - Open a _new_ terminal window or navigate to a _different_ directory.
    - Execute the `<tool-name>` command with appropriate arguments (e.g., `<tool-name> --input ... --output ...`). Verify it runs correctly using the globally linked version.
    - **Update Memory Bank:** Document successful linking and testing.

## Phase 7: Continuous Integration (Optional)

**Goal:** Set up automated testing in a CI environment (e.g., GitHub Actions).

1. **Create CI Directory:**
    - Run `mkdir -p .github/workflows`.
2. **Create CI Workflow:**

    - Create `.github/workflows/ci.yml`:

    ```yaml
    name: Node.js CI

    on:
      push:
        branches: ["main"] # Or your default branch
      pull_request:
        branches: ["main"] # Or your default branch

    jobs:
      build-and-test:
        runs-on: ubuntu-latest
        strategy:
          matrix:
            node-version: [18.x, 20.x] # Test on relevant Node versions
        steps:
          - name: Checkout repository
            uses: actions/checkout@v4
          - name: Set up Node.js ${{ matrix.node-version }}
            uses: actions/setup-node@v4
            with:
              node-version: ${{ matrix.node-version }}
              cache: "npm"
          - name: Install dependencies
            run: npm ci # Use ci for deterministic installs
          - name: Build project
            run: npm run build --if-present # Ensure build runs
          - name: Run tests
            run: npm test
    ```

    - Commit and push this file to trigger the workflow on GitHub. Verify it passes.
    - **Update Memory Bank:** Document CI setup.

---

By following these phases, you can systematically build, test, and document robust Node.js/TypeScript CLI tools while maintaining clear context and adhering to best practices. Remember to update the Memory Bank frequently throughout the process.
