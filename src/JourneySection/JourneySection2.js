import {
  CodeDiv,
  CountryDiv,
  InnerDivLeft,
  InnerDivRight,
  RightHeadTxt,
  Address,
  RightHeading,
  RightSection,
  Rightcontent,
  StateDiv,
  AddressNo,
} from "./StyledComponents";
import InfoIcon from "../svgComponents/InfoIcon";
const JourneySection2 = () => {
  return (
    <RightSection>
      <RightHeading>
        <RightHeadTxt>Your Score Report</RightHeadTxt>
        <InfoIcon></InfoIcon>
      </RightHeading>
      <Rightcontent>
        <CodeDiv>
          <InnerDivLeft>
            <Address>In Zip code : 37013</Address>
            <AddressNo>392</AddressNo>
          </InnerDivLeft>
          <InnerDivRight>
            <Address>Percentile</Address>
            <AddressNo>85%</AddressNo>
          </InnerDivRight>
        </CodeDiv>

        <StateDiv>
          <InnerDivLeft>
            <Address>In State : Iowa</Address>
            <AddressNo>392</AddressNo>
          </InnerDivLeft>
          <InnerDivRight>
            <Address>Percentile</Address>
            <AddressNo>60%</AddressNo>
          </InnerDivRight>
        </StateDiv>

        <CountryDiv>
          <InnerDivLeft>
            <Address>Country Wide : USA</Address>
            <AddressNo>392</AddressNo>
          </InnerDivLeft>
          <InnerDivRight>
            <Address>Percentile</Address>
            <AddressNo>45%</AddressNo>
          </InnerDivRight>
        </CountryDiv>
      </Rightcontent>
    </RightSection>
  );
};

export default JourneySection2;
