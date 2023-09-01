import React from "react";
import {
  FooterDiv,
  Letters,
  Starimage,
  FooterL1,
  FooterL2,
  FooterL3,
  FooterL4,
} from "./Components";
const OverviewFooter = () => {
  return (
    <FooterDiv>
      <Starimage src="./assert/BlueStar.svg" />
      <Letters>
        <FooterL1>156</FooterL1>
        <FooterL2>You are in top</FooterL2>
        <FooterL3>5%</FooterL3>
        <FooterL4>
          You are ranked 156 of 2,612 Mortgage loan officers in zip code 37013.
        </FooterL4>
      </Letters>
    </FooterDiv>
  );
};

export default OverviewFooter;
