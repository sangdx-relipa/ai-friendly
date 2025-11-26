# AI-Friendly Development Resources

This folder contains all the resources you need to build AI-friendly source code with consistent quality across your projects.

## 📁 Folder Structure

```
.ai/
├── inputs/             # Input templates to capture requirements (START HERE!)
├── prompts/            # Prompt templates for common tasks
├── rules/              # Coding rules for each tech stack
├── checklists/         # Verification checklists
├── INDEX.md           # Quick reference guide
└── README.md          # This file
```

## 🎯 Quick Start

### 1. Choose Your Tech Stack

Pick the appropriate rule set for your project:
- **NestJS + TypeScript**: Backend API development
- **React + TypeScript**: Frontend development
- **Laravel + PHP**: Backend API development
- **Python**: General Python development (scripts, CLI tools, libraries)
- **Python + FastAPI**: Backend API development with FastAPI

### 2. Capture Requirements & Use Prompt Templates

When working with AI assistants:

1. **Capture requirements first** (`.ai/inputs/` folder)
   - **NEW FEATURE** → Use `inputs/00-input-feature.md`
   - **BUG FIX** → Use `inputs/01-input-fixbug.md`
   - **UPDATE CODE** → Use `inputs/02-input-update.md`
   - This ensures you have all necessary information before starting
   - Helps you choose the right prompt template

2. **Start with the preamble** (`prompts/00-standard-preamble.md`)

3. **Choose a prompt template** based on your task:
   - `01-new-feature-basic.md` - Simple features
   - `02-new-feature-detailed.md` - Complex features
   - `03-modify-feature.md` - Update existing code
   - `04-fix-bug.md` - Bug fixes
   - `05-refactor-code.md` - Code improvements
   - `06-add-tests.md` - Testing

4. **Fill in the template** with information from your input file
5. **Send to AI** assistant

### 3. Verify with Checklist

After AI generates code, verify using the appropriate checklist:
- `checklists/nestjs-typescript-checklist.md`
- `checklists/react-typescript-checklist.md`
- `checklists/laravel-php-checklist.md`
- `checklists/python-checklist.md`
- `checklists/python-fastapi-checklist.md`

## 📥 Input Templates (START HERE!)

Before writing any code, capture your requirements using the appropriate input template. These templates ensure you have all necessary information organized before implementation.

### Available Input Templates

| Template | Use For | File |
|----------|---------|------|
| **Feature Input** | New features | `inputs/00-input-feature.md` |
| **Bug Fix Input** | Fixing bugs | `inputs/01-input-fixbug.md` |
| **Update Input** | Modifying/updating code | `inputs/02-input-update.md` |

### Why Use Input Templates?

1. **Complete Requirements** - Ensures nothing is forgotten
2. **Better Planning** - Forces you to think through all aspects
3. **Faster Implementation** - AI has all info needed upfront
4. **Consistent Quality** - Every task follows same thorough process
5. **Reusable** - Save filled templates for future reference

### How to Use

1. Copy the appropriate input template
2. Fill in all sections (skip irrelevant ones)
3. Use this as source material for your prompt template
4. Keep the filled template in `task_executions/` folder for tracking

---

## 📋 Rules

### NestJS + TypeScript
**File**: `rules/nestjs-typescript-rules.md`

Comprehensive coding standards for NestJS backend development including:
- Code style and structure
- TypeScript usage
- NestJS patterns
- API design
- Security
- Testing

### React + TypeScript
**File**: `rules/react-typescript-rules.md`

Comprehensive coding standards for React frontend development including:
- Component structure
- React hooks best practices
- State management
- Performance optimization
- Accessibility
- Testing

### Laravel + PHP
**File**: `rules/laravel-php-rules.md`

Comprehensive coding standards for Laravel backend development including:
- PSR-12 standards
- Laravel patterns
- Eloquent ORM
- Security
- Testing

### Python
**File**: `rules/python-rules.md`

Comprehensive coding standards for Python development including:
- PEP 8 compliance
- Type hints
- Clean code principles
- OOP best practices
- Error handling
- Testing

### Python + FastAPI
**File**: `rules/python-fastapi-rules.md`

Comprehensive coding standards for Python FastAPI backend development including:
- Python type hints
- FastAPI patterns
- Async/await best practices
- Pydantic schemas
- Security
- Testing

## ✅ Checklists

Each checklist contains verification items grouped by:
- Setup & Configuration
- Code Structure
- TypeScript/PHP/Python type hints
- Framework-specific patterns
- Security
- Performance
- Testing
- Documentation

Use these to verify AI-generated code meets all standards.

## 📝 Prompt Templates

### Template Usage Pattern

```
1. Fill input template from .ai/inputs/ folder:
   - Feature: inputs/00-input-feature.md
   - Bug: inputs/01-input-fixbug.md
   - Update: inputs/02-input-update.md
2. Copy standard preamble (prompts/00-standard-preamble.md)
3. Choose appropriate prompt template (prompts/01-06)
4. Fill prompt template with info from your input file
5. Add to your AI assistant
6. Review generated code
7. Verify with checklist
```

### Available Templates

| Template | Use Case | File |
|----------|----------|------|
| **Input Requirements** | Capture requirements FIRST | `00-input-requirements.md` |
| **Preamble** | Start of every prompt | `00-standard-preamble.md` |
| **New Feature - Basic** | Simple features | `01-new-feature-basic.md` |
| **New Feature - Detailed** | Complex features | `02-new-feature-detailed.md` |
| **Modify Feature** | Update existing code | `03-modify-feature.md` |
| **Fix Bug** | Bug fixes | `04-fix-bug.md` |
| **Refactor** | Code improvements | `05-refactor-code.md` |
| **Add Tests** | Write tests | `06-add-tests.md` |

## 🚀 Integration with AI Tools

### Cursor / Claude Code

Create a `.cursorrules` file in your project root:

```bash
# Copy the appropriate rule set
cp .ai/rules/nestjs-typescript-rules.md .cursorrules
```

### ChatGPT / Claude

1. Start conversation with the preamble
2. Reference rule files in your prompts
3. Ask AI to verify against checklist

### GitHub Copilot

Add rules to project README or docs folder for context.

## 💡 Best Practices

### When Writing Prompts

1. **Always include the preamble** - Ensures AI follows your standards
2. **Be specific** - Fill all template placeholders with details
3. **Reference rules explicitly** - Point AI to the exact rule file
4. **Demand checklist verification** - Make AI verify its own work
5. **Provide context** - Explain why, not just what

### When Reviewing AI Output

1. **Check types** - No `any` types in TypeScript
2. **Check documentation** - JSDoc/PHPDoc present
3. **Check tests** - Coverage >80%
4. **Check security** - Input validation, password hashing
5. **Run checklist** - Go through all items

### When Building Teams

1. **Share this folder** - Everyone uses same standards
2. **Create custom templates** - Add project-specific prompts
3. **Update rules** - Keep rules current with project needs
4. **Review together** - Use checklists in code reviews

## 📚 Examples

### Example 1: Adding Authentication (NestJS)

```
[Preamble from 00-standard-preamble.md]

I need to add a new feature: JWT Authentication

Tech Stack: NestJS + TypeScript

Requirements:
- Login endpoint (POST /auth/login)
- Register endpoint (POST /auth/register)
- JWT tokens with 15min expiry
- Refresh tokens with 7 day expiry
- Protected routes using Guards

Follow: .ai/rules/nestjs-typescript-rules.md
Verify: .ai/checklists/nestjs-typescript-checklist.md
```

### Example 2: Fixing Performance Issue (React)

```
[Preamble from 00-standard-preamble.md]

Bug: Product list re-renders on every keystroke in search box

Tech Stack: React + TypeScript
Location: src/components/ProductList.tsx

Expected: Debounced search, minimal re-renders
Actual: Re-renders entire list on every keystroke

Follow: .ai/rules/react-typescript-rules.md
Fix: Implement debouncing and proper memoization
Verify: .ai/checklists/react-typescript-checklist.md
```

## 🔄 Updating These Resources

As your project evolves:

1. **Add custom rules** - Extend base rules with project-specific requirements
2. **Add custom checklists** - Include project-specific verification items
3. **Add custom templates** - Create templates for recurring tasks
4. **Version control** - Keep `.ai/` folder in git
5. **Document changes** - Update this README when adding new resources

## 📖 Related Documentation

- Main discussion: `../ai-friendly-code-discussion.md`
- Project README: `../README.md` (if exists)
- Framework docs:
  - [NestJS](https://nestjs.com)
  - [React](https://react.dev)
  - [Laravel](https://laravel.com)
  - [FastAPI](https://fastapi.tiangolo.com)

## 🤝 Contributing

If you create useful templates or improve rules:

1. Test them on real projects
2. Document with examples
3. Share with team
4. Consider adding to this collection

---

**Last Updated**: 2025-11-17

**Maintained By**: Development Team

**Questions?** Check the main discussion document or ask your AI assistant!
