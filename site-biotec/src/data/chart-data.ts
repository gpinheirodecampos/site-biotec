import type { ChartData } from '../types';

export const chartData: Record<string, ChartData> = {
  "graph-1": {
    id: "graph-1",
    title: "Efeitos da compactação no solo (0-10cm)",
    description: "Comparação entre Cerrado Natural e Semeadura Direta. Fonte: Wendling et al. (2012).",
    type: "bar",
    data: [
      { name: "Cerrado natural", density: 0.98, porosity: 0.57 },
      { name: "Semeadura direta", density: 1.23, porosity: 0.51 }
    ],
    xAxisKey: "name",
    dataKeys: ["density", "porosity"],
    colors: ["#10b981", "#f59e0b"],
    yAxisLabel: "Densidade (g/cm³)",
    yAxis2Label: "Porosidade (m³/m³)"
  },
  "graph-2": {
    id: "graph-2",
    title: "Relação Densidade x Porosidade",
    description: "Quanto maior a densidade, menor a porosidade. Típico de compactação.",
    type: "scatter",
    data: [
      { name: "Cerrado natural", x: 0.98, y: 0.57 },
      { name: "Semeadura direta", x: 1.23, y: 0.51 }
    ],
    xAxisKey: "x",
    dataKeys: ["y"],
    colors: ["#3b82f6"],
    yAxisLabel: "Porosidade (m³/m³)"
  },
  "graph-3": {
    id: "graph-3",
    title: "Como a compactação surge",
    description: "Fluxograma conceitual das causas e efeitos.",
    type: "custom", // Infographic
    data: [
      {
        stage: "Causas",
        items: [
          { label: "Máquinas pesadas", detail: "Reduzem macroporosidade (-15% a -25%)" },
          { label: "Monocultura", detail: "Reduz diversidade de raízes" },
          { label: "Baixa matéria orgânica", detail: "Reduz atividade microbiana" },
          { label: "Pastagem degradada", detail: "Aumenta densidade superficial" },
          { label: "Solo nu", detail: "Gotas de chuva selam a superfície" }
        ]
      },
      {
        stage: "Alterações Físicas",
        items: [
          { label: "Densidade", detail: "Aumento de 0.98 → 1.23 g/cm³" },
          { label: "Porosidade total", detail: "Redução de 0.57 → 0.51 m³/m³" },
          { label: "Infiltração", detail: "Redução de até 40%" }
        ]
      },
      {
        stage: "Efeitos",
        items: [
          { label: "Menor infiltração", detail: "Aumenta erosão" },
          { label: "Raízes rasas", detail: "Dificuldade em atravessar camadas" },
          { label: "Menor absorção", detail: "Principalmente P e N" }
        ]
      },
      {
        stage: "Impactos",
        items: [
          { label: "Queda de produtividade", detail: "Menor crescimento radicular" },
          { label: "Mais irrigação", detail: "Solo armazena menos água" },
          { label: "Aumento de custos", detail: "Adubação compensatória" }
        ]
      }
    ]
  },
  "graph-4": {
    id: "graph-4",
    title: "Perfil Vertical da Densidade (0-40cm)",
    description: "Visualização da 'camada adensada' entre 10-30cm na área agrícola.",
    type: "line",
    data: [
      { depth: "0-10", cerrado: 0.95, agricola: 1.20 },
      { depth: "10-20", cerrado: 1.00, agricola: 1.30 },
      { depth: "20-30", cerrado: 1.05, agricola: 1.32 },
      { depth: "30-40", cerrado: 1.10, agricola: 1.28 }
    ],
    xAxisKey: "depth",
    dataKeys: ["cerrado", "agricola"],
    colors: ["#10b981", "#ef4444"],
    yAxisLabel: "Densidade (g/cm³)"
  },
  "graph-5": {
    id: "graph-5",
    title: "Matéria Orgânica vs Densidade",
    description: "Quanto menor a MO, maior a densidade.",
    type: "line",
    data: [
      { mo: 3.0, density: 1.00 },
      { mo: 2.5, density: 1.08 },
      { mo: 2.0, density: 1.15 },
      { mo: 1.5, density: 1.22 },
      { mo: 1.0, density: 1.28 }
    ],
    xAxisKey: "mo",
    dataKeys: ["density"],
    colors: ["#8b5cf6"],
    yAxisLabel: "Densidade (g/cm³)"
  },
  "graph-6": {
    id: "graph-6",
    title: "Efeitos dos Microrganismos",
    description: "Impacto da inoculação na estrutura do solo.",
    type: "bar",
    data: [
      { name: "Sem inoculação", macroporosity: 0.10, density: 1.30 },
      { name: "Azospirillum + Bacillus", macroporosity: 0.13, density: 1.25 },
      { name: "FMAs (Glomus)", macroporosity: 0.15, density: 1.22 },
      { name: "Consórcio completo", macroporosity: 0.17, density: 1.18 }
    ],
    xAxisKey: "name",
    dataKeys: ["macroporosity", "density"],
    colors: ["#3b82f6", "#f97316"],
    yAxisLabel: "Macroporosidade (m³/m³)",
    yAxis2Label: "Densidade (g/cm³)"
  }
};
