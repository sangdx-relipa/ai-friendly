# Java + Spring Boot AI Coding Rules

You are an expert in Java, Spring Boot framework, Spring Security, Spring Data JPA, RESTful API design, microservices architecture, and backend development best practices.

## Code Style and Structure

- Write concise, technical Java code with accurate examples
- Use object-oriented and functional programming patterns appropriately
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isActive, hasPermission)
- Structure files: package declaration, imports, class annotations, class definition
- Follow Spring Boot layered architecture: Controller → Service → Repository
- Organize packages by feature/domain, not by layer

## Naming Conventions

- Use lowercase for package names (e.g., com.example.usermanagement)
- Use PascalCase for class names (e.g., UserService, CreateUserRequest)
- Use camelCase for method names and variables
- Use UPPER_SNAKE_CASE for constants (static final)
- Suffix controllers with Controller (e.g., UserController)
- Suffix services with Service (e.g., UserService)
- Suffix repositories with Repository (e.g., UserRepository)
- Suffix DTOs with Request/Response/Dto (e.g., CreateUserRequest, UserResponse)
- Suffix entities with Entity only if needed to distinguish from DTOs

## Spring Boot Specific Patterns

- Use @RestController for REST API controllers
- Use @Service for business logic classes
- Use @Repository for data access classes
- Use @Configuration for bean definitions and configuration
- Use constructor injection exclusively (not @Autowired field injection)
- Use @Transactional on service methods that modify data
- Use @ConfigurationProperties for type-safe externalized configuration
- Use Spring profiles for environment-specific configuration
- Use @Conditional annotations for conditional bean registration
- Leverage Spring Boot auto-configuration; override only when necessary

## Dependency Injection

- Always use constructor injection
- Make injected fields final
- Use Lombok @RequiredArgsConstructor to reduce boilerplate (if project uses Lombok)
- Inject interfaces, not implementations
- Use @Qualifier only when multiple implementations exist
- Keep constructor parameter count low (max 5-6; refactor if more)

```java
@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
}
```

## API Design

- Follow RESTful conventions for endpoint design
- Use proper HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Return appropriate HTTP status codes (200, 201, 204, 400, 401, 403, 404, 409, 500)
- Implement API versioning (e.g., /api/v1/users)
- Use Spring Data Pageable for pagination on list endpoints
- Use @RequestParam for filtering and sorting
- Use @PathVariable for resource identification
- Use ResponseEntity for explicit HTTP response control
- Document APIs using SpringDoc OpenAPI annotations (@Operation, @ApiResponse)

```java
@GetMapping("/users")
public ResponseEntity<Page<UserResponse>> getUsers(
    @RequestParam(required = false) String search,
    @PageableDefault(size = 20, sort = "createdAt") Pageable pageable
) {
    return ResponseEntity.ok(userService.findUsers(search, pageable));
}
```

## DTOs and Mapping

- Never expose JPA entities directly in API responses
- Create separate request and response DTOs
- Use records for DTOs (immutable, concise)
- Use Jakarta Bean Validation annotations on request DTOs
- Use MapStruct for entity-DTO mapping (or manual mapping methods)
- Keep mapping logic in dedicated mapper classes

```java
public record CreateUserRequest(
    @NotBlank @Size(max = 100) String name,
    @NotBlank @Email String email,
    @NotBlank @Size(min = 8, max = 100) String password
) {}

public record UserResponse(
    Long id,
    String name,
    String email,
    LocalDateTime createdAt
) {}
```

## Validation

- Use Jakarta Bean Validation annotations (@NotNull, @NotBlank, @Size, @Email, etc.)
- Use @Valid or @Validated on controller method parameters
- Create custom validators for complex business rules
- Implement ConstraintValidator for reusable validations
- Validate at the API boundary (controllers), not deep in services
- Return field-level validation errors in error responses

## Error Handling

- Use @ControllerAdvice with @ExceptionHandler for global error handling
- Create custom exception classes for domain errors
- Use ProblemDetail (RFC 7807) for standardized error responses
- Map exceptions to appropriate HTTP status codes
- Provide meaningful error messages with context
- Log errors at appropriate levels (WARN for client errors, ERROR for server errors)
- Never expose stack traces or internal details to clients

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
        ProblemDetail detail = ProblemDetail.forStatusAndDetail(
            HttpStatus.NOT_FOUND, ex.getMessage()
        );
        detail.setTitle("Resource Not Found");
        return detail;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ProblemDetail handleValidation(MethodArgumentNotValidException ex) {
        ProblemDetail detail = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
        detail.setTitle("Validation Failed");
        Map<String, String> errors = ex.getBindingResult().getFieldErrors().stream()
            .collect(Collectors.toMap(
                FieldError::getField,
                FieldError::getDefaultMessage,
                (a, b) -> a
            ));
        detail.setProperty("fieldErrors", errors);
        return detail;
    }
}
```

## Database and JPA

- Use Spring Data JPA repositories (extend JpaRepository or JpaSpecificationExecutor)
- Define entities with proper JPA annotations (@Entity, @Table, @Column)
- Map relationships correctly (@OneToMany, @ManyToOne, @ManyToMany)
- Use FetchType.LAZY by default; use @EntityGraph or JOIN FETCH for eager loading
- Prevent N+1 queries with JOIN FETCH, @EntityGraph, or projections
- Use Flyway or Liquibase for database migrations
- Use @Transactional on service methods (read-only where applicable)
- Configure HikariCP connection pool appropriately
- Use @CreatedDate, @LastModifiedDate for auditing
- Use specifications or Criteria API for dynamic queries

```java
@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orders = new ArrayList<>();
}
```

## Spring Security

- Configure security via SecurityFilterChain bean (not extending WebSecurityConfigurerAdapter)
- Use BCryptPasswordEncoder for password hashing
- Implement JWT authentication with stateless sessions
- Use @PreAuthorize for method-level authorization
- Configure CORS with specific allowed origins
- Enable CSRF protection for browser-based clients (disable for stateless APIs)
- Use SecurityContext for accessing authenticated user
- Implement custom UserDetailsService for user loading
- Configure security headers (Content-Security-Policy, X-Frame-Options, etc.)

```java
@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/actuator/health").permitAll()
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}
```

## Caching

- Use Spring Cache abstraction (@Cacheable, @CacheEvict, @CachePut)
- Configure cache provider (Redis for distributed, Caffeine for local)
- Cache frequently accessed, rarely changed data
- Set appropriate TTL (time-to-live) for cached entries
- Use cache keys that are meaningful and unique
- Evict cache on data mutations
- Monitor cache hit rates

## Async and Background Processing

- Use @Async for non-blocking operations
- Configure custom TaskExecutor for async thread pools
- Use @Scheduled for recurring tasks
- Use Spring Events for decoupled communication
- Consider message queues (RabbitMQ, Kafka) for distributed processing
- Use CompletableFuture for composing async operations

## Testing

- Write unit tests for services using JUnit 5 + Mockito
- Write integration tests with @SpringBootTest
- Use slice tests for focused testing:
  - @WebMvcTest for controllers
  - @DataJpaTest for repositories
  - @JsonTest for serialization
- Use MockMvc for testing REST endpoints
- Use Testcontainers for database integration tests
- Use @TestConfiguration for test-specific bean overrides
- Use @MockBean and @SpyBean for mocking Spring beans
- Aim for >80% test coverage
- Test error cases and edge cases

```java
@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void shouldReturnUserWhenValidId() throws Exception {
        var user = new UserResponse(1L, "John", "john@example.com", LocalDateTime.now());
        when(userService.findById(1L)).thenReturn(user);

        mockMvc.perform(get("/api/v1/users/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("John"));
    }
}
```

## Observability

- Enable Spring Boot Actuator for health, metrics, and info endpoints
- Configure health indicators for dependencies (database, cache, external services)
- Use SLF4J with Logback for structured logging
- Include correlation IDs in logs for request tracing (MDC)
- Use Micrometer for custom business metrics
- Configure log levels per environment (DEBUG for dev, INFO/WARN for prod)
- Integrate with monitoring systems (Prometheus, Grafana, ELK)

## Configuration

- Use application.yml with Spring profiles (application-dev.yml, application-prod.yml)
- Use @ConfigurationProperties for type-safe configuration classes
- Validate configuration with @Validated and Bean Validation annotations
- Use environment variables for secrets (${DB_PASSWORD})
- Provide sensible defaults in application.yml
- Document all configuration properties

```java
@Configuration
@ConfigurationProperties(prefix = "app")
@Validated
public class AppProperties {
    @NotBlank
    private String name;

    @Positive
    private int maxRetries = 3;

    @Valid
    private JwtProperties jwt = new JwtProperties();

    // getters and setters

    public static class JwtProperties {
        @NotBlank
        private String secret;
        @Positive
        private long expirationMs = 86400000;
        // getters and setters
    }
}
```

## Project Structure

```
project/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/project/
│   │   │       ├── ProjectApplication.java       # Entry point
│   │   │       ├── config/                       # Configuration
│   │   │       │   ├── SecurityConfig.java
│   │   │       │   ├── CacheConfig.java
│   │   │       │   └── AppProperties.java
│   │   │       ├── user/                         # Feature: User
│   │   │       │   ├── UserController.java
│   │   │       │   ├── UserService.java
│   │   │       │   ├── UserRepository.java
│   │   │       │   ├── User.java                 # Entity
│   │   │       │   ├── CreateUserRequest.java    # Request DTO
│   │   │       │   ├── UserResponse.java         # Response DTO
│   │   │       │   ├── UserMapper.java           # DTO mapper
│   │   │       │   └── UserNotFoundException.java
│   │   │       ├── order/                        # Feature: Order
│   │   │       │   └── ...
│   │   │       └── common/                       # Shared utilities
│   │   │           ├── exception/
│   │   │           │   └── GlobalExceptionHandler.java
│   │   │           └── security/
│   │   │               └── JwtAuthFilter.java
│   │   └── resources/
│   │       ├── application.yml
│   │       ├── application-dev.yml
│   │       ├── application-prod.yml
│   │       └── db/migration/                     # Flyway migrations
│   └── test/
│       ├── java/
│       │   └── com/example/project/
│       │       └── user/
│       │           ├── UserControllerTest.java
│       │           └── UserServiceTest.java
│       └── resources/
│           └── application-test.yml
├── pom.xml or build.gradle
├── Dockerfile
└── README.md
```

## Deployment

- Use Docker or Spring Boot Buildpacks for containerization
- Configure graceful shutdown (server.shutdown=graceful)
- Expose health check endpoints for orchestrators
- Use profiles for environment-specific configuration
- Log to stdout/stderr for container environments
- Set appropriate JVM memory flags (-Xmx, -Xms)
- Use multi-stage Docker builds for smaller images

## Avoid

- Don't use field injection (@Autowired on fields)
- Don't expose JPA entities directly in API responses
- Don't use @ComponentScan with broad base packages
- Don't catch and swallow exceptions silently
- Don't use raw types or suppress warnings without justification
- Don't hardcode configuration values
- Don't use System.out.println (use logging)
- Don't create circular dependencies between beans
- Don't put business logic in controllers
- Don't use @Transactional on controller methods

## Best Practices

- Use constructor injection for all dependencies
- Keep controllers thin; delegate to services
- Use DTOs for all external data transfer
- Configure connection pooling appropriately
- Use database migrations (never auto-ddl in production)
- Implement proper health checks
- Use Spring Boot Actuator for monitoring
- Follow semantic versioning for releases
- Configure graceful shutdown
- Use Spring Events for decoupled communication
- Implement idempotency for mutation endpoints
- Use optimistic locking (@Version) for concurrent updates
