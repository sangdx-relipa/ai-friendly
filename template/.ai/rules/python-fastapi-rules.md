# Python + FastAPI AI Coding Rules

You are an expert in Python, FastAPI framework, RESTful API design, async programming, type hints, and backend development best practices.

## Code Style and Structure

- Write concise, technical Python code with accurate examples
- Use functional and object-oriented programming patterns appropriately
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., is_loading, has_error)
- Structure files: imports, constants, models, schemas, utilities, routes, main logic
- Follow FastAPI project structure: routers, schemas, models, services, dependencies, core

## Naming Conventions

- Use lowercase with underscores for directories and files (e.g., user_management/, user_service.py)
- Use snake_case for function names, variables, and module names
- Use PascalCase for class names (e.g., UserService, CreateUserSchema)
- Use UPPER_SNAKE_CASE for constants and environment variables
- Prefix private methods/attributes with single underscore (_private_method)
- Use descriptive names that reveal intent (avoid abbreviations unless widely known)

## Python Type Hints

- Use type hints for all function signatures (arguments and return types)
- Use Optional[Type] for nullable values
- Use Union[Type1, Type2] for multiple possible types (or Type1 | Type2 in Python 3.10+)
- Use Generic types from typing module (List, Dict, Set, Tuple, etc.)
- Avoid using 'Any' type; use more specific types or TypeVar
- Use Pydantic models for data validation and serialization
- Leverage Protocol for structural subtyping when appropriate

## FastAPI Specific Patterns

- Use async/await for all route handlers and I/O operations
- Implement dependency injection using Depends()
- Use Pydantic schemas for request/response validation
- Implement proper layered architecture: Router → Service → Repository
- Use APIRouter to organize routes by feature/domain
- Implement background tasks using BackgroundTasks
- Use middleware for cross-cutting concerns (logging, CORS, etc.)
- Leverage FastAPI's automatic OpenAPI documentation generation
- Use HTTPException for error responses with proper status codes

## API Design

- Follow RESTful conventions for endpoint design
- Use proper HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Return appropriate HTTP status codes (200, 201, 400, 401, 404, 422, 500, etc.)
- Implement API versioning (e.g., /api/v1/users)
- Use pagination for list endpoints with limit/offset or cursor-based
- Implement proper request/response schemas using Pydantic
- Use path parameters for resource identification
- Use query parameters for filtering, sorting, pagination
- Document APIs using docstrings and schema descriptions

## Error Handling

- Use HTTPException for API errors with detail messages
- Create custom exception classes for domain-specific errors
- Implement exception handlers using @app.exception_handler
- Provide meaningful error messages with context
- Log errors with appropriate levels (error, warning, info, debug)
- Never expose internal error details to clients
- Use status codes from fastapi.status module
- Return consistent error response format

## Database and ORM

- Use SQLAlchemy (async) or Tortoise ORM for database operations
- Define models with proper type hints and relationships
- Use repository pattern for data access layer
- Implement async database sessions and connections
- Use transactions for multi-step operations
- Avoid N+1 queries; use eager loading (joinedload, selectinload)
- Create indexes on frequently queried fields
- Use Alembic for database migrations
- Implement database connection pooling

## Pydantic Schemas

- Create separate schemas for request/response/database models
- Use schema inheritance to reduce duplication
- Implement field validation using Field() with constraints
- Use validators for complex validation logic
- Implement Config class for ORM mode and other settings
- Use alias for field name transformations
- Document schema fields with description parameter

## Security Best Practices

- Validate all inputs using Pydantic schemas
- Use password hashing with bcrypt or passlib
- Implement JWT authentication with python-jose
- Use OAuth2PasswordBearer for token authentication
- Store secrets in environment variables using pydantic-settings
- Implement rate limiting using slowapi or similar
- Enable CORS with specific origins using CORSMiddleware
- Sanitize user inputs to prevent injection attacks
- Use parameterized queries (ORMs handle this)
- Implement proper authentication and authorization guards

## Async Programming

- Use async/await for all I/O operations
- Use httpx for async HTTP client requests
- Implement async database queries
- Use asyncio.gather() for concurrent operations
- Avoid blocking calls in async functions
- Use async context managers (async with)
- Implement proper connection pooling for async operations

## Performance Optimization

- Use caching (Redis) for frequently accessed data
- Implement database connection pooling
- Use response compression (GZipMiddleware)
- Optimize database queries (select only needed fields)
- Use async operations for non-blocking I/O
- Implement request timeout handling
- Use background tasks for long-running operations
- Profile code to identify bottlenecks

## Testing

- Write unit tests using pytest with pytest-asyncio
- Write integration tests for API endpoints
- Use pytest fixtures for test setup
- Mock external dependencies using pytest-mock or unittest.mock
- Aim for high test coverage (>80%)
- Use descriptive test names: test_should_return_user_when_valid_id_provided
- Test error cases and edge cases
- Use TestClient from fastapi.testclient for endpoint testing

## Documentation

- Add docstrings (Google or NumPy style) for all functions and classes
- Document complex business logic with inline comments
- Use Pydantic schema descriptions for API documentation
- Maintain README with setup instructions
- Document environment variables in .env.example
- Use type hints as inline documentation
- Add examples in docstrings

## Code Quality

- Follow PEP 8 style guide
- Use Black for code formatting
- Use isort for import sorting
- Use pylint or flake8 for linting
- Use mypy for static type checking
- Keep functions small and focused (max 20-30 lines)
- Follow SOLID principles
- Use list/dict comprehensions for simple transformations
- Avoid nested callbacks; use async/await

## Project Structure

```
project/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI app initialization
│   ├── config.py            # Configuration and settings
│   ├── dependencies.py      # Shared dependencies
│   ├── models/              # Database models
│   │   ├── __init__.py
│   │   └── user.py
│   ├── schemas/             # Pydantic schemas
│   │   ├── __init__.py
│   │   └── user.py
│   ├── routers/             # API routes
│   │   ├── __init__.py
│   │   └── users.py
│   ├── services/            # Business logic
│   │   ├── __init__.py
│   │   └── user_service.py
│   ├── repositories/        # Data access layer
│   │   ├── __init__.py
│   │   └── user_repository.py
│   └── core/                # Core utilities
│       ├── __init__.py
│       ├── security.py
│       └── database.py
├── tests/
│   ├── __init__.py
│   ├── conftest.py
│   └── test_users.py
├── alembic/                 # Database migrations
├── .env.example
├── requirements.txt
└── README.md
```

## Key Conventions

- Use environment-based configuration with pydantic-settings
- Implement structured logging with context (loguru or structlog)
- Use Pydantic schemas for all external data (requests/responses)
- Keep routers thin; business logic in services
- Use dependency injection for database sessions and services
- Implement health check endpoints
- Use lifespan events for startup/shutdown tasks
- Follow semantic versioning for releases
- Use virtual environments (venv or poetry)

## Dependencies Management

- Use requirements.txt or poetry for dependency management
- Pin dependency versions for reproducibility
- Separate dev dependencies from production
- Keep dependencies up to date
- Use pip-audit or safety for security scanning

## Common Patterns

### Dependency Injection
```python
async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with async_session() as session:
        yield session

@router.get("/users/{user_id}")
async def get_user(
    user_id: int,
    db: AsyncSession = Depends(get_db)
) -> UserResponse:
    return await user_service.get_user(db, user_id)
```

### Error Handling
```python
class UserNotFoundException(Exception):
    pass

@app.exception_handler(UserNotFoundException)
async def user_not_found_handler(request: Request, exc: UserNotFoundException):
    return JSONResponse(
        status_code=status.HTTP_404_NOT_FOUND,
        content={"detail": str(exc)}
    )
```

### Authentication
```python
async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db)
) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials"
    )
    # Validate token and return user
```

## Avoid

- Avoid using global state
- Avoid synchronous blocking operations in async code
- Don't use mutable default arguments
- Avoid bare except clauses
- Don't use import * (wildcard imports)
- Avoid long functions (>30 lines)
- Don't mix business logic in routers
- Avoid hardcoding configuration values

## Best Practices

- Use context managers (with statement) for resource management
- Implement proper logging throughout the application
- Use environment variables for configuration
- Implement graceful shutdown handling
- Use database migrations for schema changes
- Implement request ID tracking for debugging
- Use circuit breakers for external service calls
- Implement retries with exponential backoff
- Monitor application performance and errors
- Use OpenAPI schema for API documentation
