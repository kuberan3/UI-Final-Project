import React from "react";
import {
  BlueDot,
  CardsContainer,
  ColourData,
  ColourDetails,
  ColoursExplanation,
  ConnectionsCard,
  DarkBlueDot,
  GreenDot,
  ListingsCrad,
  PossibleRight,
  PossibleText1,
  PossibleText2,
  ProComplition,
  ProTip,
  RedDot,
  ReviewsReply,
  RightinnerText,
  Rightsection1,
  ScoreRight,
  ScoreRightsection1,
  ScoreRightsection2,
  SearchRight,
  SearchRightText,
  Tips1,
  Tips2,
  VioletDot,
  WebAnalytics,
} from "./StyledComponents";
import InfoIcon from "../svgComponents/InfoIcon";
import MyCustomProgressBar from "./MyCustomProgressBar";
const RankScoreRight = () => {
  return (
    <ScoreRight>
      <ScoreRightsection1>
        <RightinnerText>Event / Feature Announcements</RightinnerText>
      </ScoreRightsection1>
      <ScoreRightsection2>
        <Rightsection1>
          <SearchRight>
            <SearchRightText>Search Rank Score Overview</SearchRightText>
            <InfoIcon></InfoIcon>
          </SearchRight>
          <PossibleRight>
            <PossibleText1>392</PossibleText1>
            <PossibleText2>of 850 Possible</PossibleText2>
          </PossibleRight>
        </Rightsection1>
        <MyCustomProgressBar></MyCustomProgressBar>
        <ColourDetails>
          <ColoursExplanation>
            <GreenDot></GreenDot>
            <ColourData>Reviews & Replies</ColourData>
          </ColoursExplanation>
          <ColoursExplanation>
            <DarkBlueDot></DarkBlueDot>
            <ColourData>Web Analytics</ColourData>
          </ColoursExplanation>
          <ColoursExplanation>
            <VioletDot></VioletDot>
            <ColourData>Profile Completion</ColourData>
          </ColoursExplanation>
          <ColoursExplanation>
            <BlueDot></BlueDot>
            <ColourData>Connections</ColourData>
          </ColoursExplanation>
          <ColoursExplanation>
            <RedDot></RedDot>
            <ColourData>Listings</ColourData>
          </ColoursExplanation>
        </ColourDetails>
        <ProTip>
          <Tips1>Pro Tip :</Tips1>
          <Tips2>Add </Tips2>
          <Tips1> 118 </Tips1>
          <Tips2>
            {" "}
            points by replying to reviews and improve your search ranking
          </Tips2>
        </ProTip>
        <CardsContainer>
          <ReviewsReply></ReviewsReply>
          <WebAnalytics></WebAnalytics>
          <ProComplition></ProComplition>
          <ConnectionsCard></ConnectionsCard>
          <ListingsCrad></ListingsCrad>
        </CardsContainer>
      </ScoreRightsection2>
    </ScoreRight>
  );
};

export default RankScoreRight;
