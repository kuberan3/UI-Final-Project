import React from "react";
import { styled } from "styled-components";
const MyCustomProgressBar = () => {
  const gradientColors = [
    "#68AD10",
    "#295FBE",
    "#73d13d",
    "#02AFBB",
    "#C55800",
  ];


  const progressBarContainerStyle = {
    backgroundColor: "#E4E7EA",
    width: "726px",
    height: "20px",
    alignItems: "center",
    display: "flex",
    borderRadius: "3px",
    gap: "2px",
  };

  const ColouredDiv = styled.div`
    width: ${(props) => props.width || "0"}px;
    background-color: ${(props) => props.clr};
    height: 20px;
    border-radius: 3px;
  `;

  const progressBarStyle = [
    { width: "238", clr: "#68AD10" },
    { width: "116", clr: "#295FBE" },
    { width: "102", clr: "#9924F0" },
    { width: "52", clr: "#02AFBB" },
    { width: "56", clr: "#C55800" },
  ];

  return (
    <div style={progressBarContainerStyle}>
      {gradientColors.map((color, index) => (
        <ColouredDiv
          width={progressBarStyle[index].width}
          clr={progressBarStyle[index].clr}
        ></ColouredDiv>
      ))}
    </div>
  );
};

export default MyCustomProgressBar;
