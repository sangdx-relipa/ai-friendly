# 🤖 AI Friendly Pack

A comprehensive CLI tool to initialize AI-friendly project structures with coding standards, verification checklists, and prompt templates for multiple tech stacks.

## 🚀 Quick Start

### Installation

```bash
npm install -g ai-friendly-pack
```

### Usage

Navigate to your project directory and run:

```bash
ai-friendly-pack init
```

That's it! Your project now has a complete `.ai/` folder with all the resources you need.

## 📦 What You Get

After running `ai-friendly-pack init`, your project will have:

```
your-project/
├── .ai/
│   ├── rules/              # Coding standards for each tech stack
│   │   ├── nestjs-typescript-rules.md
│   │   ├── react-typescript-rules.md
│   │   ├── laravel-php-rules.md
│   │   ├── python-rules.md
│   │   └── python-fastapi-rules.md
│   ├── checklists/         # Code verification checklists
│   │   ├── nestjs-typescript-checklist.md
│   │   ├── react-typescript-checklist.md
│   │   ├── laravel-php-checklist.md
│   │   ├── python-checklist.md
│   │   └── python-fastapi-checklist.md
│   ├── prompts/            # AI prompt templates
│   │   ├── 00-standard-preamble.md
│   │   ├── 01-new-feature-basic.md
│   │   ├── 02-new-feature-detailed.md
│   │   ├── 03-modify-feature.md
│   │   ├── 04-fix-bug.md
│   │   ├── 05-refactor-code.md
│   │   └── 06-add-tests.md
│   ├── INDEX.md           # Quick reference guide
│   └── README.md          # Detailed documentation
└── README.md              # Your project README
```

## 🎯 Supported Tech Stacks

- **NestJS + TypeScript** - Backend API development
- **React + TypeScript** - Frontend development
- **Laravel + PHP** - Backend API development
- **Python** - General Python projects (scripts, CLI tools, libraries)
- **Python + FastAPI** - Backend API development with FastAPI

## 💡 How It Works

### 1. Initialize Your Project

```bash
cd your-project
ai-friendly-pack init
```

### 2. Choose Your Tech Stack

Open `.ai/INDEX.md` or `.ai/README.md` to find resources for your tech stack.

### 3. Work with AI Assistants

Use the prompt templates when asking AI to write code:

```
[Copy content from .ai/prompts/00-standard-preamble.md]

I need to add a new feature: User Authentication

Tech Stack: NestJS + TypeScript

Requirements:
- JWT authentication
- Login/Register endpoints
- Password hashing with bcrypt

Follow: .ai/rules/nestjs-typescript-rules.md
Verify: .ai/checklists/nestjs-typescript-checklist.md
```

### 4. Verify AI Output

Use the appropriate checklist to verify the generated code meets all standards.

## 🎓 What's Included

### 📋 Rules

Comprehensive coding standards covering:
- Code style and structure
- Type safety (TypeScript/PHP/Python type hints)
- Framework-specific best practices
- Security guidelines
- Testing requirements
- Documentation standards

### ✅ Checklists

Verification items for:
- Setup & Configuration
- Code Structure
- Type Safety
- Framework Patterns
- Security
- Performance
- Testing
- Documentation

### 📝 Prompt Templates

Ready-to-use templates for:
- Adding new features (basic & detailed)
- Modifying existing code
- Fixing bugs
- Refactoring code
- Adding tests

## 🔧 Integration

### Cursor / Claude Code

Create a `.cursorrules` file in your project root:

```bash
cp .ai/rules/nestjs-typescript-rules.md .cursorrules
```

### ChatGPT / Claude

Reference the rule files and prompt templates in your conversations.

### GitHub Copilot

Add rules to your project documentation for better context.

## 📚 Examples

### Example 1: Adding Authentication

```bash
# 1. Initialize
ai-friendly-pack init

# 2. Open prompt template
# .ai/prompts/02-new-feature-detailed.md

# 3. Fill in with your requirements
# 4. Send to AI with reference to:
#    - .ai/rules/nestjs-typescript-rules.md
#    - .ai/checklists/nestjs-typescript-checklist.md
```

### Example 2: Fixing a Bug

```bash
# 1. Open .ai/prompts/04-fix-bug.md
# 2. Fill in bug details
# 3. Reference appropriate rules file
# 4. Verify with checklist
```

## 🌟 Benefits

- **Consistent Code Quality** - Same standards across all AI-generated code
- **Faster Development** - Pre-written prompts save time
- **Better AI Output** - Clear guidelines produce better results
- **Easy Verification** - Checklists ensure nothing is missed
- **Team Alignment** - Everyone follows the same standards

## 🛠️ CLI Commands

```bash
# Initialize AI-friendly structure (default)
ai-friendly-pack init
ai-friendly-pack

# Show help
ai-friendly-pack --help
ai-friendly-pack -h
```

## 🔄 Updates

After initialization, you can:
- Customize rules for your project needs
- Add project-specific checklists
- Create custom prompt templates
- Keep everything in version control

## 🤝 Contributing

Issues and pull requests welcome at:
https://github.com/sangdx-relipa/ai-friendly

## 📄 License

ISC

## 👤 Author

**unawesome** <relipasangdx@gmail.com>

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/ai-friendly-pack)
- [GitHub Repository](https://github.com/sangdx-relipa/ai-friendly)
- [Report Issues](https://github.com/sangdx-relipa/ai-friendly/issues)

---

**Made for developers who want to maximize their productivity with AI assistants while maintaining high code quality standards.**
