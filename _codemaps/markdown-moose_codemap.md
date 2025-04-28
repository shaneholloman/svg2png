# markdown-moose

> CodeMap Source: GitHub repository: <https://github.com/shaneholloman/markdown-moose>

This markdown document provides a comprehensive overview of the directory structure and file contents. It aims to give viewers (human or AI) a complete view of the codebase in a single file for easy analysis.

## Document Table of Contents

The table of contents below is for navigational convenience and reflects this document's structure, not the actual file structure of the repository.

<!-- TOC -->

- [markdown-moose](#markdown-moose)
  - [Document Table of Contents](#document-table-of-contents)
  - [Repo File Tree](#repo-file-tree)
  - [Repo File Contents](#repo-file-contents)
    - [README.md](#readmemd)
    - [.gitignore](#gitignore)
    - [.clinerules](#clinerules)
    - [.moose](#moose)
    - [.vscode/launch.json](#vscodelaunchjson)
    - [.vscodeignore](#vscodeignore)
    - [assets/markdown-moose-logo-outline.svg](#assetsmarkdown-moose-logo-outlinesvg)
    - [assets/markdown-moose-logo-solid.svg](#assetsmarkdown-moose-logo-solidsvg)
    - [assets/markdown-moose-logo.svg](#assetsmarkdown-moose-logosvg)
    - [dev/delivery.md](#devdeliverymd)
    - [dev/development.md](#devdevelopmentmd)
    - [dev/ideas.md](#devideasmd)
    - [dev/img/devlivery-0.png](#devimgdevlivery-0png)
    - [dev/img/devlivery-1.png](#devimgdevlivery-1png)
    - [dev/img/devlivery-2.png](#devimgdevlivery-2png)
    - [dev/markdown-rules.md](#devmarkdown-rulesmd)
    - [dev/notes.md](#devnotesmd)
    - [dev/plugin-architecture.md](#devplugin-architecturemd)
    - [dev/publishing.md](#devpublishingmd)
    - [icon.png](#iconpng)
    - [LICENSE](#license)
    - [package.json](#packagejson)
    - [resources/.gitkeep](#resourcesgitkeep)
    - [scripts/convert-icon.js](#scriptsconvert-iconjs)
    - [src/extension.ts](#srcextensionts)
    - [src/plugins/imageAlt/index.ts](#srcpluginsimagealtindexts)
    - [src/plugins/imageAlt/types.ts](#srcpluginsimagealttypests)
    - [src/plugins/imageDownloader/index.ts](#srcpluginsimagedownloaderindexts)
    - [src/plugins/imageDownloader/types.ts](#srcpluginsimagedownloadertypests)
    - [src/plugins/index.ts](#srcpluginsindexts)
    - [src/types/index.ts](#srctypesindexts)
    - [src/types/settings.ts](#srctypessettingsts)
    - [src/utils/image-utils.ts](#srcutilsimage-utilsts)
    - [src/utils/settings-loader.ts](#srcutilssettings-loaderts)
    - [src/utils/settings-registry.ts](#srcutilssettings-registryts)
    - [test/workspace/.moose](#testworkspacemoose)
    - [test/workspace/test-short\_unzipped.md](#testworkspacetest-short_unzippedmd)
    - [tsconfig.json](#tsconfigjson)
    - [webpack.config.js](#webpackconfigjs)

<!-- /TOC -->

## Repo File Tree

This file tree represents the actual structure of the repository. It's crucial for understanding the organization of the codebase.

```tree
.
├── .vscode/
│   └── launch.json
├── assets/
│   ├── markdown-moose-logo-outline.svg
│   ├── markdown-moose-logo-solid.svg
│   └── markdown-moose-logo.svg
├── dev/
│   ├── img/
│   │   ├── devlivery-0.png
│   │   ├── devlivery-1.png
│   │   └── devlivery-2.png
│   ├── delivery.md
│   ├── development.md
│   ├── ideas.md
│   ├── markdown-rules.md
│   ├── notes.md
│   ├── plugin-architecture.md
│   └── publishing.md
├── resources/
│   └── .gitkeep
├── scripts/
│   └── convert-icon.js
├── src/
│   ├── plugins/
│   │   ├── imageAlt/
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── imageDownloader/
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   └── index.ts
│   ├── types/
│   │   ├── index.ts
│   │   └── settings.ts
│   ├── utils/
│   │   ├── image-utils.ts
│   │   ├── settings-loader.ts
│   │   └── settings-registry.ts
│   └── extension.ts
├── test/
│   └── workspace/
│       ├── .moose
│       ├── test-long.md.gz
│       ├── test-short.md.gz
│       └── test-short_unzipped.md
├── .clinerules
├── .gitignore
├── .moose
├── .vscodeignore
├── LICENSE
├── README.md
├── icon.png
├── package.json
├── tsconfig.json
└── webpack.config.js

14 directories, 41 files
```

## Repo File Contents

The following sections present the content of each file in the repository. Large and binary files are acknowledged but their contents are not displayed.

### icon.png

```txt
[Large or binary file detected. File Type: image/png, Size: 19228 bytes]
```

### LICENSE

```txt
# MIT License

Copyright (c) 2025 Shane Holloman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### .vscodeignore

```txt
# Development
.git
.gitignore
.github
.vscode/**
.vscode-test/**
.moose
.archive/
.history/

# Source & Build
src/**
test/**
releases/**
scripts/**
out/**
node_modules/**
coverage/

# Config files
tsconfig.json
webpack.config.js
**/tsconfig.json
**/.eslintrc.json
.prettierrc
.editorconfig

# Debug & Logs
**/*.map
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Source assets (only need final icon.png)
markdown-moose-logo*.svg
*.bak

# Development docs
notes.md
DEVELOPMENT.md

# TypeScript sources (only need compiled JS)
**/*.ts
!dist/**/*.js
dev/**
assets/**
.clinerules
```

### webpack.config.js

```javascript
const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/extension.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    clean: true, // Clean the output directory before emit
  },
  externals: {
    vscode: 'commonjs vscode',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  devtool: 'nosources-source-map',
};
```

### README.md

````markdown
# Markdown Moose 🦌

Markdown Moose is a VSCode Extension that enhances your Markdown workflow. It uses a plugin-based architecture where each feature is a plugin that can be loaded by the extension.

## Features Added

### 📥 Image Downloader Plugin

- Automatically downloads images from your Markdown files
- Saves images locally in the same directory as your Markdown file
- Updates image links to use relative paths
- Shows download progress with a sleek progress indicator

### 🔤 Image Alt Plugin

- Automatically generates meaningful alt text for images based on context
- Uses nearest heading above the image as alt text
- Falls back to page title or file type if no nearby heading
- Handles duplicate images with numbered alt texts
- Configurable to preserve or overwrite existing alt text

### 📝 More Plugins Coming Soon

> [!IMPORTANT]
> **Next feature**: [HTML to Markdown Plugins](dev/ideas.md#next-up)

Please feel free to suggest new features or create your own plugins.

> [!TIP]
> Wish list is here: [Markdown Moose Plugin Ideas](dev/ideas.md)

## Usage

1. Open a Markdown file
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Moose" to see available commands:
    - Select "Moose: Download Images from Markdown" to download and organize images
    - Select "Moose: Update Image Alt Text" to generate contextual alt text for images

## Configuration

Markdown Moose uses a three-tier configuration system (in order of priority):

1. `.moose` Config File (Highest Priority):

    - JSON file in workspace root
    - Settings grouped by plugin name
    - Example:

    ```json
    {
      "imageDownloader": {
        "path": "./img",
        "overwriteExisting": true,
        "skipLargeImages": true,
        "maxImageSize": 10485760
      },
      "imageAlt": {
        "overwriteExisting": false
      }
    }
    ```

2. Workspace Settings (Medium Priority):

    - In `.vscode/settings.json`
    - Settings prefixed with "moose.[pluginName]"
    - Example:

    ```json
    {
      "moose.imageDownloader.path": "./img",
      "moose.imageDownloader.overwriteExisting": true,
      "moose.imageDownloader.skipLargeImages": false,
      "moose.imageDownloader.maxImageSize": 5242880,
      "moose.imageAlt.overwriteExisting": false
    }
    ```

3. VSCode User Settings (Low Priority):

    - Go to Settings (Ctrl+,)
    - Search for "Markdown Moose"
    - Configure available settings

### Plugin Settings

#### Image Downloader Settings

- `path`: Where to save downloaded images (relative to markdown file)
  - Default: "./img"
  - Examples: "./assets/images", ".", "./downloads"

- `overwriteExisting`: Whether to overwrite existing images
  - Default: true
  - Set to false to skip existing files

- `skipLargeImages`: Whether to skip large image downloads
  - Default: false
  - Works with maxImageSize setting

- `maxImageSize`: Maximum allowed image size in bytes
  - Default: 5242880 (5MB)
  - Only used when skipLargeImages is true

#### Image Alt Settings

- `overwriteExisting`: Whether to overwrite existing alt text
  - Default: false
  - Set to true to update all images regardless of existing alt text

Notes:

- Paths should be relative to the markdown file
- Directories are created automatically if they don't exist
- Higher priority settings override lower priority ones

## Plugin Architecture

Markdown Moose (the Extension) is built with extensibility in mind. The core extension acts as a host that can load multiple plugins. Each plugin adds specific features to enhance your Markdown editing experience.

For example, the Image Downloader plugin adds the ability to download and manage images in your markdown files. You can create your own plugins to add more features to the extension.

### Creating a Plugin

1. Create a new directory in the `src/plugins` directory
2. Implement the Plugin interface:

    ```typescript
    interface Plugin {
        name: string;
        description: string;
        version: string;
        author: string;
        commands: Command[];
        activate(context: vscode.ExtensionContext): void;
        deactivate(): void;
    }

    interface Command {
        id: string;
        title: string;
        execute: (...args: any[]) => any;
    }
    ```

    Example plugin structure:

    ```typescript
    import * as vscode from 'vscode';
    import { Plugin, Command } from '../../types';

    export class MyPlugin implements Plugin {
        public name = 'My Plugin';
        public description = 'Does something awesome';
        public version = '1.0.0';
        public author = 'Your Name';
        public commands: Command[];

        constructor() {
            this.commands = [
                {
                    id: 'markdown-moose.myCommand',
                    title: 'My Awesome Command',
                    execute: this.myCommand.bind(this)
                }
            ];
        }

        public activate(context: vscode.ExtensionContext): void {
            // Register commands
            for (const command of this.commands) {
                const disposable = vscode.commands.registerCommand(
                    command.id,
                    command.execute
                );
                context.subscriptions.push(disposable);
            }
        }

        public deactivate(): void {
            // Cleanup if needed
        }

        private async myCommand(): Promise<void> {
            // Your command implementation
        }
    }

    export default new MyPlugin();
    ```

3. Register your plugin (see Current Implementation below)

### Plugin System: Current State & Future Vision

#### Current Implementation

Plugins currently require manual registration in the codebase. To add a new plugin:

1. Create your plugin directory in `src/plugins/your-plugin-name/`
2. Implement the Plugin interface in your main file (e.g., `index.ts`)
3. Register the plugin in `src/plugins/index.ts`
4. Add command and setting contributions to `package.json`

Example plugin registration in `src/plugins/index.ts`:

```typescript
try {
    log('Loading my plugin...');
    const myPlugin = require('./my-plugin-name').default;
    if (isValidPlugin(myPlugin)) {
        plugins.push(myPlugin);
    }
} catch (error) {
    // Error handling
}
```

#### Future Vision: True Drop-in Architecture

We are working towards a true drop-in plugin architecture where:

- Plugins can be added by simply placing them in a plugins directory
- No manual registration or code changes required
- Dynamic discovery and loading of plugins
- Hot-reloading during development
- Proper isolation and versioning

This vision requires significant architectural work, including:

- Dynamic plugin discovery system
- Plugin manifest format
- Dependency management
- Security sandboxing
- Version compatibility checking

#### Help Us Get There

We welcome contributions towards achieving this vision. Areas where help is needed:

- Plugin discovery system design
- Manifest format specification
- Hot-reload implementation
- Plugin isolation strategies
- Testing framework for plugins

## Contributing

1. Fork the repository
2. Create a new plugin in `src/plugins/your-plugin-name`
3. Implement the Plugin interface
4. Submit a pull request

## License

MIT

## Author

Shane Holloman

---

🦌 Happy Markdown editing with the Moose!
````

### .gitignore

```ini
# Dependencies
node_modules/
package-lock.json
.archive/

# Build outputs
out/
dist/
*.vsix
releases/

# TypeScript
*.tsbuildinfo

# Backup files
*.bak

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
*.code-workspace
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Test coverage
coverage/

# Environment files
.env
.env.local
.env.*.local

.history/
plugins.txt
```

### package.json

```json
[Large or binary file detected. File Type: application/json, Size: 2815 bytes]
```

### .clinerules

```txt
# Rules

You are Cline, a highly skilled software engineer with extensive knowledge in many programming languages, frameworks, design patterns, and best practices. You have access to a comprehensive set of tools through the Model Context Protocol (MCP) that enable you to accomplish a wide range of tasks.

Core Capabilities:

- Execute CLI commands with proper system awareness
- Read, write, and modify files with precision
- Interact with browsers via Puppeteer
- Connect to various MCP servers for extended functionality
- Search and analyze codebases effectively

Development Principles:

- Make targeted, precise file modifications using replace_in_file when possible
- Create complete file backups before making changes
- Test changes thoroughly before proceeding
- Keep code modular with concise comments for efficient AI context
- Follow project-specific coding standards and patterns

Python Development Guidelines:

- Use Black for consistent code formatting
- Include docstrings on all functions and modules (minimum: top-level module docstring)
- Avoid redefining names in the same scope
- Use specific exception types instead of catching or raising bare Exception
- Follow type hints and proper error handling patterns

Tool Usage Guidelines:

1. Use tools sequentially, waiting for confirmation after each use
2. Prefer replace_in_file for targeted changes over write_to_file
3. Create backups before implementing changes
4. Test changes before proceeding with new code
5. Use browser_action to verify web-based changes
6. Leverage MCP servers for specialized functionality

Best Practices:

- Analyze project structure before making changes
- Use search_files for comprehensive codebase understanding
- Make minimal, focused changes with clear purpose
- Verify changes through appropriate testing
- Document changes with clear, concise comments
- Create backups of modified files

File Operations:

- Use replace_in_file for targeted edits
- Use write_to_file for new files or complete rewrites
- Match existing code style and formatting
- Include necessary imports and dependencies
- Follow project directory structure

Browser Interactions:

- Launch browser at appropriate URLs
- Click elements at their center coordinates
- Handle navigation and state changes
- Capture and analyze screenshots
- Monitor console logs for issues
- Always close browser after use

MCP Integration:

- Utilize appropriate MCP servers for specialized tasks
- Wait for confirmation after each MCP operation
- Handle errors and edge cases appropriately
- Follow server-specific input schemas
- Respect rate limits and quotas

VSCode Extension Development:

- Never use `code --extensionDevelopmentPath=.` for testing
- Use F5 in VSCode for development testing (launches Extension Development Host)
- Use .vsix packaging and installation for production testing
- Always verify extension activation in Output panel
- Test commands through Command Palette

Remember to:

- Create backups before making changes
- Test thoroughly after modifications
- Keep comments concise for efficient context
- Follow project-specific patterns
- Use tools sequentially and wait for confirmation
```

### tsconfig.json

```json
[Large or binary file detected. File Type: application/json, Size: 244 bytes]
```

### .moose

```txt
{
  "imageDownloader": {
    "path": "./img",
    "overwriteExisting": true,
    "skipLargeImages": true,
    "maxImageSize": 10485760
  }
}
```

### test/workspace/test-short_unzipped.md

````markdown
# Test Images in Workspace

This file is in a workspace with a .moose config file that should take precedence over VSCode settings.

![Test Images in Workspace](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## Test images Alt Text

![png](https://placehold.co/600x400@2x.png)
````

### test/workspace/.moose

```txt
{
  "imageDownloader": {
    "path": "./workspace-images",
    "overwriteExisting": true,
    "skipLargeImages": true,
    "maxImageSize": 10485760
  }
}
```

### resources/.gitkeep

```txt

```

### scripts/convert-icon.js

```javascript
const sharp = require('sharp');
const path = require('path');
const projectRoot = path.join(__dirname, '..');

// Convert SVG to PNG
sharp(path.join(projectRoot, 'markdown-moose-logo.svg'))
  .resize(512, 512)
  .png()
  .toFile(path.join(projectRoot, 'icon.png'))
  .then(() => console.log('Icon converted successfully'))
  .catch((err) => console.error('Error converting icon:', err));
```

### dev/plugin-architecture.md

````markdown
# Plugin Architecture Evolution

## Current State

The extension currently bundles all plugins into a single `extension.js` file:

```tree
markdown-moose-0.3.4.vsix
└─ extension/
   └─ dist/
      └─ extension.js (314.76 KB)
```

Plugins are loaded at startup via `require()` in `loadPlugins()`, which means:

- All plugin code is included in the main bundle
- Bundle size grows with each new plugin
- All plugins load whether used or not

## Proposed Architecture

Transform the extension into a true plugin host:

### Core Extension

- Plugin loader system
- Plugin API and interfaces
- Utility functions
- Type definitions
- Settings management
- Plugin discovery/registry

### Modular Plugins

- Each plugin as separate npm package
- Dynamic loading via import()
- Independent versioning
- Self-contained dependencies
- Loaded only when activated

### Structure Example

```tree
markdown-moose/
├─ core/
│  ├─ plugin-loader.ts
│  ├─ plugin-api.ts
│  ├─ utilities/
│  └─ types/
├─ plugins/
│  ├─ @markdown-moose/table-tools/
│  ├─ @markdown-moose/link-manager/
│  └─ @markdown-moose/image-tools/
└─ extension.ts
```

## Benefits

1. Development

   - Easier plugin development
   - Independent testing
   - Faster build times
   - Clear separation of concerns
   - Better debugging

2. Performance

   - Smaller initial bundle
   - On-demand plugin loading
   - Reduced memory footprint
   - Faster startup time

3. Extensibility

   - Community plugin development
   - Plugin marketplace potential
   - Independent plugin updates
   - Better dependency management

## Implementation Steps

1. Core Refactoring

   - Create plugin host infrastructure
   - Define stable plugin API
   - Implement dynamic loading
   - Setup plugin registry

2. Plugin Migration

   - Convert existing plugins to packages
   - Implement lazy loading
   - Add plugin metadata
   - Create plugin templates

3. Package Management

   - Setup plugin namespace (@markdown-moose)
   - Define package structure
   - Create plugin publishing process
   - Version management strategy

4. Documentation

   - Plugin development guide
   - API documentation
   - Best practices
   - Migration guide

## Considerations

1. VSCode Extension Guidelines

   - Maintain single entry point
   - Handle activation events
   - Manage extension context
   - Resource cleanup

2. Performance

   - Plugin load time
   - Memory management
   - Dependency sharing
   - Bundle optimization

3. User Experience

   - Plugin discovery
   - Installation process
   - Settings management
   - Error handling

4. Development Experience

   - Plugin scaffolding
   - Testing framework
   - Debug tooling
   - Hot reload support

## Next Steps

1. Prototype

   - Create minimal plugin host
   - Convert one plugin to package
   - Test dynamic loading
   - Measure performance

2. Infrastructure

   - Setup plugin registry
   - Create development tools
   - Define package standards
   - Setup CI/CD

3. Documentation

   - Architecture guidelines
   - Plugin development guide
   - API documentation
   - Best practices

4. Migration

   - Plan staged migration
   - Convert existing plugins
   - Test compatibility
   - Performance testing

## Plugin Lifecycle

### Activation Events

- On specific commands
- On language detection (markdown)
- On workspace contains
- On custom conditions
- On configuration changes

### Loading Sequence

1. Extension Startup
   - Core loads minimal plugin registry
   - Plugin metadata available
   - No plugin code loaded yet

2. Plugin Discovery
   - Scan for installed plugins
   - Read plugin manifests
   - Register commands/capabilities
   - Still no plugin code loaded

3. Dynamic Loading
   - Plugin loaded when activation event triggers
   - Import() fetches plugin package
   - Plugin initializes and registers
   - Resources released when plugin deactivates

4. Error Handling
   - Failed plugin load doesn't affect others
   - Graceful degradation
   - User notification
   - Automatic retry options

### Plugin States

- Discovered: Plugin known but not loaded
- Loading: Import in progress
- Active: Plugin running
- Error: Failed to load/initialize
- Deactivated: Cleanup complete

## Plugin Communication

### Event System

- Core event bus for plugin communication
- Plugin-to-plugin events
- Plugin-to-core events
- Event filtering and prioritization
- Async event handling

### Shared Services

1. Core Services
   - Settings management
   - File system operations
   - Workspace utilities
   - Command registration
   - Status bar items

2. Plugin Services
   - Register shared capabilities
   - Service discovery
   - Version compatibility
   - Service lifecycle management

### Data Sharing

1. Plugin Data
   - Isolated storage per plugin
   - Shared data spaces
   - Data access controls
   - Change notifications

2. State Management
   - Plugin state persistence
   - Workspace state
   - Global state
   - State synchronization

3. Resource Sharing
   - Shared UI components
   - Common utilities
   - Resource pooling
   - Reference counting
````

### dev/publishing.md

````markdown
# VSCode Extension Publishing Gotchas

## Publisher Issues

1. Publisher Name vs Azure DevOps Username
   - Your Azure DevOps username (e.g., shaneholloman) is different from your publisher ID (e.g., warpdeck)
   - Must use Azure DevOps username for `vsce login`
   - Must use publisher ID in package.json
   - Can't easily create new publisher names even if the UI lets you try

2. Personal Access Token (PAT)
   - Requires specific permissions:
     - Marketplace: Acquire
     - Marketplace: Manage
     - Marketplace: Publish
     - User Profile: Read
   - Use "Full access" to avoid permission issues
   - Token is tied to your Azure DevOps account, not the publisher

## Package Contents Control

1. .vscodeignore Limitations
   - Despite being the official way to control package contents, it can be unreliable
   - Must explicitly exclude new directories
   - Patterns need to be very specific
   - No wildcard exclusions for new file types

2. package.json "files" Field
   - Can't use together with .vscodeignore
   - Will cause error: "Both a .vscodeignore file and a "files" property in package.json were found"
   - Must choose one or the other

## Version Management

1. Version Control
   - Can't remove individual versions from marketplace
   - Unpublishing removes ALL versions
   - Must increment version for each publish
   - No way to replace a specific version

2. Unpublishing Consequences
   - Removes entire extension
   - Breaks update path for users
   - Resets all stats
   - Loses reviews and ratings
   - Must republish as new

## Best Practices Learned

1. Package Contents
   - Test package contents before publishing: `vsce ls`
   - Keep only essential files:
     - README.md
     - package.json
     - LICENSE
     - icon.png
     - dist/extension.js
   - Put development files in clearly marked directories (e.g., /dev)
   - Use explicit .vscodeignore patterns

2. Version Management
   - Always increment version before publishing
   - Can't fix published versions - only move forward
   - Keep development files separate from publishable files

3. Publishing Workflow
   1. Check package contents: `vsce ls`
   2. Update version in package.json
   3. Test package: `vsce package`
   4. Verify package contents
   5. Publish: `vsce publish`

## Microsoft's Marketplace Limitations

1. No Version Management
   - Can't remove individual versions
   - Can't replace specific versions
   - All-or-nothing unpublishing

2. Publisher Management
   - Can't change publisher names
   - Can't merge publishers
   - Stuck with initial publisher choice

3. Package Control
   - Limited control over included files
   - Confusing mix of .vscodeignore and package.json "files"
   - No way to update published package contents

## Tips for Future Projects

1. Setup
   - Use existing publisher if possible
   - Set up clean directory structure from start
   - Keep development files in /dev directory
   - Test package contents before first publish

2. Maintenance
   - Only publish when package contents are clean
   - Keep moving forward with versions
   - Don't rely on being able to fix published versions
   - Maintain clear separation between publishable and development files
````

### dev/ideas.md

````markdown
# Markdown Moose Plugin Ideas

Back to [README](../README.md)

## Next Up

- [ ] **HTML to Markdown Plugin**
  - Convert HTML to Markdown with a single command
  - Preserve formatting, links, and images
  - Handle complex HTML structures and tables
  - Configurable options for conversion rules

- [ ] **Pull from URL Plugin**
  - Convert HTML to Markdown from a URL
  - Configurable options for download and extraction
  - Handle complex HTML structures and tables
  - Save images locally and update links

## Already Implemented

- [x] Image Downloader Plugin
    - Automatically downloads images from your Markdown files
    - Saves images locally in the same directory as your Markdown file
    - Updates image links to use relative paths
    - Shows download progress with a sleek progress indicator

- [x]  Image Alt Plugin
    - Automatically generates meaningful alt text for images based on context
    - Uses nearest heading above the image as alt text
    - Falls back to page title or file type if no nearby heading
    - Handles duplicate images with numbered alt texts
    - Configurable to preserve or overwrite existing alt text

## Wish List

### [ ] Table Management

- Table formatter with alignment controls
- Table of contents generator with depth control
- Table row/column sorting
- CSV/Excel to markdown table converter
- Table cell merging support

### [ ] Link Management

- Dead link checker
- Link validator (internal and external)
- Link collector/extractor
- Reference-style link converter
- Link preview generator
- Automatic link title fetcher

### [ ] List Operations

- List style converter (bullets to numbers)
- List sorting (alphabetical, numeric)
- Task list statistics/progress
- Multi-level list reformatter
- List item grouping/ungrouping

### [ ] Heading Tools

- Heading level adjuster
- Auto-numbering for headings
- Heading hierarchy validator
- Section mover (with all content)
- Duplicate heading detector

### [ ] Code Block Enhancements

- Code block language validator
- Syntax highlighter preview
- Code block formatter
- Multi-language code block grouping
- Code block copy button inserter

### [ ] Footnote Management

- Footnote renumbering
- Footnote collector/organizer
- Footnote reference checker
- Footnote preview on hover
- Back-to-reference links

### [ ] Quote Handling

- Quote style formatter
- Nested quote validator
- Quote attribution adder
- Quote collector/extractor
- Multi-paragraph quote formatter

### [ ] Document Structure

- Document outline generator
- Section folding markers
- Document statistics (headings, links, images, etc.)
- Document structure validator
- Section balancer (content distribution)

### [ ] Markdown Cleanup

- Whitespace normalizer
- Empty line consolidator
- Trailing space remover
- Mixed syntax standardizer
- Line length formatter

### [ ] Advanced Features

- Cross-reference manager
- Definition list formatter
- Abbreviation collector/expander
- Custom container syntax support
- Math equation formatter

### [ ] Accessibility

- Alt text bulk editor
- Heading hierarchy checker
- Link text quality analyzer
- Table header validator
- ARIA label suggester

### [ ] Export/Import

- Frontmatter validator/generator
- Custom metadata manager
- Tag collector/organizer
- Category manager
- Series linker

### [ ] Document Analysis

- Reading time calculator
- Complexity analyzer
- Keyword density checker
- Style consistency validator
- Markdown lint rules manager

### [ ] Innovative Features

- Markdown path validator (ensures all referenced files/images exist)
- Smart paste formatter (auto-formats pasted content to proper markdown)
- Markdown template system (reusable content blocks)
- Contextual suggestions (suggests formatting based on surrounding content)
- Multi-file link graph visualizer
- Markdown snippet expander (custom shortcodes for common patterns)
- Smart list continuation (maintains proper indentation and list style)
- Markdown preview synchronizer (bi-directional scrolling)
- Auto-backup system (versioned markdown backups)
- Markdown git diff helper (semantic diffs for markdown)

### [ ] Workflow & Collaboration

- Comment system (markdown-based review comments)
- Change tracking (markdown-friendly diff viewer)
- Merge conflict resolver (markdown-aware)
- Co-authoring support (git blame enhancement for markdown)
- Review mode (track changes in markdown)
- Collaborative editing markers
- Section locking/ownership
- Markdown-based approval workflow
- Version comparison (semantic diff for markdown)
- Shared markdown snippets library

### [ ] Automation & Productivity

- Auto-linking (smart URL detection and formatting)
- Smart lists (auto-continue numbered lists)
- Quick table generator (paste data to markdown table)
- Image to markdown workflow (convert to markdown on paste)
- Auto-completion for references and citations
- Smart quote formatting (converts quotes to blockquotes based on length)
- Auto-generate table of contents on save
- Smart heading numbering (maintains hierarchy)
- Auto-organize frontmatter
- Quick reference finder (finds and suggests existing references)

### [ ] Organization & Navigation

- Markdown workspace organizer (by content type)
- Wiki-style navigation (bidirectional linking)
- Tag-based navigation system
- Quick jump to heading/section
- Related content finder
- Smart breadcrumbs (shows document hierarchy)
- Document map (visual navigation)
- Category explorer
- Smart search (context-aware markdown search)
- Document relationships viewer

### [ ] Quality Assurance

- Markdown validator (syntax and structure)
- Link health monitor (continuous link checking)
- Style guide enforcer (customizable rules)
- Consistency checker (terminology, formatting)
- Markdown coverage analyzer
- Broken reference detector
- Image reference validator
- Markdown-specific spelling patterns
- Markdown best practices linter
- Markdown code block validator (verify embedded code examples)

### [ ] Markdown Integrations

- Markdown-aware version control helper
- Markdown site preview generator
- Markdown file converter (to/from other formats)
- Markdown issue templates
- Markdown validation in pipelines
- Markdown API doc generator
- Markdown knowledge base tools
- Markdown wiki tools
- Markdown structure analyzer
- Markdown publishing tools
````

### dev/markdown-rules.md

````markdown
# Markdown Rules

This document contains a description of all rules, what they are checking for,
as well as examples of documents that break the rule and corrected
versions of the examples.

<a name="md001"></a>

## `MD001` - Heading levels should only increment by one level at a time

Tags: `headings`

Aliases: `heading-increment`

This rule is triggered when you skip heading levels in a Markdown document, for
example:

```markdown
# Heading 1

### Heading 3

We skipped out a 2nd level heading in this document
```

When using multiple heading levels, nested headings should increase by only one
level at a time:

```markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

## Another Heading 2

### Another Heading 3
```

Rationale: Headings represent the structure of a document and can be confusing
when skipped - especially for accessibility scenarios. More information:
<https://www.w3.org/WAI/tutorials/page-structure/headings/>.

<a name="md003"></a>

## `MD003` - Heading style

Tags: `headings`

Aliases: `heading-style`

Parameters:

- `style`: Heading style (`string`, default `consistent`, values `atx` /
  `atx_closed` / `consistent` / `setext` / `setext_with_atx` /
  `setext_with_atx_closed`)

This rule is triggered when different heading styles are used in the same
document:

```markdown
# ATX style H1

## Closed ATX style H2 ##

Setext style H1
===============
```

To fix the issue, use consistent heading styles throughout the document:

```markdown
# ATX style H1

## ATX style H2
```

The `setext_with_atx` and `setext_with_atx_closed` settings allow ATX-style
headings of level 3 or more in documents with setext-style headings (which only
support level 1 and 2 headings):

```markdown
Setext style H1
===============

Setext style H2
---------------

### ATX style H3
```

Note: The configured heading style can be a specific style to require (`atx`,
`atx_closed`, `setext`, `setext_with_atx`, `setext_with_atx_closed`), or can
require that all heading styles match the first heading style via `consistent`.

Note: The placement of a horizontal rule directly below a line of text can
trigger this rule by turning that text into a level 2 setext-style heading:

```markdown
A line of text followed by a horizontal rule becomes a heading
---
```

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md004"></a>

## `MD004` - Unordered list style

Tags: `bullet`, `ul`

Aliases: `ul-style`

Parameters:

- `style`: List style (`string`, default `consistent`, values `asterisk` /
  `consistent` / `dash` / `plus` / `sublist`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when the symbols used in the document for unordered
list items do not match the configured unordered list style:

```markdown
* Item 1
+ Item 2
- Item 3
```

To fix this issue, use the configured style for list items throughout the
document:

```markdown
* Item 1
* Item 2
* Item 3
```

The configured list style can ensure all list styling is a specific symbol
(`asterisk`, `plus`, `dash`), ensure each sublist has a consistent symbol that
differs from its parent list (`sublist`), or ensure all list styles match the
first list style (`consistent`).

For example, the following is valid for the `sublist` style because the
outer-most indent uses asterisk, the middle indent uses plus, and the inner-most
indent uses dash:

```markdown
* Item 1
  + Item 2
    - Item 3
  + Item 4
* Item 4
  + Item 5
```

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md005"></a>

## `MD005` - Inconsistent indentation for list items at the same level

Tags: `bullet`, `indentation`, `ul`

Aliases: `list-indent`

Fixable: Some violations can be fixed by tooling

This rule is triggered when list items are parsed as being at the same level,
but don't have the same indentation:

```markdown
* Item 1
  * Nested Item 1
  * Nested Item 2
   * A misaligned item
```

Usually, this rule will be triggered because of a typo. Correct the indentation
for the list to fix it:

```markdown
* Item 1
  * Nested Item 1
  * Nested Item 2
  * Nested Item 3
```

Sequentially-ordered list markers are usually left-aligned such that all items
have the same starting column:

```markdown
...
8. Item
9. Item
10. Item
11. Item
...
```

This rule also supports right-alignment of list markers such that all items have
the same ending column:

```markdown
...
 8. Item
 9. Item
10. Item
11. Item
...
```

Rationale: Violations of this rule can lead to improperly rendered content.

<a name="md007"></a>

## `MD007` - Unordered list indentation

Tags: `bullet`, `indentation`, `ul`

Aliases: `ul-indent`

Parameters:

- `indent`: Spaces for indent (`integer`, default `2`)
- `start_indent`: Spaces for first level indent (when start_indented is set)
  (`integer`, default `2`)
- `start_indented`: Whether to indent the first level of the list (`boolean`,
  default `false`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when list items are not indented by the configured
number of spaces (default: 2).

Example:

```markdown
* List item
   * Nested list item indented by 3 spaces
```

Corrected Example:

```markdown
* List item
  * Nested list item indented by 2 spaces
```

Note: This rule applies to a sublist only if its parent lists are all also
unordered (otherwise, extra indentation of ordered lists interferes with the
rule).

The `start_indented` parameter allows the first level of lists to be indented by
the configured number of spaces rather than starting at zero. The `start_indent`
parameter allows the first level of lists to be indented by a different number
of spaces than the rest (ignored when `start_indented` is not set).

Rationale: Indenting by 2 spaces allows the content of a nested list to be in
line with the start of the content of the parent list when a single space is
used after the list marker. Indenting by 4 spaces is consistent with code blocks
and simpler for editors to implement. Additionally, this can be a compatibility
issue for other Markdown parsers, which require 4-space indents. More
information: [Markdown Style Guide][markdown-style-guide].

Note: See [Prettier.md](../Prettier.md) for compatibility information.

[markdown-style-guide]: https://cirosantilli.com/markdown-style-guide#indentation-of-content-inside-lists

<a name="md009"></a>

## `MD009` - Trailing spaces

Tags: `whitespace`

Aliases: `no-trailing-spaces`

Parameters:

- `br_spaces`: Spaces for line break (`integer`, default `2`)
- `list_item_empty_lines`: Allow spaces for empty lines in list items
  (`boolean`, default `false`)
- `strict`: Include unnecessary breaks (`boolean`, default `false`)

Fixable: Some violations can be fixed by tooling

This rule is triggered on any lines that end with unexpected whitespace. To fix
this, remove the trailing space from the end of the line.

Note: Trailing space is allowed in indented and fenced code blocks because some
languages require it.

The `br_spaces` parameter allows an exception to this rule for a specific number
of trailing spaces, typically used to insert an explicit line break. The default
value allows 2 spaces to indicate a hard break (\<br> element).

Note: You must set `br_spaces` to a value >= 2 for this parameter to take
effect. Setting `br_spaces` to 1 behaves the same as 0, disallowing any trailing
spaces.

By default, this rule will not trigger when the allowed number of spaces is
used, even when it doesn't create a hard break (for example, at the end of a
paragraph). To report such instances as well, set the `strict` parameter to
`true`.

```markdown
Text text text
text[2 spaces]
```

Using spaces to indent blank lines inside a list item is usually not necessary,
but some parsers require it. Set the `list_item_empty_lines` parameter to `true`
to allow this (even when `strict` is `true`):

```markdown
- list item text
  [2 spaces]
  list item text
```

Rationale: Except when being used to create a line break, trailing whitespace
has no purpose and does not affect the rendering of content.

<a name="md010"></a>

## `MD010` - Hard tabs

Tags: `hard_tab`, `whitespace`

Aliases: `no-hard-tabs`

Parameters:

- `code_blocks`: Include code blocks (`boolean`, default `true`)
- `ignore_code_languages`: Fenced code languages to ignore (`string[]`, default
  `[]`)
- `spaces_per_tab`: Number of spaces for each hard tab (`integer`, default `1`)

Fixable: Some violations can be fixed by tooling

This rule is triggered by any lines that contain hard tab characters instead
of using spaces for indentation. To fix this, replace any hard tab characters
with spaces instead.

Example:

<!-- markdownlint-disable no-hard-tabs -->

```markdown
Some text

	* hard tab character used to indent the list item
```

<!-- markdownlint-restore -->

Corrected example:

```markdown
Some text

    * Spaces used to indent the list item instead
```

You have the option to exclude this rule for code blocks and spans. To do so,
set the `code_blocks` parameter to `false`. Code blocks and spans are included
by default since handling of tabs by Markdown tools can be inconsistent (e.g.,
using 4 vs. 8 spaces).

When code blocks are scanned (e.g., by default or if `code_blocks` is `true`),
the `ignore_code_languages` parameter can be set to a list of languages that
should be ignored (i.e., hard tabs will be allowed, though not required). This
makes it easier for documents to include code for languages that require hard
tabs.

By default, violations of this rule are fixed by replacing the tab with 1 space
character. To use a different number of spaces, set the `spaces_per_tab`
parameter to the desired value.

Rationale: Hard tabs are often rendered inconsistently by different editors and
can be harder to work with than spaces.

<a name="md011"></a>

## `MD011` - Reversed link syntax

Tags: `links`

Aliases: `no-reversed-links`

Fixable: Some violations can be fixed by tooling

This rule is triggered when text that appears to be a link is encountered, but
where the syntax appears to have been reversed (the `[]` and `()` are
reversed):

```markdown
(Incorrect link syntax)[https://www.example.com/]
```

To fix this, swap the `[]` and `()` around:

```markdown
[Correct link syntax](https://www.example.com/)
```

Note: [Markdown Extra](https://en.wikipedia.org/wiki/Markdown_Extra)-style
footnotes do not trigger this rule:

```markdown
For (example)[^1]
```

Rationale: Reversed links are not rendered as usable links.

<a name="md012"></a>

## `MD012` - Multiple consecutive blank lines

Tags: `blank_lines`, `whitespace`

Aliases: `no-multiple-blanks`

Parameters:

- `maximum`: Consecutive blank lines (`integer`, default `1`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when there are multiple consecutive blank lines in the
document:

```markdown
Some text here


Some more text here
```

To fix this, delete the offending lines:

```markdown
Some text here

Some more text here
```

Note: this rule will not be triggered if there are multiple consecutive blank
lines inside code blocks.

Note: The `maximum` parameter can be used to configure the maximum number of
consecutive blank lines.

Rationale: Except in a code block, blank lines serve no purpose and do not
affect the rendering of content.

<a name="md013"></a>

## `MD013` - Line length

Tags: `line_length`

Aliases: `line-length`

Parameters:

- `code_block_line_length`: Number of characters for code blocks (`integer`,
  default `80`)
- `code_blocks`: Include code blocks (`boolean`, default `true`)
- `heading_line_length`: Number of characters for headings (`integer`, default
  `80`)
- `headings`: Include headings (`boolean`, default `true`)
- `line_length`: Number of characters (`integer`, default `80`)
- `stern`: Stern length checking (`boolean`, default `false`)
- `strict`: Strict length checking (`boolean`, default `false`)
- `tables`: Include tables (`boolean`, default `true`)

This rule is triggered when there are lines that are longer than the
configured `line_length` (default: 80 characters). To fix this, split the line
up into multiple lines. To set a different maximum length for headings, use
`heading_line_length`. To set a different maximum length for code blocks, use
`code_block_line_length`

This rule has an exception when there is no whitespace beyond the configured
line length. This allows you to include items such as long URLs without being
forced to break them in the middle. To disable this exception, set the `strict`
parameter to `true` and an issue will be reported when any line is too long. To
warn for lines that are too long and could be fixed but allow long lines
without spaces, set the `stern` parameter to `true`.

For example (assuming normal behavior):

```markdown
IF THIS LINE IS THE MAXIMUM LENGTH
This line is okay because there are-no-spaces-beyond-that-length
This line is a violation because there are spaces beyond that length
This-line-is-okay-because-there-are-no-spaces-anywhere-within
```

In `strict` mode, the last three lines above are all violations. In `stern`
mode, the middle two lines above are both violations, but the last is okay.

You have the option to exclude this rule for code blocks, tables, or headings.
To do so, set the `code_blocks`, `tables`, or `headings` parameter(s) to false.

Code blocks are included in this rule by default since it is often a
requirement for document readability, and tentatively compatible with code
rules. Still, some languages do not lend themselves to short lines.

Lines with link/image reference definitions and standalone lines (i.e., not part
of a paragraph) with only a link/image (possibly using (strong) emphasis) are
always exempted from this rule (even in `strict` mode) because there is often no
way to split such lines without breaking the URL.

Rationale: Extremely long lines can be difficult to work with in some editors.
More information: <https://cirosantilli.com/markdown-style-guide#line-wrapping>.

<a name="md014"></a>

## `MD014` - Dollar signs used before commands without showing output

Tags: `code`

Aliases: `commands-show-output`

Fixable: Some violations can be fixed by tooling

This rule is triggered when there are code blocks showing shell commands to be
typed, and *all* of the shell commands are preceded by dollar signs ($):

<!-- markdownlint-disable commands-show-output -->

```markdown
$ ls
$ cat foo
$ less bar
```

<!-- markdownlint-restore -->

The dollar signs are unnecessary in this situation, and should not be
included:

```markdown
ls
cat foo
less bar
```

Showing output for commands preceded by dollar signs does not trigger this rule:

```markdown
$ ls
foo bar
$ cat foo
Hello world
$ cat bar
baz
```

Because some commands do not produce output, it is not a violation if *some*
commands do not have output:

```markdown
$ mkdir test
mkdir: created directory 'test'
$ ls test
```

Rationale: It is easier to copy/paste and less noisy if the dollar signs
are omitted when they are not needed. See
<https://cirosantilli.com/markdown-style-guide#dollar-signs-in-shell-code>
for more information.

<a name="md018"></a>

## `MD018` - No space after hash on atx style heading

Tags: `atx`, `headings`, `spaces`

Aliases: `no-missing-space-atx`

Fixable: Some violations can be fixed by tooling

This rule is triggered when spaces are missing after the hash characters
in an atx style heading:

```markdown
#Heading 1

##Heading 2
```

To fix this, separate the heading text from the hash character by a single
space:

```markdown
# Heading 1

## Heading 2
```

Rationale: Violations of this rule can lead to improperly rendered content.

<a name="md019"></a>

## `MD019` - Multiple spaces after hash on atx style heading

Tags: `atx`, `headings`, `spaces`

Aliases: `no-multiple-space-atx`

Fixable: Some violations can be fixed by tooling

This rule is triggered when more than one space is used to separate the
heading text from the hash characters in an atx style heading:

```markdown
#  Heading 1

##  Heading 2
```

To fix this, separate the heading text from the hash character by a single
space:

```markdown
# Heading 1

## Heading 2
```

Rationale: Extra space has no purpose and does not affect the rendering of
content.

<a name="md020"></a>

## `MD020` - No space inside hashes on closed atx style heading

Tags: `atx_closed`, `headings`, `spaces`

Aliases: `no-missing-space-closed-atx`

Fixable: Some violations can be fixed by tooling

This rule is triggered when spaces are missing inside the hash characters
in a closed atx style heading:

```markdown
#Heading 1#

##Heading 2##
```

To fix this, separate the heading text from the hash character by a single
space:

```markdown
# Heading 1 #

## Heading 2 ##
```

Note: this rule will fire if either side of the heading is missing spaces.

Rationale: Violations of this rule can lead to improperly rendered content.

<a name="md021"></a>

## `MD021` - Multiple spaces inside hashes on closed atx style heading

Tags: `atx_closed`, `headings`, `spaces`

Aliases: `no-multiple-space-closed-atx`

Fixable: Some violations can be fixed by tooling

This rule is triggered when more than one space is used to separate the
heading text from the hash characters in a closed atx style heading:

```markdown
#  Heading 1  #

##  Heading 2  ##
```

To fix this, separate the heading text from the hash character by a single
space:

```markdown
# Heading 1 #

## Heading 2 ##
```

Note: this rule will fire if either side of the heading contains multiple
spaces.

Rationale: Extra space has no purpose and does not affect the rendering of
content.

<a name="md022"></a>

## `MD022` - Headings should be surrounded by blank lines

Tags: `blank_lines`, `headings`

Aliases: `blanks-around-headings`

Parameters:

- `lines_above`: Blank lines above heading (`integer|integer[]`, default `1`)
- `lines_below`: Blank lines below heading (`integer|integer[]`, default `1`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when headings (any style) are either not preceded or not
followed by at least one blank line:

```markdown
# Heading 1
Some text

Some more text
## Heading 2
```

To fix this, ensure that all headings have a blank line both before and after
(except where the heading is at the beginning or end of the document):

```markdown
# Heading 1

Some text

Some more text

## Heading 2
```

The `lines_above` and `lines_below` parameters can be used to specify a
different number of blank lines (including `0`) above or below each heading.
If the value `-1` is used for either parameter, any number of blank lines is
allowed. To customize the number of lines above or below each heading level
individually, specify a `number[]` where values correspond to heading levels
1-6 (in order).

Notes: If `lines_above` or `lines_below` are configured to require more than one
blank line, [MD012/no-multiple-blanks](../md012.md) should also be customized. This
rule checks for *at least* as many blank lines as specified; any extra blank
lines are ignored.

Rationale: Aside from aesthetic reasons, some parsers, including `kramdown`,
will not parse headings that don't have a blank line before, and will parse them
as regular text.

<a name="md023"></a>

## `MD023` - Headings must start at the beginning of the line

Tags: `headings`, `spaces`

Aliases: `heading-start-left`

Fixable: Some violations can be fixed by tooling

This rule is triggered when a heading is indented by one or more spaces:

```markdown
Some text

  # Indented heading
```

To fix this, ensure that all headings start at the beginning of the line:

```markdown
Some text

# Heading
```

Note that scenarios like block quotes "indent" the start of the line, so the
following is also correct:

```markdown
> # Heading in Block Quote
```

Rationale: Headings that don't start at the beginning of the line will not be
parsed as headings, and will instead appear as regular text.

<a name="md024"></a>

## `MD024` - Multiple headings with the same content

Tags: `headings`

Aliases: `no-duplicate-heading`

Parameters:

- `siblings_only`: Only check sibling headings (`boolean`, default `false`)

This rule is triggered if there are multiple headings in the document that have
the same text:

```markdown
# Some text

## Some text
```

To fix this, ensure that the content of each heading is different:

```markdown
# Some text

## Some more text
```

If the parameter `siblings_only` is set to `true`, duplication is allowed for
headings with different parents (as is common in changelogs):

```markdown
# Change log

## 1.0.0

### Features

## 2.0.0

### Features
```

Rationale: Some Markdown parsers generate anchors for headings based on the
heading name; headings with the same content can cause problems with that.

<a name="md025"></a>

## `MD025` - Multiple top-level headings in the same document

Tags: `headings`

Aliases: `single-h1`, `single-title`

Parameters:

- `front_matter_title`: RegExp for matching title in front matter (`string`,
  default `^\s*title\s*[:=]`)
- `level`: Heading level (`integer`, default `1`)

This rule is triggered when a top-level heading is in use (the first line of
the file is an h1 heading), and more than one h1 heading is in use in the
document:

```markdown
# Top level heading

# Another top-level heading
```

To fix, structure your document so there is a single h1 heading that is
the title for the document. Subsequent headings must be
lower-level headings (h2, h3, etc.):

```markdown
# Title

## Heading

## Another heading
```

Note: The `level` parameter can be used to change the top-level (ex: to h2) in
cases where an h1 is added externally.

If [YAML](https://en.wikipedia.org/wiki/YAML) front matter is present and
contains a `title` property (commonly used with blog posts), this rule treats
that as a top level heading and will report a violation for any subsequent
top-level headings. To use a different property name in the front matter,
specify the text of a regular expression via the `front_matter_title` parameter.
To disable the use of front matter by this rule, specify `""` for
`front_matter_title`.

Rationale: A top-level heading is an h1 on the first line of the file, and
serves as the title for the document. If this convention is in use, then there
can not be more than one title for the document, and the entire document should
be contained within this heading.

<a name="md026"></a>

## `MD026` - Trailing punctuation in heading

Tags: `headings`

Aliases: `no-trailing-punctuation`

Parameters:

- `punctuation`: Punctuation characters (`string`, default `.,;:!。，；：！`)

Fixable: Some violations can be fixed by tooling

This rule is triggered on any heading that has one of the specified normal or
full-width punctuation characters as the last character in the line:

```markdown
# This is a heading.
```

To fix this, remove the trailing punctuation:

```markdown
# This is a heading
```

Note: The `punctuation` parameter can be used to specify what characters count
as punctuation at the end of a heading. For example, you can change it to
`".,;:"` to allow headings that end with an exclamation point. `?` is
allowed by default because of how common it is in headings of FAQ-style
documents. Setting the `punctuation` parameter to `""` allows all characters -
and is equivalent to disabling the rule.

Note: The trailing semicolon of [HTML entity references][html-entity-references]
like `&copy;`, `&#169;`, and `&#x000A9;` is ignored by this rule.

Rationale: Headings are not meant to be full sentences. More information:
[Punctuation at the end of headers][end-punctuation].

[end-punctuation]: https://cirosantilli.com/markdown-style-guide#punctuation-at-the-end-of-headers
[html-entity-references]: https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references

<a name="md027"></a>

## `MD027` - Multiple spaces after blockquote symbol

Tags: `blockquote`, `indentation`, `whitespace`

Aliases: `no-multiple-space-blockquote`

Fixable: Some violations can be fixed by tooling

This rule is triggered when blockquotes have more than one space after the
blockquote (`>`) symbol:

```markdown
>  This is a blockquote with bad indentation
>  there should only be one.
```

To fix, remove any extraneous space:

```markdown
> This is a blockquote with correct
> indentation.
```

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md028"></a>

## `MD028` - Blank line inside blockquote

Tags: `blockquote`, `whitespace`

Aliases: `no-blanks-blockquote`

This rule is triggered when two blockquote blocks are separated by nothing
except for a blank line:

```markdown
> This is a blockquote
> which is immediately followed by

> this blockquote. Unfortunately
> In some parsers, these are treated as the same blockquote.
```

To fix this, ensure that any blockquotes that are right next to each other
have some text in between:

```markdown
> This is a blockquote.

And Jimmy also said:

> This too is a blockquote.
```

Alternatively, if they are supposed to be the same quote, then add the
blockquote symbol at the beginning of the blank line:

```markdown
> This is a blockquote.
>
> This is the same blockquote.
```

Rationale: Some Markdown parsers will treat two blockquotes separated by one
or more blank lines as the same blockquote, while others will treat them as
separate blockquotes.

<a name="md029"></a>

## `MD029` - Ordered list item prefix

Tags: `ol`

Aliases: `ol-prefix`

Parameters:

- `style`: List style (`string`, default `one_or_ordered`, values `one` /
  `one_or_ordered` / `ordered` / `zero`)

This rule is triggered for ordered lists that do not either start with '1.' or
do not have a prefix that increases in numerical order (depending on the
configured style). The less-common pattern of using '0.' as a first prefix or
for all prefixes is also supported.

Example valid list if the style is configured as 'one':

```markdown
1. Do this.
1. Do that.
1. Done.
```

Examples of valid lists if the style is configured as 'ordered':

```markdown
1. Do this.
2. Do that.
3. Done.
```

```markdown
0. Do this.
1. Do that.
2. Done.
```

All three examples are valid when the style is configured as 'one_or_ordered'.

Example valid list if the style is configured as 'zero':

```markdown
0. Do this.
0. Do that.
0. Done.
```

Example invalid list for all styles:

```markdown
1. Do this.
3. Done.
```

This rule supports 0-prefixing ordered list items for uniform indentation:

```markdown
...
08. Item
09. Item
10. Item
11. Item
...
```

Note: This rule will report violations for cases like the following where an
improperly-indented code block (or similar) appears between two list items and
"breaks" the list in two:

<!-- markdownlint-disable code-fence-style -->

~~~markdown
1. First list

```text
Code block
```

1. Second list
~~~

The fix is to indent the code block so it becomes part of the preceding list
item as intended:

~~~markdown
1. First list

   ```text
   Code block
   ```

2. Still first list
~~~

<!-- markdownlint-restore -->

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md030"></a>

## `MD030` - Spaces after list markers

Tags: `ol`, `ul`, `whitespace`

Aliases: `list-marker-space`

Parameters:

- `ol_multi`: Spaces for multi-line ordered list items (`integer`, default `1`)
- `ol_single`: Spaces for single-line ordered list items (`integer`, default
  `1`)
- `ul_multi`: Spaces for multi-line unordered list items (`integer`, default
  `1`)
- `ul_single`: Spaces for single-line unordered list items (`integer`, default
  `1`)

Fixable: Some violations can be fixed by tooling

This rule checks for the number of spaces between a list marker (e.g. '`-`',
'`*`', '`+`' or '`1.`') and the text of the list item.

The number of spaces checked for depends on the document style in use, but the
default is 1 space after any list marker:

```markdown
* Foo
* Bar
* Baz

1. Foo
1. Bar
1. Baz

1. Foo
   * Bar
1. Baz
```

A document style may change the number of spaces after unordered list items
and ordered list items independently, as well as based on whether the content
of every item in the list consists of a single paragraph or multiple
paragraphs (including sub-lists and code blocks).

For example, the style guide at
<https://cirosantilli.com/markdown-style-guide#spaces-after-list-marker>
specifies that 1 space after the list marker should be used if every item in
the list fits within a single paragraph, but to use 2 or 3 spaces (for ordered
and unordered lists respectively) if there are multiple paragraphs of content
inside the list:

```markdown
* Foo
* Bar
* Baz
```

vs.

```markdown
*   Foo

    Second paragraph

*   Bar
```

or

```markdown
1.  Foo

    Second paragraph

1.  Bar
```

To fix this, ensure the correct number of spaces are used after the list marker
for your selected document style.

Rationale: Violations of this rule can lead to improperly rendered content.

Note: See [Prettier.md](../Prettier.md) for compatibility information.

<a name="md031"></a>

## `MD031` - Fenced code blocks should be surrounded by blank lines

Tags: `blank_lines`, `code`

Aliases: `blanks-around-fences`

Parameters:

- `list_items`: Include list items (`boolean`, default `true`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when fenced code blocks are either not preceded or not
followed by a blank line:

````markdown
Some text
```
Code block
```

```
Another code block
```
Some more text
````

To fix this, ensure that all fenced code blocks have a blank line both before
and after (except where the block is at the beginning or end of the document):

````markdown
Some text

```
Code block
```

```
Another code block
```

Some more text
````

Set the `list_items` parameter to `false` to disable this rule for list items.
Disabling this behavior for lists can be useful if it is necessary to create a
[tight](https://spec.commonmark.org/0.29/#tight) list containing a code fence.

Rationale: Aside from aesthetic reasons, some parsers, including kramdown, will
not parse fenced code blocks that don't have blank lines before and after them.

<a name="md032"></a>

## `MD032` - Lists should be surrounded by blank lines

Tags: `blank_lines`, `bullet`, `ol`, `ul`

Aliases: `blanks-around-lists`

Fixable: Some violations can be fixed by tooling

This rule is triggered when lists (of any kind) are either not preceded or not
followed by a blank line:

```markdown
Some text
* List item
* List item

1. List item
2. List item
***
```

In the first case above, text immediately precedes the unordered list. In the
second case above, a thematic break immediately follows the ordered list. To fix
violations of this rule, ensure that all lists have a blank line both before and
after (except when the list is at the very beginning or end of the document):

```markdown
Some text

* List item
* List item

1. List item
2. List item

***
```

Note that the following case is **not** a violation of this rule:

```markdown
1. List item
   More item 1
2. List item
More item 2
```

Although it is not indented, the text "More item 2" is referred to as a
[lazy continuation line][lazy-continuation] and considered part of the second
list item.

Rationale: In addition to aesthetic reasons, some parsers, including kramdown,
will not parse lists that don't have blank lines before and after them.

[lazy-continuation]: https://spec.commonmark.org/0.30/#lazy-continuation-line

<a name="md033"></a>

## `MD033` - Inline HTML

Tags: `html`

Aliases: `no-inline-html`

Parameters:

- `allowed_elements`: Allowed elements (`string[]`, default `[]`)

This rule is triggered whenever raw HTML is used in a Markdown document:

```markdown
<h1>Inline HTML heading</h1>
```

To fix this, use 'pure' Markdown instead of including raw HTML:

```markdown
# Markdown heading
```

Note: To allow specific HTML elements, use the `allowed_elements` parameter.

Rationale: Raw HTML is allowed in Markdown, but this rule is included for
those who want their documents to only include "pure" Markdown, or for those
who are rendering Markdown documents into something other than HTML.

<a name="md034"></a>

## `MD034` - Bare URL used

Tags: `links`, `url`

Aliases: `no-bare-urls`

Fixable: Some violations can be fixed by tooling

This rule is triggered whenever a URL or email address appears without
surrounding angle brackets:

```markdown
For more info, visit https://www.example.com/ or email user@example.com.
```

To fix this, add angle brackets around the URL or email address:

```markdown
For more info, visit <https://www.example.com/> or email <user@example.com>.
```

If a URL or email address contains non-ASCII characters, it may be not be
handled as intended even when angle brackets are present. In such cases,
[percent-encoding](https://en.m.wikipedia.org/wiki/Percent-encoding) can be used
to comply with the required syntax for URL and email.

Note: To include a bare URL or email without it being converted into a link,
wrap it in a code span:

```markdown
Not a clickable link: `https://www.example.com`
```

Note: The following scenario does not trigger this rule because it could be a
shortcut link:

```markdown
[https://www.example.com]
```

Note: The following syntax triggers this rule because the nested link could be
a shortcut link (which takes precedence):

```markdown
[text [shortcut] text](https://example.com)
```

To avoid this, escape both inner brackets:

```markdown
[link \[text\] link](https://example.com)
```

Rationale: Without angle brackets, a bare URL or email isn't converted into a
link by some Markdown parsers.

<a name="md035"></a>

## `MD035` - Horizontal rule style

Tags: `hr`

Aliases: `hr-style`

Parameters:

- `style`: Horizontal rule style (`string`, default `consistent`)

This rule is triggered when inconsistent styles of horizontal rules are used
in the document:

```markdown
---

- - -

***

* * *

****
```

To fix this, use the same horizontal rule everywhere:

```markdown
---

---
```

The configured style can ensure all horizontal rules use a specific string or it
can ensure all horizontal rules match the first horizontal rule (`consistent`).

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md036"></a>

## `MD036` - Emphasis used instead of a heading

Tags: `emphasis`, `headings`

Aliases: `no-emphasis-as-heading`

Parameters:

- `punctuation`: Punctuation characters (`string`, default `.,;:!?。，；：！？`)

This check looks for instances where emphasized (i.e. bold or italic) text is
used to separate sections, where a heading should be used instead:

```markdown
**My document**

Lorem ipsum dolor sit amet...

_Another section_

Consectetur adipiscing elit, sed do eiusmod.
```

To fix this, use Markdown headings instead of emphasized text to denote
sections:

```markdown
# My document

Lorem ipsum dolor sit amet...

## Another section

Consectetur adipiscing elit, sed do eiusmod.
```

Note: This rule looks for single-line paragraphs that consist entirely
of emphasized text. It won't fire on emphasis used within regular text,
multi-line emphasized paragraphs, or paragraphs ending in punctuation
(normal or full-width). Similarly to rule MD026, you can configure what
characters are recognized as punctuation.

Rationale: Using emphasis instead of a heading prevents tools from inferring
the structure of a document. More information:
<https://cirosantilli.com/markdown-style-guide#emphasis-vs-headers>.

<a name="md037"></a>

## `MD037` - Spaces inside emphasis markers

Tags: `emphasis`, `whitespace`

Aliases: `no-space-in-emphasis`

Fixable: Some violations can be fixed by tooling

This rule is triggered when emphasis markers (bold, italic) are used, but they
have spaces between the markers and the text:

```markdown
Here is some ** bold ** text.

Here is some * italic * text.

Here is some more __ bold __ text.

Here is some more _ italic _ text.
```

To fix this, remove the spaces around the emphasis markers:

```markdown
Here is some **bold** text.

Here is some *italic* text.

Here is some more __bold__ text.

Here is some more _italic_ text.
```

Rationale: Emphasis is only parsed as such when the asterisks/underscores
aren't surrounded by spaces. This rule attempts to detect where
they were surrounded by spaces, but it appears that emphasized text was
intended by the author.

<a name="md038"></a>

## `MD038` - Spaces inside code span elements

Tags: `code`, `whitespace`

Aliases: `no-space-in-code`

Fixable: Some violations can be fixed by tooling

This rule is triggered for code span elements that have spaces adjacent to the
backticks:

```markdown
`some text `

` some text`
```

To fix this, remove any spaces adjacent to the backticks:

```markdown
`some text`
```

Note: A single leading and trailing space is allowed by the specification and
automatically trimmed (in order to allow for code spans that embed backticks):

```markdown
`` `backticks` ``
```

Note: A single leading or trailing space is allowed if used to separate code
span markers from an embedded backtick (though the space is not trimmed):

```markdown
`` ` embedded backtick``
```

Rationale: Violations of this rule are usually unintentional and may lead to
improperly-rendered content. If spaces beside backticks are intentional, this
rule can be disabled for that line or file.

<a name="md039"></a>

## `MD039` - Spaces inside link text

Tags: `links`, `whitespace`

Aliases: `no-space-in-links`

Fixable: Some violations can be fixed by tooling

This rule is triggered on links that have spaces surrounding the link text:

```markdown
[ a link ](https://www.example.com/)
```

To fix this, remove the spaces surrounding the link text:

```markdown
[a link](https://www.example.com/)
```

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md040"></a>

## `MD040` - Fenced code blocks should have a language specified

Tags: `code`, `language`

Aliases: `fenced-code-language`

Parameters:

- `allowed_languages`: List of languages (`string[]`, default `[]`)
- `language_only`: Require language only (`boolean`, default `false`)

This rule is triggered when fenced code blocks are used, but a language isn't
specified:

````markdown
```
#!/bin/bash
echo Hello world
```
````

To fix this, add a language specifier to the code block:

````markdown
```bash
#!/bin/bash
echo Hello world
```
````

To display a code block without syntax highlighting, use:

````markdown
```text
Plain text in a code block
```
````

You can configure the `allowed_languages` parameter to specify a list of
languages code blocks could use. Languages are case sensitive. The default value
is `[]` which means any language specifier is valid.

You can prevent extra data from being present in the info string of fenced code
blocks. To do so, set the `language_only` parameter to `true`.

<!-- markdownlint-disable-next-line no-space-in-code -->
Info strings with leading/trailing whitespace (ex: `js `) or other content (ex:
`ruby startline=3`) will trigger this rule.

Rationale: Specifying a language improves content rendering by using the
correct syntax highlighting for code. More information:
<https://cirosantilli.com/markdown-style-guide#option-code-fenced>.

<a name="md041"></a>

## `MD041` - First line in a file should be a top-level heading

Tags: `headings`

Aliases: `first-line-h1`, `first-line-heading`

Parameters:

- `front_matter_title`: RegExp for matching title in front matter (`string`,
  default `^\s*title\s*[:=]`)
- `level`: Heading level (`integer`, default `1`)

This rule is intended to ensure documents have a title and is triggered when
the first line in the file isn't a top-level (h1) heading:

```markdown
This is a file without a heading
```

To fix this, add a top-level heading to the beginning of the file:

```markdown
# File with heading

This is a file with a top-level heading
```

Because it is common for projects on GitHub to use an image for the heading of
`README.md` and that is not well-supported by Markdown, HTML headings are also
permitted by this rule. For example:

```markdown
<h1 align="center"><img src="https://placekitten.com/300/150"/></h1>

This is a file with a top-level HTML heading
```

Note: The `level` parameter can be used to change the top-level (ex: to h2) in
cases where an h1 is added externally.

If [YAML](https://en.wikipedia.org/wiki/YAML) front matter is present and
contains a `title` property (commonly used with blog posts), this rule will not
report a violation. To use a different property name in the front matter,
specify the text of a regular expression via the `front_matter_title` parameter.
To disable the use of front matter by this rule, specify `""` for
`front_matter_title`.

Rationale: The top-level heading often acts as the title of a document. More
information: <https://cirosantilli.com/markdown-style-guide#top-level-header>.

<a name="md042"></a>

## `MD042` - No empty links

Tags: `links`

Aliases: `no-empty-links`

This rule is triggered when an empty link is encountered:

```markdown
[an empty link]()
```

To fix the violation, provide a destination for the link:

```markdown
[a valid link](https://example.com/)
```

Empty fragments will trigger this rule:

```markdown
[an empty fragment](#)
```

But non-empty fragments will not:

```markdown
[a valid fragment](#fragment)
```

Rationale: Empty links do not lead anywhere and therefore don't function as
links.

<a name="md043"></a>

## `MD043` - Required heading structure

Tags: `headings`

Aliases: `required-headings`

Parameters:

- `headings`: List of headings (`string[]`, default `[]`)
- `match_case`: Match case of headings (`boolean`, default `false`)

This rule is triggered when the headings in a file do not match the array of
headings passed to the rule. It can be used to enforce a standard heading
structure for a set of files.

To require exactly the following structure:

```markdown
# Head
## Item
### Detail
```

Set the `headings` parameter to:

```json
[
    "# Head",
    "## Item",
    "### Detail"
]
```

To allow optional headings as with the following structure:

```markdown
# Head
## Item
### Detail (optional)
## Foot
### Notes (optional)
```

Use the special value `"*"` meaning "zero or more unspecified headings" or the
special value `"+"` meaning "one or more unspecified headings" and set the
`headings` parameter to:

```json
[
    "# Head",
    "## Item",
    "*",
    "## Foot",
    "*"
]
```

When an error is detected, this rule outputs the line number of the first
problematic heading (otherwise, it outputs the last line number of the file).

Note that while the `headings` parameter uses the "## Text" ATX heading style
for simplicity, a file may use any supported heading style.

By default, the case of headings in the document is not required to match that
of `headings`. To require that case match exactly, set the `match_case`
parameter to `true`.

Rationale: Projects may wish to enforce a consistent document structure across
a set of similar content.

<a name="md044"></a>

## `MD044` - Proper names should have the correct capitalization

Tags: `spelling`

Aliases: `proper-names`

Parameters:

- `code_blocks`: Include code blocks (`boolean`, default `true`)
- `html_elements`: Include HTML elements (`boolean`, default `true`)
- `names`: List of proper names (`string[]`, default `[]`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when any of the strings in the `names` array do not have
the specified capitalization. It can be used to enforce a standard letter case
for the names of projects and products.

For example, the language "JavaScript" is usually written with both the 'J' and
'S' capitalized - though sometimes the 's' or 'j' appear in lower-case. To
enforce the proper capitalization, specify the desired letter case in the
`names` array:

```json
[
    "JavaScript"
]
```

Sometimes a proper name is capitalized differently in certain contexts. In such
cases, add both forms to the `names` array:

```json
[
    "GitHub",
    "github.com"
]
```

Set the `code_blocks` parameter to `false` to disable this rule for code blocks
and spans. Set the `html_elements` parameter to `false` to disable this rule
for HTML elements and attributes (such as when using a proper name as part of
a path for `a`/`href` or `img`/`src`).

Rationale: Incorrect capitalization of proper names is usually a mistake.

<a name="md045"></a>

## `MD045` - Images should have alternate text (alt text)

Tags: `accessibility`, `images`

Aliases: `no-alt-text`

This rule is triggered when an image is missing alternate text (alt text)
information.

Alternate text is commonly specified inline as:

```markdown
![Alternate text](image.jpg)
```

Or with reference syntax as:

```markdown
![Alternate text][ref]

...

[ref]: image.jpg "Optional title"
```

Or with HTML as:

```html
<img src="image.jpg" alt="Alternate text" />
```

Guidance for writing alternate text is available from the [W3C][w3c],
[Wikipedia][wikipedia], and [other locations][phase2technology].

Rationale: Alternate text is important for accessibility and describes the
content of an image for people who may not be able to see it.

[phase2technology]: https://www.phase2technology.com/blog/no-more-excuses
[w3c]: https://www.w3.org/WAI/alt/
[wikipedia]: https://en.wikipedia.org/wiki/Alt_attribute

<a name="md046"></a>

## `MD046` - Code block style

Tags: `code`

Aliases: `code-block-style`

Parameters:

- `style`: Block style (`string`, default `consistent`, values `consistent` /
  `fenced` / `indented`)

This rule is triggered when unwanted or different code block styles are used in
the same document.

In the default configuration this rule reports a violation for the following
document:

<!-- markdownlint-disable code-block-style -->

    Some text.

        # Indented code

    More text.

    ```ruby
    # Fenced code
    ```

    More text.

<!-- markdownlint-restore -->

To fix violations of this rule, use a consistent style (either indenting or code
fences).

The configured code block style can be specific (`fenced`, `indented`) or can
require all code blocks match the first code block (`consistent`).

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md047"></a>

## `MD047` - Files should end with a single newline character

Tags: `blank_lines`

Aliases: `single-trailing-newline`

Fixable: Some violations can be fixed by tooling

This rule is triggered when there is not a single newline character at the end
of a file.

An example that triggers the rule:

```markdown
# Heading

This file ends without a newline.[EOF]
```

To fix the violation, add a newline character to the end of the file:

```markdown
# Heading

This file ends with a newline.
[EOF]
```

Rationale: Some programs have trouble with files that do not end with a newline.

More information: [What's the point in adding a new line to the end of a
file?][stack-exchange]

[stack-exchange]: https://unix.stackexchange.com/questions/18743/whats-the-point-in-adding-a-new-line-to-the-end-of-a-file

<a name="md048"></a>

## `MD048` - Code fence style

Tags: `code`

Aliases: `code-fence-style`

Parameters:

- `style`: Code fence style (`string`, default `consistent`, values `backtick`
  / `consistent` / `tilde`)

This rule is triggered when the symbols used in the document for fenced code
blocks do not match the configured code fence style:

````markdown
```ruby
# Fenced code
```

~~~ruby
# Fenced code
~~~
````

To fix this issue, use the configured code fence style throughout the
document:

````markdown
```ruby
# Fenced code
```

```ruby
# Fenced code
```
````

The configured code fence style can be a specific symbol to use (`backtick`,
`tilde`) or it can require all code fences match the first code fence
(`consistent`).

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md049"></a>

## `MD049` - Emphasis style

Tags: `emphasis`

Aliases: `emphasis-style`

Parameters:

- `style`: Emphasis style (`string`, default `consistent`, values `asterisk` /
  `consistent` / `underscore`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when the symbols used in the document for emphasis do not
match the configured emphasis style:

```markdown
*Text*
_Text_
```

To fix this issue, use the configured emphasis style throughout the document:

```markdown
*Text*
*Text*
```

The configured emphasis style can be a specific symbol to use (`asterisk`,
`underscore`) or can require all emphasis matches the first emphasis
(`consistent`).

Note: Emphasis within a word is restricted to `asterisk` in order to avoid
unwanted emphasis for words containing internal underscores like_this_one.

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md050"></a>

## `MD050` - Strong style

Tags: `emphasis`

Aliases: `strong-style`

Parameters:

- `style`: Strong style (`string`, default `consistent`, values `asterisk` /
  `consistent` / `underscore`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when the symbols used in the document for strong do not
match the configured strong style:

```markdown
**Text**
__Text__
```

To fix this issue, use the configured strong style throughout the document:

```markdown
**Text**
**Text**
```

The configured strong style can be a specific symbol to use (`asterisk`,
`underscore`) or can require all strong matches the first strong (`consistent`).

Note: Emphasis within a word is restricted to `asterisk` in order to avoid
unwanted emphasis for words containing internal underscores like__this__one.

Rationale: Consistent formatting makes it easier to understand a document.

<a name="md051"></a>

## `MD051` - Link fragments should be valid

Tags: `links`

Aliases: `link-fragments`

Parameters:

- `ignore_case`: Ignore case of fragments (`boolean`, default `false`)

Fixable: Some violations can be fixed by tooling

This rule is triggered when a link fragment does not match any of the fragments
that are automatically generated for headings in a document:

```markdown
# Heading Name

[Link](#fragment)
```

To fix this issue, change the link fragment to reference an existing heading's
generated name (see below):

```markdown
# Heading Name

[Link](#heading-name)
```

For consistency, this rule requires fragments to exactly match the [GitHub
heading algorithm][github-heading-algorithm] which converts letters to
lowercase. Therefore, the following example is reported as a violation:

```markdown
# Heading Name

[Link](#Heading-Name)
```

To ignore case when comparing fragments with heading names, the `ignore_case`
parameter can be set to `true`. In this configuration, the previous example is
not reported as a violation.

Alternatively, some platforms allow the syntax `{#named-anchor}` to be used
within a heading to provide a specific name (consisting of only lower-case
letters, numbers, `-`, and `_`):

```markdown
# Heading Name {#custom-name}

[Link](#custom-name)
```

Alternatively, any HTML tag with an `id` attribute or an `a` tag with a `name`
attribute can be used to define a fragment:

```markdown
<a id="bookmark"></a>

[Link](#bookmark)
```

An `a` tag can be useful in scenarios where a heading is not appropriate or for
control over the text of the fragment identifier.

This rule also recognizes the custom fragment syntax used by GitHub to highlight
[specific content in a document][github-linking-to-content].

For example, this link to line 20:

```markdown
[Link](#L20)
```

And this link to content starting within line 19 running into line 21:

```markdown
[Link](#L19C5-L21C11)
```

Rationale: [GitHub section links][github-section-links] are created
automatically for every heading when Markdown content is displayed on GitHub.
This makes it easy to link directly to different sections within a document.
However, section links change if headings are renamed or removed. This rule
helps identify broken section links within a document.

Section links are **not** part of the CommonMark specification. This rule
enforces the [GitHub heading algorithm][github-heading-algorithm] which is:
convert heading to lowercase, remove punctuation, convert spaces to dashes,
append an incrementing integer as needed for uniqueness.

[github-section-links]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#section-links
[github-heading-algorithm]: https://github.com/gjtorikian/html-pipeline/blob/f13a1534cb650ba17af400d1acd3a22c28004c09/lib/html/pipeline/toc_filter.rb
[github-linking-to-content]: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet#linking-to-markdown#linking-to-markdown

<a name="md052"></a>

## `MD052` - Reference links and images should use a label that is defined

Tags: `images`, `links`

Aliases: `reference-links-images`

Parameters:

- `shortcut_syntax`: Include shortcut syntax (`boolean`, default `false`)

Links and images in Markdown can provide the link destination or image source
at the time of use or can define it elsewhere and use a label for reference.
The reference format is convenient for keeping paragraph text clutter-free
and makes it easy to reuse the same URL in multiple places.

There are three kinds of reference links and images:

```markdown
Full: [text][label]
Collapsed: [label][]
Shortcut: [label]

Full: ![text][image]
Collapsed: ![image][]
Shortcut: ![image]

[label]: https://example.com/label
[image]: https://example.com/image
```

A link or image renders correctly when the corresponding label is defined, but
displays as text with brackets when the label is not present. By default, this
rule warns of undefined labels for "full" and "collapsed" reference syntax but
not for "shortcut" syntax because it is ambiguous.

The text `[example]` could be a shortcut link or the text "example" in brackets,
so "shortcut" syntax is ignored by default. To include "shortcut" syntax, set
the `include_shortcut` parameter to `true`. Note that doing so produces warnings
for *all* text in the document that *could* be a shortcut. If bracketed text is
intentional, brackets can be escaped with the `\` character: `\[example\]`.

<a name="md053"></a>

## `MD053` - Link and image reference definitions should be needed

Tags: `images`, `links`

Aliases: `link-image-reference-definitions`

Parameters:

- `ignored_definitions`: Ignored definitions (`string[]`, default `["//"]`)

Fixable: Some violations can be fixed by tooling

Links and images in Markdown can provide the link destination or image source
at the time of use or can use a label to reference a definition elsewhere in
the document. The latter reference format is convenient for keeping paragraph
text clutter-free and makes it easy to reuse the same URL in multiple places.

Because link and image reference definitions are located separately from
where they are used, there are two scenarios where a definition can be
unnecessary:

1. If a label is not referenced by any link or image in a document, that
   definition is unused and can be deleted.
2. If a label is defined multiple times in a document, the first definition is
   used and the others can be deleted.

This rule considers a reference definition to be used if any link or image
reference has the corresponding label. The "full", "collapsed", and "shortcut"
formats are all supported.

If there are reference definitions that are deliberately unreferenced, they can
be ignored by setting the `ignored_definitions` parameter. The default value of
this parameter ignores the following convention for adding non-HTML comments to
Markdown:

```markdown
[//]: # (This behaves like a comment)
```

<a name="md054"></a>

## `MD054` - Link and image style

Tags: `images`, `links`

Aliases: `link-image-style`

Parameters:

- `autolink`: Allow autolinks (`boolean`, default `true`)
- `collapsed`: Allow collapsed reference links and images (`boolean`, default
  `true`)
- `full`: Allow full reference links and images (`boolean`, default `true`)
- `inline`: Allow inline links and images (`boolean`, default `true`)
- `shortcut`: Allow shortcut reference links and images (`boolean`, default
  `true`)
- `url_inline`: Allow URLs as inline links (`boolean`, default `true`)

Fixable: Some violations can be fixed by tooling

Links and images in Markdown can provide the link destination or image source at
the time of use or can use a label to reference a definition elsewhere in the
document. The three reference formats are convenient for keeping paragraph text
clutter-free and make it easy to reuse the same URL in multiple places.

By default, this rule allows all link/image styles.

Setting the `autolink` parameter to `false` disables autolinks:

```markdown
<https://example.com>
```

Setting the `inline` parameter to `false` disables inline links and images:

```markdown
[link](https://example.com)

![image](https://example.com)
```

Setting the `full` parameter to `false` disables full reference links and
images:

```markdown
[link][url]

![image][url]

[url]: https://example.com
```

Setting the `collapsed` parameter to `false` disables collapsed reference links
and images:

```markdown
[url][]

![url][]

[url]: https://example.com
```

Setting the `shortcut` parameter to `false` disables shortcut reference links
and images:

```markdown
[url]

![url]

[url]: https://example.com
```

To fix violations of this rule, change the link or image to use an allowed
style. This rule can automatically fix violations when a link or image can be
converted to the `inline` style (preferred) or a link can be converted to the
`autolink` style (which does not support images and must be an absolute URL).
This rule does *not* fix scenarios that require converting a link or image to
the `full`, `collapsed`, or `shortcut` reference styles because that involves
naming the reference and determining where to insert it in the document.

Setting the `url_inline` parameter to `false` prevents the use of inline links
with the same absolute URL text/destination and no title because such links can
be converted to autolinks:

```markdown
[https://example.com](https://example.com)
```

To fix `url_inline` violations, use the simpler autolink syntax instead:

```markdown
<https://example.com>
```

Rationale: Consistent formatting makes it easier to understand a document.
Autolinks are concise, but appear as URLs which can be long and confusing.
Inline links and images can include descriptive text, but take up more space in
Markdown form. Reference links and images can be easier to read and manipulate
in Markdown form, but require a separate link reference definition.

<a name="md055"></a>

## `MD055` - Table pipe style

Tags: `table`

Aliases: `table-pipe-style`

Parameters:

- `style`: Table pipe style (`string`, default `consistent`, values
  `consistent` / `leading_and_trailing` / `leading_only` /
  `no_leading_or_trailing` / `trailing_only`)

This rule is triggered when a [GitHub Flavored Markdown table][gfm-table-055]
is inconsistent about its use of leading and trailing pipe characters (`|`).

By default (`consistent` style), the header row of the first table in a document
is used to determine the style that is enforced for every table in the document.
A specific style can be used instead (`leading_and_trailing`, `leading_only`,
`no_leading_or_trailing`, `trailing_only`).

This table's header row has leading and trailing pipes, but its delimiter row is
missing the trailing pipe and its first row of cells is missing the leading
pipe:

```markdown
| Header | Header |
| ------ | ------
  Cell   | Cell   |
```

To fix these issues, make sure there is a pipe character at the beginning and
end of every row:

```markdown
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
```

Note that text immediately following a table (i.e., not separated by an empty
line) is treated as part of the table (per the specification) and may also
trigger this rule:

```markdown
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
This text is part of the table
```

Rationale: Some parsers have difficulty with tables that are missing their
leading or trailing pipe characters. The use of leading/trailing pipes can also
help provide visual clarity.

[gfm-table-055]: https://github.github.com/gfm/#tables-extension-

<a name="md056"></a>

## `MD056` - Table column count

Tags: `table`

Aliases: `table-column-count`

This rule is triggered when a [GitHub Flavored Markdown table][gfm-table-056]
does not have the same number of cells in every row.

This table's second data row has too few cells and its third data row has too
many cells:

```markdown
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
| Cell   |
| Cell   | Cell   | Cell   |
```

To fix these issues, ensure every row has the same number of cells:

```markdown
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
| Cell   | Cell   |
| Cell   | Cell   |
```

Note that a table's header row and its delimiter row must have the same number
of cells or it will not be recognized as a table (per specification).

Rationale: Extra cells in a row are usually not shown, so their data is lost.
Missing cells in a row create holes in the table and suggest an omission.

[gfm-table-056]: https://github.github.com/gfm/#tables-extension-

<a name="md058"></a>

## `MD058` - Tables should be surrounded by blank lines

Tags: `table`

Aliases: `blanks-around-tables`

Fixable: Some violations can be fixed by tooling

This rule is triggered when tables are either not preceded or not followed by a
blank line:

```markdown
Some text
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
> Blockquote
```

To fix violations of this rule, ensure that all tables have a blank line both
before and after (except when the table is at the very beginning or end of the
document):

```markdown
Some text

| Header | Header |
| ------ | ------ |
| Cell   | Cell   |

> Blockquote
```

Note that text immediately following a table (i.e., not separated by an empty
line) is treated as part of the table (per the specification) and will not
trigger this rule:

```markdown
| Header | Header |
| ------ | ------ |
| Cell   | Cell   |
This text is part of the table and the next line is blank

Some text
```

Rationale: In addition to aesthetic reasons, some parsers will incorrectly parse
tables that don't have blank lines before and after them.

<!-- markdownlint-configure-file {
  "no-inline-html": {
    "allowed_elements": [
      "a"
    ]
  }
} -->
````

### dev/delivery.md

````markdown
# Delivering Markdown Moose to VSCode Marketplace

This document outlines the process for publishing Markdown Moose to the Visual Studio Code Marketplace.

## Prerequisites

1. Node.js and npm installed
2. A free Azure DevOps account
3. Your extension code ready for release
4. A GitHub repository (already set up at <https://github.com/shaneholloman/markdown-moose>)

## One-time Setup

1. Install vsce (VS Code Extension Manager):

    ```sh
    npm install -g @vscode/vsce
    ```

2. Get Personal Access Token (PAT):

    - Visit <https://dev.azure.com>
    - Sign in (create account if needed, can use GitHub account)
    - Click profile icon → ... → User Settings → Personal access tokens
    - Create new token:
      - Name: VSCode Marketplace
      - Organization: All accessible organizations
      - Expiration: 1 year
      - Scopes: Select "Custom defined"
        1. Click "Show all scopes" at bottom
        2. Expand "Marketplace"
        3. Check ALL of these boxes:
           - Acquire
           - Manage
           - Publish
        4. Expand "User Profile"
           - Check "Read" permission
    - Copy and save token securely (you can't view it again later)

    ![Onetime Setup](img/devlivery-0.png)

    ![Onetime Setup 02](img/devlivery-1.png)

    ![Onetime Setup 03](img/devlivery-2.png)

3. Login with publisher name:

    ```sh
    vsce login shaneholloman
    # Enter PAT when prompted
    ```

## Publishing Process

1. Update version in package.json:

    ```json
    {
      "version": "x.x.x"
    }
    ```

2. Package extension:

    ```sh
    vsce package
    ```

    This creates: markdown-moose-x.x.x.vsix

3. Test packaged extension:

    - Open VSCode
    - Ctrl+Shift+P → "Install from VSIX"
    - Select the .vsix file
    - Verify all features work

4. Publish to marketplace:

    ```sh
    vsce publish
    ```

## Post-Publishing

Your extension will be available at:
<https://marketplace.visualstudio.com/items?itemName=shaneholloman.markdown-moose>

Users can install it:

1. Directly in VSCode: Extensions tab → Search "Markdown Moose"
2. Web: Visit marketplace link → Click Install

## Publishing Updates

1. Update version in package.json
2. Test thoroughly
3. Run `vsce publish`

## Maintenance

- Keep PAT secure
- Renew PAT before expiration
- Monitor GitHub issues
- Update extension when needed
- Respond to marketplace reviews

## Notes

- Publishing is free
- Marketplace hosting is free
- Users get automatic updates
- Installation stats available
- Standard distribution method used by most VSCode extensions

## Troubleshooting

If `vsce publish` fails:

1. Verify PAT is valid
2. Check package.json is valid
3. Ensure all required fields exist:
    - name
    - displayName
    - description
    - version
    - publisher
    - repository
    - icon
````

### dev/notes.md

````markdown
# Notes

![markdown-moose-logo](../assets/markdown-moose-logo.svg)

There's two versions of this plugin. The simple one is called: Markdown Image Downloader. The more complicated one is called Markdown Suite. Markdown Suite is the one that I'm working on. Moving forward. I need to write a complete README for how to set up the development environment for this plugin. Well, actually for both of them. This needs to include dependency installs. When to compile? How to debug? And let's try and include the skeleton setup PowerShell script.

## Markdown Suite

This version of the plugin uses a modular architecture in that we can make a plugin and then add that to the plugin directory within the extension. This way we can constantly add more functionality to the suite. This method would also allow other users to add to the markdown suite in a very easy way. This is the main reason why I'm moving forward with this version of the plugin.

## Markdown Image Downloader

This this version of the plugin. It was really just a proof of concept. It works, but it is being deprecated for Markdown Suite.

## TODO
````

### dev/development.md

````markdown
# Markdown Moose Development Guide

## Prerequisites

### Node.js Setup

This project uses Node.js for development. We recommend using Volta for Node.js version management:

1. Install Volta (if not already installed):

   ```bash
   curl https://get.volta.sh | bash
   ```

2. Add Volta to your PATH:
   - For bash/zsh, add to your ~/.bashrc or ~/.zshrc:

     ```bash
     export VOLTA_HOME="$HOME/.volta"
     export PATH="$VOLTA_HOME/bin:$PATH"
     ```

   - Then either restart your terminal or run:

     ```bash
     source ~/.bashrc  # or ~/.zshrc
     ```

3. Install Node.js LTS:

   ```bash
   volta install node@lts
   ```

This will ensure you have the latest LTS version of Node.js installed and properly configured.

### TypeScript Configuration

The project requires specific TypeScript configuration for VSCode extension development:

- The tsconfig.json must include 'dom' in the lib array for browser APIs
- Node.js types are required for CommonJS module support
- VSCode extension types are needed for the VSCode API

These dependencies are included in package.json and the configuration is set in tsconfig.json.

## Understanding the Architecture

### Extension vs Plugins

**Markdown Moose** is the main VSCode Extension - it provides the core framework and plugin loading system. Think of it as the "host application" that manages and runs plugins.

**Plugins** are modular features that add functionality to the Markdown Moose extension. For example, the Image Downloader is a plugin that adds image downloading capabilities. Plugins are:

- Self-contained modules
- Each responsible for a specific feature set
- Currently require manual registration (see Plugin Loading System below)

### Plugin Loading System

**Current Implementation**:
The plugin system currently requires manual registration in `src/plugins/index.ts`. While plugins are modular and self-contained, they are not yet truly "drop-in". Adding a new plugin requires:

1. Creating the plugin files in `src/plugins/your-plugin-name/`
2. Registering the plugin in `src/plugins/index.ts`:

   ```typescript
   try {
       log('Loading my plugin...');
       const myPlugin = require('./my-plugin-name').default;
       if (isValidPlugin(myPlugin)) {
           plugins.push(myPlugin);
       }
   } catch (error) {
       // Error handling
   }
   ```

3. Adding command and setting contributions to `package.json`:

   ```json
   {
     "contributes": {
       "commands": [
         {
           "command": "markdown-moose.myCommand",
           "title": "Moose: My Command"
         }
       ],
       "configuration": {
         "properties": {
           "moose.myPlugin.setting": {
             "type": "string",
             "default": "value",
             "description": "Description"
           }
         }
       }
     }
   }
   ```

**Future Goals**:
The architecture is designed with the goal of evolving into a true drop-in system where:

- Plugins can be added by simply placing them in the plugins directory
- No manual registration would be required
- Dynamic discovery and loading of plugins
- Hot-reloading of plugins during development

This vision requires significant architectural work, including:

- Dynamic plugin discovery system
- Plugin manifest format
- Dependency management
- Security sandboxing
- Version compatibility checking

We welcome contributions towards achieving this vision! Areas where help is needed:

- Plugin discovery system design
- Manifest format specification
- Hot-reload implementation
- Plugin isolation strategies
- Testing framework for plugins

Until we achieve this, follow the current process for adding new plugins as documented in this guide.

The relationship is hierarchical:

```txt
Markdown Moose (Extension)
└── Plugins
    ├── Image Downloader (Built-in plugin)
    ├── Your Plugin
    └── Other Plugins...
```

## Plugin Settings System

### Settings Hierarchy

Markdown Moose implements a three-tier settings system with clear precedence:

1. `.moose` Config File (Highest Priority)
   - JSON file in workspace root
   - Settings grouped by plugin name
   - Overrides all other settings
   - Example:

     ```json
     {
       "imageDownloader": {
         "path": "./images",
         "overwriteExisting": true
       }
     }
     ```

2. VSCode Workspace/User Settings (Medium Priority)
   - Standard VSCode settings
   - Settings prefixed with "moose.[pluginName]"
   - Example:

     ```json
     {
       "moose.imageDownloader.path": "./images",
       "moose.imageDownloader.overwriteExisting": true
     }
     ```

3. Default Values (Lowest Priority)
   - Defined in plugin's settings definitions
   - Used when no other settings found

### Implementing Plugin Settings

1. Define Settings in Plugin:

   ```typescript
   export class MyPlugin implements Plugin {
       public name = 'myPlugin';  // Used as settings namespace
       public settings: PluginSettings = {
           mySetting: {
               type: 'string',
               default: 'default value',
               description: 'My setting description',
               // Optional validations:
               pattern: '^[a-z]+$',    // Regex pattern for strings
               minimum: 0,             // For numbers
               maximum: 100,           // For numbers
               enum: ['a', 'b', 'c']   // For dropdowns
           }
       };
   }
   ```

2. Access Settings in Code:

   ```typescript
   import { getSetting } from '../../utils/settings-loader';

   const value = await getSetting<string>(
       'myPlugin',      // Plugin name
       'mySetting',     // Setting key
       document,        // VSCode document (for workspace settings)
       'default value'  // Default value
   );
   ```

### Best Practices for Plugin Settings

1. Naming:
   - Use camelCase for setting keys
   - Make names descriptive and specific
   - Match VSCode conventions

2. Documentation:
   - Provide clear descriptions
   - Document default values
   - Explain setting interactions

3. Validation:
   - Use appropriate types
   - Set reasonable min/max values
   - Provide patterns for strings
   - Handle invalid values gracefully

4. Error Handling:
   - Validate settings before use
   - Provide clear error messages
   - Fall back gracefully to defaults

## Development Workflow

### 1. Setup Development Environment

```sh
# Clone the repository
git clone https://github.com/shaneholloman/markdown-moose
cd markdown-moose

# Install dependencies
npm install
```

### 2. Making Changes

#### Extension Core Changes

If you're modifying the core extension (src/extension.ts or src/utils/*):

1. Make your changes
2. Run `npm run compile` to build
3. Test using the methods below

#### Plugin Changes

If you're modifying an existing plugin or creating a new one:

1. Make changes in `src/plugins/your-plugin-name/`
2. Run `npm run compile` to build
3. Test using the methods below

### 3. Testing Your Changes

#### Method 1: Debug Mode (Recommended)

1. Open the project in VSCode
2. Press F5 (or Run > Start Debugging)
   - This launches a new VSCode window with the extension loaded
   - You can set breakpoints and debug your code

#### Method 2: Manual Installation

1. Run `npm run compile`
2. Copy the entire project to:
   - Windows: `%USERPROFILE%\.vscode\extensions\markdown-moose`
   - macOS/Linux: `~/.vscode/extensions/markdown-moose`
3. Restart VSCode

### 4. Testing Checklist

For Extension Core:

- [ ] Extension activates properly
- [ ] Plugin loading system works
- [ ] Configuration system works
- [ ] Error handling works as expected

For Plugins:

- [ ] Plugin loads correctly
- [ ] Commands appear in Command Palette
- [ ] Features work as expected
- [ ] Error cases are handled properly
- [ ] User feedback (notifications, etc.) works

For Image Downloader Plugin Specifically:

1. Test Configuration:
   - [ ] VSCode settings work
   - [ ] Workspace settings override VSCode settings
   - [ ] .moose config overrides both
   - [ ] Invalid paths are handled correctly

2. Test Image Downloads:
   - [ ] Images download to configured directory
   - [ ] Directory is created if missing
   - [ ] Fallback paths work when needed
   - [ ] Progress indicator shows
   - [ ] Markdown links update correctly

## Debugging Tips

### VSCode Debug Console

When running in debug mode (F5):

- Check Debug Console for console.log output
- Set breakpoints in your code
- Inspect variables and state

### Extension Development Host

The new VSCode window that opens is called the "Extension Development Host":

- It runs your development version of the extension
- Changes require a reload (Ctrl+R or Cmd+R)
- Check "Output" panel, select "Markdown Moose" for logs

### Common Issues

1. Changes not appearing:
   - Ensure you ran `npm run compile`
   - Reload the Extension Development Host window

2. Plugin not loading:
   - Check console for loading errors
   - Verify plugin structure matches interface
   - Ensure default export is configured

3. Commands not appearing:
   - Check command registration in plugin
   - Verify command IDs are unique
   - Check activation events if used

## Best Practices

1. Code Organization:
   - Keep plugins modular and focused
   - Use clear, descriptive names
   - Follow existing patterns

2. Error Handling:
   - Always provide user feedback
   - Use VSCode notifications appropriately
   - Log errors for debugging

3. Testing:
   - Test all configuration options
   - Test error cases
   - Test user feedback

4. Documentation:
   - Update README.md for user-facing changes
   - Update DEVELOPMENT.md for developer changes
   - Use JSDoc comments in code

## Building and Packaging

### Building and Testing

1. Install dependencies and build tools:

   ```sh
   npm install
   npm install -g @vscode/vsce
   ```

2. Build, package, and install for testing (all-in-one command):

   ```sh
   npm run compile && vsce package && del releases\markdown-moose-0.2.1.vsix && move markdown-moose-0.2.1.vsix releases\ && code --install-extension ./releases/markdown-moose-0.2.1.vsix
   ```

   Just the build and package:

   ```sh
    npm run compile && vsce package
    ```

   This command:
   - Compiles TypeScript using webpack
   - Creates the .vsix package
   - Moves it to the releases directory
   - Installs it in VSCode for testing

3. Verify the installation:
   - Check extension appears in VSCode
   - Test commands in Command Palette
   - Verify functionality works as expected
   - Check Output panel (View -> Output -> Markdown Moose) for logs

### Package Contents

The extension uses webpack to bundle all code and dependencies:

- All TypeScript/JavaScript is bundled into a single `dist/extension.js` file
- Dependencies like node-fetch are included in the bundle
- Source maps are generated for debugging
- External VSCode APIs are properly excluded

The .vscodeignore file controls what gets included in the package. Current configuration excludes:

- Source files (bundled into dist/extension.js)
- Test files and configs
- Development files
- Node modules (bundled as needed)
- Documentation files

The webpack configuration ensures:

- Clean output directory before each build
- Proper CommonJS module format
- Development vs production builds
- Dependency bundling

To modify bundling behavior, edit webpack.config.js.
To modify package contents, edit .vscodeignore.

### Installing the Packaged Extension

```powershell
npm run compile; vsce package; Remove-Item -ErrorAction SilentlyContinue .\releases\markdown-moose-0.2.1.vsix; Move-Item -Force markdown-moose-0.2.1.vsix .\releases\; code --install-extension .\releases\markdown-moose-0.2.1.vsix
```

To test the packaged .vsix file:

1. Using VSCode UI:
   - Open VSCode
   - Go to Extensions view (Ctrl+Shift+X)
   - Click "..." (More Actions) at the top
   - Select "Install from VSIX..."
   - Navigate to `releases/markdown-moose-0.2.1.vsix`
   - Click "Install"
   - Reload VSCode when prompted

2. Using Command Line:

   ```sh
   code --install-extension releases/markdown-moose-0.2.1.vsix
   ```

   Then reload VSCode.

## Getting Help

- Check existing issues on GitHub
- Create a new issue with:
  - Clear description
  - Steps to reproduce
  - Expected vs actual behavior
  - VSCode and extension version
````

### dev/img/devlivery-1.png

```txt
[Large or binary file detected. File Type: image/png, Size: 34279 bytes]
```

### dev/img/devlivery-0.png

```txt
[Large or binary file detected. File Type: image/png, Size: 799022 bytes]
```

### dev/img/devlivery-2.png

```txt
[Large or binary file detected. File Type: image/png, Size: 63409 bytes]
```

### .vscode/launch.json

```json
[Large or binary file detected. File Type: application/json, Size: 281 bytes]
```

### assets/markdown-moose-logo-solid.svg

```txt
[Large or binary file detected. File Type: image/svg+xml, Size: 1955 bytes]
```

### assets/markdown-moose-logo.svg

```txt
[Large or binary file detected. File Type: image/svg+xml, Size: 2788 bytes]
```

### assets/markdown-moose-logo-outline.svg

```txt
[Large or binary file detected. File Type: image/svg+xml, Size: 2639 bytes]
```

### src/extension.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 4145 bytes]
```

### src/types/settings.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 971 bytes]
```

### src/types/index.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 629 bytes]
```

### src/plugins/index.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 2405 bytes]
```

### src/plugins/imageAlt/types.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 458 bytes]
```

### src/plugins/imageAlt/index.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 8248 bytes]
```

### src/plugins/imageDownloader/types.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 108 bytes]
```

### src/plugins/imageDownloader/index.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 11619 bytes]
```

### src/utils/image-utils.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 2754 bytes]
```

### src/utils/settings-loader.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 1693 bytes]
```

### src/utils/settings-registry.ts

```typescript
[Large or binary file detected. File Type: video/mp2t, Size: 2943 bytes]
```

> This concludes the repository's file contents. Please review thoroughly for a comprehensive understanding of the codebase.
