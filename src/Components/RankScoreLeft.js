import React from "react";
import {
  ActNow,
  EllipticalDiv,
  Ends,
  InsideEllipsediv,
  Limit,
  RankScoreHeading,
  ReplyReviewDiv,
  ScoreLeft,
  ScoreLimit,
  SearchRankeScore,
  Starts,
  Suggest,
  SuggestAction,
  SvgBackgrounddiv,
  Svgoverlaydiv,
  What,
  Whatis,
  Bg1,
  Bg2,
  Bg3,
  Reply1,
  ReplyText1,
  ReplyText2,
  ReplyText3,
  ReplyText4,
  Reply2,
  Replies,
  Reply3,
  ReplyButoon,
  ReplyText5,
} from "./StyledComponents";
import EllipseScore from "../svgComponents/EllipseScore";
import EllipseBackground from "../svgComponents/EllipseBackground";
import ChevronRight from "../svgComponents/ChevronRight";
import SquareBg1 from "../svgComponents/SquareBg1";
import SquareBg2 from "../svgComponents/SquareBg2";
import Hexagon from "../svgComponents/Hexagon";
import Arrow from "../svgComponents/Arrow";
const RankScoreSection = () => {
  return (
    <ScoreLeft>
      <RankScoreHeading>Search Rank Score</RankScoreHeading>
      <EllipticalDiv>
        <SvgBackgrounddiv>
          {" "}
          <EllipseBackground />
        </SvgBackgrounddiv>
        <Svgoverlaydiv>
          {" "}
          <EllipseScore />
        </Svgoverlaydiv>
        <Limit></Limit>
        <InsideEllipsediv>392</InsideEllipsediv>
        <SearchRankeScore>Search Rank Score </SearchRankeScore>
        <ScoreLimit>
          <Starts>0</Starts>
          <Ends>850</Ends>
        </ScoreLimit>
      </EllipticalDiv>
      <What>
        <Whatis>What is Search Rank Score?</Whatis>
        <ChevronRight></ChevronRight>
      </What>
      <Suggest>
        <SuggestAction>Suggested Actions</SuggestAction>
        <ActNow>Act Now</ActNow>
      </Suggest>
      <ReplyReviewDiv>
        <Bg1>
          <SquareBg1></SquareBg1>
        </Bg1>
        <Bg2>
          <SquareBg2></SquareBg2>
        </Bg2>
        <Bg3></Bg3>
        <Replies>
          <Reply1>
            <ReplyText1>Reply to review</ReplyText1>
            <Hexagon></Hexagon>
            <ReplyText2>10</ReplyText2>
          </Reply1>
          <Reply2>
            <ReplyText3>
              Please reply to your new reviews and get up-to
              <ReplyText4>20 points</ReplyText4>
            </ReplyText3>
          </Reply2>
          <Reply3>
            <ReplyButoon>Reply to review</ReplyButoon>
            <ReplyText5>Next</ReplyText5>
            <Arrow></Arrow>
          </Reply3>
        </Replies>
      </ReplyReviewDiv>
    </ScoreLeft>
  );
};

export default RankScoreSection;
