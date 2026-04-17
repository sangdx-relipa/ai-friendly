# Quick Prompts

Two short prompts for daily use. Copy, paste, replace `[...]`, done.

---

## P1: Prepare Input

```
Read `.ai/inputs/` templates and `.ai/README.md`.

My requirement:
[PASTE REQUIREMENT]

Do:
1. Detect type → Feature (00) | Bug (01) | Update (02)
2. Detect tech stack from context
3. Tell me: type, stack, template — wait for my OK
4. Read the matching `.ai/inputs/` template, fill it with my requirement
5. Save to `task_executions/[name]-input.md`
6. Show TBD sections I need to fill
```

---

## P2: Execute

```
Read these files:
- `.ai/base_generation.md` (execution rules)
- `task_executions/[INPUT_FILE]` (my reviewed input)

Do:
1. Detect stack → load `.ai/rules/[stack]-rules.md` + `.ai/checklists/[stack]-checklist.md`
2. Create execution note in `task_executions/` per base_generation.md format (meta, prompt, rules, checklist, user flow, mermaid diagram, tasks, summary)
3. Implement all tasks, update status after each
4. Verify against checklist
5. Write summary: done tasks, blocked tasks + reasons
```

---
