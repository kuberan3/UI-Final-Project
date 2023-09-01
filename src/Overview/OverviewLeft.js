import { Space } from "antd";
import {
  BottomDiv,
  BottomLeft,
  BottomRight,
  BottomT1,
  BottomT2,
  BottomT3,
  LeftContainer,
  MainDiv,
  RateStar,
  TotalScore,
  TotalScoreCard,
  Totalexp,
} from "./Component";
import Graps from "./Graphs";
import OverviewHeader from "./OverviewHeader";
import ProgressBar from "./ProgressBar";

const OverviewLeft = () => {
  let data = [
    {
      star: 5,
      percent: 60,
      totl: 326,
    },
    {
      star: 4,
      percent: 30,
      totl: 96,
    },
    {
      star: 3,
      percent: 10,
      totl: 21,
    },
    {
      star: 2,
      percent: 5,
      totl: 9,
    },
    {
      star: 1,
      percent: 5,
      totl: 9,
    },
  ];

  return (
    <LeftContainer>
      <OverviewHeader></OverviewHeader>
      <MainDiv>
        <Graps></Graps>
      </MainDiv>
      <BottomDiv>
        <BottomLeft>
          <BottomT1>Total Experience Score</BottomT1>
          <BottomT2>
            Experience score is calculated based on the reviews and ratings from
            your connected social profiles
          </BottomT2>
          <TotalScoreCard>
            <TotalScore>4.5</TotalScore>
            <div>
              <Totalexp>Total Experience Score</Totalexp>
              <div>
                <RateStar allowHalf defaultValue={4.5}></RateStar>
              </div>
            </div>
          </TotalScoreCard>
        </BottomLeft>
        <BottomRight>
          <BottomT3>Total Reviews (547)</BottomT3>
          <Space></Space>
          {data.map((data) => {
            return (
              <ProgressBar
                star={data.star}
                percent={data.percent}
                totl={data.totl}
              ></ProgressBar>
            );
          })}
        </BottomRight>
      </BottomDiv>
    </LeftContainer>
  );
};

export default OverviewLeft;
