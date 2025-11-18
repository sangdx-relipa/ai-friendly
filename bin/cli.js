#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function copyFolderRecursiveSync(source, target) {
  // Check if folder needs to be created or integrated
  const targetFolder = path.join(target, path.basename(source));

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    files.forEach((file) => {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        const targetFile = path.join(targetFolder, file);
        fs.copyFileSync(curSource, targetFile);
        console.log(`Copied: ${file}`);
      }
    });
  }
}

function init() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === 'init' || !command) {
    console.log('Initializing AI-friendly project structure...');

    // Get the package installation directory
    const packageDir = path.join(__dirname, '..');
    const templateDir = path.join(packageDir, 'template');

    // Get the current working directory (where user runs the command)
    const targetDir = process.cwd();

    if (!fs.existsSync(templateDir)) {
      console.error('Error: Template folder not found in package.');
      process.exit(1);
    }

    console.log(`Copying template from: ${templateDir}`);
    console.log(`To: ${targetDir}`);

    // Copy each item in template directory to current directory
    const items = fs.readdirSync(templateDir);
    items.forEach((item) => {
      const sourcePath = path.join(templateDir, item);
      const targetPath = path.join(targetDir, item);

      if (fs.lstatSync(sourcePath).isDirectory()) {
        // For directories, copy recursively
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath, { recursive: true });
        }

        const copyDir = (src, dest) => {
          const entries = fs.readdirSync(src);
          entries.forEach((entry) => {
            const srcPath = path.join(src, entry);
            const destPath = path.join(dest, entry);

            if (fs.lstatSync(srcPath).isDirectory()) {
              if (!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath, { recursive: true });
              }
              copyDir(srcPath, destPath);
            } else {
              fs.copyFileSync(srcPath, destPath);
            }
          });
        };

        copyDir(sourcePath, targetPath);
      } else {
        // For files, copy directly
        fs.copyFileSync(sourcePath, targetPath);
      }
    });

    console.log('\nAI-friendly project structure initialized successfully!');
  } else if (command === '--help' || command === '-h') {
    console.log(`
Usage: ai-friendly-pack [command]

Commands:
  init        Initialize AI-friendly project structure (default)
  --help, -h  Show this help message

Examples:
  ai-friendly-pack init
  ai-friendly-pack
    `);
  } else {
    console.error(`Unknown command: ${command}`);
    console.log('Run "ai-friendly-pack --help" for usage information.');
    process.exit(1);
  }
}

init();
