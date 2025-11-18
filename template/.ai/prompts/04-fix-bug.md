# Template: Fix Bug

Use this template when fixing bugs in your application.

## Template

```
[Add Standard Preamble from 00-standard-preamble.md]

Bug Report:

Title: [Short description of the bug]

Tech Stack: [NestJS/React/Laravel]
Location: [Where the bug occurs - file, component, endpoint]

Steps to Reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Expected Behavior:
[What should happen]

Actual Behavior:
[What actually happens]

Error Messages (if any):
```
[Error stack trace or message]
```

Environment:
- Version: [Version number]
- Browser (if frontend): [Browser name and version]
- Additional context: [Any other relevant info]

Coding Standards:
Follow "[Tech Stack] AI Coding Rules" (.ai/rules/[tech-stack]-rules.md)

Please:
1. Reproduce the bug
2. Identify the root cause
3. Propose a fix
4. Implement the fix following our coding standards:
   - Maintain explicit types
   - Add/update error handling if needed
   - Ensure fix doesn't introduce new issues
5. Add tests to prevent regression
6. Verify the fix resolves the issue
7. Check against "[Tech Stack] Checklist" (.ai/checklists/[tech-stack]-checklist.md)
```

## Example: Email Update Bug (NestJS)

```
CODING RULES TO FOLLOW:
Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)
Verify with .ai/checklists/nestjs-typescript-checklist.md

Bug Report:

Title: User cannot update email address

Tech Stack: NestJS + TypeScript
Location: src/modules/users/users.service.ts, updateUser method

Steps to Reproduce:
1. Log in as a user
2. Navigate to profile settings
3. Change email address to a new one
4. Click Save
5. Observe error

Expected Behavior:
User's email should be updated and a verification email sent

Actual Behavior:
Error is thrown: "Email already exists" even when the new email is unique

Error Messages (if any):
```
ConflictException: Email already exists
    at UsersService.updateUser (users.service.ts:45)
    at UsersController.update (users.controller.ts:78)
```

Environment:
- Version: 1.2.3
- PostgreSQL 14
- Additional context: Bug introduced after adding unique constraint on email column

Coding Standards:
Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)

Please:
1. Reproduce the bug
2. Identify the root cause (likely checking email uniqueness including current user's email)
3. Propose a fix
4. Implement the fix following our coding standards:
   - Maintain explicit types
   - Add proper error handling
   - Use meaningful error messages
5. Add tests to prevent regression:
   - Test updating email to new unique email (should succeed)
   - Test updating email to existing email (should fail)
   - Test keeping same email (should succeed)
6. Verify the fix resolves the issue
7. Check against "NestJS + TypeScript Checklist" (.ai/checklists/nestjs-typescript-checklist.md)
```

## Example: Infinite Loop (React)

```
CODING RULES TO FOLLOW:
Follow "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)
Verify with .ai/checklists/react-typescript-checklist.md

Bug Report:

Title: Component re-renders infinitely causing browser freeze

Tech Stack: React + TypeScript
Location: src/components/UserDashboard.tsx

Steps to Reproduce:
1. Navigate to /dashboard
2. Component loads user data
3. Browser becomes unresponsive
4. Console shows continuous re-renders

Expected Behavior:
Dashboard loads once and displays user data

Actual Behavior:
Component enters infinite re-render loop, browser freezes

Error Messages (if any):
```
Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
```

Environment:
- Version: 2.1.0
- Browser: Chrome 120
- React 18.2

Coding Standards:
Follow "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)

Please:
1. Reproduce the bug
2. Identify the root cause (likely incorrect useEffect dependencies)
3. Propose a fix
4. Implement the fix following our coding standards:
   - Fix useEffect dependency array
   - Ensure proper memoization if needed
   - Add comments explaining the fix
5. Add tests to prevent regression
6. Verify the fix resolves the issue
7. Check against "React + TypeScript Checklist" (.ai/checklists/react-typescript-checklist.md)
```

## Example: SQL Injection (Laravel)

```
CODING RULES TO FOLLOW:
Follow "Laravel + PHP AI Coding Rules" (.ai/rules/laravel-php-rules.md)
Verify with .ai/checklists/laravel-php-checklist.md

Bug Report (Security Vulnerability):

Title: SQL Injection in User Search

Severity: Critical

Tech Stack: Laravel + PHP
Location: app/Repositories/UserRepository.php, searchUsers method

Vulnerability Type: SQL Injection

Description:
The searchUsers method concatenates user input directly into SQL query without sanitization or parameterization.

Steps to Reproduce (for testing):
1. Send GET request to /api/users/search?name=admin' OR '1'='1
2. Returns all users instead of matching "admin"
3. Can execute arbitrary SQL

Expected Behavior:
Only users matching the search term should be returned

Actual Behavior:
SQL injection allows bypassing search logic and potentially compromising database

Impact:
- Attackers can read all data from database
- Attackers can modify or delete data
- Potential data breach

Coding Standards:
Follow "Laravel + PHP AI Coding Rules" (.ai/rules/laravel-php-rules.md)

Please:
1. Analyze the security vulnerability
2. Identify all affected code
3. Propose a secure fix (use Eloquent or parameterized queries)
4. Implement the fix following our coding standards:
   - Use Eloquent ORM or Query Builder with bindings
   - Add input validation
   - Use strict types
   - Add security-focused comments
5. Add security tests to prevent regression
6. Verify the vulnerability is closed
7. Document the fix
8. Check against "Laravel + PHP Checklist" (.ai/checklists/laravel-php-checklist.md)
```
