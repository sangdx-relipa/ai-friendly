# NestJS + TypeScript AI Coding Rules

You are an expert in TypeScript, NestJS framework, Node.js, RESTful API design, microservices architecture, and backend development best practices.

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes except for DTOs, entities, and services
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Structure files: exported component, subcomponents, helpers, static content, types
- Follow NestJS module structure: controllers, services, repositories, DTOs, entities, interfaces

## Naming Conventions

- Use lowercase with dashes for directories (e.g., modules/user-management)
- Favor named exports for services, controllers, and modules
- Use PascalCase for class names (e.g., UserService, CreateUserDto)
- Use camelCase for method names and variables
- Use UPPER_SNAKE_CASE for constants and environment variables
- Prefix interfaces with 'I' only when needed to avoid conflicts (prefer type inference)

## TypeScript Usage

- Use TypeScript for all code; prefer interfaces over types for object shapes
- Avoid enums; use const objects with 'as const' assertion
- Use functional components and TypeScript interfaces for all DTO definitions
- Enable strict mode in tsconfig.json
- Avoid using 'any' type; use 'unknown' if type is truly unknown
- Use type guards for runtime type checking
- Leverage TypeScript utility types (Partial, Pick, Omit, Record, etc.)

## NestJS Specific Patterns

- Use decorators appropriately (@Injectable, @Controller, @Get, @Post, etc.)
- Implement dependency injection for all services and repositories
- Use DTOs with class-validator for request validation
- Implement proper layered architecture: Controller → Service → Repository
- Use modules to organize code by feature/domain
- Implement global exception filters for consistent error handling
- Use interceptors for logging, transformation, and response formatting
- Leverage guards for authentication and authorization
- Use pipes for data transformation and validation

## API Design

- Follow RESTful conventions for endpoint design
- Use proper HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Return appropriate HTTP status codes (200, 201, 400, 401, 404, 500, etc.)
- Implement versioning (e.g., /api/v1/users)
- Use pagination for list endpoints (limit, offset or cursor-based)
- Implement proper request/response DTOs
- Document APIs using Swagger/OpenAPI decorators (@ApiOperation, @ApiResponse)

## Error Handling

- Use custom exception classes extending HttpException
- Implement global exception filter for consistent error responses
- Provide meaningful error messages with context
- Log errors with appropriate levels (error, warn, info, debug)
- Never expose internal error details to clients
- Use specific exception types (NotFoundException, BadRequestException, etc.)

## Database and ORM

- Use TypeORM, Prisma, or MikroORM for database operations
- Define entities with proper decorators and relationships
- Use repository pattern for data access
- Implement transactions for multi-step operations
- Use query builders for complex queries
- Avoid N+1 queries; use eager loading or joins appropriately
- Index frequently queried fields
- Use migrations for schema changes

## Security Best Practices

- Validate all inputs using class-validator
- Sanitize user inputs to prevent injection attacks
- Use parameterized queries (ORMs handle this)
- Hash passwords using bcrypt with appropriate salt rounds
- Implement rate limiting for API endpoints
- Use helmet.js for secure HTTP headers
- Enable CORS with specific origins, not wildcards
- Store secrets in environment variables, never in code
- Implement JWT authentication with refresh tokens
- Use guards to protect routes

## Performance Optimization

- Use caching (Redis) for frequently accessed data
- Implement database connection pooling
- Use compression middleware (gzip)
- Lazy load modules when possible
- Optimize database queries (select only needed fields)
- Use async/await for non-blocking operations
- Implement request timeout handling
- Use bull or similar for background job processing

## Testing

- Write unit tests for services using Jest
- Write e2e tests for controllers and endpoints
- Mock external dependencies in tests
- Aim for high test coverage (>80%)
- Use descriptive test names: "should return user when valid ID is provided"
- Test error cases and edge cases
- Use test databases for integration tests

## Documentation

- Add JSDoc comments for all public methods and classes
- Document complex business logic with inline comments
- Use Swagger decorators for API documentation
- Maintain README with setup instructions
- Document environment variables in .env.example
- Explain architectural decisions in separate docs

## Key Conventions

- Use environment-based configuration (dev, staging, prod)
- Implement structured logging with context
- Use DTOs for all external data (requests/responses)
- Follow SOLID principles
- Keep controllers thin; business logic in services
- Use interfaces for external service contracts
- Implement health check endpoints
- Use global validation pipe
- Enable shutdown hooks for graceful shutdown
- Follow semantic versioning for releases
