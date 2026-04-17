# Java + Spring Boot Implementation Checklist

Use this checklist to verify that your implementation follows all AI-friendly coding standards.

## Setup & Configuration
- [ ] Java 17+ (LTS) used
- [ ] Spring Boot 3.x used
- [ ] Build tool configured (Maven or Gradle)
- [ ] application.yml/properties configured per environment
- [ ] Spring profiles configured (dev, staging, prod)
- [ ] Swagger/OpenAPI documentation configured (SpringDoc)
- [ ] Actuator enabled for health checks and metrics
- [ ] Code formatter configured (Google Java Format or Checkstyle)
- [ ] Static analysis configured (SpotBugs, PMD, or SonarQube)

## Code Structure
- [ ] Follows Spring Boot layered architecture (Controller/Service/Repository)
- [ ] Files organized by feature/domain (not by layer)
- [ ] DTOs defined for all request/response data
- [ ] Entities defined with proper JPA annotations
- [ ] Clear separation of concerns between layers
- [ ] Configuration classes in dedicated package

## Spring-Specific Patterns
- [ ] @RestController used for REST endpoints
- [ ] @Service used for business logic classes
- [ ] @Repository used for data access classes
- [ ] @Configuration used for bean definitions
- [ ] Constructor injection used (not field injection)
- [ ] @Transactional used appropriately
- [ ] @Value or @ConfigurationProperties for externalized config
- [ ] Bean scopes used correctly (singleton default)

## API Design
- [ ] RESTful endpoint naming conventions
- [ ] Proper HTTP methods used (GET, POST, PUT, PATCH, DELETE)
- [ ] Correct HTTP status codes returned (200, 201, 204, 400, 401, 404, 500)
- [ ] API versioning implemented (/api/v1/)
- [ ] Pagination implemented for list endpoints (Spring Data Pageable)
- [ ] Query parameters used for filtering/sorting
- [ ] Path variables used for resource identification
- [ ] ResponseEntity used for explicit HTTP response control

## DTOs and Validation
- [ ] Separate DTOs for request/response (not exposing entities)
- [ ] Jakarta Bean Validation annotations used (@NotNull, @Size, @Email, etc.)
- [ ] @Valid or @Validated on controller parameters
- [ ] Custom validators for complex validation
- [ ] MapStruct or manual mapping between DTOs and entities
- [ ] No data duplication (use inheritance or composition)

## Error Handling
- [ ] @ControllerAdvice with @ExceptionHandler for global error handling
- [ ] Custom exception classes defined
- [ ] ProblemDetail (RFC 7807) for error responses
- [ ] Meaningful error messages provided with context
- [ ] Consistent error response format across all endpoints
- [ ] Appropriate HTTP status codes for different error types
- [ ] Validation errors return field-level details

## Database and JPA
- [ ] Spring Data JPA repositories used
- [ ] Entity relationships mapped correctly (@OneToMany, @ManyToOne, etc.)
- [ ] Fetch types chosen appropriately (LAZY preferred, EAGER when needed)
- [ ] N+1 queries prevented (JOIN FETCH, @EntityGraph, or projections)
- [ ] Database indexes on frequently queried fields
- [ ] Flyway or Liquibase for database migrations
- [ ] @Transactional used for multi-step operations
- [ ] Connection pooling configured (HikariCP)
- [ ] Named queries or Criteria API for complex queries
- [ ] Auditing configured (@CreatedDate, @LastModifiedDate)

## Security
- [ ] Spring Security configured
- [ ] All inputs validated with Bean Validation
- [ ] Passwords hashed with BCryptPasswordEncoder
- [ ] JWT or OAuth2 authentication implemented
- [ ] Method-level security with @PreAuthorize or @Secured
- [ ] CORS configured properly (specific origins)
- [ ] CSRF protection configured
- [ ] Rate limiting configured
- [ ] Security headers configured
- [ ] Secrets in environment variables (not in properties files)

## Performance
- [ ] Caching implemented (@Cacheable with Redis or Caffeine)
- [ ] Database connection pooling configured (HikariCP)
- [ ] Response compression enabled (server.compression.enabled)
- [ ] Database queries optimized (projections, pagination)
- [ ] Async operations for non-blocking tasks (@Async)
- [ ] Lazy loading configured appropriately
- [ ] Spring Data JPA specifications for dynamic queries

## Testing
- [ ] Unit tests for services (JUnit 5 + Mockito)
- [ ] Integration tests with @SpringBootTest
- [ ] Slice tests (@WebMvcTest, @DataJpaTest)
- [ ] Test coverage >80%
- [ ] MockMvc for controller tests
- [ ] Testcontainers for database integration tests
- [ ] @TestConfiguration for test-specific beans
- [ ] Descriptive test names (shouldReturnUserWhenValidId)
- [ ] Edge cases and error conditions tested

## Observability
- [ ] Spring Boot Actuator configured
- [ ] Health check endpoint enabled (/actuator/health)
- [ ] Metrics endpoint enabled (/actuator/metrics)
- [ ] Structured logging with SLF4J + Logback
- [ ] Correlation IDs for request tracing
- [ ] Micrometer metrics for custom business metrics
- [ ] Log levels configured per environment

## Documentation
- [ ] Javadoc on all public methods and classes
- [ ] OpenAPI/Swagger annotations on endpoints
- [ ] README with setup and build instructions
- [ ] application.yml documented with comments
- [ ] API documentation auto-generated (SpringDoc OpenAPI)
- [ ] Architecture decisions documented

## Configuration Management
- [ ] Externalized configuration (application.yml)
- [ ] @ConfigurationProperties for type-safe configuration
- [ ] Spring profiles for environment-specific settings
- [ ] Secrets managed via environment variables or vault
- [ ] Configuration validated on startup (@Validated)
- [ ] Sensible defaults provided

## Dependencies
- [ ] pom.xml or build.gradle properly configured
- [ ] Spring Boot BOM for version management
- [ ] Dependencies pinned to specific versions
- [ ] Test dependencies in test scope
- [ ] No unused dependencies
- [ ] Dependency vulnerability scanning configured

## Project Structure
- [ ] Standard Spring Boot directory layout
- [ ] Feature-based package organization
- [ ] Proper @ComponentScan scope
- [ ] Application entry point with @SpringBootApplication
- [ ] Tests mirror source structure
- [ ] Resources organized (static, templates, migrations)

## Deployment
- [ ] Docker support (Dockerfile or Buildpacks)
- [ ] Graceful shutdown configured (server.shutdown=graceful)
- [ ] Health checks for container orchestration
- [ ] Environment-specific configuration via profiles
- [ ] Logging configured for container environments (stdout)

---

**Verification Status:**
- [ ] All critical items checked
- [ ] All high-priority items checked
- [ ] Medium/low-priority items reviewed
- [ ] Code ready for review/deployment
