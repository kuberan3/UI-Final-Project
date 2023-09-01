import React from "react";
import {
  BlueDot,
  BoldNumber1,
  CardsContainer,
  CardsIconDiv,
  CardsIconLeft,
  CardsIconRight,
  ColourData,
  ColourDetails,
  ColoursExplanation,
  ConnectionsCard,
  DarkBlueDot,
  GreenDot,
  InnerIconDiv,
  ListingsCrad,
  PossibleRight,
  PossibleText1,
  PossibleText2,
  ProComplition,
  ProTip,
  RedDot,
  ReplyDark,
  ReplyLightDark,
  ReplyTextDark,
  ReviewsReply,
  ReviewsReplyText2,
  RightInnerIcon,
  RightinnerText,
  Rightsection1,
  ScoreRight,
  ScoreRightsection1,
  ScoreRightsection2,
  SearchRight,
  SearchRightText,
  Text250,
  Tips1,
  Tips2,
  VioletDot,
  WebAnalytics,
  WebCardsIconDiv,
} from "./StyledComponents";
import InfoIcon from "../svgComponents/InfoIcon";
import MyCustomProgressBar from "./MyCustomProgressBar";
import GreenCircle from "../svgComponents/GreenCircle";
import ReviewsReplyicon from "../svgComponents/ReviewsReplyicon";
import WhiteCircle from "../svgComponents/WhiteCircle";
import RightArrow from "../svgComponents/RightArrow";
import ProgressBar from "./ProgressBar";
import BlueCircle from "../svgComponents/BlueCircle";
import WebIcon from "../svgComponents/WebIcon";
import PinkCircle from "../svgComponents/PinkCircle";
import PersonIcon from "../svgComponents/PersonIcon";
import ConnectionsIcon from "../svgComponents/ConnectionsIcon";
import SkyblueCircle from "../svgComponents/SkyblueCircle";
import OrangeCirle from "../svgComponents/OrangeCircle";
import ListingIcon from "../svgComponents/ListingIcon";
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
          <ReviewsReply>
            <CardsIconDiv>
              <CardsIconLeft>
                <GreenCircle></GreenCircle>
                <InnerIconDiv>
                  <ReviewsReplyicon></ReviewsReplyicon>
                </InnerIconDiv>
              </CardsIconLeft>
              <CardsIconRight>
                <WhiteCircle></WhiteCircle>
                <RightInnerIcon>
                  <RightArrow></RightArrow>
                </RightInnerIcon>
              </CardsIconRight>
            </CardsIconDiv>
            <ReplyDark>
              <ReplyTextDark>Reviews & Replies</ReplyTextDark>
              <InfoIcon></InfoIcon>
            </ReplyDark>
            <ReplyLightDark>
              <BoldNumber1>10 </BoldNumber1>
              <ReviewsReplyText2> reviews need replies</ReviewsReplyText2>
            </ReplyLightDark>
            <ProgressBar rate={50} clr={"#68AD10"}></ProgressBar>
          </ReviewsReply>

          <WebAnalytics>
            <WebCardsIconDiv>
              <CardsIconLeft>
                <BlueCircle></BlueCircle>
                <InnerIconDiv>
                  <WebIcon></WebIcon>
                </InnerIconDiv>
              </CardsIconLeft>
              <CardsIconRight>
                <WhiteCircle></WhiteCircle>
                <RightInnerIcon>
                  <RightArrow></RightArrow>
                </RightInnerIcon>
              </CardsIconRight>
            </WebCardsIconDiv>
            <ReplyDark>
              <ReplyTextDark>Web Analytics</ReplyTextDark>
              <InfoIcon></InfoIcon>
            </ReplyDark>
            <ReplyLightDark>
              <BoldNumber1>150</BoldNumber1>
              <ReviewsReplyText2>of</ReviewsReplyText2>
              <Text250>250</Text250>
              <ReviewsReplyText2>Points</ReviewsReplyText2>
            </ReplyLightDark>
            <ProgressBar rate={50} clr={"#295FBE"}></ProgressBar>
          </WebAnalytics>

          <ProComplition>
            <WebCardsIconDiv>
              <CardsIconLeft>
                <PinkCircle></PinkCircle>
                <InnerIconDiv>
                  <PersonIcon></PersonIcon>
                </InnerIconDiv>
              </CardsIconLeft>
              <CardsIconRight>
                <WhiteCircle></WhiteCircle>
                <RightInnerIcon>
                  <RightArrow></RightArrow>
                </RightInnerIcon>
              </CardsIconRight>
            </WebCardsIconDiv>
            <ReplyDark>
              <ReplyTextDark>Profile Completion</ReplyTextDark>
              <InfoIcon></InfoIcon>
            </ReplyDark>
            <ReplyLightDark>
              <BoldNumber1>11 </BoldNumber1>
              <ReviewsReplyText2> incomplete items</ReviewsReplyText2>
            </ReplyLightDark>
            <ProgressBar rate={50} clr={"#9924F0"}></ProgressBar>
          </ProComplition>

          <ConnectionsCard>
            <WebCardsIconDiv>
              <CardsIconLeft>
                <SkyblueCircle></SkyblueCircle>
                <InnerIconDiv>
                  <ConnectionsIcon></ConnectionsIcon>
                </InnerIconDiv>
              </CardsIconLeft>
              <CardsIconRight>
                <WhiteCircle></WhiteCircle>
                <RightInnerIcon>
                  <RightArrow></RightArrow>
                </RightInnerIcon>
              </CardsIconRight>
            </WebCardsIconDiv>
            <ReplyDark>
              <ReplyTextDark>Connections</ReplyTextDark>
              <InfoIcon></InfoIcon>
            </ReplyDark>
            <ReplyLightDark>
              <BoldNumber1>3 </BoldNumber1>
              <ReviewsReplyText2> of</ReviewsReplyText2>
              <Text250>6</Text250>
              <ReviewsReplyText2> connections</ReviewsReplyText2>
            </ReplyLightDark>
            <ProgressBar rate={45} clr={"#02AFBB"}></ProgressBar>
          </ConnectionsCard>

          <ListingsCrad>
            <WebCardsIconDiv>
              <CardsIconLeft>
                <OrangeCirle></OrangeCirle>
                <InnerIconDiv>
                  <ListingIcon></ListingIcon>
                </InnerIconDiv>
              </CardsIconLeft>
              <CardsIconRight>
                <WhiteCircle></WhiteCircle>
                <RightInnerIcon>
                  <RightArrow></RightArrow>
                </RightInnerIcon>
              </CardsIconRight>
            </WebCardsIconDiv>
            <ReplyDark>
              <ReplyTextDark>Listings</ReplyTextDark>
              <InfoIcon></InfoIcon>
            </ReplyDark>
            <ReplyLightDark>
              <BoldNumber1>50 </BoldNumber1>
              <ReviewsReplyText2> of</ReviewsReplyText2>
              <Text250>100</Text250>
              <ReviewsReplyText2> Points</ReviewsReplyText2>
            </ReplyLightDark>
            <ProgressBar rate={45} clr={"#C55800"}></ProgressBar>
          </ListingsCrad>
        </CardsContainer>
      </ScoreRightsection2>
    </ScoreRight>
  );
};

export default RankScoreRight;
