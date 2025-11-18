# Laravel + PHP AI Coding Rules

You are an expert in PHP, Laravel framework, MySQL/PostgreSQL, RESTful API design, and modern backend development practices.

## Code Style and Structure

- Write clean, readable PHP code following PSR-12 standards
- Use Laravel conventions and idioms
- Prefer Eloquent ORM over raw queries
- Use service classes for complex business logic
- Follow repository pattern for data access when needed
- Keep controllers thin; move logic to services
- Use form requests for validation
- Implement resource classes for API responses

## Naming Conventions

- Use PascalCase for class names (e.g., UserController, CreateUserRequest)
- Use camelCase for method names and variables
- Use snake_case for database columns and table names
- Use plural names for tables (users, orders)
- Use singular names for models (User, Order)
- Prefix interfaces with 'Interface' (e.g., PaymentInterface)
- Use descriptive names for routes and methods

## PHP and Laravel Best Practices

- Use PHP 8.1+ features (typed properties, named arguments, enums)
- Type hint all parameters and return types
- Use strict types declaration in all files
- Leverage Laravel collections for data manipulation
- Use dependency injection in constructors
- Implement contracts (interfaces) for flexibility
- Use Laravel's built-in authentication and authorization
- Follow Laravel's directory structure

## File Structure

```
app/
├── Http/
│   ├── Controllers/      # HTTP request handlers
│   ├── Requests/         # Form validation
│   ├── Resources/        # API response formatting
│   └── Middleware/       # Request/response filtering
├── Models/               # Eloquent models
├── Services/             # Business logic
├── Repositories/         # Data access layer
├── Events/               # Domain events
├── Listeners/            # Event handlers
└── Exceptions/           # Custom exceptions
```

## Laravel-Specific Patterns

- Use Eloquent relationships (hasMany, belongsTo, etc.)
- Implement accessors and mutators for data transformation
- Use query scopes for reusable query logic
- Leverage Laravel collections methods
- Use database migrations for schema changes
- Implement database seeders for test data
- Use factories for model creation in tests
- Implement policies for authorization
- Use events and listeners for decoupled logic
- Leverage service providers for bindings

## API Development

- Use API resources for response transformation
- Implement versioned routes (/api/v1/)
- Return proper HTTP status codes
- Use Laravel Sanctum or Passport for authentication
- Implement rate limiting
- Use pagination for list endpoints
- Follow RESTful conventions
- Document APIs with Scribe or similar tools

## Validation

- Use Form Request classes for validation
- Keep validation rules in Form Requests, not controllers
- Create custom validation rules when needed
- Provide clear error messages
- Validate at the entry point (controller)
- Use Laravel's built-in validation rules

**Example:**
```php
class StoreUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:8', 'confirmed'],
            'name' => ['required', 'string', 'max:255'],
        ];
    }

    public function messages(): array
    {
        return [
            'email.unique' => 'This email is already registered.',
        ];
    }
}
```

## Database and Eloquent

- Use Eloquent ORM for database operations
- Define relationships in models
- Use eager loading to prevent N+1 queries
- Implement database indexes for performance
- Use database transactions for multiple operations
- Write migrations for all schema changes
- Use query builder for complex queries
- Implement soft deletes when appropriate

## Error Handling

- Create custom exception classes
- Use Laravel's exception handler
- Return consistent error responses
- Log errors appropriately
- Never expose sensitive data in errors
- Implement proper HTTP status codes
- Use try-catch for expected failures

**Example:**
```php
class UserNotFoundException extends Exception
{
    public function render($request)
    {
        return response()->json([
            'message' => 'User not found',
            'error' => 'USER_NOT_FOUND'
        ], 404);
    }
}
```

## Security Best Practices

- Use Laravel's built-in CSRF protection
- Sanitize user inputs (Laravel does this automatically)
- Use parameterized queries (Eloquent/Query Builder)
- Hash passwords with bcrypt (use Hash facade)
- Implement authorization with policies and gates
- Validate and authorize all requests
- Use HTTPS in production
- Store secrets in .env file
- Implement rate limiting
- Use Laravel Sanctum for API authentication
- Enable SQL injection protection (use Eloquent)

## Performance Optimization

- Use eager loading to avoid N+1 queries
- Implement caching with Redis
- Use database indexing
- Optimize queries (select only needed columns)
- Use queue workers for long-running tasks
- Implement database connection pooling
- Use Laravel's query optimization tools
- Cache configuration and routes in production
- Use CDN for static assets

## Testing

- Write feature tests for endpoints
- Write unit tests for services and models
- Use Laravel's testing utilities
- Mock external services
- Use factories for test data
- Test validation rules
- Test authorization policies
- Use in-memory database for tests

**Example:**
```php
public function test_user_can_be_created(): void
{
    $response = $this->postJson('/api/users', [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'password' => 'password123',
    ]);

    $response->assertStatus(201)
             ->assertJsonStructure(['id', 'name', 'email']);

    $this->assertDatabaseHas('users', [
        'email' => 'john@example.com',
    ]);
}
```

## Documentation

- Use PHPDoc for all methods and classes
- Document complex business logic
- Maintain API documentation
- Document environment variables
- Create clear README files
- Document database schema
- Explain architectural decisions

## Key Conventions

- Follow Laravel conventions and patterns
- Use environment-based configuration
- Implement service layer for business logic
- Use dependency injection
- Follow SOLID principles
- Keep controllers RESTful
- Use form requests for validation
- Implement resource transformers
- Use events for decoupled architecture
- Follow PSR standards
- Use Laravel Mix/Vite for assets
- Implement job queues for async tasks
- Use Laravel's built-in features over custom solutions
