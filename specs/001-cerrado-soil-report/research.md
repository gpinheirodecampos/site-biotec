# Research: Cerrado Soil Recovery Report

**Feature**: `001-cerrado-soil-report`
**Date**: 2025-11-18

## Design Analysis: Colossal.com (Dire Wolf)

The reference site (https://colossal.com/direwolf/) exhibits the following key characteristics:
- **Immersive Experience**: High-quality visuals, dark mode aesthetic, and smooth scrolling.
- **Typography**: Strong, bold headings with clean sans-serif body text. High contrast.
- **Interactivity**: Scroll-triggered animations, interactive timelines, and dynamic backgrounds.
- **Layout**: Single-page storytelling with distinct sections (Hero, Context, Science, Future).

**Decision**: We will adopt a "Scrollytelling" approach.
- **Theme**: Dark/Nature theme (Deep greens, Earth browns, Dark grays) to reflect the "Soil/Cerrado" topic while maintaining a modern biotech feel.
- **Typography**: Modern Sans-Serif (e.g., Inter or Geist) for readability, potentially a Display font for headers.

## Technology Stack

### Core Framework
- **React + Vite**: Already selected and initialized.
- **TypeScript**: For type safety.

### Styling & Animation
- **Tailwind CSS**: For utility-first styling (Standard with Shadcn).
- **Framer Motion**: Essential for complex animations and likely required by "React Bits" components.
- **React Bits**: A collection of animated components. We will use this for:
    - **Hero Section**: "Floating Lines" or similar background to represent soil/roots/microbes.
    - **Interactivity**: "Splash Cursor" or similar for engagement.
    - **Text Effects**: Animated text for key headlines.

### Data Visualization
- **Recharts**: Best fit for React. Composable, responsive, and easy to style.
    - *Alternative*: Visx (too complex), Chart.js (less "React-y").
    - **Decision**: Recharts for the 6 required graphs.

## Component Strategy

### "React Bits" Integration
Since React Bits is a "copy-paste" library (similar to Shadcn UI), we will:
1.  Identify the specific components needed (e.g., `FloatingLines`, `SplashCursor`).
2.  Manually copy the source code into `src/components/react-bits/`.
3.  Install necessary dependencies (usually `framer-motion`).

### Shadcn UI
We will use the Shadcn MCP server to generate standard UI components:
- `Card` (for content blocks)
- `Button` (for calls to action)
- `Separator` (for section breaks)
- `ScrollArea` (if needed)

## Content Structure (from Report)

The report has 5 distinct parts:
1.  **Intro**: The invisible problem (Compactação).
2.  **Context**: Why it's happening (Causes).
3.  **Solution**: Microorganisms (The "Engineers").
4.  **Implementation**: How to apply (Inoculants).
5.  **Conclusion**: The future.

**Visual Mapping**:
- **Part 1**: Hero section with "Soil in Distress" visual.
- **Part 2**: Interactive "Infographic" (Graph 3) showing causes.
- **Part 3**: "Microbial World" - use particle animations (React Bits) to simulate microbes.
- **Part 4**: Step-by-step timeline or cards for implementation.
- **Part 5**: Inspiring closing with a call to action/footer.

## Unknowns & Risks
- **React Bits Dependencies**: Need to verify exact peer dependencies.
- **Performance**: Heavy animations can slow down the site. We must use `LazyMotion` from Framer Motion and optimize images.
- **Mobile Responsiveness**: Complex animations often break on mobile. We need fallback static views for smaller screens.

## Action Items
1.  Install `framer-motion`, `recharts`, `lucide-react`.
2.  Initialize Shadcn UI.
3.  Create `data-model.md` to map the text content to components.
4.  Implement the "Scrollytelling" layout.
