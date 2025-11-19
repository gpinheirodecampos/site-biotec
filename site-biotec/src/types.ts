export interface ReportSection {
  id: string;
  type: 'hero' | 'text' | 'chart' | 'infographic' | 'steps';
  title: string;
  subtitle?: string;
  content?: string[];
  chartId?: string;
  backgroundImage?: string;
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
