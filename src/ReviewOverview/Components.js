import { styled } from "styled-components";
import { Line } from "react-chartjs-2";

export const OverviewDiv=styled.div`
width: 1101px;
height: 507px;
flex-shrink: 0;
border-radius: 4px;
border-radius: solid 1px #E4E7EA;
background-color: #FFF;
box-shadow: 0px 5px 10px 0px rgba(0, 72, 124, 0.06);
`
export const HeadDiv=styled.div`
width: 1101px;
height: 66px;
display:flex;
justify-content: space-around;
gap:525px;
`
export const HeadLeft=styled.div`
height: 66px;
display:flex;
justify-content:center;
align-items:center;
`
export const HeadRight=styled.div`
height: 66px;
display:flex;
justify-content:center;
align-items:center;
// marg-right:20px;
`
export const OverviewT = styled.p`
color:  #324050;
/* font-family: SF Pro Display; */
font-size: 18px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 600;
line-height: normal;
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
export const MenuT=styled.p`
color: #8895A3;
/* font-family: SF Pro Display; */
font-size: 14px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 500;
line-height: normal;
&:hover {
    color:  #1B63A9;
    /* font-family: SF Pro Display; */
    font-family: 'SF Pro Display', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

export const MenuB=styled.p`
color:  #1B63A9;
/* font-family: SF Pro Display; */
font-size: 14px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const FooterDiv=styled.div`
width:100%;
/* height:125px; */
display:flex;

/* // justify-content:center; */
align-items:center;
padding-bottom: 10px;
`
export const Starimage=styled.img`
width: 50px;
height: 50px;
margin-left: 30px;
`

export const Letters=styled.div`
align-items:center;
text-align:left;
/* width: 427px; */
margin-left: 15px;
/* height: 125px; */

`

export const FooterL1=styled.p`
color:  #0D3155;
font-size: 18px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 1px;

`
export const FooterL2=styled.p`
color: #637487;
font-size: 14px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 400;
line-height: 140%;
letter-spacing: 0.28px;
display:inline;
`
export const FooterL3=styled.p`
color: #185998;
font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 140%;
letter-spacing: 0.28px;
display:inline;
margin-left: 7px;
`
export const FooterL4=styled.p`
color:  #415367;
font-size: 14px;
font-family: 'SF Pro Display', sans-serif;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 19.6px */
letter-spacing: 0.28px;
margin-top: 1px;
`

export const BodyDiv=styled.div`
height:315px;
width:95%;
margin-left: 30px;
`

export const GraphDiv=styled.div`
height: 300px;
> canvas {
    height: 300px !important;
  }
`
export const GraphLine=styled(Line)`
max-width: 1000%; 
  max-height: 100%; 
  display: block; 
  margin: auto;
`
