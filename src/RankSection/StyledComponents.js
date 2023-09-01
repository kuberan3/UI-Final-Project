import { styled } from "styled-components";
import { Progress } from "antd";


export const ScoreDiv=styled.div`
width: 1160px;

display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color: rgb(251,252,252);
gap:10px
`

export const ScoreLeft=styled.div`
width: 314px;
height: 583px;
flex-shrink: 0;
fill: #FFF;
stroke-width: 1px;
border: solid 1px #E4E7EA;
stroke: #E4E7EA;
filter: drop-shadow(0px 5px 10px rgba(0, 72, 124, 0.06));
box-shadow: 0px 5px 10px rgba(0, 72, 124, 0.06);

display: flex;
align-items: center;
flex-direction: column;
`
export const RankScoreHeading=styled.p`
color: #8895A3;
/* font-family: SF Pro Display; */
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: -160px;
margin-bottom: 30px;
`
export const EllipticalDiv=styled.div`
width: 217.264px;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;

`

export const SvgBackgrounddiv=styled.div`
  position: fixed;
  cursor: pointer;
`
export const Svgoverlaydiv=styled.div`
position: absolute;
margin-left: -43px;
`
export const Limit=styled.div`
width: 43px;
height: 2px;
transform: rotate(-49.816deg);
flex-shrink: 0;
border-radius: 3px;
background:  #239D56;
margin-top: 30px;
margin-left: 120px;
`
export const InsideEllipsediv=styled.div`
color: #134576;
font-family: 'SF Pro Display', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 140%; 
letter-spacing: 0.48px;
margin-top: 20px; 
`
export const SearchRankeScore=styled.p`
color:  #485C72;
text-align: center;
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 10px;
`
export const ScoreLimit=styled.div`
    height: 20.073px;
    width: 217.264px;
    margin-top: -20px;
    display: flex;
    justify-content: space-between;
`

export const Starts=styled.p`
    width: 9.446px;
height: 20.073px;
flex-shrink: 0;
color:  #8895A3;
text-align: center;
font-family: 'SF Pro Display', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 140%; 
letter-spacing: 0.24px;
`
export const Ends=styled.p`
  width: 27.158px;
height: 20.073px;
flex-shrink: 0;
color: #8895A3;
text-align: center;
font-family: 'SF Pro Display', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 140%; 
letter-spacing: 0.24px;
`
export const WeekUpdate=styled.div`
width: 274px;
display: flex;
align-items: center;
justify-content:center;
gap:3px;
margin-top: -10px;
`
export const UpdateText=styled.p`
color:#8895A3;
font-family: 'SF Pro Display', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
`


export const IncrementVale=styled.p`
color: #27AB66;
font-family: 'SF Pro Display', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;
`


export const What=styled.div`
display: flex;
width: 274px;
padding: 10px;
margin-top: 20px;
height: 27px;
justify-content: space-between;
align-items: center;
border-radius: 3px;
background-color: rgb(241,242,244);
`

export const Whatis=styled.p`
color: #485C72;
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const Suggest=styled.div`
width: 274px;
display: flex;
justify-content: space-between;
margin-top: 34px;
margin-bottom: 13px;
`
export const SuggestAction=styled.p`
color:  #8895A3;
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const ActNow=styled.p`
color: #185998;
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const ReplyReviewDiv=styled.div`
display: flex;
width: 274px;
height: 212.564px;
justify-content: center;
align-items: center;
flex-shrink: 0;
flex-direction: column;
`
export const HexogonDiv=styled.div`
margin-left: -10px;
`
export const Bg1=styled.div`
width: 224px;
height: 170.564px;
flex-shrink: 0;
margin-left: -15px;
border-radius: 3px;
background-image: url("./assert/Bgsmall2.svg");
background-repeat: no-repeat;
`
export const Bg2=styled.div`
width: 248px;
height: 182.294px;
flex-shrink: 0;
margin-left: -15px;
border-radius: 3px;
margin-top: -190px;
background-image: url("./assert/Bgsmall1.svg");
background-position: right 10;
background-repeat: no-repeat;
`
export const Bg3=styled.div`
width: 274px;
height: 195px;
display: flex;
align-items: center;
justify-content: center;
margin-top: -200px;
flex-shrink: 0;
border-radius: 3px;
background-color: rgb(21,131,239);
background-image: url("./assert/blueRectangle.svg");
background-repeat: no-repeat;
`
export const Replies=styled.div`
width: 228px;
display: flex;
flex-direction: column;
position: absolute;
align-items: center;
justify-content: center;
`

export const Reply1=styled.div`
width: 228px;
display: flex;
align-items: center;
justify-content: center;
justify-content: space-between;
`
export const ReplyText1=styled.p`
color: var(--yellow-t-15, #FFEA73);
font-family: 'SF Pro Display', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const ReplyText2=styled.p`
color: var(--blue-s-30, #134576);
font-family: 'SF Pro Display', sans-serif;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: -113px;
`

export const Reply2=styled.div`
width: 234px;
`
export const ReplyText3=styled.p`
color: #FBFCFC;
font-family: 'SF Pro Display', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.3px;
`
export const ReplyText4=styled.p`
color:  #FBFCFC;
font-family: 'SF Pro Display', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.3px;
display: inline;
`
export const ReplyButoon=styled.button`
padding: 10px 18px 9px 18px;
gap: 8px;
border-radius: 3px;
background: #FFF;
border: none;
white-space: nowrap; 
`

export const Reply3=styled.div`
width: 234px;
display: flex;
justify-content: center;
align-items: center;
`
export const ReplyText5=styled.p`
color: var(--grey-t-98, #FBFCFC);
font-size: 16px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 50px;
margin-right: 10px;
`

export const ScoreRight=styled.div`
width: 766px;
height: 583px;
`
export const ScoreRightsection1=styled.div`
width: 766px;
height: 103px;
flex-shrink: 0;
fill: var(--grey-t-92, #F0F2F4);
stroke-width: 1px;
stroke: var(--grey-t-65, #BFC6CE);
background-color: #F0F2F4;
display:flex;
align-items:center;
justify-content:center;
border-radius:3px;
border: solid 1px #E4E7EA;
border-radius: 3px;
margin-bottom: 10px;
box-shadow: 0px 5px 10px rgba(0, 72, 124, 0.06);

`

export const RightinnerText=styled.p`
width: 255.42px;
height: 17px;
flex-shrink: 0;
color: #324050;
text-align: center;
font-size: 14px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const ScoreRightsection2=styled.div`
width: 766px;
height: 467px;
flex-shrink: 0; 
display:flex;
align-items:center;
flex-direction:column;
border: solid 1px #E4E7EA;
border-radius: 3px;
box-shadow: 0px 5px 10px rgba(0, 72, 124, 0.06);
`
export const Rightsection1=styled.div`
width: 726px;
display:flex;
justify-content: space-between;
align-items:center;
`
export const SearchRight=styled.div`
display:flex;
align-items:center;
`
export const SearchRightText=styled.p`
color: #637487;
font-family: SF Pro Display;
font-family: 'SF Pro Display', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-right: 5px;
`

export const PossibleRight=styled.div`
display:flex;
align-items:center;
`
export const PossibleText1=styled.p`
color: #164F87;
font-family: 'SF Pro Display', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-right:5px;
`
export const PossibleText2=styled.p`
color: #637487;
font-size: 13px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const ProgressBarandt=styled(Progress)`
border-radius: 0; 
`
export const ColoursExplanation=styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const ColourDetails=styled.div`
display: inline-flex;
align-items: flex-start;
gap: 30px;
margin-left:-95px;
`
export const ColourData=styled.p`
color: #768595;
font-size: 13px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const RedDot=styled.div`
width: 10px;
height: 10px;
flex-shrink: 0;
border-radius: 5px;
background: #C55800;
`
export const BlueDot=styled.div`
width: 10px;
height: 10px;
flex-shrink: 0;
border-radius: 5px;
background: #0DC1CD;
`
export const DarkBlueDot=styled.div`
width: 10px;
height: 10px;
flex-shrink: 0;
border-radius: 5px;
background: #295FBE;
`
export const GreenDot=styled.div`
width: 10px;
height: 10px;
flex-shrink: 0;
border-radius: 5px;
background: #68AD10;
`
export const VioletDot=styled.div`
width: 10px;
height: 10px;
flex-shrink: 0;
border-radius: 5px;
background: #9924F0;
`
export const ProTip=styled.div`
  display:flex;
  margin-left: 40px;
  width:100%;
  margin-bottom: 10px;
  gap:5px
`
export const Tips1=styled.p`
color: #485C72;
font-size: 15px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const Tips2=styled.p`
color: #485C72;
font-family: 'SF Pro Display', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const CardsContainer=styled.div`
display:flex;
width: 726px;
flex-wrap:wrap;
gap: 11px;
margin-bottom: 10px;
`
export const ReviewsReply=styled.div`
width: 234px;
height: 136px;
flex-shrink: 0;
fill: rgba(104, 173, 16, 0.05);
stroke-width: 1px;
stroke: rgba(104, 173, 16, 0.20);
background-color: rgba(104, 173, 16, 0.05);
background-image: url("./assert/green.svg");
background-position: right 0;
background-repeat: no-repeat;
display: flex;
align-items: center;
flex-direction: column;
`
export const WebAnalytics=styled.div`
width: 234px;
height: 136px;
flex-shrink: 0;
fill: rgba(41, 95, 190, 0.05);
stroke-width: 1px;
stroke: rgba(41, 95, 190, 0.20);
background-color:  rgba(41, 95, 190, 0.20);
background-image: url("./assert/blue.svg");
background-position: right 0;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const ProComplition=styled.div`
width: 234px;
height: 136px;
flex-shrink: 0;
fill: rgba(153, 36, 240, 0.05);
stroke-width: 1px;
stroke: rgba(153, 36, 240, 0.20);
background-color: rgba(153, 36, 240, 0.20);
background-image: url("./assert/pink.svg");
background-position: right 0;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const ConnectionsCard=styled.div`
width: 234px;
height: 136px;
flex-shrink: 0;
fill: rgba(2, 175, 187, 0.05);
stroke-width: 1px;
stroke: rgba(2, 175, 187, 0.20);
background-color: rgba(2, 175, 187, 0.20);
background-image: url("./assert/lightblue.svg");
background-position:right 0;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const ListingsCrad=styled.div`
width: 234px;
height: 136px;
flex-shrink: 0;
fill: rgba(197, 88, 0, 0.05);
stroke-width: 1px;
stroke: rgba(197, 88, 0, 0.20);
background-color: rgba(197, 88, 0, 0.20);
background-image: url("./assert/orange.svg");
background-position: right 0;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const CardsIconLeft=styled.div`
display: flex;
align-items: center;
`
export const CardsIconRight=styled.div`
display: flex;
align-items: center;
`

export const CardsIconDiv=styled.div`
width: 204px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const InnerIconDiv=styled.div`
  margin-left: -25px;
`

export const RightInnerIcon=styled.div`
  margin-left: -19px;
`
export const ReplyDark=styled.div`
width: 204px;
height: 16px;
display: flex;
align-items: center;
margin-top: 5px;
`
export const ReplyTextDark=styled.p`
color:  #324050;
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-right: 7px;
`
export const ReplyLightDark=styled.div`
width: 204px;
display: flex;
align-items: center;
gap:5px;
`

export const BoldNumber1=styled.p`
color:  #134576;
font-family: 'SF Pro Display', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const ReviewsReplyText2=styled.p`
color: #637487;
font-family: 'SF Pro Display', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const CardProgress = styled(Progress)`
width: 204px;
height: 6px;
  
  .ant-progress-inner {
    background-color: #e74c3c; 
  }
  
  .ant-progress-bg {
    background-color: #3498db; 
  }
`;

export const WebCardsIconDiv=styled.div`
width: 204px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Text250=styled.p`
color: #637487;
font-family: 'SF Pro Display', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
