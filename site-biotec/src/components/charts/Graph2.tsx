import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";
import { ChartContainer } from "./ChartContainer";
import { chartData } from "../../data/chart-data";

export function Graph2() {
  const data = chartData["graph-2"];

  if (!data || !data.colors) return null;

  return (
    <ChartContainer title={data.title} description={data.description}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis type="number" dataKey="x" name="Densidade" stroke="#888" label={{ value: 'Densidade (g/cm³)', position: 'bottom', offset: 0, fill: '#888' }} />
          <YAxis type="number" dataKey="y" name="Porosidade" stroke="#888" label={{ value: data.yAxisLabel, angle: -90, position: 'insideLeft', fill: '#888', offset: 10 }} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#f3f4f6' }} />
          <Scatter name="Amostras" data={data.data} fill={data.colors[0]} animationDuration={2000} animationEasing="ease-out">
            <LabelList dataKey="name" position="top" style={{ fill: '#ccc' }} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
