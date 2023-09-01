import { styled } from "styled-components";
import { Line } from "react-chartjs-2";
import { Rate,Progress } from "antd";
export const BodyDiv=styled.div`
width: 1101px;
height: 665px;
border: none;
display: flex;
gap: 20px;
`

export const GraphDiv=styled.div`
width: 700px;
height: 290px;
> canvas {
    height: 290px !important;
  }
`
export const GraphLine=styled(Line)`
max-width: 1000%; 
  max-height: 100%; 
  display: block; 
  margin: auto;
`
export const LeftContainer=styled.div`
width: 760px;
height: 665px;
flex-shrink: 0;
border-radius: 4px;
border: 1px solid  #E4E7EA;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);
`
export const MenuT=styled.p`
color: #8895A3;
font-size: 14px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 500;
line-height: normal;
&:hover {
    color:  #1B63A9;
    font-family: 'SF Pro Display', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
export const Menus=styled.div`
width: 82px;
height: 66px;
display:flex;
justify-content:center;
align-items:center;
cursor: pointer;
&:hover {
    border-bottom: 4px solid #1B63A9;
  }
`
export const HeadRight=styled.div`
height: 66px;
display:flex;
justify-content:center;
align-items:center;
`
export const OverviewT = styled.p`
color:  #324050;
font-size: 18px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const HeadDiv=styled.div`
width: 760px;
height: 66px;
display:flex;
justify-content: space-around;
gap:25%;
border-bottom: solid 1px #E4E7EA;
`
export const HeadLeft=styled.div`
height: 66px;
display:flex;
justify-content:center;
align-items:center;
`
export const MainDiv=styled.div`
height: 315px;
display:flex;
justify-content:center;
align-items:center;
border-bottom:1px solid #E4E7EA;
`
export const BottomDiv=styled.div`
height: 375px;
width:100%;
display:flex;
justify-content: space-around;
`
export const BottomLeft=styled.div`
height: 375px;
width:280px;
display:flex;
flex-direction:column;
align-items:left;
`
export const BottomRight=styled.div`
height: 375px;
width:400px;
`
export const BottomT1=styled.div`
color: var(--grey-s-10, #415367);
font-family: 'SF Pro Display', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom:10px;
margin-top:40px;
`
export const BottomT2=styled.div`
width: 280px;
color: var(--grey-t-15, #637487);
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; 
letter-spacing: 0.28px;
margin-bottom:30px;
`
export const TotalScoreCard=styled.div`
width: 280px;
height: 90px;
display:flex;
align-items:center;
justify-content:center;
flex-shrink: 0;
border-radius: 5px;
background: #0D3155;
background-image: url('./assert/expcard.svg')
`

export const TotalScore=styled.div`
color: var(--grey-t-98, #FBFCFC);
font-family: 'SF Pro Display', sans-serif;
font-size: 42px;
font-style: normal;
font-weight: 300;
line-height: normal;
margin-right:10px;
`
export const Totalexp=styled.div`
color: var(--grey-t-98, #FBFCFC);
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: normal;
letter-spacing: 0.21px;
`
export const RateStar=styled(Rate)`
color: #FBFCFC;
font-size: 20px;
`

export const ProgressDiv=styled.div`
width:395px;
display:flex;
align-items:center;
height:20px;
gap:10px;
position: relative;
margin-bottom:15px;
`
export const StarRatings=styled.div`
width: 45px;
height: 21px;
flex-shrink: 0;
color: var(--grey-s-30, #324050);
font-family: 'SF Pro Display', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 140%; 
letter-spacing: 0.3px;
`
export const BottomT3=styled.div`
color: var(--grey-s-10, #415367);
font-family: 'SF Pro Display', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom:20px;
margin-top:40px;
`

export const StyledProgress=styled(Progress)`
width: 286.663px;
height: 5px;
margin-top:-15px;
.ant-progress-inner {
  background-color: #E4E7EA; 
}
`
export const TotalRate=styled.div`
color: var(--grey-s-30, #324050);
font-family: 'SF Pro Display', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 140%; 
letter-spacing: 0.3px;
`
export const PercentageVal=styled.div`
height: 17px;
flex-shrink: 0;
color: var(--grey-t-35, #8895A3);
font-family: 'SF Pro Display', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: 140%; 
letter-spacing: 0.24px;
position: absolute;
margin-top:-25px;
right:55px;
`
export const SpaceDiv=styled.div`
  height:20px;
  width:100px;
  padding:10px;
`

export const RightDiv=styled.div`
height: 665px;
width: 320px;
display:flex;
flex-direction:column
`

export const Analytics=styled.div`
height: 312px;
width: 320px;
display:flex;
border-radius: 3px;
border: 1px solid var(--grey-t-85, #E4E7EA);
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);
flex-direction:column;
justify-content:space-around;
align-items:center;
margin-bottom:20px;
`

export const Referal=styled.div`
height: 333px;
width: 320px;
border-radius: 3px;
border: 1px solid #E4E7EA;
background: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
`

export const InfoDiv=styled.div`
display:flex;
align-items:center;
margin-top:10px;
// justify-content:space-around;
`
export const AnalyticsTxt=styled.div`
color: var(--grey-s-30, #324050);
font-family: 'SF Pro Display', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-right:6px;
`
export const AnalyticsTxt2=styled.div`
width: 280px;
color: var(--grey-t-25, #768595);
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; 
`
export const RequestBtn=styled.button`
width: 150px;
height:33px;
border-radius: 3px;
background: var(--blue-100, #1B63A9);
color: var(--grey-t-98, #FBFCFC);
font-family: 'SF Pro Display', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
border:none;
`

export const RfrTxt1=styled.div`
width: 280px;
color: var(--grey-100, #485C72);
font-family: 'SF Pro Display', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`