# Bug Fix Input Template

Use this template to capture all information about a BUG before fixing it.

After filling this out, use `.ai/prompts/04-fix-bug.md`

---

## 1. Basic Information

### Bug Title
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

### Severity
- [ ] Critical (Production down, security vulnerability, data loss)
- [ ] High (Major functionality broken, many users affected)
- [ ] Medium (Feature not working, workaround available)
- [ ] Low (Minor issue, cosmetic problem)

### Type
- [ ] Functional (Feature not working as expected)
- [ ] Performance (Slow, timeout, memory issues)
- [ ] Security (Vulnerability, data exposure)
- [ ] UI/UX (Visual, accessibility, responsive design)
- [ ] Data (Incorrect data, data loss, corruption)
- [ ] Integration (External API, third-party service)
- [ ] Other: _______________

---

## 2. Bug Summary

### Summary
*Brief overview (2-3 sentences):*
```
[Your summary here]
```

### Impact
*Who is affected and how?*
```
[Describe the impact]
Example: All users unable to login since yesterday
Example: Admin users see incorrect data in reports
Example: Mobile users cannot access the dashboard
```

---

## 3. Bug Details

### Location
**Where does the bug occur?**
- File(s): _______________
- Component(s): _______________
- Route/Endpoint: _______________
- Function/Method: _______________
- Line number (if known): _______________

### Steps to Reproduce
*Detailed steps to reproduce the bug:*
1.
2.
3.
4.
5.

### Expected Behavior
*What should happen:*
```
[Describe expected behavior]
```

### Actual Behavior
*What actually happens:*
```
[Describe actual behavior]
```

### Frequency
- [ ] Always (100% reproducible)
- [ ] Often (>75% of the time)
- [ ] Sometimes (25-75% of the time)
- [ ] Rarely (<25% of the time)
- [ ] Once (Cannot reproduce)

---

## 4. Error Information

### Error Messages
*Paste complete error messages, stack traces, or logs:*
```
[Paste errors here]
```

### Console Errors (Frontend)
```
[Paste browser console errors]
```

### Server Logs (Backend)
```
[Paste server logs]
```

### Network Errors (if applicable)
**HTTP Status Code:** _______________
**Request:**
```
[Paste request details]
```
**Response:**
```
[Paste response details]
```

---

## 5. Environment Information

### Environment
- [ ] Production
- [ ] Staging
- [ ] Development
- [ ] Local

### Version/Build
- Application version: _______________
- Git commit/branch: _______________
- Build number: _______________

### Browser (if frontend bug)
- Browser: _______________ (Chrome, Firefox, Safari, Edge)
- Version: _______________
- Device: _______________ (Desktop, Mobile, Tablet)
- Screen size: _______________

### Operating System
- OS: _______________ (Windows, macOS, Linux, iOS, Android)
- Version: _______________

### Database (if applicable)
- Database: _______________ (PostgreSQL, MySQL, MongoDB, etc.)
- Version: _______________

### Additional Environment Details
```
[Any other relevant environment information]
Example: Node.js version: 18.x
Example: PHP version: 8.1
Example: Python version: 3.11
```

---

## 6. Root Cause Analysis (if known)

### Suspected Cause
```
[What do you think is causing the bug?]
Example: Missing null check in user validation
Example: Race condition in async function
Example: Incorrect SQL query joins
```

### When Did It Start?
- Date/Time: _______________
- After what change: _______________
- Related PR/Commit: _______________

### Related Issues
*Links to related bugs or issues:*
- Issue #_______________
- PR #_______________
- Similar bug: _______________

---

## 7. Data & Context

### Test Data
*Provide test data to reproduce:*
```
Example user: test@example.com
Example ID: 12345
Example input: { "field": "value" }
```

### Database State (if relevant)
```
[Describe database records involved]
Example: User with ID 123 has null email field
Example: Product table has duplicate SKUs
```

### Screenshots
*Attach or describe screenshots:*
- Screenshot 1: _______________
- Screenshot 2: _______________

### Video/Recording (if available)
- Link: _______________

---

## 8. Attempted Solutions

### What Have You Tried?
```
[Describe any attempted fixes]
1. Tried...
2. Attempted...
3. Tested...
```

### Workaround (if exists)
```
[Describe any temporary workarounds]
Example: Users can manually refresh the page
Example: Admins can update via API directly
```

---

## 9. Fix Requirements

### Fix Should Include:
- [ ] Root cause fix (not just symptom)
- [ ] Input validation (if validation bug)
- [ ] Error handling (if error handling bug)
- [ ] Null/undefined checks (if null reference bug)
- [ ] Boundary conditions (if edge case bug)
- [ ] Race condition fix (if async bug)
- [ ] Memory leak fix (if performance bug)
- [ ] Security fix (if security bug)
- [ ] Database query optimization (if N+1 or slow query)
- [ ] Frontend state management fix (if state bug)

### Testing Requirements
- [ ] Unit test to prevent regression
- [ ] Integration test for the fix
- [ ] E2E test covering the scenario
- [ ] Performance test (if performance bug)
- [ ] Security test (if security bug)
- [ ] Cross-browser test (if frontend bug)
- [ ] Mobile responsiveness test (if UI bug)

### Regression Testing
*What else should be tested to ensure no new bugs?*
```
[List related features to test]
Example: Test login with different user roles
Example: Test all CRUD operations on the resource
Example: Test all pages using the affected component
```

---

## 10. Security Considerations

### Is this a Security Bug?
- [ ] Yes - Security vulnerability
- [ ] No - Not security-related

### If YES, Security Details:
**Vulnerability Type:**
- [ ] SQL Injection
- [ ] XSS (Cross-Site Scripting)
- [ ] CSRF (Cross-Site Request Forgery)
- [ ] Authentication bypass
- [ ] Authorization bypass
- [ ] Data exposure
- [ ] Password/Secret in logs
- [ ] Path traversal
- [ ] Remote code execution
- [ ] Other: _______________

**Severity:**
- [ ] Critical (Immediate fix required)
- [ ] High (Fix within 24 hours)
- [ ] Medium (Fix within 1 week)
- [ ] Low (Fix in next release)

**Affected Data:**
```
[What data is at risk?]
```

**Exploitation:**
```
[Can this be exploited? How?]
```

---

## 11. Performance Impact (if performance bug)

### Performance Metrics

**Before (with bug):**
- Response time: _______________
- Memory usage: _______________
- CPU usage: _______________
- Database queries: _______________
- Load time: _______________

**Expected (after fix):**
- Response time: _______________
- Memory usage: _______________
- CPU usage: _______________
- Database queries: _______________
- Load time: _______________

### Performance Issues
- [ ] Slow query (N+1 problem)
- [ ] Memory leak
- [ ] Infinite loop
- [ ] Blocking operation
- [ ] Large payload
- [ ] Missing index
- [ ] Inefficient algorithm
- [ ] Other: _______________

---

## 12. Files to Modify

### Expected Files to Fix
*List files that likely need changes:*
- [ ] _______________
- [ ] _______________
- [ ] _______________

### Related Files to Check
*Files that might be affected:*
- [ ] _______________
- [ ] _______________
- [ ] _______________

### Test Files to Create/Update
- [ ] _______________
- [ ] _______________

---

## 13. Breaking Changes

### Will the Fix Cause Breaking Changes?
- [ ] Yes - Breaking changes expected
- [ ] No - Backward compatible
- [ ] Unknown

### If YES, describe:
```
[What will break?]
```

### Migration Plan
```
[How to handle breaking changes]
Example: Update API version
Example: Add deprecation notice
Example: Provide migration script
```

---

## 14. Success Criteria

### Bug is considered FIXED when:
- [ ] Bug no longer reproducible
- [ ] All steps to reproduce pass
- [ ] Error messages no longer appear
- [ ] Expected behavior achieved
- [ ] Root cause addressed (not just symptom)
- [ ] Tests added to prevent regression
- [ ] All existing tests still passing
- [ ] Code follows coding standards (`.ai/rules/[tech-stack]-rules.md`)
- [ ] No new bugs introduced
- [ ] Performance not degraded
- [ ] Security verified (if security bug)
- [ ] Cross-browser tested (if frontend bug)
- [ ] Mobile tested (if responsive bug)
- [ ] Code reviewed against checklist (`.ai/checklists/[tech-stack]-checklist.md`)

---

## 15. Documentation Updates

### Documentation to Update
- [ ] Code comments explaining the fix
- [ ] API documentation (if API changed)
- [ ] README (if setup/config changed)
- [ ] Changelog/Release notes
- [ ] User guide (if user-facing behavior changed)
- [ ] Developer guide (if API/architecture changed)

---

## 16. Additional Notes

### Special Instructions
```
[Any additional context or special requirements]
```

### Known Risks
```
[Any risks with the fix]
Example: May affect other features
Example: Requires database migration
```

### Dependencies
```
[Any dependencies for this fix]
Example: Requires package update
Example: Depends on another bug fix
```

### References
*Links to related resources:*
- Issue tracker: _______________
- Discussion: _______________
- Documentation: _______________
- Similar bug fix: _______________

---

## Next Steps After Filling This Template

1. **Use the bug fix prompt template:**
   - Copy `.ai/prompts/04-fix-bug.md`
   - Fill with information from this input

2. **Add standard preamble** from `.ai/prompts/00-standard-preamble.md`

3. **Reference your tech stack rules:**
   - NestJS: `.ai/rules/nestjs-typescript-rules.md`
   - React: `.ai/rules/react-typescript-rules.md`
   - Laravel: `.ai/rules/laravel-php-rules.md`
   - Python: `.ai/rules/python-rules.md`
   - Python FastAPI: `.ai/rules/python-fastapi-rules.md`

4. **Create task tracking file** in `tasks/` folder:
   - Format: `tasks/fix-[bug-name]-[YYYY-MM-DD].md`
   - Use template from `tasks/auth-module-implementation.md` as reference

5. **Execute prompt** with your AI assistant

6. **Verify fix** using `.ai/checklists/[tech-stack]-checklist.md`

7. **Test regression** - Ensure no new bugs introduced

---

**Template Version:** 2.0.0
**Last Updated:** 2025-11-20
**Compatible With:** All tech stacks (NestJS, React, Laravel, Python, Python+FastAPI)
