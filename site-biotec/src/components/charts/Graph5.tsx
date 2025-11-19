import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "./ChartContainer";
import { chartData } from "../../data/chart-data";

export function Graph5() {
  const data = chartData["graph-5"];

  if (!data || !data.dataKeys || !data.colors) return null;

  return (
    <ChartContainer title={data.title} description={data.description}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis 
            dataKey={data.xAxisKey} 
            type="number" 
            domain={['dataMin', 'dataMax']} 
            stroke="#888" 
            label={{ value: 'Matéria Orgânica (%)', position: 'insideBottom', offset: -5, fill: '#888' }} 
            reversed={true}
          />
          <YAxis stroke="#888" label={{ value: data.yAxisLabel, angle: -90, position: 'insideLeft', fill: '#888' }} domain={['auto', 'auto']} />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#f3f4f6' }} />
          <Legend />
          <Line type="monotone" dataKey={data.dataKeys[0]} name="Densidade" stroke={data.colors[0]} strokeWidth={2} activeDot={{ r: 8 }} animationDuration={2000} animationEasing="ease-out" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
