// PagesToRead.jsx
import React from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
  CartesianGrid,
} from "recharts";

// // Sample data
// const data = [
//   { name: 'Page A', uv: 400 },
//   { name: 'Page B', uv: 300 },
//   { name: 'Page C', uv: 300 },
//   { name: 'Page D', uv: 200 },
//   { name: 'Page E', uv: 278 },
//   { name: 'Page F', uv: 189 },
// ];

// Margin for chart
const margin = { top: 20, right: 30, left: 20, bottom: 250 };

// Function to generate triangle path for bars
const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  },${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  },${y + height}
   Z`;

// Custom triangle bar component
export function TriangleBar(props) {
  const { fill, x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) return null;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
}

const colors = [
  "#8884d8",
  "#82ca9d",
  "#ff7300",
  "#ffc658",
  "#a4de6c",
  "#d0ed57",
  "#ed1010",
  "#10c1ed",
  "#10edb3",
];

const CustomBarLabel = ({ x, y, width, value, index, colors }) => (
  <text
    x={x + width / 2}
    y={y - 10}
    fill={colors[index]}  // label uses same color as bar
    fontSize={15}
    textAnchor="middle"
  >
    {value}
  </text>
);

// Main chart component
const PagesToRead = () => {
  const books = useLoaderData();
  return (
    <div className="max-w-[1200px] mx-auto">
      <ResponsiveContainer height={700}>
      <BarChart data={books} margin={margin}>
        <XAxis dataKey="bookName" angle={-90} textAnchor="end" interval={0} stroke="#ccc" />
        <YAxis stroke="" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="totalPages" shape={TriangleBar}>
          <LabelList
          dataKey="totalPages" position="top"
          content={(props) => (
            <CustomBarLabel {...props} colors={colors} index={props.index} />
          )}
        />
          {books.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
