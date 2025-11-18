# Laravel + PHP Implementation Checklist

Use this checklist to verify that your implementation follows all AI-friendly coding standards.

## Setup & Configuration
- [ ] PHP 8.1+ used
- [ ] Strict types enabled in all files
- [ ] PSR-12 coding standards followed
- [ ] Environment variables in .env

## Code Structure
- [ ] Controllers are thin (logic in services)
- [ ] Service classes for business logic
- [ ] Repository pattern used when needed
- [ ] Form requests for validation
- [ ] Resource classes for API responses

## PHP Best Practices
- [ ] All parameters and returns are type-hinted
- [ ] Typed properties used in classes
- [ ] Dependency injection in constructors
- [ ] Laravel collections used for data manipulation
- [ ] Following Laravel directory structure

## API Development
- [ ] API resources for response transformation
- [ ] Versioned routes (/api/v1/)
- [ ] Proper HTTP status codes returned
- [ ] Rate limiting implemented
- [ ] Pagination for list endpoints
- [ ] RESTful conventions followed

## Validation
- [ ] Form Request classes created
- [ ] Validation rules in Form Requests (not controllers)
- [ ] Clear validation error messages
- [ ] Custom validation rules when needed

## Database & Eloquent
- [ ] Eloquent relationships defined
- [ ] Eager loading prevents N+1 queries
- [ ] Database indexes on frequently queried fields
- [ ] Migrations for all schema changes
- [ ] Transactions for multi-step operations
- [ ] Soft deletes implemented when appropriate

## Error Handling
- [ ] Custom exception classes created
- [ ] Consistent error response format
- [ ] Appropriate logging level used
- [ ] No sensitive data in error responses
- [ ] Proper HTTP status codes

## Security
- [ ] CSRF protection enabled
- [ ] Passwords hashed with bcrypt (Hash facade)
- [ ] Authorization with policies and gates
- [ ] All requests validated and authorized
- [ ] Laravel Sanctum for API authentication
- [ ] Secrets stored in .env file
- [ ] Rate limiting configured

## Performance
- [ ] Eager loading to avoid N+1 queries
- [ ] Redis caching implemented
- [ ] Database indexes created
- [ ] Query optimization (select specific columns)
- [ ] Queue workers for long tasks
- [ ] Config and routes cached in production

## Testing
- [ ] Feature tests for endpoints
- [ ] Unit tests for services
- [ ] Factories for test data
- [ ] External services mocked
- [ ] Validation rules tested
- [ ] Authorization policies tested

## Documentation
- [ ] PHPDoc for all methods and classes
- [ ] API documentation maintained
- [ ] README with setup instructions
- [ ] .env.example file included
- [ ] Complex logic documented

---

**Verification Status:**
- [ ] All critical items checked
- [ ] All high-priority items checked
- [ ] Medium/low-priority items reviewed
- [ ] Code ready for review/deployment
