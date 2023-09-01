import {
  BellBtn,
  CornerTop,
  CornerTxt1,
  CornerTxt2,
  DownArrowBtn,
  HeaderSection,
  HelpButton,
  HelpTxt,
  LeftDiv,
  LeftText,
  LeftText1,
  LeftText2,
  NavButton,
  OrgButton,
  OrgTxt,
  ProfileBtn,
  RightCorner,
  RightDiv,
  SearchButton,
  VerticalLine,
} from "./Components";
import BellIcon from "../svgComponents/BellIcon";
import MenuIcon from "../svgComponents/MenuIcon";
import SearchIcon from "../svgComponents/SearchIcon";

const Headermain = () => {
  return (
    <HeaderSection>
      <LeftDiv>
        <NavButton>
          {" "}
          <MenuIcon></MenuIcon>{" "}
        </NavButton>
        <LeftText>
          <LeftText1>New American Funding</LeftText1>
          <LeftText2>[Name of Menu]</LeftText2>
        </LeftText>
      </LeftDiv>
      <RightDiv>
        <SearchButton>
          <SearchIcon></SearchIcon>
        </SearchButton>
        <OrgButton>
          <OrgTxt>ORG - NMF</OrgTxt>
        </OrgButton>
        <HelpButton>
          <HelpTxt>Help</HelpTxt>
        </HelpButton>
        <BellBtn>
          {" "}
          <BellIcon></BellIcon>{" "}
        </BellBtn>
        <VerticalLine></VerticalLine>
        <ProfileBtn></ProfileBtn>
        <RightCorner>
          <CornerTop>
            <CornerTxt1>Amber Ernst</CornerTxt1>
            <DownArrowBtn></DownArrowBtn>
          </CornerTop>
          <CornerTxt2>User</CornerTxt2>
        </RightCorner>
      </RightDiv>
    </HeaderSection>
  );
};

export default Headermain;
