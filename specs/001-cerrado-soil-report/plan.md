# Implementation Plan: Cerrado Soil Recovery Report

**Branch**: `001-cerrado-soil-report` | **Date**: 2025-11-18 | **Spec**: [specs/001-cerrado-soil-report/spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-cerrado-soil-report/spec.md`

## Summary

Create a high-performance, interactive single-page report on "Microbial Consortia for Cerrado Soil Recovery". The site will use React + Vite, styled with Tailwind CSS, and feature advanced animations using "React Bits" and Framer Motion. It will include 6 data visualizations implemented with Recharts.

## Technical Context

**Language/Version**: TypeScript 5.x
**Primary Dependencies**: React 18+, Vite, Tailwind CSS, Framer Motion, Recharts
**Storage**: N/A (Static Content)
**Testing**: Vitest + React Testing Library
**Target Platform**: Modern Web Browsers (Desktop & Mobile)
**Project Type**: Single Page Application (SPA)
**Performance Goals**: LCP < 2.5s, 60fps animations
**Constraints**: Mobile responsiveness is critical.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Clean Code**: Components will be modular (Atomic Design).
- **II. Testing**: Unit tests for data parsers and critical UI components.
- **III. UX**: Consistent "Dark Nature" theme, accessible contrast, smooth interactions.
- **IV. Performance**: Lazy loading for heavy components/charts.

## Project Structure

### Documentation (this feature)

```text
specs/001-cerrado-soil-report/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
site-biotec/src/
├── components/
│   ├── ui/              # Shadcn components (Button, Card, etc.)
│   ├── charts/          # Recharts wrappers (Graph1, Graph2, etc.)
│   ├── layout/          # Section containers (Hero, Footer)
│   └── react-bits/      # Animated components (FloatingLines, etc.)
├── data/
│   ├── report-content.ts # Text content structured as JSON/TS
│   └── chart-data.ts     # Data for graphs
├── lib/
│   └── utils.ts         # Helper functions
├── styles/
│   └── globals.css      # Tailwind directives
├── App.tsx              # Main entry point
└── main.tsx             # React root
```

**Structure Decision**: Single project structure within `site-biotec/`.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| React Bits (Custom Components) | High-end visual requirement | Standard CSS animations lack the "wow" factor requested |
| Recharts | Complex data visualization | Static images would not be interactive/accessible |

## Phases

### Phase 1: Design & Setup

1.  **Data Modeling**: Convert the Markdown report into a structured TypeScript object (`data/report-content.ts`) to separate content from presentation.
2.  **Component Design**: Define the props for the 6 Chart components.
3.  **Theme Setup**: Configure Tailwind colors (Earth tones + Neon accents for "Biotech").

### Phase 2: Implementation

1.  **Scaffolding**: Install dependencies (`framer-motion`, `recharts`, `lucide-react`).
2.  **Base UI**: Install Shadcn components (`card`, `button`, `separator`).
3.  **React Bits**: Port selected components (Hero Background, Text Reveal).
4.  **Charts**: Implement `Graph1` to `Graph6` using Recharts.
5.  **Assembly**: Build the 5 report sections using the content data.
6.  **Polish**: Add scroll animations (Framer Motion `whileInView`).

