# Template: Refactor Code

Use this template when refactoring existing code to improve quality, readability, or performance.

## Template

```
[Add Standard Preamble from 00-standard-preamble.md]

I need to refactor: [COMPONENT/MODULE/FILE]

Tech Stack: [NestJS/React/Laravel]
Location: [File path]

Current Issues:
1. [Issue 1 - e.g., Code duplication]
2. [Issue 2 - e.g., Too complex/long]
3. [Issue 3 - e.g., Hard to test]

Refactoring Goals:
- [Goal 1 - e.g., Improve readability]
- [Goal 2 - e.g., Reduce complexity]
- [Goal 3 - e.g., Better separation of concerns]

Constraints:
- Must maintain backward compatibility: [Yes/No]
- Must not change public API: [Yes/No]
- Performance must not degrade: [Yes/No]

Coding Standards:
Follow "[Tech Stack] AI Coding Rules" (.ai/rules/[tech-stack]-rules.md)

Please:
1. Analyze the current code
2. Identify refactoring opportunities
3. Propose a refactoring plan
4. Implement the refactoring incrementally following our standards:
   - Maintain explicit types
   - Add documentation for refactored code
   - Follow Single Responsibility Principle
   - Improve naming if needed
   - Extract reusable functions
5. Ensure all tests still pass
6. Add new tests if needed
7. Update documentation
8. Verify with "[Tech Stack] Checklist" (.ai/checklists/[tech-stack]-checklist.md)
```

## Example: Refactor Order Service (NestJS)

```
CODING RULES TO FOLLOW:
Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)
Verify with .ai/checklists/nestjs-typescript-checklist.md

I need to refactor: Order Processing Service

Tech Stack: NestJS + TypeScript
Location: src/modules/orders/orders.service.ts

Current Issues:
1. Single method is 150 lines long (processOrder)
2. Multiple responsibilities: validation, inventory check, payment, email, logging
3. Hard to test individual steps
4. Duplicated error handling code
5. No transaction management for multi-step process

Refactoring Goals:
- Break down into smaller, focused methods
- Single Responsibility Principle
- Easier to test each step independently
- Add proper transaction handling
- Centralize error handling

Constraints:
- Must maintain backward compatibility: Yes (public API used by frontend)
- Must not change public API: Yes
- Performance must not degrade: Yes

Coding Standards:
Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)

Please:
1. Analyze the current code
2. Identify refactoring opportunities
3. Propose a refactoring plan:
   - Extract validation into separate method
   - Extract inventory check into separate method
   - Extract payment processing into separate method
   - Extract email sending into separate method
   - Add database transaction wrapper
4. Implement the refactoring incrementally following our standards:
   - Each extracted method max 20-30 lines
   - Add explicit return types
   - Add JSDoc for each new method
   - Use custom exception classes
   - Maintain dependency injection
5. Ensure all existing tests still pass
6. Add new unit tests for extracted methods
7. Update documentation
8. Verify with "NestJS + TypeScript Checklist" (.ai/checklists/nestjs-typescript-checklist.md)
```

## Example: Refactor Component (React)

```
CODING RULES TO FOLLOW:
Follow "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)
Verify with .ai/checklists/react-typescript-checklist.md

I need to refactor: User Profile Form Component

Tech Stack: React + TypeScript
Location: src/components/UserProfileForm.tsx

Current Issues:
1. Component is 300+ lines
2. Handles form state, validation, API calls, and UI all in one
3. Difficult to test
4. Duplicated validation logic with backend
5. No separation between form logic and presentation

Refactoring Goals:
- Extract form logic into custom hook
- Create smaller sub-components
- Shared validation schema (Zod)
- Better testability
- Improved reusability

Constraints:
- Must maintain backward compatibility: No (internal component)
- Must not change public API: Yes (props interface stays same)
- Performance must not degrade: Yes

Coding Standards:
Follow "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)

Please:
1. Analyze the current code
2. Identify refactoring opportunities
3. Propose a refactoring plan:
   - Extract form logic into useUserProfileForm hook
   - Create FormField sub-component
   - Create AvatarUpload sub-component
   - Share Zod schema for validation
   - Keep main component as composition layer
4. Implement the refactoring following our standards:
   - Define TypeScript interfaces for all components
   - Add JSDoc for custom hook
   - Use proper hook dependencies
   - Implement proper memoization
   - Keep components small (<100 lines each)
5. Ensure all tests still pass
6. Add tests for new hook and components
7. Update component documentation
8. Verify with "React + TypeScript Checklist" (.ai/checklists/react-typescript-checklist.md)
```

## Example: Refactor Repository (Laravel)

```
CODING RULES TO FOLLOW:
Follow "Laravel + PHP AI Coding Rules" (.ai/rules/laravel-php-rules.md)
Verify with .ai/checklists/laravel-php-checklist.md

I need to refactor: Product Repository

Tech Stack: Laravel + PHP
Location: app/Repositories/ProductRepository.php

Current Issues:
1. Methods have duplicated query logic
2. No consistent return types
3. Raw SQL queries mixed with Eloquent
4. No query scopes used
5. N+1 query problems in several methods

Refactoring Goals:
- Use Eloquent query scopes for reusable logic
- Consistent return types (Collections)
- Eliminate N+1 queries
- Remove raw SQL, use Query Builder
- Add proper type hints

Constraints:
- Must maintain backward compatibility: Yes
- Must not change public API: Yes (method signatures stay same)
- Performance must not degrade: Must improve

Coding Standards:
Follow "Laravel + PHP AI Coding Rules" (.ai/rules/laravel-php-rules.md)

Please:
1. Analyze the current code
2. Identify refactoring opportunities
3. Propose a refactoring plan:
   - Add query scopes to Product model
   - Replace raw SQL with Query Builder
   - Add eager loading to prevent N+1
   - Add consistent type hints
   - Extract common query logic
4. Implement the refactoring following our standards:
   - Add strict types declaration
   - Add PHPDoc for all methods
   - Use Laravel Collections
   - Implement proper eager loading
   - Use dependency injection
5. Ensure all tests still pass
6. Add tests for new scopes
7. Verify performance improvements
8. Update documentation
9. Verify with "Laravel + PHP Checklist" (.ai/checklists/laravel-php-checklist.md)
```
