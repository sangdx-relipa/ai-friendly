# Template: Add Tests

Use this template when adding tests to existing code or new features.

## Template

```
[Add Standard Preamble from 00-standard-preamble.md]

I need tests for:

Tech Stack: [NestJS/React/Laravel]
Location: [File/Module/Component]

Type of Tests Needed:
- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests

Current Test Coverage: [X%] (if known)
Target Test Coverage: [Y%]

Scenarios to Test:
1. [Happy path scenario]
2. [Error scenario 1]
3. [Error scenario 2]
4. [Edge case 1]
5. [Edge case 2]

Coding Standards:
Follow "[Tech Stack] AI Coding Rules" (.ai/rules/[tech-stack]-rules.md)

Please:
1. Analyze the code to identify all test scenarios
2. Write comprehensive tests covering:
   - All happy paths
   - Error cases
   - Edge cases
   - Boundary conditions
3. Use proper mocking for external dependencies
4. Follow testing best practices:
   - Descriptive test names
   - Arrange-Act-Assert pattern
   - One assertion focus per test
   - Proper setup/teardown
5. Ensure tests are readable and maintainable
6. Achieve target coverage
7. Verify with "[Tech Stack] Checklist" (.ai/checklists/[tech-stack]-checklist.md)
```

## Example: Test User Service (NestJS)

```
CODING RULES TO FOLLOW:
Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)
Verify with .ai/checklists/nestjs-typescript-checklist.md

I need tests for:

Tech Stack: NestJS + TypeScript
Location: src/modules/users/users.service.ts

Type of Tests Needed:
- [x] Unit tests
- [x] Integration tests
- [ ] E2E tests (already exist)

Current Test Coverage: 45%
Target Test Coverage: 85%

Scenarios to Test:

**Unit Tests (UserService):**
1. createUser - Happy path: creates user with valid data
2. createUser - Error: throws ConflictException when email exists
3. createUser - Error: throws ValidationException for invalid email
4. findById - Happy path: returns user when found
5. findById - Error: throws NotFoundException when user not found
6. updateUser - Happy path: updates user successfully
7. updateUser - Error: throws error when email already taken by another user
8. updateUser - Edge case: allows user to keep their own email
9. deleteUser - Happy path: soft deletes user
10. deleteUser - Error: throws NotFoundException for non-existent user

**Integration Tests:**
11. Full user creation flow with database
12. Update user with concurrent email change attempts
13. Query performance with eager loading

Coding Standards:
Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)

Please:
1. Analyze the UserService code to identify all test scenarios
2. Write comprehensive tests covering all scenarios above
3. Use proper mocking:
   - Mock UserRepository for unit tests
   - Mock EmailService
   - Use test database for integration tests
4. Follow testing best practices:
   - Use descriptive names: "should create user when valid data provided"
   - Arrange-Act-Assert pattern
   - One assertion focus per test
   - Proper beforeEach/afterEach for setup/cleanup
5. Ensure tests are readable with:
   - Clear test data factories
   - Descriptive variable names
   - Comments for complex setup
6. Achieve 85% coverage
7. Verify with "NestJS + TypeScript Checklist" (.ai/checklists/nestjs-typescript-checklist.md)
```

## Example: Test React Component (React)

```
CODING RULES TO FOLLOW:
Follow "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)
Verify with .ai/checklists/react-typescript-checklist.md

I need tests for:

Tech Stack: React + TypeScript
Location: src/components/LoginForm.tsx

Type of Tests Needed:
- [x] Unit tests (React Testing Library)
- [ ] Integration tests (covered by E2E)
- [ ] E2E tests (already exist)

Current Test Coverage: 30%
Target Test Coverage: 90%

Scenarios to Test:

1. Renders login form with email and password fields
2. Displays validation errors for empty fields on submit
3. Displays validation error for invalid email format
4. Shows loading state during login
5. Calls onLogin callback with correct credentials
6. Displays error message when login fails
7. Disables submit button during loading
8. Password field has type="password"
9. Form can be submitted by pressing Enter
10. Accessibility: proper labels and ARIA attributes
11. Email field autofocus on mount
12. Error message cleared when user starts typing

Coding Standards:
Follow "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)

Please:
1. Analyze the LoginForm component
2. Write comprehensive tests covering all scenarios above
3. Use React Testing Library best practices:
   - Use semantic queries (getByRole, getByLabelText)
   - Test user interactions, not implementation
   - Use userEvent for interactions
   - Mock API calls with MSW or jest.fn()
4. Follow testing best practices:
   - Descriptive test names
   - Use screen.getByRole for accessibility
   - Test from user perspective
   - Proper cleanup with cleanup()
5. Ensure tests cover:
   - User interactions (typing, clicking)
   - Loading states
   - Error states
   - Accessibility
   - Keyboard navigation
6. Achieve 90% coverage
7. Verify with "React + TypeScript Checklist" (.ai/checklists/react-typescript-checklist.md)
```

## Example: Test Laravel Controller (Laravel)

```
CODING RULES TO FOLLOW:
Follow "Laravel + PHP AI Coding Rules" (.ai/rules/laravel-php-rules.md)
Verify with .ai/checklists/laravel-php-checklist.md

I need tests for:

Tech Stack: Laravel + PHP
Location: app/Http/Controllers/Api/ProductController.php

Type of Tests Needed:
- [x] Feature tests (API endpoints)
- [x] Unit tests (for complex methods)
- [ ] Browser tests (not needed)

Current Test Coverage: 50%
Target Test Coverage: 85%

Scenarios to Test:

**Feature Tests (API Endpoints):**
1. GET /api/products - Returns paginated products
2. GET /api/products - Returns filtered products by category
3. GET /api/products/:id - Returns single product
4. GET /api/products/:id - Returns 404 for non-existent product
5. POST /api/products - Creates product (admin only)
6. POST /api/products - Returns 401 for unauthenticated
7. POST /api/products - Returns 403 for non-admin
8. POST /api/products - Returns 422 for invalid data
9. PUT /api/products/:id - Updates product
10. DELETE /api/products/:id - Deletes product (soft delete)

**Unit Tests:**
11. Price calculation with tax
12. Discount application logic
13. Stock availability check

Coding Standards:
Follow "Laravel + PHP AI Coding Rules" (.ai/rules/laravel-php-rules.md)

Please:
1. Analyze the ProductController
2. Write comprehensive tests covering all scenarios
3. Use Laravel testing utilities:
   - $this->postJson() for API tests
   - Factories for test data
   - assertStatus(), assertJson(), etc.
   - Database assertions (assertDatabaseHas)
4. Follow testing best practices:
   - Use RefreshDatabase trait
   - Descriptive test method names
   - Arrange-Act-Assert pattern
   - Test data factories
5. Mock external services (payment, email)
6. Test authorization with policies
7. Test validation rules
8. Achieve 85% coverage
9. Verify with "Laravel + PHP Checklist" (.ai/checklists/laravel-php-checklist.md)
```
