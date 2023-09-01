import React from "react";
import {
  HeadDiv,
  HeadLeft,
  HeadRight,
  MenuT,
  Menus,
  OverviewT,
} from "./Components";
const OverviewHeader = () => {
  return (
    <HeadDiv>
      <HeadLeft>
        <OverviewT>Reviews Overview</OverviewT>
      </HeadLeft>
      <HeadRight>
        <Menus>
          <MenuT>Week</MenuT>
        </Menus>
        <Menus style={{ borderBottom: "4px solid #1B63A9" }}>
          <MenuT style={{ color: "#1B63A9" }}>Month</MenuT>
        </Menus>
        <Menus>
          <MenuT>Quarter</MenuT>
        </Menus>
        <Menus>
          <MenuT>Year</MenuT>
        </Menus>
      </HeadRight>
    </HeadDiv>
  );
};

export default OverviewHeader;
