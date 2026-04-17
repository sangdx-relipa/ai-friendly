# Java AI Coding Rules

You are an expert in Java, object-oriented design, design patterns, clean code principles, type safety, testing, and Java best practices.

## Code Style and Structure

- Write concise, technical Java code with accurate examples
- Follow Google Java Style Guide or project-specific conventions
- Use object-oriented and functional programming patterns appropriately
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isValid, hasPermission)
- Structure files logically: package declaration, imports, class definition
- Keep classes focused on a single responsibility

## Naming Conventions

- Use lowercase for package names (e.g., com.example.usermanagement)
- Use PascalCase for class and interface names (e.g., UserService, DataProcessor)
- Use camelCase for method names and variables (e.g., getUserById, userName)
- Use UPPER_SNAKE_CASE for constants (static final) (e.g., MAX_RETRY_COUNT)
- Boolean variables should use is, has, can, should prefixes
- Treat acronyms as words in names (e.g., HttpUrl, not HTTPUrl)
- Use descriptive names that reveal intent (avoid abbreviations unless widely known)
- No single-letter variable names except for loop counters (i, j, k)

## Type Safety and Generics

- Use generics everywhere; never use raw types
- Use bounded wildcards appropriately (? extends T for producers, ? super T for consumers)
- Use Optional<T> for potentially absent return values; never return null
- Use @Nullable and @NonNull annotations where applicable
- Avoid casting; use polymorphism and generics instead
- Use type inference with var for local variables when the type is obvious
- Leverage sealed classes and interfaces for type-safe hierarchies (Java 17+)

## Modern Java Features (17+)

- Use records for immutable data carriers
- Use sealed classes for restricted type hierarchies
- Use pattern matching for instanceof checks
- Use text blocks for multi-line strings
- Use switch expressions instead of switch statements
- Use local variable type inference (var) when type is clear from context
- Use enhanced for-each and Stream API for collection processing
- Consider virtual threads for concurrent I/O operations (Java 21+)

## Classes and Object-Oriented Design

- Follow SOLID principles strictly
- Use records for data carriers; use classes for behavior
- Implement toString(), equals(), and hashCode() consistently (IDE-generated or records)
- Prefer composition over inheritance
- Use interfaces to define contracts and enable polymorphism
- Make classes immutable where possible (final fields, no setters)
- Use the Builder pattern for objects with many parameters
- Keep constructors simple; use static factory methods for complex creation
- Use dependency injection for loose coupling

## Methods

- Keep methods small and focused (max 20-30 lines)
- One method should do one thing (Single Responsibility Principle)
- Return early to avoid deep nesting
- Limit parameters to 3-4; use parameter objects for more
- Use method overloading judiciously; prefer descriptive names
- Prefer static factory methods over constructors (of(), from(), create())
- Use Optional for return types that may not have a value

## Collections and Streams

- Choose appropriate collection types (List for ordered, Set for unique, Map for key-value)
- Use unmodifiable collections (List.of(), Map.of(), Collections.unmodifiable*)
- Use Streams for data transformations and aggregations
- Keep stream pipelines readable (one operation per line)
- Use appropriate Collectors (toList(), toMap(), groupingBy(), etc.)
- Never mutate collections during iteration
- Use diamond operator (<>) for type inference
- Prefer List.copyOf() and Map.copyOf() for defensive copies

## Error Handling

- Use specific exception types; avoid catching Exception or Throwable
- Create custom exception classes for domain-specific errors
- Custom exceptions should extend RuntimeException for unchecked, Exception for checked
- Provide meaningful error messages with context
- Use try-with-resources for all AutoCloseable resources
- Never leave catch blocks empty; at minimum log the exception
- Use checked exceptions sparingly (only for recoverable conditions)
- Use unchecked exceptions for programming errors
- Log exceptions at the appropriate level with full stack traces
- Don't use exceptions for flow control

## Concurrency

- Use java.util.concurrent utilities over manual synchronization
- Prefer immutable objects for thread safety
- Use CompletableFuture for async operations and composition
- Use ExecutorService for thread pool management
- Use AtomicInteger, AtomicReference, etc. for simple atomic operations
- Avoid excessive synchronization; use concurrent collections (ConcurrentHashMap)
- Use ReentrantLock when synchronized blocks are insufficient
- Consider virtual threads for I/O-bound operations (Java 21+)

## Testing

- Write unit tests using JUnit 5
- Use descriptive test method names: shouldReturnUserWhenValidIdProvided
- Follow AAA pattern (Arrange, Act, Assert)
- Use @BeforeEach/@AfterEach for setup/teardown
- Mock external dependencies using Mockito
- Aim for high test coverage (>80%)
- Use @ParameterizedTest for testing multiple inputs
- Test error cases, edge cases, and boundary conditions
- Use AssertJ for fluent, readable assertions
- Keep tests independent and repeatable

## Documentation

- Add Javadoc for all public classes, interfaces, and methods
- Include @param, @return, and @throws tags
- Add package-level documentation in package-info.java
- Document complex algorithms with inline comments
- Keep comments up-to-date with code changes
- Write self-documenting code that minimizes need for comments
- Use meaningful names instead of comments where possible

## Performance Optimization

- Use StringBuilder for string concatenation in loops
- Use lazy initialization for expensive objects
- Cache results of expensive computations
- Avoid unnecessary object creation (especially in loops)
- Use primitive types over wrapper types when possible
- Use Streams efficiently; avoid unnecessary intermediate collections
- Profile before optimizing (use JMH, VisualVM, or async-profiler)
- Use appropriate initial capacity for collections

## Logging

- Use SLF4J as the logging facade with Logback or Log4j2
- Declare loggers as: private static final Logger log = LoggerFactory.getLogger(ClassName.class)
- Use parameterized logging: log.info("User {} created", userId)
- Use appropriate log levels (TRACE, DEBUG, INFO, WARN, ERROR)
- Don't log sensitive information (passwords, tokens, PII)
- Use MDC (Mapped Diagnostic Context) for request-scoped data
- Check log level before expensive log operations: if (log.isDebugEnabled())

## Configuration Management

- Use environment variables or property files for configuration
- Never hardcode secrets or credentials
- Validate configuration on application startup
- Provide sensible defaults for optional configuration
- Use profiles for different environments (dev, staging, prod)
- Keep configuration separate from code
- Use constants for magic numbers and strings

## Security Best Practices

- Validate all external inputs
- Never hardcode secrets or credentials
- Use PreparedStatement for all database queries (prevent SQL injection)
- Use SecureRandom, not Random, for security-sensitive operations
- Sanitize user inputs to prevent injection attacks
- Avoid serialization of sensitive data
- Use OWASP Dependency-Check for vulnerability scanning
- Implement proper authentication and authorization
- Use HTTPS for network communications
- Follow the principle of least privilege

## Project Structure

```
project/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/project/
│   │   │       ├── Application.java          # Entry point
│   │   │       ├── config/                   # Configuration classes
│   │   │       │   └── AppConfig.java
│   │   │       ├── model/                    # Domain models
│   │   │       │   └── User.java
│   │   │       ├── service/                  # Business logic
│   │   │       │   ├── UserService.java
│   │   │       │   └── impl/
│   │   │       │       └── UserServiceImpl.java
│   │   │       ├── repository/               # Data access
│   │   │       │   └── UserRepository.java
│   │   │       ├── exception/                # Custom exceptions
│   │   │       │   └── UserNotFoundException.java
│   │   │       └── util/                     # Utility classes
│   │   │           └── ValidationUtils.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       ├── java/
│       │   └── com/example/project/
│       │       └── service/
│       │           └── UserServiceTest.java
│       └── resources/
├── pom.xml or build.gradle
└── README.md
```

## Dependencies Management

- Use Maven (pom.xml) or Gradle (build.gradle) for dependency management
- Pin dependency versions for reproducibility
- Use BOM (Bill of Materials) for version alignment
- Separate test dependencies (test scope)
- Keep dependencies minimal and up-to-date
- Use OWASP Dependency-Check or Snyk for vulnerability scanning
- Use dependency management section for multi-module projects

## Common Patterns

### Record (Data Carrier)
```java
public record UserDto(
    Long id,
    String name,
    String email
) {
    public UserDto {
        Objects.requireNonNull(name, "name must not be null");
        Objects.requireNonNull(email, "email must not be null");
    }
}
```

### Builder Pattern
```java
public class UserRequest {
    private final String name;
    private final String email;
    private final int age;

    private UserRequest(Builder builder) {
        this.name = builder.name;
        this.email = builder.email;
        this.age = builder.age;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private String name;
        private String email;
        private int age;

        public Builder name(String name) { this.name = name; return this; }
        public Builder email(String email) { this.email = email; return this; }
        public Builder age(int age) { this.age = age; return this; }

        public UserRequest build() {
            return new UserRequest(this);
        }
    }
}
```

### Custom Exception
```java
public class UserNotFoundException extends RuntimeException {
    private final Long userId;

    public UserNotFoundException(Long userId) {
        super("User not found with id: " + userId);
        this.userId = userId;
    }

    public Long getUserId() {
        return userId;
    }
}
```

### Optional Usage
```java
public Optional<User> findById(Long id) {
    return Optional.ofNullable(userMap.get(id));
}

// Usage
String name = userService.findById(id)
    .map(User::name)
    .orElseThrow(() -> new UserNotFoundException(id));
```

## Anti-Patterns to Avoid

- Don't use raw types (List instead of List<String>)
- Don't leave catch blocks empty
- Don't use wildcard imports (import java.util.*)
- Avoid God classes (>500 lines)
- Avoid long methods (>30 lines)
- Don't use magic numbers (use named constants)
- Don't use mutable static fields
- Don't expose fields directly (use accessors or records)
- Don't return null (use Optional or empty collections)
- Don't use exceptions for flow control
- Don't catch and re-throw without adding context
- Avoid deep inheritance hierarchies (prefer composition)

## Key Principles

- **Favor immutability** - Use final, records, and unmodifiable collections
- **Program to interfaces** - Depend on abstractions, not implementations
- **Fail fast** - Validate inputs early and throw meaningful exceptions
- **Keep it simple** - Prefer straightforward solutions over clever ones
- **Don't repeat yourself** - Eliminate duplication through proper abstractions
- **Single Responsibility** - Each class and method does one thing well
- **Composition over inheritance** - Build flexible designs with delegation
- **Defensive programming** - Validate at boundaries, trust within
