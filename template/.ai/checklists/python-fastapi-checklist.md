# Python + FastAPI Implementation Checklist

Use this checklist to verify that your implementation follows all AI-friendly coding standards.

## Setup & Configuration
- [ ] Python 3.9+ used
- [ ] Virtual environment configured (venv/poetry)
- [ ] Type checking enabled (mypy configured)
- [ ] Code formatter configured (Black)
- [ ] Import sorter configured (isort)
- [ ] Linter configured (pylint/flake8)
- [ ] Environment variables in .env (not hardcoded)
- [ ] OpenAPI documentation auto-generated

## Code Structure
- [ ] Follows FastAPI project structure (routers/services/repositories)
- [ ] Files organized by feature/domain
- [ ] Pydantic schemas defined for all request/response data
- [ ] Database models defined with SQLAlchemy/Tortoise
- [ ] Clear separation of concerns (router/service/repository layers)

## Python Type Hints
- [ ] All functions have type hints (arguments and return types)
- [ ] No usage of 'Any' type (or minimal with justification)
- [ ] Optional[] used for nullable values
- [ ] Pydantic models used for data validation
- [ ] Complex types properly annotated (List, Dict, Union)

## API Design
- [ ] RESTful endpoint naming conventions
- [ ] Proper HTTP methods used (GET, POST, PUT, PATCH, DELETE)
- [ ] Correct HTTP status codes returned (200, 201, 400, 401, 404, 422, 500)
- [ ] API versioning implemented (/api/v1/)
- [ ] Pagination implemented for list endpoints
- [ ] Query parameters used for filtering/sorting
- [ ] Path parameters used for resource identification

## Pydantic Schemas
- [ ] Separate schemas for request/response/database
- [ ] Field validation using Field() constraints
- [ ] Custom validators for complex validation
- [ ] Schema descriptions added for documentation
- [ ] Config class with orm_mode when needed
- [ ] No data duplication (use inheritance)

## Validation & Error Handling
- [ ] Pydantic schemas validate all inputs
- [ ] Custom exception classes defined
- [ ] Exception handlers registered
- [ ] HTTPException used with proper status codes
- [ ] Meaningful error messages provided
- [ ] Consistent error response format

## Database
- [ ] Repository pattern implemented
- [ ] Async database operations used
- [ ] Eager loading used to prevent N+1 queries
- [ ] Database indexes on frequently queried fields
- [ ] Migrations created for schema changes (Alembic)
- [ ] Transactions used for multi-step operations
- [ ] Connection pooling configured

## Async Programming
- [ ] All I/O operations use async/await
- [ ] Async database sessions used
- [ ] No blocking calls in async functions
- [ ] Async context managers used properly
- [ ] Background tasks for long operations
- [ ] Concurrent operations use asyncio.gather()

## Security
- [ ] All inputs validated with Pydantic
- [ ] Passwords hashed with bcrypt/passlib
- [ ] JWT authentication implemented
- [ ] OAuth2PasswordBearer for protected routes
- [ ] Rate limiting configured
- [ ] CORS configured properly (specific origins)
- [ ] Environment variables for secrets
- [ ] No sensitive data in logs or responses

## Performance
- [ ] Caching implemented for frequently accessed data
- [ ] Database connection pooling configured
- [ ] Response compression enabled (GZipMiddleware)
- [ ] Database queries optimized (select specific fields)
- [ ] Async operations for non-blocking I/O
- [ ] Background tasks for long operations

## Testing
- [ ] Unit tests for services (pytest)
- [ ] Integration tests for endpoints (TestClient)
- [ ] Test coverage >80%
- [ ] Mocked external dependencies
- [ ] Async tests use pytest-asyncio
- [ ] Fixtures used for test setup
- [ ] Edge cases and error cases tested

## Code Quality
- [ ] Follows PEP 8 style guide
- [ ] Code formatted with Black
- [ ] Imports sorted with isort
- [ ] Passes linting (pylint/flake8)
- [ ] Passes type checking (mypy)
- [ ] Functions small and focused (<30 lines)
- [ ] No code duplication
- [ ] SOLID principles followed

## Documentation
- [ ] Docstrings on all public functions/classes (Google/NumPy style)
- [ ] Type hints serve as inline documentation
- [ ] Complex logic has inline comments
- [ ] README with setup instructions
- [ ] .env.example file included
- [ ] API documentation auto-generated (OpenAPI)
- [ ] Pydantic schema descriptions added

## Dependencies
- [ ] requirements.txt or pyproject.toml present
- [ ] Dependencies pinned to specific versions
- [ ] Dev dependencies separated from production
- [ ] No unused dependencies
- [ ] Security vulnerabilities checked (pip-audit/safety)

## Project Organization
- [ ] Proper __init__.py files in all packages
- [ ] Logical module organization
- [ ] Config centralized in config.py
- [ ] Dependencies in dependencies.py
- [ ] Core utilities in core/ directory
- [ ] Tests mirror source structure

---

**Verification Status:**
- [ ] All critical items checked
- [ ] All high-priority items checked
- [ ] Medium/low-priority items reviewed
- [ ] Code ready for review/deployment
