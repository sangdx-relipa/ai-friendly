# Java Implementation Checklist

Use this checklist to verify that your implementation follows all AI-friendly coding standards for Java.

## Setup & Configuration
- [ ] Java 17+ (LTS) used
- [ ] Build tool configured (Maven or Gradle)
- [ ] Code formatter configured (Google Java Format or Checkstyle)
- [ ] Static analysis configured (SpotBugs, PMD, or SonarQube)
- [ ] Linter configured (Checkstyle)
- [ ] .env or application properties for environment variables
- [ ] .editorconfig present for consistent formatting
- [ ] CI/CD pipeline configured

## Code Style
- [ ] Follows Google Java Style Guide or project conventions
- [ ] Consistent formatting applied
- [ ] Line length appropriate (100-120 characters)
- [ ] Proper indentation (4 spaces for blocks, 8 for continuation)
- [ ] Braces used for all control structures (even single-line)
- [ ] Blank lines used appropriately between methods and logical sections
- [ ] No wildcard imports (import java.util.*)

## Naming Conventions
- [ ] camelCase for methods and variables
- [ ] PascalCase for class and interface names
- [ ] UPPER_SNAKE_CASE for constants (static final)
- [ ] Descriptive names that reveal intent
- [ ] Boolean variables use is, has, can, should prefixes
- [ ] Package names are all lowercase
- [ ] No single-letter names (except loop counters)
- [ ] Acronyms treated as words (e.g., HttpUrl, not HTTPUrl)

## Type Safety
- [ ] No raw types used (use generics everywhere)
- [ ] Bounded wildcards used appropriately (? extends T, ? super T)
- [ ] Optional<T> used for nullable return values
- [ ] No null returns from methods (use Optional or empty collections)
- [ ] @Nullable and @NonNull annotations used where applicable
- [ ] Generic types properly parameterized
- [ ] Avoid casting; use polymorphism instead

## Classes and OOP
- [ ] SOLID principles followed
- [ ] Classes have single responsibility
- [ ] Records used for immutable data carriers (Java 16+)
- [ ] Sealed classes used for restricted hierarchies (Java 17+)
- [ ] toString(), equals(), and hashCode() implemented consistently
- [ ] Composition preferred over inheritance
- [ ] Interfaces used to define contracts
- [ ] Immutable classes where possible (final fields, no setters)
- [ ] Builder pattern for objects with many parameters

## Methods
- [ ] Methods are small and focused (<30 lines)
- [ ] Single Responsibility Principle followed
- [ ] Return early to avoid deep nesting
- [ ] No more than 3-4 parameters (use objects for more)
- [ ] Varargs used sparingly
- [ ] Method overloading used judiciously
- [ ] Static factory methods preferred over constructors where appropriate

## Collections and Streams
- [ ] Appropriate collection types chosen (List, Set, Map)
- [ ] Unmodifiable collections used where possible (List.of(), Map.of())
- [ ] Streams used for data transformations
- [ ] Stream pipelines kept readable (one operation per line)
- [ ] Collectors used appropriately
- [ ] No mutation of collections during iteration
- [ ] Diamond operator used for type inference

## Error Handling
- [ ] Specific exception types used (not catching Exception)
- [ ] Custom exceptions for domain errors
- [ ] Exceptions inherit from appropriate base classes
- [ ] Meaningful error messages provided with context
- [ ] try-with-resources used for AutoCloseable resources
- [ ] No empty catch blocks
- [ ] Checked exceptions used sparingly
- [ ] Unchecked exceptions for programming errors
- [ ] Logging used for error tracking

## Concurrency
- [ ] Thread safety considered for shared state
- [ ] java.util.concurrent used over manual synchronization
- [ ] Immutable objects preferred for thread safety
- [ ] CompletableFuture used for async operations
- [ ] ExecutorService used for thread management
- [ ] Atomic types used for simple counters
- [ ] No unnecessary synchronization
- [ ] Virtual threads considered (Java 21+)

## Testing
- [ ] Unit tests written (JUnit 5)
- [ ] Test coverage >80%
- [ ] Descriptive test names (shouldReturnUserWhenValidId)
- [ ] AAA pattern followed (Arrange, Act, Assert)
- [ ] @BeforeEach/@AfterEach used for setup/teardown
- [ ] External dependencies mocked (Mockito)
- [ ] Edge cases tested
- [ ] Error conditions tested
- [ ] Tests are independent and repeatable
- [ ] Parameterized tests for multiple inputs

## Documentation
- [ ] Javadoc on all public classes and methods
- [ ] @param, @return, @throws documented
- [ ] Package-level documentation (package-info.java)
- [ ] Complex algorithms explained with inline comments
- [ ] README with setup and build instructions
- [ ] Architecture decisions documented

## Code Quality
- [ ] Passes static analysis (SpotBugs, PMD)
- [ ] Passes style checking (Checkstyle)
- [ ] No code duplication (DRY principle)
- [ ] No deeply nested code (max 3-4 levels)
- [ ] No magic numbers (use named constants)
- [ ] No unused imports or variables
- [ ] Warnings addressed (not suppressed without reason)
- [ ] @SuppressWarnings used only with justification

## Performance
- [ ] Appropriate data structures chosen
- [ ] StringBuilder used for string concatenation in loops
- [ ] Lazy initialization for expensive objects
- [ ] Caching used for repeated computations
- [ ] No unnecessary object creation
- [ ] Streams used efficiently (avoid intermediate collections)
- [ ] Profiling done if performance critical

## Logging
- [ ] SLF4J with Logback/Log4j2 used (not System.out.println)
- [ ] Appropriate log levels used (TRACE, DEBUG, INFO, WARN, ERROR)
- [ ] Logger instances per class (private static final)
- [ ] Parameterized logging used (log.info("User {}", userId))
- [ ] No sensitive data in logs
- [ ] Structured logging for production

## Configuration
- [ ] Environment variables or property files for configuration
- [ ] No hardcoded secrets or credentials
- [ ] Configuration validated on startup
- [ ] Sensible defaults provided
- [ ] Configuration separate from code
- [ ] Profiles for different environments

## Security
- [ ] All user inputs validated
- [ ] No hardcoded credentials
- [ ] Parameterized queries for databases (PreparedStatement)
- [ ] No serialization of sensitive data
- [ ] Dependencies scanned for vulnerabilities (OWASP Dependency-Check)
- [ ] Secure random used (SecureRandom, not Random)
- [ ] Input sanitization for preventing injection attacks

## Dependencies
- [ ] pom.xml or build.gradle properly configured
- [ ] Dependencies pinned to specific versions
- [ ] Test dependencies separated (test scope)
- [ ] No unused dependencies
- [ ] Dependency vulnerability scanning configured
- [ ] BOM (Bill of Materials) used for version management

## Project Structure
- [ ] Standard Maven/Gradle directory layout
- [ ] Logical package organization by feature or layer
- [ ] Clear separation of concerns
- [ ] Configuration in dedicated package
- [ ] Tests mirror source structure
- [ ] Resources in proper directories

## Modern Java Features (17+)
- [ ] Records for data carriers
- [ ] Sealed classes for type hierarchies
- [ ] Pattern matching for instanceof
- [ ] Text blocks for multi-line strings
- [ ] Switch expressions used
- [ ] Local variable type inference (var) used judiciously
- [ ] Enhanced for-each and Stream API preferred

## Anti-Patterns Avoided
- [ ] No raw types
- [ ] No empty catch blocks
- [ ] No wildcard imports
- [ ] No God classes (>500 lines)
- [ ] No long methods (>30 lines)
- [ ] No magic numbers
- [ ] No mutable static fields
- [ ] No public fields (use accessors)
- [ ] No returning null (use Optional)

---

**Verification Status:**
- [ ] All critical items checked
- [ ] All high-priority items checked
- [ ] Medium/low-priority items reviewed
- [ ] Code ready for review/deployment
