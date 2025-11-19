import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "./ChartContainer";
import { chartData } from "../../data/chart-data";

export function Graph6() {
  const data = chartData["graph-6"];

  if (!data || !data.dataKeys || !data.colors) return null;

  return (
    <ChartContainer title={data.title} description={data.description}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 70,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis 
            dataKey={data.xAxisKey} 
            stroke="#888" 
            interval={0} 
            angle={-45}
            textAnchor="end"
            tick={{fontSize: 11}} 
            height={70}
          />
          <YAxis yAxisId="left" orientation="left" stroke="#888" label={{ value: data.yAxisLabel, angle: -90, position: 'insideLeft', fill: '#888' }} />
          <YAxis yAxisId="right" orientation="right" stroke="#888" label={{ value: data.yAxis2Label, angle: 90, position: 'insideRight', fill: '#888' }} domain={[1.0, 1.4]} />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#f3f4f6' }} />
          <Legend />
          <Bar yAxisId="left" dataKey={data.dataKeys[0]} name="Macroporosidade" fill={data.colors[0]} radius={[4, 4, 0, 0]} animationDuration={2000} animationEasing="ease-out" />
          <Bar yAxisId="right" dataKey={data.dataKeys[1]} name="Densidade" fill={data.colors[1]} radius={[4, 4, 0, 0]} animationDuration={2000} animationEasing="ease-out" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
