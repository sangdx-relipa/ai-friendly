# React + TypeScript Implementation Checklist

Use this checklist to verify that your implementation follows all AI-friendly coding standards.

## Setup & Configuration
- [ ] TypeScript strict mode enabled
- [ ] ESLint and Prettier configured
- [ ] Environment variables properly configured
- [ ] Build optimization configured

## Component Structure
- [ ] Functional components with hooks (no class components)
- [ ] Components follow Single Responsibility Principle
- [ ] Files organized by feature/domain
- [ ] Interface defined for all component props

## TypeScript
- [ ] All props have TypeScript interfaces
- [ ] No usage of 'any' type
- [ ] Proper type inference utilized
- [ ] Event handlers properly typed

## React Best Practices
- [ ] Proper dependency arrays in useEffect
- [ ] useMemo used for expensive calculations
- [ ] useCallback used for callback memoization
- [ ] React.memo used appropriately (not overused)
- [ ] State kept as local as possible
- [ ] Error boundaries implemented

## State Management
- [ ] useState for local state
- [ ] useReducer for complex state
- [ ] Context API or state library for global state
- [ ] Immutable update patterns used

## Styling
- [ ] Consistent styling approach (CSS Modules/Styled Components/Tailwind)
- [ ] Responsive design implemented (mobile-first)
- [ ] CSS variables for theming
- [ ] Conditional classes handled properly

## Performance
- [ ] Code splitting implemented
- [ ] Lazy loading for routes
- [ ] Images optimized (WebP, lazy loading)
- [ ] Bundle size optimized
- [ ] Virtual scrolling for long lists

## API Integration
- [ ] Loading states shown to users
- [ ] Error handling implemented
- [ ] React Query or SWR for data fetching
- [ ] Retry logic for failed requests

## Forms
- [ ] Controlled components used
- [ ] Validation implemented (Zod/Yup/React Hook Form)
- [ ] Inline error messages shown
- [ ] Submit button disabled during submission

## Accessibility
- [ ] Semantic HTML elements used
- [ ] ARIA labels added where needed
- [ ] Keyboard navigation works
- [ ] Sufficient color contrast
- [ ] Alt text for images

## Testing
- [ ] Tests written with React Testing Library
- [ ] Tests focus on user interactions
- [ ] Semantic queries used (getByRole, getByLabelText)
- [ ] API calls mocked
- [ ] Error states tested

## Documentation
- [ ] JSDoc for complex components
- [ ] Props documented with descriptions
- [ ] README with setup instructions
- [ ] Component usage examples provided

---

**Verification Status:**
- [ ] All critical items checked
- [ ] All high-priority items checked
- [ ] Medium/low-priority items reviewed
- [ ] Code ready for review/deployment
