# AI-Friendly Development Resources

This folder contains all the resources you need to build AI-friendly source code with consistent quality across your projects.

## 📁 Folder Structure

```
.ai/
├── rules/              # Coding rules for each tech stack
├── checklists/         # Verification checklists
├── prompts/            # Prompt templates for common tasks
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

### 2. Use Prompt Templates

When working with AI assistants:

1. **Start with the preamble** (`prompts/00-standard-preamble.md`)
2. **Choose a template** based on your task:
   - `01-new-feature-basic.md` - Simple features
   - `02-new-feature-detailed.md` - Complex features
   - `03-modify-feature.md` - Update existing code
   - `04-fix-bug.md` - Bug fixes
   - `05-refactor-code.md` - Code improvements
   - `06-add-tests.md` - Testing

3. **Fill in the template** with your specific requirements
4. **Send to AI** assistant

### 3. Verify with Checklist

After AI generates code, verify using the appropriate checklist:
- `checklists/nestjs-typescript-checklist.md`
- `checklists/react-typescript-checklist.md`
- `checklists/laravel-php-checklist.md`
- `checklists/python-checklist.md`
- `checklists/python-fastapi-checklist.md`

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
1. Copy standard preamble
2. Choose appropriate template
3. Fill in placeholders [LIKE_THIS]
4. Add to your AI assistant
5. Review generated code
6. Verify with checklist
```

### Available Templates

| Template | Use Case | File |
|----------|----------|------|
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
