# Tasks: Cerrado Soil Recovery Report

**Feature**: `001-cerrado-soil-report`
**Phase**: Implementation
**Spec**: [specs/001-cerrado-soil-report/spec.md](./spec.md)

## Phase 1: Setup & Infrastructure
*Goal: Initialize project structure and install dependencies.*

- [x] T001 Install project dependencies (Framer Motion, Recharts, Lucide) in `site-biotec/package.json`
- [x] T002 Initialize Shadcn UI and add base components (Card, Button, Separator) in `site-biotec/src/components/ui/`
- [x] T003 Configure Tailwind theme (colors, fonts) in `site-biotec/tailwind.config.js` and `site-biotec/src/styles/globals.css`
- [x] T004 Create project directory structure (components/charts, components/layout, components/react-bits, data/) in `site-biotec/src/`

## Phase 2: Foundational Data & Types
*Goal: Define data structures and load content.*

- [x] T005 Define TypeScript interfaces for `ReportSection` and `ChartData` in `site-biotec/src/types.ts`
- [x] T006 [P] Create `site-biotec/src/data/chart-data.ts` with data from `graficos.md`
- [x] T007 [P] Create `site-biotec/src/data/report-content.ts` with text from `reportagem_cerrado_biotecnologia.md`

## Phase 3: User Story 1 - Read Full Report (Core Content)
*Goal: Implement the main scrolling layout and text sections.*

- [x] T008 [US1] Create `HeroSection` component with title and subtitle in `site-biotec/src/components/layout/HeroSection.tsx`
- [x] T009 [US1] Create `TextSection` component for standard content blocks in `site-biotec/src/components/layout/TextSection.tsx`
- [x] T010 [US1] Implement `App.tsx` to map through `reportContent` and render sections
- [x] T011 [US1] Create `Footer` component with credits in `site-biotec/src/components/layout/Footer.tsx`

## Phase 4: User Story 2 - View Visual Aids (Charts & Animations)
*Goal: Add interactive charts and "React Bits" animations.*

- [x] T012 [P] [US2] Implement `Graph1` (Bar Chart: Density/Porosity) in `site-biotec/src/components/charts/Graph1.tsx`
- [x] T013 [P] [US2] Implement `Graph2` (Scatter Plot: Density x Porosity) in `site-biotec/src/components/charts/Graph2.tsx`
- [x] T014 [P] [US2] Implement `Graph3` (Infographic: Causes) using React Flow or custom CSS in `site-biotec/src/components/charts/Graph3.tsx`
- [x] T015 [P] [US2] Implement `Graph4` (Line/Bar: Vertical Profile) in `site-biotec/src/components/charts/Graph4.tsx`
- [x] T016 [P] [US2] Implement `Graph5` (Line/Scatter: Organic Matter vs Density) in `site-biotec/src/components/charts/Graph5.tsx`
- [x] T017 [P] [US2] Implement `Graph6` (Radar/Bar: Microorganisms Effect) in `site-biotec/src/components/charts/Graph6.tsx`
- [x] T018 [US2] Create `ChartContainer` component to wrap charts with titles and descriptions in `site-biotec/src/components/charts/ChartContainer.tsx`
- [x] T019 [US2] Implement "React Bits" `FloatingLines` (or similar) for Hero background in `site-biotec/src/components/react-bits/FloatingPaths.tsx`
- [x] T020 [US2] Implement "React Bits" `TextReveal` for section headers in `site-biotec/src/components/react-bits/TextReveal.tsx`

## Phase 5: User Story 3 - Mobile Reading Experience
*Goal: Ensure responsiveness and performance.*

- [x] T021 [US3] Add responsive Tailwind classes to `HeroSection` and `TextSection` for mobile readability
- [x] T022 [US3] Configure Recharts `ResponsiveContainer` in all graph components
- [x] T023 [US3] Implement mobile navigation/menu (if needed) or simple scroll progress bar in `site-biotec/src/components/layout/ProgressBar.tsx`
- [x] T024 Integrate Hero Video (CERRADO_VIDEO.mp4) into `HeroSection.tsx`
- [x] T025 Move Video to `VideoSection.tsx` at the end of the report
- [x] T026 Implement Scroll Snap behavior in `App.tsx`
- [x] T028 Fix Scroll Progress Bar by passing container ref
- [x] T029 Fix Chart Animations by using `whileInView` in `ChartContainer`
- [x] T030 Improve Hero Text Animation with blur-fade effect

## Phase 6: Polish & Cross-Cutting
*Goal: Final visual touches and accessibility.*

- [ ] T024 Add Framer Motion `whileInView` animations to all sections in `site-biotec/src/components/layout/SectionWrapper.tsx`
- [ ] T025 Audit accessibility (ARIA labels, alt text for charts)
- [ ] T026 Optimize bundle size (lazy load charts) in `site-biotec/src/App.tsx`

## Dependencies
- US1 (Content) must be done before US2 (Visuals) can be fully integrated.
- US2 (Charts) tasks T012-T017 can be done in parallel.
- US3 (Mobile) is iterative but T021/T022 should be checked after T008/T012.

## Implementation Strategy
1.  **MVP**: Setup + US1 (Text content readable).
2.  **Visuals**: Add Charts (US2) one by one.
3.  **Wow Factor**: Add React Bits animations.
4.  **Refinement**: Mobile check and performance tuning.
