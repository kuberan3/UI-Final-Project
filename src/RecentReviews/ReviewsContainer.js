import {
  FlexDiv,
  ProfileDiv1,
  IconDiv,
  RateStar,
  ReplyBtn,
  InputFild,
  RatingContainer,
  Updated,
  ProfileDiv2,
  RatingsDiv,
  ReviewCard,
  Username,
  Usercity,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  StarContainer,
} from "./Components";
import Logo from "../svgComponents/Logo";
import HorizontalLineReview from "../svgComponents/HorizontalLineReview";
import Share from "../svgComponents/Share";
import Flag from "../svgComponents/Flag";
import Thumb from "../svgComponents/Thumb";
const ReviewsContainer = () => {
  return (
    <ReviewCard>
      <Section1>
        <RatingContainer>
          <RatingsDiv>5.0</RatingsDiv>
          <StarContainer>
            <RateStar defaultValue={2.5}></RateStar>
          </StarContainer>
        </RatingContainer>
        <Logo></Logo>
      </Section1>
      <Section2>
        <FlexDiv>
          <ProfileDiv1></ProfileDiv1>
          <div>
            <Username>Alfredo Korsgaard</Username>
            <Usercity>Pawnee, IL</Usercity>
          </div>
        </FlexDiv>
        <FlexDiv>
          <Updated>Posted on Aug 04, 2022</Updated>
        </FlexDiv>
      </Section2>
      <Section3>
        Amber Ernst answered everything we needed in a way that we understood
        and also in a very timely fashion. Her customer service skills are
        beyond excellent! Amber Ernst made us feel like a priority and went out
        of her way to rectify everything. Highly recommend!
      </Section3>
      <Section4>
        <ProfileDiv2></ProfileDiv2>
        <InputFild placeholder="     Enter your public comment..."></InputFild>
        <ReplyBtn>Send</ReplyBtn>
      </Section4>
      <HorizontalLineReview></HorizontalLineReview>
      <Section5>
        <FlexDiv>
          <IconDiv>
            <Thumb></Thumb>
          </IconDiv>
        </FlexDiv>
        <FlexDiv>
          <IconDiv style={{ marginRight: "20px" }}>
            <Share></Share>
          </IconDiv>
          <IconDiv>
            <Flag></Flag>
          </IconDiv>
        </FlexDiv>
      </Section5>
    </ReviewCard>
  );
};

export default ReviewsContainer;
