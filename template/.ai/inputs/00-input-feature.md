# Feature Input Template

Use this template to capture all requirements for a NEW FEATURE before implementation.

After filling this out, use:
- **Simple feature** → `.ai/prompts/01-new-feature-basic.md`
- **Complex feature** → `.ai/prompts/02-new-feature-detailed.md`

---

## 1. Basic Information

### Feature Name
```
[Short descriptive name]
```

### Tech Stack
**Select your stack:**
- [ ] NestJS + TypeScript
- [ ] React + TypeScript
- [ ] Laravel + PHP
- [ ] Python (base)
- [ ] Python + FastAPI
- [ ] Other: _______________

### Priority
- [ ] Critical (Blocking other work)
- [ ] High (Important feature)
- [ ] Medium (Planned feature)
- [ ] Low (Nice to have)

---

## 2. Feature Summary

### Title
*One-line description (max 100 characters):*
```
[Your title here]
```

### Summary
*Brief overview (2-3 sentences):*
```
[Your summary here]
```

### Context/Background
*Why is this needed? What problem does it solve?*
```
[Your context here]
```

---

## 3. Functional Requirements

### What should this feature do?
1.
2.
3.
4.
5.

### User Story (Optional but Recommended)
```
As a [user type]
I want to [action]
So that [benefit]
```

### Acceptance Criteria
*How do we know it's done?*
- [ ]
- [ ]
- [ ]
- [ ]

---

## 4. Technical Requirements

### API Endpoints (if applicable)
```
POST   /api/[resource]              - [Description]
GET    /api/[resource]              - [Description]
GET    /api/[resource]/:id          - [Description]
PUT    /api/[resource]/:id          - [Description]
PATCH  /api/[resource]/:id          - [Description]
DELETE /api/[resource]/:id          - [Description]
```

### Database Changes (if applicable)

**Tables to Create/Modify:**
- **Table:** `[table_name]`
  - **Fields:**
    - `id` -
    - `field_name` - type, constraints
    - `created_at` - timestamp
    - `updated_at` - timestamp
  - **Indexes:**
    -
  - **Relationships:**
    -

### Data Models/DTOs/Schemas Required
**List the data structures needed:**

**For Backend (NestJS/Laravel/FastAPI):**
- DTOs:
  - CreateDto:
  - UpdateDto:
  - ResponseDto:
- Entities/Models:
  -

**For Frontend (React):**
- Interfaces/Types:
  -
- Props:
  -

### Components/Modules/Services Needed

**Backend:**
- [ ] Controller: `[name]Controller`
- [ ] Service: `[name]Service`
- [ ] Repository: `[name]Repository` (if needed)
- [ ] Module: `[name]Module`

**Frontend:**
- [ ] Component: `[ComponentName]`
- [ ] Hook: `use[HookName]`
- [ ] Context: `[Context]Provider` (if needed)
- [ ] Service: `[name]Service` (API calls)

### External Dependencies
*Libraries, APIs, services needed:*
- npm/composer/pip package:
- External API:
- Third-party service:

---

## 5. Authentication & Authorization

### Access Control
- [ ] Public (no auth required)
- [ ] Authenticated users only
- [ ] Role-based access control
  - Roles allowed: _______________
- [ ] Custom permissions
  - Permissions: _______________

### Protected Resources
*What needs to be protected?*
```
[Describe what data/actions need authorization]
```

---

## 6. Validation Requirements

### Input Validation
- [ ] Email format
- [ ] Password strength
  - Minimum length: ___
  - Require uppercase: Yes/No
  - Require numbers: Yes/No
  - Require special chars: Yes/No
- [ ] Required fields: _______________
- [ ] Format validation: _______________
- [ ] Range validation (min/max): _______________
- [ ] File upload validation:
  - Max size: _______________
  - Allowed types: _______________
- [ ] Custom validation: _______________

### Business Rules Validation
```
[Any business logic constraints]
Example: User can only create max 5 projects
Example: Email must be unique
Example: Start date must be before end date
```

---

## 7. Security Considerations

**Check all that apply:**
- [ ] Password hashing required (bcrypt/argon2)
- [ ] SQL injection protection (use ORM/parameterized queries)
- [ ] XSS prevention (sanitize inputs/outputs)
- [ ] CSRF protection (tokens)
- [ ] Rate limiting
  - Limit: ___ requests per ___
- [ ] Input sanitization
- [ ] File upload security (validate type, scan for malware)
- [ ] Data encryption (at rest/in transit)
- [ ] API key/token security
- [ ] Other: _______________

### Sensitive Data
*What sensitive data is handled?*
```
[List any sensitive data: passwords, PII, payment info, etc.]
```

---

## 8. Performance & Scalability

### Performance Requirements
- Response time target: _______________ (e.g., <200ms)
- Throughput target: _______________ (e.g., 1000 req/sec)
- Page load time: _______________ (frontend)
- Other: _______________

### Scalability Considerations
- [ ] Pagination required
  - Default page size: ___
  - Max page size: ___
- [ ] Caching needed
  - Cache strategy: _______________
  - TTL: _______________
- [ ] Database indexing required
  - Fields to index: _______________
- [ ] Query optimization needed
- [ ] Prevent N+1 queries
- [ ] Lazy loading (frontend)
- [ ] Code splitting (frontend)
- [ ] Image optimization

---

## 9. Testing Requirements

### Test Scenarios to Cover
- [ ] Happy path (success case)
- [ ] Validation errors (invalid input)
- [ ] Authentication errors (unauthorized)
- [ ] Authorization errors (forbidden)
- [ ] Not found errors (404)
- [ ] Conflict errors (409 - duplicate)
- [ ] Edge cases
- [ ] Security scenarios
- [ ] Performance scenarios

### Test Coverage Target
- [ ] >80% (standard)
- [ ] >90% (critical features)
- [ ] 100% (security-critical)

### Types of Tests
- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Component tests (React)
- [ ] API tests
- [ ] Security tests
- [ ] Performance tests

---

## 10. UI/UX Requirements (Frontend Features)

### User Interface
*Describe the UI:*
```
[Describe screens, forms, components, layout]
```

### User Flow
```
1. User navigates to...
2. User clicks/enters...
3. System displays/validates...
4. User confirms...
5. System saves and redirects...
```

### Accessibility Requirements
- [ ] Keyboard navigation
- [ ] Screen reader support (ARIA labels)
- [ ] Color contrast compliance (WCAG AA)
- [ ] Focus indicators
- [ ] Alt text for images
- [ ] Form labels

### Responsive Design
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)

---

## 11. Documentation Requirements

### Documentation Needed
- [ ] API documentation (Swagger/OpenAPI)
- [ ] JSDoc/TSDoc/PHPDoc/Docstrings
- [ ] README updates
- [ ] Component documentation (Storybook)
- [ ] User guide/Wiki
- [ ] Code comments for complex logic
- [ ] Migration guide (if breaking changes)

### API Documentation Examples
*Provide example requests/responses:*
```json
// POST /api/[resource]
Request:
{
  "field": "value"
}

Response:
{
  "id": "uuid",
  "field": "value",
  "createdAt": "2025-11-20T00:00:00Z"
}
```

---

## 12. Files to Create/Modify

### Backend Files (if applicable)

**Files to CREATE:**
- [ ] `src/modules/[name]/[name].controller.ts` (or .php)
- [ ] `src/modules/[name]/[name].service.ts` (or .php)
- [ ] `src/modules/[name]/[name].module.ts`
- [ ] `src/modules/[name]/entities/[name].entity.ts`
- [ ] `src/modules/[name]/dto/create-[name].dto.ts`
- [ ] `src/modules/[name]/dto/update-[name].dto.ts`
- [ ] `src/modules/[name]/dto/[name]-response.dto.ts`
- [ ] `src/modules/[name]/[name].service.spec.ts`
- [ ] `test/[name].e2e-spec.ts`
- [ ] Other: _______________

**Files to MODIFY:**
- [ ] `src/app.module.ts` (register new module)
- [ ] `database/migrations/[timestamp]_create_[table].ts`
- [ ] `.env.example`
- [ ] Other: _______________

### Frontend Files (if applicable)

**Files to CREATE:**
- [ ] `src/components/[ComponentName]/[ComponentName].tsx`
- [ ] `src/components/[ComponentName]/[ComponentName].test.tsx`
- [ ] `src/components/[ComponentName]/[ComponentName].module.css`
- [ ] `src/hooks/use[HookName].ts`
- [ ] `src/services/[name].service.ts`
- [ ] `src/types/[name].types.ts`
- [ ] `src/context/[Name]Context.tsx` (if needed)
- [ ] Other: _______________

**Files to MODIFY:**
- [ ] `src/App.tsx` (add routes)
- [ ] `src/routes/index.tsx`
- [ ] Other: _______________

---

## 13. Dependencies & Prerequisites

### Required Features/Modules
*What must exist before this can be built?*
```
[List dependencies]
Example: Authentication module must be completed first
Example: User table must exist in database
```

### Required Packages
**To Install:**
```bash
# npm
npm install [package-name]

# composer
composer require [package-name]

# pip
pip install [package-name]
```

---

## 14. Constraints & Limitations

### Technical Constraints
```
[Any technical limitations]
Example: Must use bcrypt with 10 salt rounds
Example: Maximum file upload size 5MB
Example: Must work with PostgreSQL 14+
```

### Business Constraints
```
[Any business rules or constraints]
Example: Free users limited to 3 projects
Example: Must comply with GDPR
Example: Data retention policy: 90 days
```

### Known Limitations
```
[Anything that won't be included in this version]
Example: Social login will be added in v2
Example: Real-time updates not included in MVP
```

---

## 15. Success Criteria & Definition of Done

### Feature is considered DONE when:
- [ ] All functional requirements implemented
- [ ] All acceptance criteria met
- [ ] All tests passing (unit, integration, e2e)
- [ ] Test coverage >80%
- [ ] Code follows coding standards (see `.ai/rules/[tech-stack]-rules.md`)
- [ ] No TypeScript 'any' types (if TS project)
- [ ] All functions have explicit return types
- [ ] JSDoc/PHPDoc/Docstrings on all public methods
- [ ] Input validation complete
- [ ] Error handling comprehensive
- [ ] Security checklist verified
- [ ] No SQL injection vulnerabilities
- [ ] No XSS vulnerabilities
- [ ] Passwords properly hashed (if applicable)
- [ ] API documentation complete (Swagger)
- [ ] Performance requirements met
- [ ] Code reviewed against checklist (`.ai/checklists/[tech-stack]-checklist.md`)
- [ ] Responsive design working (if frontend)
- [ ] Accessibility requirements met (if frontend)

---

## 16. Additional Notes

### Special Instructions
```
[Any additional context, preferences, or special requirements]
```

### Known Issues/Risks
```
[Anything to be aware of]
```

### References
*Links to related docs, designs, tickets:*
- Design:
- Ticket:
- Discussion:
- Similar feature:

---

## Next Steps After Filling This Template

1. **Determine complexity:**
   - Simple feature (1-2 files, basic CRUD) → Use `.ai/prompts/01-new-feature-basic.md`
   - Complex feature (multiple modules, complex logic) → Use `.ai/prompts/02-new-feature-detailed.md`

2. **Copy standard preamble** from `.ai/prompts/00-standard-preamble.md`

3. **Fill chosen template** with information from this input

4. **Reference your tech stack rules:**
   - NestJS: `.ai/rules/nestjs-typescript-rules.md`
   - React: `.ai/rules/react-typescript-rules.md`
   - Laravel: `.ai/rules/laravel-php-rules.md`
   - Python: `.ai/rules/python-rules.md`
   - Python FastAPI: `.ai/rules/python-fastapi-rules.md`

5. **Create task tracking file** in `tasks/` folder:
   - Format: `tasks/[feature-name]-[YYYY-MM-DD].md`
   - Use template from `tasks/auth-module-implementation.md` as reference

6. **Execute prompt** with your AI assistant

7. **Verify implementation** using `.ai/checklists/[tech-stack]-checklist.md`

---

**Template Version:** 2.0.0
**Last Updated:** 2025-11-20
**Compatible With:** All tech stacks (NestJS, React, Laravel, Python, Python+FastAPI)
