import React from "react";
import { OverviewDiv} from "./Components";
import OverviewHeader from "./OverviewHeader";
import HorizontalLine from "../svgComponents/HorrizontalLine";
import OverviewFooter from "./OverviewFooter";
import OverviewBody from "./OverviewBody";
const ReviewOverview = () => {
    return (
    <OverviewDiv>
      <OverviewHeader>
      </OverviewHeader>
      <HorizontalLine/>
      <OverviewBody/>
      <HorizontalLine/>
      <OverviewFooter/>
    </OverviewDiv>
  
    );
  };
  
  export default ReviewOverview;
  