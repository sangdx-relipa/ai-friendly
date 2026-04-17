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
│   │   ├── python-fastapi-rules.md
│   │   ├── java-rules.md
│   │   └── java-spring-boot-rules.md
│   ├── checklists/         # Code verification checklists
│   │   ├── nestjs-typescript-checklist.md
│   │   ├── react-typescript-checklist.md
│   │   ├── laravel-php-checklist.md
│   │   ├── python-checklist.md
│   │   ├── python-fastapi-checklist.md
│   │   ├── java-checklist.md
│   │   └── java-spring-boot-checklist.md
│   ├── prompts/            # AI prompt templates
│   │   ├── 00-input-requirements.md
│   │   ├── 00-standard-preamble.md
│   │   ├── 01-new-feature-basic.md
│   │   ├── 02-new-feature-detailed.md
│   │   ├── 03-modify-feature.md
│   │   ├── 04-fix-bug.md
│   │   ├── 05-refactor-code.md
│   │   └── 06-add-tests.md
│   ├── inputs/             # Quick input templates
│   │   ├── 00-input-feature.md
│   │   ├── 01-input-fixbug.md
│   │   └── 02-input-update.md
│   ├── base_generation.md # Base generation guidelines
│   ├── prompt.md          # Master prompt reference
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
- **Java** - General Java projects
- **Java + Spring Boot** - Backend API development with Spring Boot

## 💡 How It Works

### 1. Initialize Your Project

```bash
cd your-project
ai-friendly-pack init
```

### 2. Choose Your Tech Stack

Open `.ai/INDEX.md` or `.ai/README.md` to find resources for your tech stack.

### 3. Work with AI Assistants

There are two ways to work with AI assistants:

#### Option A: Quick Prompts (Recommended)

Use the two-step workflow from `.ai/prompt.md` for a streamlined experience:

**Step 1 — Prepare Input (P1):**

Copy the P1 prompt from `.ai/prompt.md` and paste your requirement. The AI will:
1. Detect the task type (Feature / Bug Fix / Update)
2. Detect your tech stack from context
3. Fill the matching `.ai/inputs/` template with your requirement
4. Save a structured input file to `task_executions/[name]-input.md`
5. Highlight any TBD sections for you to review

**Step 2 — Execute (P2):**

After reviewing the input file, copy the P2 prompt from `.ai/prompt.md`. The AI will:
1. Load the correct rules and checklist for your stack
2. Create an execution note with full context (meta, prompt, rules, checklist, user flow, Mermaid diagram, tasks)
3. Implement all tasks and update status after each
4. Verify against the checklist
5. Write a summary of completed and blocked tasks

#### Option B: Manual Prompts

Use the prompt templates directly when asking AI to write code:

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

### 📥 Input Templates

Structured input forms for capturing requirements:
- **Feature Input** (`00-input-feature.md`) — Capture all details for a new feature
- **Bug Fix Input** (`01-input-fixbug.md`) — Document bug information before fixing
- **Update Input** (`02-input-update.md`) — Define scope for code modifications

### ⚡ Quick Prompts (`prompt.md`)

Two copy-paste prompts for daily use:
- **P1: Prepare Input** — AI detects task type & tech stack, fills the matching input template, saves to `task_executions/`
- **P2: Execute** — AI loads rules & checklist, creates execution note, implements tasks, verifies against checklist

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

### Example 1: Adding Authentication (Quick Prompt Workflow)

```
# Step 1 — Copy P1 from .ai/prompt.md and paste:

Read `.ai/inputs/` templates and `.ai/README.md`.

My requirement:
I need JWT authentication with login/register endpoints,
password hashing with bcrypt, and role-based access control.
Tech Stack: NestJS + TypeScript.

Do:
1. Detect type → Feature (00) | Bug (01) | Update (02)
2. Detect tech stack from context
3. Tell me: type, stack, template — wait for my OK
4. Read the matching `.ai/inputs/` template, fill it with my requirement
5. Save to `task_executions/auth-feature-input.md`
6. Show TBD sections I need to fill
```

```
# Step 2 — Review the input file, then copy P2 from .ai/prompt.md:

Read these files:
- `.ai/base_generation.md` (execution rules)
- `task_executions/auth-feature-input.md` (my reviewed input)

Do:
1. Detect stack → load `.ai/rules/nestjs-typescript-rules.md`
   + `.ai/checklists/nestjs-typescript-checklist.md`
2. Create execution note in `task_executions/`
3. Implement all tasks, update status after each
4. Verify against checklist
5. Write summary: done tasks, blocked tasks + reasons
```

### Example 2: Fixing a Bug (Quick Prompt Workflow)

```
# Copy P1 from .ai/prompt.md and paste your bug details:

Read `.ai/inputs/` templates and `.ai/README.md`.

My requirement:
Users get 500 error when uploading files larger than 2MB.
Error: "PayloadTooLargeError" in the server logs.
Stack: Python + FastAPI.

Do:
1. Detect type → Feature (00) | Bug (01) | Update (02)
2. Detect tech stack from context
3. Tell me: type, stack, template — wait for my OK
4. Read the matching `.ai/inputs/` template, fill it with my requirement
5. Save to `task_executions/fix-upload-size-input.md`
6. Show TBD sections I need to fill
```

### Example 3: Manual Approach

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
