# Template: New Feature - Basic

Use this template when adding a simple new feature to your application.

## Template

```
[Add Standard Preamble from 00-standard-preamble.md]

I need to add a new feature: [FEATURE_NAME]

Tech Stack: [NestJS/React/Laravel]

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Coding Standards to Follow:
- Follow the "[Tech Stack] AI Coding Rules" (.ai/rules/[tech-stack]-rules.md)
- Use the "[Tech Stack] Checklist" (.ai/checklists/[tech-stack]-checklist.md) to verify implementation

Please:
1. Analyze the current codebase structure
2. Suggest the best approach following [framework] conventions
3. Implement the feature following these standards:
   - All functions must have explicit types (no 'any')
   - Add JSDoc/PHPDoc comments for all public methods
   - Use descriptive, self-documenting names
   - Create small, focused functions (Single Responsibility)
   - Implement proper error handling with custom error classes
   - Add input validation (class-validator/Zod/Form Requests)
   - Write unit tests with >80% coverage
4. After implementation, verify against the checklist:
   - Code structure follows framework conventions
   - TypeScript/PHP types are explicit
   - Error handling is comprehensive
   - Security best practices are applied
   - Tests are included
```

## Example: NestJS

```
CODING RULES TO FOLLOW:
Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)
Verify with .ai/checklists/nestjs-typescript-checklist.md

I need to add a new feature: User Profile Management

Tech Stack: NestJS + TypeScript

Requirements:
- Users can view their profile
- Users can update their name, email, and avatar
- Email changes require verification
- Avatar upload with image validation (max 2MB, jpg/png only)

Coding Standards to Follow:
- Follow the "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)
- Use the "NestJS + TypeScript Checklist" (.ai/checklists/nestjs-typescript-checklist.md)

Please:
1. Analyze the current codebase structure
2. Suggest the best approach following NestJS conventions
3. Implement the feature following these standards:
   - All functions must have explicit types (no 'any')
   - Add JSDoc/TSDoc comments for all public methods
   - Use descriptive, self-documenting names
   - Create small, focused functions (Single Responsibility)
   - Implement proper error handling with custom error classes
   - Add input validation using class-validator in DTOs
   - Write unit tests with >80% coverage
4. After implementation, verify against the NestJS checklist:
   - Code structure follows NestJS module conventions
   - TypeScript types are explicit everywhere
   - DTOs use class-validator decorators
   - Error handling uses custom exception classes
   - Security: inputs validated, passwords hashed, guards protect routes
   - Tests are included with proper mocking
```

## Example: React

```
CODING RULES TO FOLLOW:
Follow "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)
Verify with .ai/checklists/react-typescript-checklist.md

I need to add a new feature: Dark Mode Toggle

Tech Stack: React + TypeScript

Requirements:
- Toggle switch in header to enable/disable dark mode
- Persist preference in localStorage
- Smooth transition between themes
- All components support both light and dark themes

Coding Standards to Follow:
- Follow the "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)
- Use the "React + TypeScript Checklist" (.ai/checklists/react-typescript-checklist.md)

Please:
1. Analyze the current codebase structure
2. Suggest the best approach (Context API or state management)
3. Implement the feature following these standards:
   - All props must have TypeScript interfaces
   - Add JSDoc comments for custom hooks
   - Use descriptive, self-documenting names
   - Create small, focused components
   - Implement proper error handling
   - Use proper accessibility (ARIA labels)
   - Write unit tests with React Testing Library
4. After implementation, verify against the React checklist
```

## Example: Laravel

```
CODING RULES TO FOLLOW:
Follow "Laravel + PHP AI Coding Rules" (.ai/rules/laravel-php-rules.md)
Verify with .ai/checklists/laravel-php-checklist.md

I need to add a new feature: Product Reviews

Tech Stack: Laravel + PHP

Requirements:
- Users can add reviews to products
- Reviews have rating (1-5 stars) and comment
- Users can only review products they purchased
- Average rating calculated for each product

Coding Standards to Follow:
- Follow the "Laravel + PHP AI Coding Rules" (.ai/rules/laravel-php-rules.md)
- Use the "Laravel + PHP Checklist" (.ai/checklists/laravel-php-checklist.md)

Please:
1. Analyze the current codebase structure
2. Suggest the best approach following Laravel conventions
3. Implement the feature following these standards:
   - All methods must have type hints (strict types enabled)
   - Add PHPDoc comments for all public methods
   - Use descriptive names
   - Create service classes for business logic
   - Implement Form Requests for validation
   - Use policies for authorization
   - Write feature and unit tests
4. After implementation, verify against the Laravel checklist
```
