import { PercentageVal, ProgressDiv, StarRatings, StyledProgress, TotalRate } from "./Component";
const ProgressBar = (props) => {
    return ( 
        <ProgressDiv>
            <StarRatings>{props.star} Star</StarRatings>
            <StyledProgress percent={props.percent} strokeColor={'#1B63A9'} showInfo={false} status="active" ></StyledProgress>
            <PercentageVal>{props.percent} %</PercentageVal>
            <TotalRate>{props.totl}</TotalRate>
        </ProgressDiv>
     );
}
 
export default ProgressBar;