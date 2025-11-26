# Quick Reference Index

## 🎯 I Want To...

### Add a New Feature
→ **First:** Fill `inputs/00-input-feature.md` with all requirements
→ **Then:** Use `prompts/01-new-feature-basic.md` (simple) or `prompts/02-new-feature-detailed.md` (complex)
→ **Rules:** Choose from `rules/` based on your tech stack
→ **Verify:** Use appropriate checklist from `checklists/`

### Fix a Bug
→ **First:** Fill `inputs/01-input-fixbug.md` with bug details
→ **Then:** Use `prompts/04-fix-bug.md`
→ **Rules:** `rules/[your-tech-stack]-rules.md`
→ **Verify:** `checklists/[your-tech-stack]-checklist.md`

### Modify Existing Code
→ **First:** Fill `inputs/02-input-update.md` with change details
→ **Then:** Use `prompts/03-modify-feature.md`
→ **Rules:** `rules/[your-tech-stack]-rules.md`
→ **Verify:** `checklists/[your-tech-stack]-checklist.md`

### Improve Code Quality
→ **First:** Fill `inputs/02-input-update.md` (select "Refactor" type)
→ **Then:** Use `prompts/05-refactor-code.md`
→ **Rules:** `rules/[your-tech-stack]-rules.md`
→ **Verify:** `checklists/[your-tech-stack]-checklist.md`

### Add Tests
→ **Then:** Use `prompts/06-add-tests.md`
→ **Rules:** `rules/[your-tech-stack]-rules.md`
→ **Verify:** `checklists/[your-tech-stack]-checklist.md`

---

## 📂 File Quick Reference

### Input Templates (Capture Requirements FIRST!)
```
inputs/
├── 00-input-feature.md             # NEW FEATURE requirements
├── 01-input-fixbug.md              # BUG FIX details
└── 02-input-update.md              # UPDATE/MODIFY details
```

### Prompts (What to Say to AI)
```
prompts/
├── 00-input-requirements.md        # Generic requirements template
├── 00-standard-preamble.md         # Add to every prompt
├── 01-new-feature-basic.md         # Add simple features
├── 02-new-feature-detailed.md      # Add complex features
├── 03-modify-feature.md            # Update existing code
├── 04-fix-bug.md                   # Fix bugs
├── 05-refactor-code.md             # Improve code
└── 06-add-tests.md                 # Write tests
```

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

---

## 🏃 Quick Start (5 Steps)

### Step 0: Capture Requirements FIRST!
Fill out the appropriate input template from `.ai/inputs/`:
- **New feature** → `inputs/00-input-feature.md`
- **Bug fix** → `inputs/01-input-fixbug.md`
- **Update code** → `inputs/02-input-update.md`

### Step 1: Add Standard Preamble
Copy `prompts/00-standard-preamble.md` to start your prompt

### Step 2: Pick Your Prompt Template
Based on what you want to do, choose from `prompts/01-06`

### Step 3: Fill Prompt Template
Use information from your input file to fill the prompt template

### Step 4: Send to AI
Copy your complete prompt and send it to your AI assistant

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

✓ **START with input templates** (`inputs/00-input-feature.md`, `inputs/01-input-fixbug.md`, `inputs/02-input-update.md`)
✓ Always include the preamble (`prompts/00-standard-preamble.md`)
✓ Always reference the appropriate rule file
✓ Always verify with the checklist
✓ Be specific - fill all template sections
✓ Provide context - explain why, not just what
✓ Save filled input templates in `tasks/` folder for tracking

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
