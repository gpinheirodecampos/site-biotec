export interface ReportSection {
  id: string;
  type: 'hero' | 'text' | 'chart' | 'infographic' | 'steps' | 'interactive-cards';
  title: string;
  subtitle?: string;
  content?: string[];
  chartId?: string;
  backgroundImage?: string;
  cardItems?: {
    title: string;
    description: string;
    content: string;
    icon?: string;
  }[];
}

export interface ChartData {
  id: string;
  title: string;
  description?: string;
  type: 'bar' | 'scatter' | 'line' | 'radar' | 'custom';
  data: any[];
  xAxisKey?: string;
  dataKeys?: string[];
  colors?: string[];
  yAxisLabel?: string;
  yAxis2Label?: string;
}
