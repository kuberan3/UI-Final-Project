import { styled } from "styled-components";
const FooterDiv = styled.div`
  width: 1159px;
  height: 35px;
  flex-shrink: 0;
  background-color: #edf0f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FooterLeft = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 5px;
`;
const FooterRight = styled.div`
  display: flex;
  margin-right: 20px;
  gap: 5px;
`;
const Cicon = styled.div`
  width: 10px;
  height: 12px;
  background-image: url("./assert/Clogo.svg");
`;
const Copyrights = styled.div`
  color: var(--Grey-100, #485c72);
  font-family: "SF Pro Display", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const BlueText = styled.div`
  color: var(--Blue-100, #1b63a9);
  font-family: "SF Pro Display", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Linediv = styled.div`
  width: 1px;
  height: 12px;
  background-color: #485c72;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterLeft>
        <Cicon></Cicon>
        <Copyrights>2015 - 2022</Copyrights>
        <BlueText>Experience.com</BlueText>
        <Copyrights>
          created by BuyersRoad, Inc. All rights reserved.
        </Copyrights>
      </FooterLeft>
      <FooterRight>
        <BlueText>Privacy Policy</BlueText>
        <Linediv></Linediv>
        <BlueText>Accessiblity Statement</BlueText>
      </FooterRight>
    </FooterDiv>
  );
};

export default Footer;
