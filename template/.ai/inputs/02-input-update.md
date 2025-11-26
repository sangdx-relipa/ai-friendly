# Update/Modify Code Input Template

Use this template to capture requirements for UPDATING or MODIFYING existing code.

After filling this out, use:
- **Modify existing feature** → `.ai/prompts/03-modify-feature.md`
- **Refactor code** → `.ai/prompts/05-refactor-code.md`

---

## 1. Basic Information

### Update Title
*One-line description (max 100 characters):*
```
[Your title here]
```

### Tech Stack
**Select your stack:**
- [ ] NestJS + TypeScript
- [ ] React + TypeScript
- [ ] Laravel + PHP
- [ ] Python (base)
- [ ] Python + FastAPI
- [ ] Other: _______________

### Update Type
- [ ] Enhancement (Add new capabilities to existing feature)
- [ ] Modification (Change existing behavior)
- [ ] Refactor (Improve code quality without changing behavior)
- [ ] Migration (Update dependencies, framework version)
- [ ] Performance Optimization
- [ ] Security Improvement
- [ ] Other: _______________

### Priority
- [ ] Critical (Blocking, security issue)
- [ ] High (Important improvement)
- [ ] Medium (Planned enhancement)
- [ ] Low (Nice to have)

---

## 2. Update Summary

### Summary
*Brief overview (2-3 sentences):*
```
[Your summary here]
```

### Reason for Update
*Why is this change needed?*
```
[Explain the reason]
Example: Current implementation is slow and causing timeouts
Example: Need to add new field to support upcoming feature
Example: Dependencies are outdated and have security vulnerabilities
```

### Impact
*Who/what will be affected?*
```
[Describe impact]
Example: All API consumers will need to update their requests
Example: Frontend components using UserService will need updates
Example: Database schema change affects all user queries
```

---

## 3. Current State

### What Exists Now?
*Describe current implementation:*
```
[Describe current state]
```

### Current Behavior
*How does it work currently?*
```
[Describe current behavior]
Example: User can upload single file at a time
Example: API returns all records without pagination
Example: Password validation only checks minimum length
```

### Current Files/Components
**Files currently involved:**
- [ ] _______________
- [ ] _______________
- [ ] _______________

### Current Dependencies
**Packages/libraries currently used:**
```
[List current dependencies]
Example: express@4.17.1
Example: react@17.0.2
```

---

## 4. Desired State

### What Should It Become?
*Describe desired implementation:*
```
[Describe desired state]
```

### Desired Behavior
*How should it work after update?*
```
[Describe desired behavior]
Example: User can upload multiple files in one request
Example: API returns paginated results with 20 items per page
Example: Password validation checks length, uppercase, numbers, special chars
```

### New/Updated Capabilities
*What new capabilities will be added?*
1.
2.
3.
4.

---

## 5. Technical Changes

### Code Changes Required

**Functions/Methods to Modify:**
- [ ] `functionName()` in `file.ts` - Change: _______________
- [ ] `methodName()` in `Class` - Change: _______________

**Functions/Methods to Add:**
- [ ] `newFunction()` in `file.ts` - Purpose: _______________
- [ ] `newMethod()` in `Class` - Purpose: _______________

**Functions/Methods to Remove:**
- [ ] `oldFunction()` in `file.ts` - Reason: _______________

**Components to Modify (Frontend):**
- [ ] `ComponentName` - Change: _______________

**Classes/Services to Modify:**
- [ ] `ClassName` - Change: _______________

### API Changes (if applicable)

**Endpoints to Modify:**
```
[BEFORE]
GET /api/users -> Returns all users

[AFTER]
GET /api/users?page=1&limit=20 -> Returns paginated users
```

**Request/Response Changes:**
```json
// BEFORE
{
  "field": "value"
}

// AFTER
{
  "field": "value",
  "newField": "newValue"
}
```

**Breaking Changes:**
- [ ] Yes - Breaking changes expected
- [ ] No - Backward compatible

### Database Changes (if applicable)

**Schema Changes:**
```sql
-- Add column
ALTER TABLE users ADD COLUMN avatar_url VARCHAR(255);

-- Modify column
ALTER TABLE users MODIFY COLUMN email VARCHAR(320);

-- Add index
CREATE INDEX idx_users_email ON users(email);
```

**Migration Required:**
- [ ] Yes - Data migration needed
- [ ] No - Schema only

**Migration Strategy:**
```
[Describe migration approach]
Example: Add column with default value, update existing records in batches
```

---

## 6. Dependencies & Compatibility

### Package Updates Required
**Packages to Update:**
```bash
# Before
package-name@1.0.0

# After
package-name@2.0.0

# Reason: [Why?]
```

### New Packages to Install
```bash
npm install [package-name]
# or
composer require [package-name]
# or
pip install [package-name]

# Why needed: _______________
```

### Packages to Remove
```bash
npm uninstall [package-name]

# Why removing: _______________
```

### Compatibility Concerns
```
[Any compatibility issues]
Example: Requires Node.js 18+ (currently using 16)
Example: New package has peer dependency conflicts
Example: Breaking change in updated package
```

---

## 7. Breaking Changes & Migration

### Will This Break Existing Code?
- [ ] Yes - Breaking changes
- [ ] No - Fully backward compatible
- [ ] Partial - Deprecated features remain but show warnings

### What Will Break?
```
[List what will break]
Example: API endpoint /old-path will be removed
Example: Function signature changed - old: fn(a), new: fn(a, b)
Example: Response format changed
```

### Deprecation Strategy
```
[How to handle deprecation]
Example: Keep old endpoint for 3 months with deprecation warning
Example: Support both old and new function signatures for 1 release
```

### Migration Guide
**For API consumers:**
```
[Provide migration steps]
1. Update request format to include new field
2. Handle new response structure
3. Update error handling for new error codes
```

**For developers:**
```
[Provide migration steps]
1. Update import statements
2. Replace deprecated function calls
3. Update test assertions
```

---

## 8. Testing Strategy

### Existing Tests to Update
*Which tests need changes?*
- [ ] `test-file.spec.ts` - Update: _______________
- [ ] `component.test.tsx` - Update: _______________

### New Tests to Add
*What new tests are needed?*
- [ ] Test new functionality: _______________
- [ ] Test backward compatibility: _______________
- [ ] Test migration: _______________
- [ ] Test error handling: _______________

### Regression Testing
*What existing functionality must still work?*
```
[List features to regression test]
1. Existing feature X should still work
2. Integration with Y should not break
3. Performance should not degrade
```

### Test Coverage
- [ ] Maintain current coverage (>80%)
- [ ] Increase coverage to ____%
- [ ] Focus on changed code (>90% coverage)

---

## 9. Performance Considerations

### Expected Performance Impact
- [ ] Performance improvement expected
- [ ] No significant impact
- [ ] Potential performance degradation (needs optimization)

### Performance Metrics

**Current Performance:**
- Response time: _______________
- Memory usage: _______________
- Load time: _______________

**Target Performance:**
- Response time: _______________
- Memory usage: _______________
- Load time: _______________

### Optimization Needed
- [ ] Database query optimization
- [ ] Caching implementation
- [ ] Code splitting (frontend)
- [ ] Lazy loading
- [ ] Indexing
- [ ] Algorithm improvement
- [ ] Other: _______________

---

## 10. Security Considerations

### Security Impact
- [ ] Improves security
- [ ] No security impact
- [ ] Potential security implications (needs review)

### Security Changes
```
[Describe security changes]
Example: Add input sanitization
Example: Implement rate limiting
Example: Update authentication mechanism
```

### Security Checklist
- [ ] Input validation updated
- [ ] Authentication still secure
- [ ] Authorization still enforced
- [ ] No new vulnerabilities introduced
- [ ] Sensitive data still protected
- [ ] No secrets in code
- [ ] Audit logging maintained

---

## 11. Files to Modify/Create

### Files to MODIFY
**Backend:**
- [ ] `src/modules/[name]/[name].controller.ts`
- [ ] `src/modules/[name]/[name].service.ts`
- [ ] `src/modules/[name]/dto/[name].dto.ts`
- [ ] `src/modules/[name]/entities/[name].entity.ts`
- [ ] Other: _______________

**Frontend:**
- [ ] `src/components/[ComponentName]/[ComponentName].tsx`
- [ ] `src/hooks/use[HookName].ts`
- [ ] `src/services/[name].service.ts`
- [ ] Other: _______________

**Tests:**
- [ ] `src/[name]/[name].spec.ts`
- [ ] `test/[name].e2e-spec.ts`
- [ ] Other: _______________

### Files to CREATE
- [ ] _______________
- [ ] _______________

### Files to DELETE
- [ ] _______________
- [ ] _______________

### Configuration Files to Update
- [ ] `package.json` (dependencies)
- [ ] `.env.example` (new environment variables)
- [ ] `tsconfig.json` (TypeScript config)
- [ ] `database/migrations/[timestamp]_[name].ts`
- [ ] Other: _______________

---

## 12. Validation & Error Handling

### Validation Changes
**New validation rules:**
- [ ] _______________
- [ ] _______________

**Updated validation rules:**
- [ ] _______________
- [ ] _______________

**Removed validation rules:**
- [ ] _______________

### Error Handling Updates
**New error cases:**
```
[List new error scenarios]
Example: Handle file size too large
Example: Handle invalid file type
```

**Updated error messages:**
```
[List error message changes]
Example: "Invalid input" -> "Email format invalid: must be valid email address"
```

---

## 13. Documentation Updates

### Documentation to Update
- [ ] API documentation (Swagger/OpenAPI)
- [ ] README (installation, usage, configuration)
- [ ] Code comments (JSDoc/PHPDoc/Docstrings)
- [ ] CHANGELOG
- [ ] Migration guide
- [ ] User guide
- [ ] Developer guide
- [ ] Architecture documentation
- [ ] Other: _______________

### Changelog Entry
```
## [Version] - YYYY-MM-DD

### Added
- [What was added]

### Changed
- [What was changed]

### Deprecated
- [What was deprecated]

### Removed
- [What was removed]

### Fixed
- [What was fixed (if any)]

### Security
- [Security improvements (if any)]
```

---

## 14. Rollout Strategy

### Deployment Approach
- [ ] Deploy all at once
- [ ] Gradual rollout (canary deployment)
- [ ] Feature flag (enable for subset of users)
- [ ] A/B testing
- [ ] Other: _______________

### Rollback Plan
```
[How to rollback if issues occur]
Example: Revert to previous version via git tag
Example: Disable feature flag
Example: Restore database from backup
```

### Monitoring
**What to monitor after deployment:**
- [ ] Error rates
- [ ] Performance metrics
- [ ] User feedback
- [ ] API usage patterns
- [ ] Database performance
- [ ] Other: _______________

---

## 15. Success Criteria

### Update is considered SUCCESSFUL when:
- [ ] All desired changes implemented
- [ ] All tests passing (unit, integration, e2e)
- [ ] Backward compatibility maintained (if required)
- [ ] Migration completed successfully (if applicable)
- [ ] Performance targets met
- [ ] No regressions in existing functionality
- [ ] Code follows coding standards (`.ai/rules/[tech-stack]-rules.md`)
- [ ] No TypeScript 'any' types added (if TS project)
- [ ] Documentation updated
- [ ] Security verified
- [ ] Code reviewed against checklist (`.ai/checklists/[tech-stack]-checklist.md`)
- [ ] Stakeholders approve changes
- [ ] Deployed to production successfully

---

## 16. Additional Notes

### Special Instructions
```
[Any additional context or special requirements]
```

### Known Risks
```
[Risks associated with this update]
Example: Large database migration may cause downtime
Example: Breaking change may affect many API consumers
```

### Dependencies on Other Work
```
[What else needs to be done first/concurrently]
Example: Requires completion of feature X
Example: Must coordinate with team Y for deployment
```

### Timeline Constraints
```
[Any deadline or timing considerations]
Example: Must complete before Black Friday
Example: Coordinate with marketing campaign launch
```

### References
*Links to related resources:*
- Design doc: _______________
- Discussion: _______________
- Related issue: _______________
- Similar update: _______________

---

## Next Steps After Filling This Template

1. **Choose the appropriate prompt template:**
   - Modify feature → `.ai/prompts/03-modify-feature.md`
   - Refactor code → `.ai/prompts/05-refactor-code.md`

2. **Add standard preamble** from `.ai/prompts/00-standard-preamble.md`

3. **Fill chosen template** with information from this input

4. **Reference your tech stack rules:**
   - NestJS: `.ai/rules/nestjs-typescript-rules.md`
   - React: `.ai/rules/react-typescript-rules.md`
   - Laravel: `.ai/rules/laravel-php-rules.md`
   - Python: `.ai/rules/python-rules.md`
   - Python FastAPI: `.ai/rules/python-fastapi-rules.md`

5. **Create task tracking file** in `tasks/` folder:
   - Format: `tasks/update-[name]-[YYYY-MM-DD].md`
   - Use template from `tasks/auth-module-implementation.md` as reference

6. **Execute prompt** with your AI assistant

7. **Verify update** using `.ai/checklists/[tech-stack]-checklist.md`

8. **Test thoroughly** - Ensure no regressions

---

**Template Version:** 2.0.0
**Last Updated:** 2025-11-20
**Compatible With:** All tech stacks (NestJS, React, Laravel, Python, Python+FastAPI)
