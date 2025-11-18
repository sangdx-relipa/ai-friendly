# React + TypeScript AI Coding Rules

You are an expert in TypeScript, React, React Hooks, modern frontend development, responsive design, and web performance optimization.

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples
- Use functional components with hooks; avoid class components
- Prefer composition over inheritance
- Use declarative programming patterns
- Structure files: component, hooks, utilities, types, styles
- Organize by feature/domain, not by file type
- Keep components small and focused (Single Responsibility)
- Use custom hooks to extract reusable logic

## Naming Conventions

- Use PascalCase for component files and names (e.g., UserProfile.tsx)
- Use camelCase for functions, variables, and hooks
- Use UPPER_SNAKE_CASE for constants
- Prefix custom hooks with 'use' (e.g., useAuth, useLocalStorage)
- Use descriptive prop names
- Name event handlers with 'handle' prefix (e.g., handleClick, handleSubmit)
- Use 'is', 'has', 'should' for boolean variables

## TypeScript Usage

- Use TypeScript for all code
- Define interfaces for component props
- Use type inference where possible
- Avoid 'any'; use 'unknown' if type is uncertain
- Use generic types for reusable components
- Define union types for prop variants
- Use 'as const' for constant objects and arrays
- Leverage TypeScript utility types (Partial, Pick, Omit, etc.)

## React Best Practices

- Use functional components with hooks
- Implement proper dependency arrays in useEffect
- Memoize expensive calculations with useMemo
- Memoize callback functions with useCallback
- Use React.memo for component memoization when needed
- Avoid prop drilling; use Context API or state management
- Implement error boundaries for error handling
- Use Suspense for code splitting and lazy loading
- Keep state as local as possible
- Lift state up only when necessary

## Component Structure

- Define prop interfaces at the top
- Destructure props in function signature
- Group hooks at the top of component
- Define event handlers before JSX
- Keep JSX clean and readable
- Extract complex JSX into subcomponents
- Use fragments to avoid unnecessary divs

**Example Structure:**
```typescript
interface UserProfileProps {
  userId: string;
  onUpdate?: (user: User) => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ userId, onUpdate }) => {
  // Hooks
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Effects
  useEffect(() => {
    fetchUser();
  }, [userId]);

  // Handlers
  const handleUpdate = () => {
    // Handler logic
  };

  // Render
  if (isLoading) return <LoadingSpinner />;
  return <div>{/* Component JSX */}</div>;
};
```

## State Management

- Use useState for local component state
- Use useReducer for complex state logic
- Use Context API for app-wide state
- Consider Zustand or Redux Toolkit for global state
- Keep state normalized (avoid nested objects)
- Use immutable update patterns
- Implement optimistic updates for better UX

## Styling

- Use CSS Modules, Styled Components, or Tailwind CSS
- Follow BEM naming if using plain CSS
- Use CSS-in-JS for dynamic styles
- Implement responsive design (mobile-first approach)
- Use CSS variables for theming
- Avoid inline styles except for dynamic values
- Use classnames library for conditional classes

## Performance Optimization

- Lazy load routes and components
- Implement code splitting
- Use React.memo wisely (don't overuse)
- Optimize images (use WebP, lazy loading)
- Debounce/throttle expensive operations
- Use virtual scrolling for long lists
- Minimize bundle size (tree shaking, proper imports)
- Use production builds for deployment

## API Integration

- Use fetch or axios for HTTP requests
- Implement custom hooks for API calls (e.g., useFetch, useApi)
- Handle loading, error, and success states
- Use React Query or SWR for data fetching and caching
- Implement proper error handling
- Show loading states to users
- Retry failed requests with exponential backoff

## Forms and Validation

- Use controlled components for forms
- Implement form validation (Zod, Yup, or React Hook Form)
- Show validation errors inline
- Disable submit button during submission
- Provide user feedback on success/error
- Handle form reset after submission
- Implement debounced validation for better UX

## Accessibility (a11y)

- Use semantic HTML elements
- Add proper ARIA labels and roles
- Ensure keyboard navigation works
- Maintain proper focus management
- Use sufficient color contrast
- Provide alt text for images
- Test with screen readers
- Implement skip links for navigation

## Testing

- Write unit tests with Jest and React Testing Library
- Test user interactions, not implementation details
- Use semantic queries (getByRole, getByLabelText)
- Mock API calls and external dependencies
- Test error states and edge cases
- Aim for high test coverage
- Write integration tests for critical flows

## Documentation

- Add JSDoc comments for complex components
- Document prop types with descriptions
- Use Storybook for component documentation
- Maintain README for setup and architecture
- Document state management approach
- Create component usage examples

## Key Conventions

- Use strict mode in React
- Enable strict TypeScript settings
- Use ESLint and Prettier for code quality
- Implement proper error boundaries
- Use environment variables for config
- Follow React naming conventions
- Keep bundle size optimized
- Implement proper loading states
- Use semantic versioning
- Follow component composition patterns
