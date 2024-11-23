import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface PieChartProps {
  data: { name: string; value: number }[];
  colors: string[];
  title: string;
}

const PieChartDashboard: React.FC<PieChartProps> = ({ data, colors, title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartDashboard;
