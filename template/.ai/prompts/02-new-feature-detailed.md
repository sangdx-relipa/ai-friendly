# Template: New Feature - Detailed

Use this template for complex features that require detailed planning and implementation.

## Template

```
[Add Standard Preamble from 00-standard-preamble.md]

Feature: [FEATURE_NAME]
Tech Stack: [NestJS/React/Laravel]
Priority: [High/Medium/Low]

Context:
[Explain why this feature is needed and how it fits into the system]

Functional Requirements:
1. [Detailed requirement 1]
2. [Detailed requirement 2]
3. [Detailed requirement 3]

Technical Requirements:
- Database: [What tables/models are needed]
- API Endpoints: [List endpoints if backend]
- Authentication: [Required/Not Required]
- Authorization: [Who can access this feature]

Constraints:
- [Performance requirements]
- [Security requirements]
- [Other constraints]

IMPORTANT - Coding Standards:
You MUST follow the "[Tech Stack] AI Coding Rules" (.ai/rules/[tech-stack]-rules.md)

Required Coding Practices:
✓ TypeScript/PHP: Use explicit types everywhere (no 'any')
✓ Documentation: Add JSDoc/PHPDoc for all public methods
✓ Naming: Use descriptive, self-documenting names
✓ Functions: Small, focused (max 20-30 lines), Single Responsibility
✓ Error Handling: Custom exception classes with meaningful messages
✓ Validation: class-validator/Zod/Form Requests at system boundaries
✓ Security: Hash passwords, validate inputs, use parameterized queries
✓ Testing: Unit tests with >80% coverage
✓ Performance: Avoid N+1 queries, use caching where appropriate
✓ Architecture: Follow framework conventions (Controller→Service→Repository)

Please implement this feature following these steps:
1. Review existing code structure for similar features
2. Create a detailed implementation plan
3. Implement following the required coding practices above
4. Include comprehensive error handling
5. Add input validation
6. Write unit and integration tests
7. Add API documentation (if applicable)
8. Verify implementation using the "[Tech Stack] Checklist" (.ai/checklists/[tech-stack]-checklist.md):
   - All checklist items must be satisfied
   - Run the checklist as final verification before completion
```

## Example: Order Management System (NestJS)

```
CODING RULES TO FOLLOW:
Follow "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)
Verify with .ai/checklists/nestjs-typescript-checklist.md

Feature: Order Management System
Tech Stack: NestJS + TypeScript + PostgreSQL
Priority: High

Context:
We need an order management system for our e-commerce platform. Currently, we have products and users, but no way to process orders. This is a critical feature for launching the MVP.

Functional Requirements:
1. Users can create orders with multiple products
2. Each order has a status: pending, processing, shipped, delivered, cancelled
3. Users can view their order history with pagination
4. Admins can update order status
5. Users receive email notifications on status changes
6. Calculate total with tax and shipping

Technical Requirements:
- Database: Orders table, OrderItems table (many-to-many with Products)
- API Endpoints: POST /orders, GET /orders, GET /orders/:id, PATCH /orders/:id/status
- Authentication: Required (JWT)
- Authorization: Users see only their orders, Admins see all orders

Constraints:
- Orders cannot be modified after "processing" status
- Must handle concurrent order creation (inventory locking)
- Email sending should be async (use queue)
- Support pagination (50 orders per page)

IMPORTANT - Coding Standards:
You MUST follow the "NestJS + TypeScript AI Coding Rules" (.ai/rules/nestjs-typescript-rules.md)

Required Coding Practices:
✓ TypeScript: Use explicit types everywhere (no 'any')
✓ Documentation: Add JSDoc/TSDoc for all public methods
✓ Naming: Use descriptive, self-documenting names
✓ Functions: Small, focused (max 20-30 lines), Single Responsibility
✓ Error Handling: Custom exception classes extending HttpException
✓ Validation: Use class-validator decorators in all DTOs
✓ Security: Hash passwords with bcrypt, validate inputs, use guards
✓ Testing: Unit tests with >80% coverage using Jest
✓ Performance: Avoid N+1 queries, use caching (Redis)
✓ Architecture: Controller→Service→Repository pattern

Please implement this feature following these steps:
1. Review existing code structure for similar features
2. Create a detailed implementation plan
3. Implement following the required coding practices above
4. Include comprehensive error handling
5. Add input validation
6. Write unit and integration tests
7. Add API documentation with Swagger decorators
8. Verify implementation using the "NestJS + TypeScript Checklist" (.ai/checklists/nestjs-typescript-checklist.md):
   - All checklist items must be satisfied
   - Run the checklist as final verification before completion
```
