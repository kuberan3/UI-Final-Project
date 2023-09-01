import { styled } from "styled-components";
import { Progress } from "antd";

export const ScoreDiv=styled.div`
width: 1160px;
display: flex;
flex-wrap: wrap;
`

export const ScoreLeft=styled.div`
width: 314px;
height: 583px;
flex-shrink: 0;
fill: #FFF;
stroke-width: 1px;
stroke: var(--grey-t-85, #E4E7EA);
filter: drop-shadow(0px 5px 10px rgba(0, 72, 124, 0.06));

display: flex;
align-items: center;
flex-direction: column;
`
export const RankScoreHeading=styled.p`
color: var(--grey-t-35, #8895A3);
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const EllipticalDiv=styled.div`
width: 217.264px;
height: 217.264px;
font-family: 'SF Pro Display', sans-serif;
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
background: var(--green-s-10, #239D56);
margin-top: 30px;
margin-left: 120px;
`
export const InsideEllipsediv=styled.div`
font-family: 'SF Pro Display', sans-serif;
color: var(--blue-s-30, #134576);
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 140%; /* 33.6px */
letter-spacing: 0.48px;
margin-top: 20px; 
`
export const SearchRankeScore=styled.p`
color: var(--grey-100, #485C72);
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
color: var(--grey-t-35, #8895A3);
text-align: center;
font-family: 'SF Pro Display', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 16.8px */
letter-spacing: 0.24px;
`
export const Ends=styled.p`
  width: 27.158px;
height: 20.073px;
flex-shrink: 0;
color: var(--grey-t-35, #8895A3);
text-align: center;
font-family: SF Pro Display;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 16.8px */
letter-spacing: 0.24px;
`

export const What=styled.div`
display: flex;
width: 274px;
padding: 10px;
justify-content: space-between;
align-items: center;
border-radius: 3px;
background: var(--grey-t-96, #F8F8F9);
`

export const Whatis=styled.p`
color: var(--grey-100, #485C72);
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
`
export const SuggestAction=styled.p`
color: var(--grey-t-35, #8895A3);
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const ActNow=styled.p`
color: var(--blue-s-10, #185998);
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
export const Bg1=styled.div`
width: 224px;
height: 170.564px;
flex-shrink: 0;
margin-left: -15px;
/* margin-top: -00px; */
`
export const Bg2=styled.div`
width: 248px;
height: 182.294px;
flex-shrink: 0;
margin-left: -15px;
margin-top: -190px;
`
export const Bg3=styled.div`
width: 274px;
height: 195px;
margin-top: -200px;
flex-shrink: 0;
border-radius: 3px;
background-color: rgb(19,132,239);
`
export const Replies=styled.div`
width: 228px;
display: flex;
flex-direction: column;
position: absolute;
align-items: center;
justify-content: center;
margin-top: -50px;
`

export const Reply1=styled.div`
width: 228px;
display: flex;
/* position: absolute; */
align-items: center;
justify-content: center;
justify-content: space-between;
/* margin-top: -250px; */
`
export const ReplyText1=styled.p`
color: var(--yellow-t-15, #FFEA73);
font-family: SF Pro Display;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const ReplyText2=styled.p`
color: var(--blue-s-30, #134576);
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
color: var(--grey-t-98, #FBFCFC);
font-family: SF Pro Display;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.3px;
`
export const ReplyText4=styled.p`
color: var(--grey-t-98, #FBFCFC);
font-family: SF Pro Display;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.3px;
display: inline;
`
export const ReplyButoon=styled.button`
display: inline-flex;
padding: 10px 18px 9px 18px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 3px;
background: #FFF;
`

export const Reply3=styled.div`
width: 234px;
display: flex;
align-items: center;
`
export const ReplyText5=styled.p`
color: var(--grey-t-98, #FBFCFC);
font-family: SF Pro Display;
font-size: 16px;
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
`

export const RightinnerText=styled.p`
width: 255.42px;
height: 17px;
flex-shrink: 0;
color: #324050;
text-align: center;
font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const ScoreRightsection2=styled.div`
width: 766px;
height: 460px;
flex-shrink: 0; 
display:flex;
align-items:center;
justify-contents:center;
flex-direction:column
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
width: 163px;
color: #637487;
font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const PossibleRight=styled.div`
display:flex;
align-items:center;
`
export const PossibleText1=styled.p`
color: #164F87;
font-family: SF Pro Display;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-right:5px;
`
export const PossibleText2=styled.p`
color: #637487;
font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 88.754px;
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
margin-left:-120px;
`
export const ColourData=styled.p`
color: #768595;
font-family: SF Pro Display;
font-size: 13px;
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
  width:100%;
`
export const Tips1=styled.p`
color: #485C72;
font-family: SF Pro Display;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const Tips2=styled.p`
color: #485C72;
font-family: SF Pro Display;
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
`
export const ReviewsReply=styled.div`
width: 234px;
height: 136px;
flex-shrink: 0;
fill: rgba(104, 173, 16, 0.05);
stroke-width: 1px;
stroke: rgba(104, 173, 16, 0.20);
background: url('assert/svgviewer-png-output.png');
`
export const WebAnalytics=styled.div`
width: 234px;
height: 136px;
flex-shrink: 0;
fill: rgba(41, 95, 190, 0.05);
stroke-width: 1px;
stroke: rgba(41, 95, 190, 0.20);
background: url('assert/Blue.png');
`
export const ProComplition=styled.div`
width: 234px;
height: 136px;
flex-shrink: 0;
fill: rgba(153, 36, 240, 0.05);
stroke-width: 1px;
stroke: rgba(153, 36, 240, 0.20);
background: url('assert/pink.png');
`
export const ConnectionsCard=styled.div`
width: 234px;
height: 136px;
flex-shrink: 0;
background-color:rgba(2, 175, 187, 0.05);
fill: rgba(2, 175, 187, 0.05);
stroke-width: 1px;
stroke: rgba(2, 175, 187, 0.20);
background: url('assert/green.png');
`
export const ListingsCrad=styled.div`
width: 234px;
height: 136px;
flex-shrink: 0;
fill: rgba(197, 88, 0, 0.05);
stroke-width: 1px;
stroke: rgba(197, 88, 0, 0.20);
background: url('orange.png');
`