import {
  HeadingText1,
  LeftContent,
  LeftHeading,
  LeftSection,
  Person1,
  PersonRanking,
  PhotoSection,
  ProfilePhoto,
  ProfilePhotoGlow,
  ProfileGlowText,
} from "./StyledComponents";
import InfoIcon from "../svgComponents/InfoIcon";
import ProgressBar from "./ProgressBar";
const JourneySection1 = () => {
  return (
    <LeftSection>
      <LeftHeading>
        <HeadingText1>Ranking Journey</HeadingText1>
        <InfoIcon></InfoIcon>
      </LeftHeading>
      <LeftContent>
        <PhotoSection>
          <Person1>
            <PersonRanking>1</PersonRanking>
            <ProfilePhoto>
              <img src="./assert/FirstPerson.svg" alt="profile"></img>
            </ProfilePhoto>
            <ProgressBar
              progress={95}
              total={585}
              outof={850}
              clr={"#C6D8E9"}
            ></ProgressBar>
            {/* <OutOfDark>585</OutOfDark>
                        <OutOfLight>/  850</OutOfLight> */}
          </Person1>

          <Person1>
            <PersonRanking>56</PersonRanking>
            <ProfilePhoto>
              <img src="./assert/SecondPerson.svg" alt="profile"></img>
            </ProfilePhoto>
            <ProgressBar
              progress={85}
              total={510}
              outof={850}
              clr={"#C6D8E9"}
            ></ProgressBar>
          </Person1>
          <Person1>
            <PersonRanking>94</PersonRanking>
            <ProfilePhoto>
              <img src="./assert/ThirdPerson.svg" alt="profile"></img>
            </ProfilePhoto>
            <ProgressBar
              progress={80}
              total={445}
              outof={850}
              clr={"#C6D8E9"}
            ></ProgressBar>
          </Person1>
          <Person1>
            <img
              src="./assert/BlueStar.svg"
              alt="star"
              width="28px"
              height="28px"
            ></img>
            <ProfileGlowText>156</ProfileGlowText>
            <ProfilePhotoGlow>
              <img src="./assert/FourthPerson.svg" alt="profile"></img>
            </ProfilePhotoGlow>
            <ProgressBar
              progress={70}
              total={392}
              outof={850}
              clr={"#1B63A9"}
            ></ProgressBar>
          </Person1>
          <Person1>
            <PersonRanking>157</PersonRanking>
            <ProfilePhoto>
              <img src="./assert/FifthPerson.svg" alt="profile"></img>
            </ProfilePhoto>
            <ProgressBar
              progress={60}
              total={385}
              outof={850}
              clr={"#C6D8E9"}
            ></ProgressBar>
          </Person1>
        </PhotoSection>
      </LeftContent>
    </LeftSection>
  );
};

export default JourneySection1;
