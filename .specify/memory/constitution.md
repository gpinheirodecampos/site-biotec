<!--
SYNC IMPACT REPORT
Version: 1.0.0 (Initial Ratification)
Modified Principles:
- Defined I. Clean Code & Maintainability
- Defined II. Comprehensive Testing Strategy
- Defined III. Consistent & Intuitive UX
- Defined IV. Performance & Efficiency
Removed Sections:
- Placeholder Principle V
Templates requiring updates:
- None (templates use generic references)
-->
# Biotec Ambiental Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### I. Clean Code & Maintainability
<!-- Example: I. Library-First -->
Code must be readable, self-documenting, and adhere to established style guides. Functions should be small and focused (Single Responsibility Principle). Comments should explain "why", not "what". Dead code must be removed immediately.
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### II. Comprehensive Testing Strategy
<!-- Example: II. CLI Interface -->
All new features and bug fixes must include automated tests. Unit tests for logic, integration tests for workflows, and E2E tests for critical paths. Test coverage should be meaningful, not just a metric. TDD is encouraged.
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### III. Consistent & Intuitive UX
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
User interfaces must follow a consistent design language (colors, typography, spacing). Interactions should be predictable and provide immediate feedback. Accessibility (a11y) is a core requirement, not an afterthought.
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### IV. Performance & Efficiency
<!-- Example: IV. Integration Testing -->
Applications must load quickly and respond instantly to user input. Optimize assets, minimize network requests, and ensure efficient database queries. Performance regressions are treated as bugs.
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

## Standards & Compliance
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

All code must pass linting and formatting checks before merge. Security best practices (OWASP Top 10) must be followed. Data privacy regulations (GDPR/LGPD) must be respected in all data handling.
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## Development Workflow
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

Pull Requests require at least one approval. CI/CD pipelines must pass before merging. Semantic versioning is used for all releases. Documentation must be updated with every change.
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

This constitution serves as the supreme source of truth for engineering decisions. Amendments require a Pull Request with a "Sync Impact Report". All code reviews must verify compliance with these principles.
<!-- Example: All PRs/reviews must verify compliance; Complexity must be justified; Use [GUIDANCE_FILE] for runtime development guidance -->

**Version**: 1.0.0 | **Ratified**: 2025-11-18 | **Last Amended**: 2025-11-18
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->
