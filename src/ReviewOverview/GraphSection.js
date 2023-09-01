import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import { GraphDiv } from "./Components";
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
          //   stepSize: 10,
        },
      },
      y: {
        // beginAtZero: true,
        // grid: {
        //   //   innerWidth:'500px';
        // },
        ticks: {
          // stepSize: 50,
          // reverse: true,
          //   stepSize: 50,
          // min: 50,
          // max: 400,
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
