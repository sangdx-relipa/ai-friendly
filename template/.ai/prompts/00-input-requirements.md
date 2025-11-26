# Input Requirements Template

**Purpose:** Use this template to capture all necessary information before implementing a feature, fixing a bug, or updating code. Fill this out first, then use the appropriate prompt template.

---

## Quick Reference

**What are you doing?**
- [ ] New Feature (Simple) → Use `01-new-feature-basic.md`
- [ ] New Feature (Complex) → Use `02-new-feature-detailed.md`
- [ ] Modify Existing Code → Use `03-modify-feature.md`
- [ ] Fix Bug → Use `04-fix-bug.md`
- [ ] Refactor Code → Use `05-refactor-code.md`
- [ ] Add Tests → Use `06-add-tests.md`

---

## 1. Basic Information

### Task Type
**Select one:**
- [ ] Feature (New functionality)
- [ ] Bug Fix (Fix existing issue)
- [ ] Update (Modify existing feature)
- [ ] Refactor (Improve code quality)
- [ ] Test (Add/improve tests)

### Tech Stack
**Select your stack:**
- [ ] NestJS + TypeScript
- [ ] React + TypeScript
- [ ] Laravel + PHP
- [ ] Python (base)
- [ ] Python + FastAPI
- [ ] Other: _______________

### Priority
- [ ] Critical (Security, Production down)
- [ ] High (Important feature, blocking)
- [ ] Medium (Planned feature)
- [ ] Low (Nice to have)

---

## 2. Task Summary

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

## 3. Requirements

### For NEW FEATURE

#### Functional Requirements
*What should this feature do?*
1.
2.
3.

#### User Story (Optional)
```
As a [user type]
I want to [action]
So that [benefit]
```

#### Acceptance Criteria
*How do we know it's done?*
- [ ]
- [ ]
- [ ]

---

### For BUG FIX

#### Steps to Reproduce
1.
2.
3.

#### Expected Behavior
```
[What should happen]
```

#### Actual Behavior
```
[What actually happens]
```

#### Error Messages
```
[Paste error messages, stack traces, or logs here]
```

#### Environment
- Version:
- Browser (if frontend):
- OS:
- Additional context:

---

### For UPDATE/MODIFY

#### What Needs to Change?
```
[Describe what exists and what needs to be modified]
```

#### Current Behavior
```
[How it works now]
```

#### Desired Behavior
```
[How it should work after update]
```

#### Files/Components Affected
-
-
-

---

## 4. Technical Details

### API Endpoints (if applicable)
```
POST   /api/path/to/resource
GET    /api/path/to/resource/:id
PUT    /api/path/to/resource/:id
DELETE /api/path/to/resource/:id
```

### Database Changes (if applicable)
**Tables:**
- Table name:
  - Fields:
  - Indexes:
  - Relationships:

### Data Models/DTOs Required
```
[List the data structures needed]
```

### External Dependencies
*Libraries, APIs, services needed:*
-
-

### Authentication/Authorization
- [ ] Public (no auth required)
- [ ] Authenticated users only
- [ ] Role-based access: _______________
- [ ] Custom permissions: _______________

---

## 5. Validation & Security

### Input Validation Required
- [ ] Email format
- [ ] Password strength (min length: ___)
- [ ] Required fields: _______________
- [ ] Format validation: _______________
- [ ] Range validation: _______________
- [ ] Custom validation: _______________

### Security Considerations
- [ ] Password hashing required
- [ ] SQL injection protection
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] Input sanitization
- [ ] Other: _______________

---

## 6. Constraints & Dependencies

### Technical Constraints
```
[Any technical limitations or requirements]
Example: Must use bcrypt with 10 salt rounds
Example: Maximum file upload size 2MB
```

### Business Rules
```
[Any business logic constraints]
Example: Users can only review products they purchased
Example: Email must be unique across all users
```

### Dependencies on Other Features
```
[What needs to exist first?]
Example: Requires authentication module to be implemented
```

---

## 7. Testing Requirements

### Test Scenarios
*What scenarios must be tested?*
- [ ] Happy path (success case)
- [ ] Error cases
- [ ] Edge cases
- [ ] Security scenarios
- [ ] Performance scenarios

### Test Coverage Target
- [ ] >80% (standard)
- [ ] >90% (critical features)
- [ ] 100% (security-critical)

### Types of Tests Needed
- [ ] Unit tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Performance tests
- [ ] Security tests

---

## 8. Performance & Scalability

### Performance Requirements
- Response time: _______________ (e.g., <200ms)
- Throughput: _______________ (e.g., 1000 req/sec)
- Other: _______________

### Scalability Considerations
- [ ] Pagination required
- [ ] Caching needed
- [ ] Database indexing
- [ ] Query optimization
- [ ] N+1 query prevention

---

## 9. Documentation Requirements

### Documentation Needed
- [ ] API documentation (Swagger/OpenAPI)
- [ ] JSDoc/TSDoc/PHPDoc/Docstrings
- [ ] README updates
- [ ] User guide/Wiki
- [ ] Code comments for complex logic

### Examples to Include
```
[Provide example requests/responses if applicable]
```

---

## 10. Files to Create/Modify

### Expected Files to Create
*List files that will be created:*
- [ ]
- [ ]
- [ ]

### Expected Files to Modify
*List files that will be modified:*
- [ ]
- [ ]
- [ ]

---

## 11. Success Criteria

### Definition of Done
*Check all that apply:*
- [ ] Feature/fix implemented according to requirements
- [ ] All tests passing (unit, integration, e2e)
- [ ] Code follows coding standards (rules file)
- [ ] Documentation complete (JSDoc, Swagger)
- [ ] Security checklist verified
- [ ] Performance requirements met
- [ ] Code reviewed against checklist
- [ ] No TypeScript 'any' types (if TS project)
- [ ] No SQL injection vulnerabilities
- [ ] No plain text passwords
- [ ] Error handling comprehensive
- [ ] Input validation complete

---

## 12. Additional Notes

### Special Instructions
```
[Any additional context, preferences, or instructions]
```

### Known Issues/Risks
```
[Anything to be aware of]
```

### References
*Links to related docs, tickets, discussions:*
-
-

---

## Next Steps

After filling out this template:

1. **Choose the appropriate prompt template:**
   - Simple feature → `01-new-feature-basic.md`
   - Complex feature → `02-new-feature-detailed.md`
   - Modify code → `03-modify-feature.md`
   - Bug fix → `04-fix-bug.md`
   - Refactor → `05-refactor-code.md`
   - Tests → `06-add-tests.md`

2. **Transfer information to the chosen template**

3. **Add standard preamble** from `00-standard-preamble.md`

4. **Reference your tech stack rules:**
   - NestJS: `.ai/rules/nestjs-typescript-rules.md`
   - React: `.ai/rules/react-typescript-rules.md`
   - Laravel: `.ai/rules/laravel-php-rules.md`
   - Python: `.ai/rules/python-rules.md`
   - Python FastAPI: `.ai/rules/python-fastapi-rules.md`

5. **Create task file** in `tasks/` folder with format: `tasks/[feature-name]-[date].md`

6. **Execute the prompt** with AI assistant

7. **Verify with checklist** from `.ai/checklists/[tech-stack]-checklist.md`

---

**Template Version:** 1.0.0
**Last Updated:** 2025-11-20
