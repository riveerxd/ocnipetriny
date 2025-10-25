
# Implementation Plan: Data Extraction from nclinic.cz

**Branch**: `001-data-extraction-from` | **Date**: 2025-10-06 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/home/river/Projects/nclinic.cz/specs/001-data-extraction-from/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from file system structure or context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code, or `AGENTS.md` for all other agents).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
Extract all structured data from www.nclinic.cz into a markdown file (`data/extracted-content.md`) including company information (phone, email, ICO, address, hours), service descriptions, doctor information, pricing, and testimonials. Output must use structured format with clear labels and preserve Czech language characters. This is a prerequisite for the website remake, ensuring no content is lost during migration.

## Technical Context
**Language/Version**: JavaScript/TypeScript (Node.js latest LTS) or Python 3.11+
**Primary Dependencies**: Web scraping library (research needed), UTF-8 encoding library
**Storage**: File system (output to `data/extracted-content.md`)
**Testing**: Manual verification against source website
**Target Platform**: Command-line tool (Linux/macOS/Windows)
**Project Type**: Single utility script
**Performance Goals**: Complete extraction in < 30 seconds, handle network retries gracefully
**Constraints**: Must preserve UTF-8 Czech characters, retry 3x on network errors, structured output format
**Scale/Scope**: Single website extraction, one-time or occasional re-run, ~10-15 content sections expected

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Constitution Version**: 1.0.0

### Principle IV: Content Preservation & Migration
✅ **PASS** - This feature directly supports constitutional requirement to extract and preserve all content from nclinic.cz
- Extracts all service descriptions
- Captures contact information (phone, email, address, hours, ICO)
- Preserves pricing information
- Migrates testimonials/reviews
- No content loss

### Other Principles (I, II, III, V)
✅ **NOT APPLICABLE** - This is a utility script for data extraction, not part of the main SPA
- Performance First: N/A (utility script, not production website)
- SPA Architecture: N/A (extraction tool, not the SPA itself)
- Modern Design: N/A (CLI tool, no UI)
- Component-Based: N/A (standalone script)

### Compliance Summary
✅ All applicable constitutional principles are satisfied
✅ No violations or exceptions needed
✅ This feature is a prerequisite enabler for constitutional compliance in the main SPA rebuild

## Project Structure

### Documentation (this feature)
```
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
scripts/
└── extract-nclinic-data.js    # Main extraction script (or .py if Python chosen)

data/
└── extracted-content.md        # Output file (created by script)
```

**Structure Decision**: Simple single-script structure. This is a one-time utility for data extraction, not part of the main application. The script will be placed in a `scripts/` directory and output to `data/extracted-content.md`. No complex structure needed for this feature.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:
   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Generate contract tests** from contracts:
   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:
   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh claude`
     **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `.specify/templates/tasks-template.md` as base
- Simple utility script - no complex TDD needed for this feature
- Tasks based on data-model.md entities and quickstart.md verification steps
- Implementation tasks:
  1. Setup: Install dependencies, create script file structure
  2. Core extraction logic for each entity type (Company Info, Services, Doctors, etc.)
  3. Output formatting and file writing
  4. Error handling and retry logic
  5. Manual verification using quickstart.md

**Ordering Strategy**:
- Setup first
- Core extraction functions
- Output formatting
- Error handling
- Manual testing

**Estimated Output**: 8-12 numbered, sequential tasks in tasks.md

**Note**: No contract tests needed - this is a CLI utility script, not an API.
Manual verification via quickstart.md replaces automated testing for this simple feature.

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

**No constitutional violations** - This feature is a simple utility script that supports constitutional Principle IV (Content Preservation & Migration). All other principles are not applicable to this CLI tool.


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command) - research.md created
- [x] Phase 1: Design complete (/plan command) - data-model.md, quickstart.md created
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [x] Phase 3: Tasks generated (/tasks command) - tasks.md created with 21 tasks
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS (no violations introduced)
- [x] All NEEDS CLARIFICATION resolved (via /clarify)
- [x] Complexity deviations documented (none - simple utility script)

**Artifacts Generated**:
- ✅ research.md - Technology decisions (Node.js, Cheerio, Axios)
- ✅ data-model.md - 7 entities defined (ExtractionMetadata, ContactInformation, ServiceDescription, DoctorInfo, PricingItem, Testimonial, ClinicMessage)
- ✅ quickstart.md - Manual verification checklist (10 verification steps)
- ✅ tasks.md - 21 tasks generated (T001-T021: setup, extraction, formatting, testing)
- ⏭️ contracts/ - N/A (CLI script, no API contracts)

---
*Based on Constitution v1.0.0 - See `.specify/memory/constitution.md`*
