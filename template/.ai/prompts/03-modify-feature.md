# Template: Modify Existing Feature

Use this template when you need to update or modify an existing feature.

## Template

```
[Add Standard Preamble from 00-standard-preamble.md]

I need to modify an existing feature: [FEATURE_NAME]

Tech Stack: [NestJS/React/Laravel]
Location: [File path or module name]

Current Behavior:
[Describe how it currently works]

Desired Changes:
1. [Change 1]
2. [Change 2]
3. [Change 3]

Reason for Changes:
[Why these changes are needed]

Impact Analysis Needed:
- Are there other parts of the codebase that depend on this?
- Will this break existing functionality?
- Do tests need to be updated?

Coding Standards:
Follow "[Tech Stack] AI Coding Rules" (.ai/rules/[tech-stack]-rules.md)

Please:
1. Analyze the current implementation
2. Identify all dependencies and impacts
3. Suggest the best approach for making these changes
4. Implement the changes following our coding standards
5. Update or add tests as needed
6. Update documentation
7. Verify with "[Tech Stack] Checklist" (.ai/checklists/[tech-stack]-checklist.md)
```

## Example: Add Refresh Token (NestJS)

```
CODING RULES TO FOLLOW:
Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)
Verify with .ai/checklists/nestjs-typescript-checklist.md

I need to modify an existing feature: User Authentication

Tech Stack: NestJS + TypeScript
Location: src/modules/auth/auth.service.ts

Current Behavior:
- Users log in with email and password
- JWT token expires in 24 hours
- No refresh token mechanism

Desired Changes:
1. Implement refresh token mechanism
2. Access token expires in 15 minutes
3. Refresh token expires in 7 days
4. Add endpoint to refresh access token
5. Store refresh tokens in database with user association
6. Implement refresh token rotation (invalidate old token on refresh)

Reason for Changes:
Security improvement - shorter-lived access tokens reduce risk if token is compromised

Impact Analysis Needed:
- Frontend needs to handle token refresh
- Existing auth middleware may need updates
- Database migration needed for refresh tokens table
- Tests need to be updated

Coding Standards:
Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)

Please:
1. Analyze the current implementation
2. Identify all dependencies and impacts
3. Suggest the best approach for making these changes
4. Implement the changes following our coding standards:
   - Use explicit types for all new code
   - Add JSDoc comments for new methods
   - Create custom exception classes for token errors
   - Validate refresh tokens properly
   - Add unit tests for new functionality
5. Update or add tests as needed
6. Update API documentation
7. Verify with "NestJS + TypeScript Checklist" (.ai/checklists/nestjs-typescript-checklist.md)
```

## Example: Add Filtering (React)

```
CODING RULES TO FOLLOW:
Follow "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)
Verify with .ai/checklists/react-typescript-checklist.md

I need to modify an existing feature: Product List

Tech Stack: React + TypeScript
Location: src/components/ProductList.tsx

Current Behavior:
- Displays all products in a grid
- No filtering or sorting options
- Simple pagination

Desired Changes:
1. Add filter dropdown for category
2. Add filter dropdown for price range
3. Add sort options (price low-high, high-low, name A-Z)
4. Update URL with filter/sort parameters
5. Maintain filters when navigating back

Reason for Changes:
Users need to find products more easily, especially as catalog grows

Impact Analysis Needed:
- API needs to support filter/sort query parameters
- URL state management required
- Existing product loading logic needs update

Coding Standards:
Follow "React + TypeScript AI Coding Rules" (.ai/rules/react-typescript-rules.md)

Please:
1. Analyze the current implementation
2. Identify all dependencies and impacts
3. Suggest the best approach (URL state, query params)
4. Implement the changes following our coding standards:
   - Define interfaces for filter state
   - Create custom hook for filter logic
   - Use proper TypeScript types
   - Implement debouncing for better performance
   - Add proper accessibility
   - Write tests for filter functionality
5. Update tests as needed
6. Verify with "React + TypeScript Checklist" (.ai/checklists/react-typescript-checklist.md)
```
