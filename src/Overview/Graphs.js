import React from "react";
import { Graph } from "./GraphSection";
import { useState } from "react";
const Graps = () => {
  const [userData, setUserData] = useState({
    labels: [
      "01 Feb",
      "03 Feb",
      "06 Feb",
      "09 Feb",
      "12 Feb",
      "15 Feb",
      "18 Feb",
      "21 Feb",
      "24 Feb",
      "27 Feb",
    ],
    datasets: [
      {
        label: "dataValue",
        tension: 0.1,
        axis: "y",
        data: [250, 255, 258, 260, 265, 270, 278, 280, 290, 290],
        borderColor: "rgb(53, 162, 235)",
        borderWidth: 2,
        backgroundColor: (colorSet) => {
          const bgColor = [
            "rgba(53, 162, 235,0.4)",
            "rgba(53, 162, 235,0.01)",
            "rgba(53, 162, 235,0)",
          ];

          if (!colorSet.chart.chartArea) {
            return;
          }
          const {
            ctx,
            data,
            chartArea: { bottom, top },
          } = colorSet.chart;
          const gradientBG = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBG.addColorStop(0, bgColor[0]);
          gradientBG.addColorStop(1, bgColor[1]);
          gradientBG.addColorStop(1, bgColor[2]);
          return gradientBG;
        },

        fill: "origin",
      },
    ],
  });
  return (
    <div>
      <Graph chartData={userData} />
    </div>
  );
};

export default Graps;
