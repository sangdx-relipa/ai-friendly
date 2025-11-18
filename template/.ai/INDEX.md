# Quick Reference Index

## 🎯 I Want To...

### Add a New Feature
→ Use: `prompts/01-new-feature-basic.md` (simple) or `prompts/02-new-feature-detailed.md` (complex)
→ Rules: Choose from `rules/` based on your tech stack
→ Verify: Use appropriate checklist from `checklists/`

### Modify Existing Code
→ Use: `prompts/03-modify-feature.md`
→ Rules: `rules/[your-tech-stack]-rules.md`
→ Verify: `checklists/[your-tech-stack]-checklist.md`

### Fix a Bug
→ Use: `prompts/04-fix-bug.md`
→ Rules: `rules/[your-tech-stack]-rules.md`
→ Verify: `checklists/[your-tech-stack]-checklist.md`

### Improve Code Quality
→ Use: `prompts/05-refactor-code.md`
→ Rules: `rules/[your-tech-stack]-rules.md`
→ Verify: `checklists/[your-tech-stack]-checklist.md`

### Add Tests
→ Use: `prompts/06-add-tests.md`
→ Rules: `rules/[your-tech-stack]-rules.md`
→ Verify: `checklists/[your-tech-stack]-checklist.md`

---

## 📂 File Quick Reference

### Rules (What AI Should Follow)
```
rules/
├── nestjs-typescript-rules.md      # NestJS + TypeScript backend
├── react-typescript-rules.md       # React + TypeScript frontend
├── laravel-php-rules.md            # Laravel + PHP backend
├── python-rules.md                 # Python (base, no framework)
└── python-fastapi-rules.md         # Python + FastAPI backend
```

### Checklists (How to Verify)
```
checklists/
├── nestjs-typescript-checklist.md  # Verify NestJS code
├── react-typescript-checklist.md   # Verify React code
├── laravel-php-checklist.md        # Verify Laravel code
├── python-checklist.md             # Verify Python code (base)
└── python-fastapi-checklist.md     # Verify Python FastAPI code
```

### Prompts (What to Say to AI)
```
prompts/
├── 00-standard-preamble.md         # Start every prompt with this
├── 01-new-feature-basic.md         # Add simple features
├── 02-new-feature-detailed.md      # Add complex features
├── 03-modify-feature.md            # Update existing code
├── 04-fix-bug.md                   # Fix bugs
├── 05-refactor-code.md             # Improve code
└── 06-add-tests.md                 # Write tests
```

---

## 🏃 Quick Start (3 Steps)

### Step 1: Pick Your Template
Based on what you want to do, choose a prompt from `prompts/`

### Step 2: Add Your Details
Fill in the placeholders like `[FEATURE_NAME]`, `[Tech Stack]`, etc.

### Step 3: Send to AI
Copy your filled template and send it to your AI assistant

---

## 💡 Common Workflows

### Workflow 1: Adding Authentication to NestJS App

1. Open: `prompts/02-new-feature-detailed.md`
2. Fill in:
   - Feature: JWT Authentication
   - Tech Stack: NestJS + TypeScript
   - Requirements: Login, Register, Protected Routes
3. Add preamble from: `prompts/00-standard-preamble.md`
4. Reference: `rules/nestjs-typescript-rules.md`
5. Send to AI
6. Verify with: `checklists/nestjs-typescript-checklist.md`

### Workflow 2: Fixing React Performance Bug

1. Open: `prompts/04-fix-bug.md`
2. Fill in:
   - Bug: Component re-renders infinitely
   - Tech Stack: React + TypeScript
   - Location: src/components/UserList.tsx
3. Add preamble
4. Reference: `rules/react-typescript-rules.md`
5. Send to AI
6. Verify with: `checklists/react-typescript-checklist.md`

### Workflow 3: Refactoring Laravel Controller

1. Open: `prompts/05-refactor-code.md`
2. Fill in:
   - What: UserController is too complex
   - Tech Stack: Laravel + PHP
   - Goals: Extract service layer, improve testability
3. Add preamble
4. Reference: `rules/laravel-php-rules.md`
5. Send to AI
6. Verify with: `checklists/laravel-php-checklist.md`

### Workflow 4: Adding User API to Python FastAPI App

1. Open: `prompts/02-new-feature-detailed.md`
2. Fill in:
   - Feature: User Management API
   - Tech Stack: Python + FastAPI
   - Requirements: CRUD operations, async DB, Pydantic validation
3. Add preamble from: `prompts/00-standard-preamble.md`
4. Reference: `rules/python-fastapi-rules.md`
5. Send to AI
6. Verify with: `checklists/python-fastapi-checklist.md`

### Workflow 5: Building Python CLI Tool

1. Open: `prompts/01-new-feature-basic.md`
2. Fill in:
   - Feature: File processing CLI tool
   - Tech Stack: Python (base)
   - Requirements: argparse, file I/O, error handling
3. Add preamble from: `prompts/00-standard-preamble.md`
4. Reference: `rules/python-rules.md`
5. Send to AI
6. Verify with: `checklists/python-checklist.md`

---

## 🎓 Remember

✓ Always start with the preamble (`prompts/00-standard-preamble.md`)
✓ Always reference the appropriate rule file
✓ Always verify with the checklist
✓ Be specific - fill all template placeholders
✓ Provide context - explain why, not just what

---

## 📱 Tech Stack Quick Links

| Stack | Rules | Checklist |
|-------|-------|-----------|
| **NestJS** | `rules/nestjs-typescript-rules.md` | `checklists/nestjs-typescript-checklist.md` |
| **React** | `rules/react-typescript-rules.md` | `checklists/react-typescript-checklist.md` |
| **Laravel** | `rules/laravel-php-rules.md` | `checklists/laravel-php-checklist.md` |
| **Python** | `rules/python-rules.md` | `checklists/python-checklist.md` |
| **Python + FastAPI** | `rules/python-fastapi-rules.md` | `checklists/python-fastapi-checklist.md` |

---

**Need Help?** Read `README.md` for detailed documentation.
