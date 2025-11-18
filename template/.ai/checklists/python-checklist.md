# Python Implementation Checklist

Use this checklist to verify that your implementation follows all AI-friendly coding standards for Python.

## Setup & Configuration
- [ ] Python 3.9+ used
- [ ] Virtual environment configured (venv/virtualenv/conda)
- [ ] Type checking enabled (mypy configured)
- [ ] Code formatter configured (Black)
- [ ] Import sorter configured (isort)
- [ ] Linter configured (pylint/flake8)
- [ ] requirements.txt or pyproject.toml present
- [ ] .env.example file for environment variables

## Code Style (PEP 8)
- [ ] Follows PEP 8 style guide
- [ ] Code formatted with Black
- [ ] Imports sorted with isort
- [ ] Line length appropriate (88-100 characters)
- [ ] No mixing of tabs and spaces
- [ ] Proper indentation (4 spaces)
- [ ] Blank lines used appropriately (2 for top-level, 1 for methods)

## Naming Conventions
- [ ] snake_case for functions and variables
- [ ] PascalCase for class names
- [ ] UPPER_SNAKE_CASE for constants
- [ ] Descriptive names that reveal intent
- [ ] Boolean variables use is_, has_, can_ prefixes
- [ ] Private methods prefixed with underscore
- [ ] No single-letter names (except in comprehensions/loops)

## Type Hints
- [ ] All functions have type hints (arguments and return types)
- [ ] No usage of 'Any' type (or minimal with justification)
- [ ] Optional[] used for nullable values
- [ ] Union[] or | used for multiple types
- [ ] Generic types properly annotated (List, Dict, Tuple, Set)
- [ ] Complex types use TypeAlias
- [ ] Custom types documented

## Import Organization
- [ ] Imports grouped (stdlib, third-party, local)
- [ ] Absolute imports preferred over relative
- [ ] No wildcard imports (from x import *)
- [ ] One import per line
- [ ] Imports sorted alphabetically within groups
- [ ] Unused imports removed

## Functions and Methods
- [ ] Functions are small and focused (<30 lines)
- [ ] Single Responsibility Principle followed
- [ ] Type hints for all parameters and returns
- [ ] Docstrings for all public functions
- [ ] No mutable default arguments
- [ ] Return early to avoid deep nesting
- [ ] Pure functions when possible (no side effects)

## Classes and OOP
- [ ] SOLID principles followed
- [ ] Classes have single responsibility
- [ ] Dataclasses used for simple data containers
- [ ] __str__ and __repr__ implemented
- [ ] @property used for computed attributes
- [ ] Context managers for resource management
- [ ] ABC used for defining interfaces
- [ ] Composition preferred over inheritance

## Error Handling
- [ ] Specific exception types used (not bare except)
- [ ] Custom exceptions for domain errors
- [ ] Exceptions inherit from appropriate base classes
- [ ] Meaningful error messages provided
- [ ] try-except-else-finally used appropriately
- [ ] Exceptions documented in docstrings
- [ ] No silent exception suppression
- [ ] Logging used for error tracking

## Data Structures
- [ ] Built-in types used appropriately
- [ ] collections module used for specialized containers
- [ ] dataclasses/NamedTuple for structured data
- [ ] Sets used for membership testing
- [ ] Comprehensions used for transformations
- [ ] enumerate() instead of range(len())
- [ ] zip() for parallel iteration

## File I/O and Resources
- [ ] Context managers (with statement) for file operations
- [ ] pathlib.Path used for file paths
- [ ] Encoding specified explicitly (utf-8)
- [ ] Error handling for file operations
- [ ] Resources properly closed
- [ ] Appropriate file modes used

## Testing
- [ ] Unit tests written (pytest/unittest)
- [ ] Test coverage >80%
- [ ] Descriptive test names
- [ ] AAA pattern followed (Arrange, Act, Assert)
- [ ] Fixtures used for setup/teardown
- [ ] External dependencies mocked
- [ ] Edge cases tested
- [ ] Error conditions tested
- [ ] Tests are independent

## Documentation
- [ ] Module-level docstrings present
- [ ] Class docstrings present
- [ ] Function/method docstrings (Google/NumPy style)
- [ ] Parameters documented
- [ ] Return values documented
- [ ] Exceptions documented
- [ ] Type hints as inline documentation
- [ ] README.md with setup instructions
- [ ] .env.example file present

## Code Quality
- [ ] Passes linting (pylint/flake8)
- [ ] Passes type checking (mypy)
- [ ] No code duplication (DRY principle)
- [ ] Functions under 30 lines
- [ ] No deeply nested code (max 3-4 levels)
- [ ] No global variables (except constants)
- [ ] YAGNI principle followed (no unused code)
- [ ] KISS principle followed (simple solutions)

## Performance
- [ ] Appropriate data structures chosen
- [ ] Generators used for large datasets
- [ ] Comprehensions used instead of loops
- [ ] Built-in functions used (map, filter, sum)
- [ ] functools.lru_cache for expensive computations
- [ ] No premature optimization
- [ ] Profiling done if performance critical

## Logging
- [ ] logging module used (not print statements)
- [ ] Appropriate log levels used
- [ ] Logger instances per module
- [ ] Contextual information in logs
- [ ] No sensitive data in logs
- [ ] Structured logging for production

## Configuration
- [ ] Environment variables for configuration
- [ ] No hardcoded secrets or credentials
- [ ] Configuration validated on startup
- [ ] Sensible defaults provided
- [ ] Configuration separate from code
- [ ] .env.example documents all variables

## Security
- [ ] All user inputs validated
- [ ] No hardcoded credentials
- [ ] Environment variables for secrets
- [ ] Passwords hashed (bcrypt/argon2)
- [ ] Parameterized queries for databases
- [ ] No eval() or exec() with user input
- [ ] Dependencies scanned for vulnerabilities
- [ ] HTTPS for network communications

## Dependencies
- [ ] requirements.txt or pyproject.toml present
- [ ] Dependencies pinned to versions
- [ ] Dev dependencies separated
- [ ] No unused dependencies
- [ ] Security scanning done (pip-audit/safety)
- [ ] Dependencies kept up-to-date
- [ ] Virtual environment documented

## Project Structure
- [ ] Logical module organization
- [ ] __init__.py in all packages
- [ ] Clear separation of concerns
- [ ] Config in dedicated file
- [ ] Tests mirror source structure
- [ ] Utilities in dedicated module
- [ ] Custom exceptions in dedicated module

## Async Programming (if applicable)
- [ ] asyncio used for I/O operations
- [ ] async/await syntax used correctly
- [ ] No blocking calls in async functions
- [ ] async context managers used
- [ ] asyncio.gather() for concurrent operations
- [ ] Appropriate async libraries used

## Pythonic Code
- [ ] Comprehensions used appropriately
- [ ] Context managers used (with statement)
- [ ] enumerate() for indexed iteration
- [ ] zip() for parallel iteration
- [ ] any()/all() for boolean operations
- [ ] dict.get() with defaults
- [ ] 'is' for None comparison
- [ ] 'in' for membership testing

## Anti-Patterns Avoided
- [ ] No mutable default arguments
- [ ] No bare except clauses
- [ ] No global variables (except constants)
- [ ] No wildcard imports
- [ ] No long functions (>30 lines)
- [ ] No multiple statements on one line
- [ ] No == for None comparison
- [ ] No silent error suppression

---

**Verification Status:**
- [ ] All critical items checked
- [ ] All high-priority items checked
- [ ] Medium/low-priority items reviewed
- [ ] Code ready for review/deployment
