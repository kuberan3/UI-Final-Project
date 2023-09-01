import InfoIcon from "../svgComponents/InfoIcon";
import {
  Analytics,
  AnalyticsTxt,
  AnalyticsTxt2,
  InfoDiv,
  Referal,
  RequestBtn,
  RfrTxt1,
  RightDiv,
} from "./Component";

const OverviewRight = () => {
  return (
    <RightDiv>
      <Analytics>
        <InfoDiv>
          <AnalyticsTxt>Personal Web Analytics Score</AnalyticsTxt>
          <InfoIcon></InfoIcon>
        </InfoDiv>
        <AnalyticsTxt2>
          Made changes to improve the SEO of your website? Refresh to see your
          personal web analytics score
        </AnalyticsTxt2>
        <img src="./assert/Laptop.svg" alt="laptop"></img>
        <RequestBtn>Refresh Now</RequestBtn>
      </Analytics>

      <Referal>
        <InfoDiv>
          <RfrTxt1>
            Ask for a referral to acquire a customer with a lifetime value.{" "}
          </RfrTxt1>
        </InfoDiv>
        <img src="./assert/Mobile.svg" alt="mobile"></img>
        <RequestBtn>Request a Referral</RequestBtn>
      </Referal>
    </RightDiv>
  );
};

export default OverviewRight;
