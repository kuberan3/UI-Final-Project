import React from "react";
import { Line } from "react-chartjs-2";
import { GraphDiv } from "./Component";
export const Graph = ({ chartData }) => {
  const options = {
    scales: {
      tension: 0.1,
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          reverse: true,
        },
      },
      y: {
        ticks: {
          reverse: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
  };
  return (
    <GraphDiv className="sample">
      <Line data={chartData} options={options} />
    </GraphDiv>
  );
};

export const UserData = [
  {
    id: 1,
    year: "06 Jan",
    users1: 0,
    users2: 3000,
  },
  {
    id: 2,
    year: "07 Jan",
    users1: 2000,
    users2: 5000,
  },
  {
    id: 3,
    year: "08 Jan",
    users1: 0,
    users2: 2000,
  },
  {
    id: 4,
    year: "09 Jan",
    users1: 5000,
    users2: 6000,
  },
  {
    id: 5,
    year: "10 Jan",
    users1: 8000,
    users2: 6500,
  },
  {
    id: 5,
    year: "11 Jan",
    users1: 8000,
    users2: 7000,
  },
  {
    id: 5,
    year: "Today",
    users1: 6500,
    users2: 0,
  },
];
