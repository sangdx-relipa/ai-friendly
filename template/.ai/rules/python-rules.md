# Python AI Coding Rules

You are an expert in Python, software design patterns, clean code principles, type hints, testing, and Python best practices.

## Code Style and Structure

- Write concise, technical Python code with accurate examples
- Follow PEP 8 style guide for Python code
- Use functional and object-oriented programming patterns appropriately
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., is_valid, has_permission)
- Structure files logically: imports, constants, classes, functions, main execution
- Keep modules focused on a single responsibility

## Naming Conventions

- Use lowercase with underscores for module names and file names (e.g., user_manager.py)
- Use snake_case for function names and variable names
- Use PascalCase for class names (e.g., UserManager, DataProcessor)
- Use UPPER_SNAKE_CASE for constants and environment variables
- Prefix private methods/attributes with single underscore (_private_method)
- Prefix name-mangled attributes with double underscore (__private_attr)
- Use descriptive names that reveal intent (avoid abbreviations unless widely known)
- Boolean variables should use is_, has_, can_, should_ prefixes

## Python Type Hints

- Use type hints for all function signatures (arguments and return types)
- Use Optional[Type] for nullable values
- Use Union[Type1, Type2] for multiple possible types (or Type1 | Type2 in Python 3.10+)
- Use Generic types from typing module (List, Dict, Set, Tuple, etc.)
- Avoid using 'Any' type; use more specific types or TypeVar for generics
- Use Protocol for structural subtyping and duck typing
- Use TypeAlias for complex type definitions
- Leverage typing.Literal for literal types
- Use dataclasses or NamedTuple for data structures

## Import Organization

- Group imports in the following order:
  1. Standard library imports
  2. Related third-party imports
  3. Local application/library specific imports
- Use absolute imports over relative imports when possible
- Avoid wildcard imports (from module import *)
- Use isort for automatic import sorting
- One import per line for better readability

## Functions and Methods

- Keep functions small and focused (max 20-30 lines)
- One function should do one thing (Single Responsibility Principle)
- Use type hints for all parameters and return values
- Provide docstrings for all public functions (Google or NumPy style)
- Use default arguments sparingly and never use mutable defaults
- Use *args and **kwargs judiciously
- Return early to avoid deep nesting
- Use generators for large datasets to save memory

## Classes and Object-Oriented Design

- Follow SOLID principles
- Use dataclasses for simple data containers
- Implement __str__ and __repr__ for better debugging
- Use @property for computed attributes
- Use @staticmethod for utility functions that don't need instance/class state
- Use @classmethod for alternative constructors
- Implement context managers (__enter__ and __exit__) for resource management
- Use ABC (Abstract Base Classes) for defining interfaces
- Prefer composition over inheritance
- Keep class responsibilities focused (Single Responsibility Principle)

## Error Handling

- Use specific exception types, not bare except clauses
- Create custom exception classes for domain-specific errors
- Exceptions should inherit from appropriate base classes
- Provide meaningful error messages with context
- Use try-except-else-finally appropriately
- Don't silence exceptions without logging
- Use logging module for error tracking
- Raise exceptions early, handle them late
- Document exceptions in docstrings using Raises section

## Data Structures and Collections

- Use built-in types when possible (list, dict, set, tuple)
- Use collections module for specialized containers (defaultdict, Counter, deque)
- Use dataclasses for structured data
- Use NamedTuple for immutable data structures
- Use sets for membership testing and uniqueness
- Use dict comprehensions and list comprehensions for concise transformations
- Avoid nested loops; use itertools for efficient iteration
- Use enumerate() instead of manual indexing
- Use zip() for parallel iteration

## File I/O and Resource Management

- Always use context managers (with statement) for file operations
- Use pathlib.Path for file path operations instead of os.path
- Use appropriate file modes ('r', 'w', 'a', 'rb', 'wb')
- Handle encoding explicitly (default to 'utf-8')
- Use json, csv, pickle modules for structured data
- Implement proper error handling for file operations
- Close resources properly using context managers or try-finally

## Testing

- Write unit tests using pytest or unittest
- Aim for high test coverage (>80%)
- Use descriptive test names: test_should_return_sum_when_given_two_numbers
- Follow AAA pattern (Arrange, Act, Assert)
- Use fixtures for test setup and teardown
- Mock external dependencies
- Test edge cases and error conditions
- Use parametrize for testing multiple inputs
- Keep tests independent and isolated
- Use doctest for simple documentation examples

## Documentation

- Add module-level docstrings explaining module purpose
- Add class docstrings explaining class purpose and usage
- Add function/method docstrings (Google or NumPy style)
- Include parameters, return values, and exceptions in docstrings
- Use type hints as inline documentation
- Document complex algorithms with inline comments
- Keep comments up-to-date with code changes
- Write README.md with usage examples
- Use meaningful variable names that reduce need for comments

## Performance Optimization

- Use built-in functions (map, filter, reduce) instead of manual loops
- Use list/dict/set comprehensions for concise and fast operations
- Use generators for memory-efficient iteration
- Cache expensive computations using functools.lru_cache
- Use __slots__ for classes with many instances
- Profile code before optimizing (use cProfile, timeit)
- Use appropriate data structures (dict for O(1) lookups, set for membership)
- Avoid premature optimization

## Logging

- Use logging module instead of print statements
- Configure logging with appropriate levels (DEBUG, INFO, WARNING, ERROR, CRITICAL)
- Use logger instances per module: logger = logging.getLogger(__name__)
- Include contextual information in log messages
- Use structured logging for production applications
- Don't log sensitive information (passwords, tokens)
- Use log rotation for long-running applications

## Configuration Management

- Use environment variables for configuration
- Use python-dotenv for local development
- Use configparser or pydantic-settings for configuration files
- Never hardcode secrets or credentials
- Provide sensible defaults for configuration values
- Validate configuration on application startup
- Use constants for magic numbers and strings
- Keep configuration separate from code

## Project Structure

```
project/
├── src/
│   ├── __init__.py
│   ├── main.py              # Entry point
│   ├── config.py            # Configuration
│   ├── models/              # Data models
│   │   ├── __init__.py
│   │   └── user.py
│   ├── services/            # Business logic
│   │   ├── __init__.py
│   │   └── user_service.py
│   ├── utils/               # Utility functions
│   │   ├── __init__.py
│   │   └── validators.py
│   └── exceptions/          # Custom exceptions
│       ├── __init__.py
│       └── custom_errors.py
├── tests/
│   ├── __init__.py
│   ├── conftest.py
│   └── test_user_service.py
├── docs/
├── .env.example
├── requirements.txt
├── setup.py or pyproject.toml
└── README.md
```

## Dependencies Management

- Use requirements.txt for pip dependencies
- Or use pyproject.toml with poetry or setuptools
- Pin dependency versions for reproducibility (package==1.2.3)
- Separate dev dependencies from production
- Use virtual environments (venv, virtualenv, conda)
- Document how to install dependencies in README
- Use pip-audit or safety for security scanning
- Keep dependencies minimal and up-to-date

## Code Quality Tools

- Use Black for code formatting (line length 88 or 100)
- Use isort for import sorting
- Use pylint or flake8 for linting
- Use mypy for static type checking
- Use bandit for security linting
- Configure tools in pyproject.toml or setup.cfg
- Integrate tools in CI/CD pipeline
- Use pre-commit hooks for automatic checks

## Common Patterns

### Context Manager
```python
from typing import Generator

class DatabaseConnection:
    def __enter__(self) -> 'DatabaseConnection':
        self.connection = self._connect()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb) -> None:
        self.connection.close()
```

### Decorator
```python
from functools import wraps
from typing import Callable, TypeVar

T = TypeVar('T')

def retry(max_attempts: int = 3) -> Callable[[Callable[..., T]], Callable[..., T]]:
    def decorator(func: Callable[..., T]) -> Callable[..., T]:
        @wraps(func)
        def wrapper(*args, **kwargs) -> T:
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
            return func(*args, **kwargs)  # type: ignore
        return wrapper
    return decorator
```

### Dataclass
```python
from dataclasses import dataclass, field
from typing import List

@dataclass
class User:
    id: int
    name: str
    email: str
    tags: List[str] = field(default_factory=list)

    def __post_init__(self) -> None:
        if not self.email:
            raise ValueError("Email cannot be empty")
```

### Singleton
```python
from typing import Optional

class DatabaseConfig:
    _instance: Optional['DatabaseConfig'] = None

    def __new__(cls) -> 'DatabaseConfig':
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
```

## Async Programming

- Use asyncio for concurrent I/O operations
- Use async/await syntax for asynchronous functions
- Use asyncio.gather() for concurrent execution
- Use async context managers (async with)
- Use async generators (async for)
- Avoid blocking calls in async functions
- Use aiohttp for async HTTP requests
- Use aiomysql/asyncpg for async database operations

## Security Best Practices

- Never hardcode secrets or credentials
- Use environment variables for sensitive data
- Validate and sanitize all user inputs
- Use secrets module for generating secure tokens
- Hash passwords using bcrypt or argon2
- Use parameterized queries to prevent SQL injection
- Avoid eval() and exec() with user input
- Keep dependencies updated for security patches
- Use HTTPS for network communications
- Implement proper authentication and authorization

## Anti-Patterns to Avoid

- Don't use mutable default arguments
- Don't use bare except clauses
- Avoid global variables
- Don't use import * (wildcard imports)
- Avoid long functions (>30 lines)
- Don't mix tabs and spaces
- Avoid multiple statements on one line
- Don't use == for comparing to None (use 'is None')
- Avoid catching Exception when specific exceptions are known
- Don't ignore errors silently

## Best Practices

- Write self-documenting code with clear names
- Keep functions pure when possible (no side effects)
- Use immutable data structures when appropriate
- Implement proper error handling
- Write tests first (TDD) or alongside code
- Use version control (git) with meaningful commits
- Follow the Zen of Python (import this)
- Code for readability over cleverness
- Use static analysis tools regularly
- Review and refactor code regularly

## String Operations

- Use f-strings for string formatting (Python 3.6+)
- Use str.join() for concatenating lists of strings
- Use triple quotes for multi-line strings
- Use raw strings (r"") for regex patterns
- Use str methods instead of regex when possible
- Be mindful of string immutability

## Comprehensions and Generators

- Use list comprehensions for simple transformations
- Use dict comprehensions for dictionary creation
- Use set comprehensions for unique values
- Use generator expressions for memory efficiency
- Keep comprehensions readable (max 2-3 clauses)
- Extract complex logic to functions

## Module and Package Design

- Keep modules cohesive (related functionality together)
- Use __init__.py to expose public API
- Use __all__ to define module's public interface
- Create packages for related modules
- Avoid circular dependencies
- Use relative imports within packages sparingly
- Design for reusability and testability

## Pythonic Code

- Use enumerate() instead of range(len())
- Use zip() for parallel iteration
- Use unpacking for multiple assignments
- Use context managers (with statement)
- Use 'in' for membership testing
- Use dictionary get() with defaults
- Use collections.defaultdict for default values
- Use any() and all() for boolean operations
- Use sorted() with key parameter for custom sorting

## Documentation Standards

### Module Docstring
```python
"""
User management module.

This module provides functionality for creating, updating, and deleting users.
It includes validation and authentication helpers.
"""
```

### Function Docstring (Google Style)
```python
def calculate_total(items: List[float], tax_rate: float = 0.1) -> float:
    """
    Calculate total price including tax.

    Args:
        items: List of item prices
        tax_rate: Tax rate as decimal (default: 0.1)

    Returns:
        Total price with tax applied

    Raises:
        ValueError: If tax_rate is negative

    Examples:
        >>> calculate_total([10.0, 20.0], 0.1)
        33.0
    """
    if tax_rate < 0:
        raise ValueError("Tax rate cannot be negative")
    subtotal = sum(items)
    return subtotal * (1 + tax_rate)
```

## Key Principles

- **Explicit is better than implicit** - Be clear in your code
- **Simple is better than complex** - Prefer straightforward solutions
- **Readability counts** - Code is read more than written
- **Don't repeat yourself (DRY)** - Eliminate duplication
- **You aren't gonna need it (YAGNI)** - Don't add unused features
- **Keep it simple, stupid (KISS)** - Avoid unnecessary complexity
- **Separation of concerns** - Each module has one responsibility
- **Fail fast** - Validate inputs early and raise exceptions
