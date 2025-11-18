# Standard Preamble for All Prompts

Add this to the beginning of EVERY prompt you send to AI to ensure it follows our coding standards.

## Full Version (Recommended)

```
CODING RULES TO FOLLOW:

Based on my tech stack [NestJS/React/Laravel/Python/Python-FastAPI], follow these mandatory rules:

Rule Set Reference:
- For NestJS: Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)
- For React: Follow "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)
- For Laravel: Follow "Laravel + PHP AI Coding Rules" (.ai/rules/laravel-php-rules.md)
- For Python (base): Follow "Python AI Coding Rules" (.ai/rules/python-rules.md)
- For Python + FastAPI: Follow "Python + FastAPI AI Coding Rules" (.ai/rules/python-fastapi-rules.md)

Core Requirements (Apply to ALL code):
1. Types: Use explicit types everywhere (TypeScript/PHP type hints/Python type hints)
2. Documentation: JSDoc/TSDoc/PHPDoc/Docstrings for all public methods
3. Naming: Descriptive, self-documenting variable and function names
4. Functions: Small, focused functions (Single Responsibility Principle)
5. Error Handling: Custom exception classes with meaningful messages
6. Validation: Validate all inputs at system boundaries
7. Security: Never trust user input, hash passwords, use parameterized queries
8. Testing: Write tests with >80% coverage
9. Performance: Avoid N+1 queries, use caching appropriately
10. Architecture: Follow framework-specific patterns

Verification Checklist:
After implementation, verify using the appropriate checklist:
- NestJS: .ai/checklists/nestjs-typescript-checklist.md
- React: .ai/checklists/react-typescript-checklist.md
- Laravel: .ai/checklists/laravel-php-checklist.md
- Python (base): .ai/checklists/python-checklist.md
- Python + FastAPI: .ai/checklists/python-fastapi-checklist.md

[Your specific prompt goes here...]
```

## Simplified Version (For Quick Tasks)

```
Follow our [NestJS/React/Laravel/Python/Python-FastAPI] coding rules (.ai/rules/[tech-stack]-rules.md):
✓ Explicit types (no 'any')
✓ JSDoc/PHPDoc/Docstrings comments
✓ Descriptive names
✓ Small functions
✓ Custom error classes
✓ Input validation
✓ Security best practices
✓ Tests included
✓ Verify with checklist (.ai/checklists/[tech-stack]-checklist.md)

[Your specific prompt goes here...]
```

## How to Use

1. **Copy the preamble** (full or simplified version)
2. **Replace [NestJS/React/Laravel/Python/Python-FastAPI]** with your actual tech stack
3. **Add your specific request** after the preamble
4. **Send to AI**

## Example

```
CODING RULES TO FOLLOW:

Based on my tech stack NestJS, follow these mandatory rules:

Rule Set Reference:
- Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)

Core Requirements (Apply to ALL code):
[... rest of preamble ...]

Verification Checklist:
- Verify using .ai/checklists/nestjs-typescript-checklist.md

I need to add a user authentication feature with email and password...
```
