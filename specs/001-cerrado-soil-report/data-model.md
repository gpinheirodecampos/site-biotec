# Data Model: Cerrado Soil Recovery Report

**Feature**: `001-cerrado-soil-report`
**Date**: 2025-11-18

## Entities

### ReportSection
Represents a major section of the single-page report.

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique identifier (e.g., "intro", "problem") |
| `title` | `string` | Section heading |
| `content` | `string[]` | Array of paragraphs or markdown blocks |
| `type` | `'text' | 'chart' | 'infographic' | 'hero'` | Type of content to render |
| `chartId` | `string` (optional) | ID of the chart to render if type is 'chart' |
| `backgroundImage` | `string` (optional) | URL for section background |

### ChartData
Represents the data structure for Recharts visualizations.

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique identifier (e.g., "graph-1") |
| `title` | `string` | Chart title |
| `type` | `'bar' | 'scatter' | 'line' | 'radar'` | Type of chart |
| `data` | `any[]` | Array of data points |
| `xAxisKey` | `string` | Key for X-axis data |
| `dataKeys` | `string[]` | Keys for data series |
| `colors` | `string[]` | Array of hex colors for series |

## Static Data Structures

### `report-content.ts`
```typescript
export const reportContent: ReportSection[] = [
  {
    id: "hero",
    type: "hero",
    title: "A Revolução Invisível",
    subtitle: "Como Microrganismos Podem Recuperar os Solos do Cerrado"
  },
  {
    id: "problem",
    type: "text",
    title: "O solo do Cerrado está pedindo socorro",
    content: ["..."]
  },
  // ... mapped from reportagem_cerrado_biotecnologia.md
];
```

### `chart-data.ts`
```typescript
export const chartData: Record<string, ChartData> = {
  "graph-1": {
    id: "graph-1",
    title: "Efeitos da compactação no solo",
    type: "bar",
    data: [
      { name: "Cerrado natural", density: 0.98, porosity: 0.57 },
      { name: "Semeadura direta", density: 1.23, porosity: 0.51 }
    ],
    xAxisKey: "name",
    dataKeys: ["density", "porosity"],
    colors: ["#10b981", "#f59e0b"]
  },
  // ... mapped from graficos.md
};
```
