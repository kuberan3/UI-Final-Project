import React from "react";
import { ScoreDiv, ScoreLeft } from "./StyledComponents";
import RankScoreLeft from "./RankScoreLeft"
import RankScoreRight from "./RankScoreRight";
const ScoreSection = () => {
  return (
      <ScoreDiv>
        <RankScoreLeft></RankScoreLeft>
        <RankScoreRight></RankScoreRight>
      </ScoreDiv>
  )
};

export default ScoreSection;
