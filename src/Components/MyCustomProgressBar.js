import React from "react";
import { ProgressBarandt } from "./StyledComponents";
const MyCustomProgressBar = () => {
  const gradientColors = [
    "#68AD10",
    "#295FBE",
    "#73d13d",
    "#02AFBB",
    "#C55800",
  ];

  const gradientWidths = [100, 100, 100, 100, 100];

  const progressBarContainerStyle = {
    backgroundColor: "#E4E7EA",
    width: "726px",
    height: "20px",
    alignItems: "center",
    display: "flex",
  };

  const progressBarStyle = [
    { width: "238px", borderRadius: "10px" },
    { width: "116px" },
    { width: "102px" },
    { width: "52px" },
    { width: "56px" },
  ];

  return (
    <div style={progressBarContainerStyle}>
      {gradientColors.map((color, index) => (
        <div style={progressBarStyle[index]}>
          <ProgressBarandt
            key={index}
            showInfo={false}
            percent={gradientWidths[index]}
            strokeColor={color}
            strokeWidth={20}
          />
        </div>
      ))}
    </div>
  );
};

export default MyCustomProgressBar;
