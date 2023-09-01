import { Progress } from 'antd';
import { styled } from 'styled-components';
const RateDiv=styled.div`
width: 204px;
height: 6px;
margin-top: -15px;
`
const ProgressBar = (prop) => {
   
    return ( 
        <RateDiv>
            <Progress percent={prop.rate} size="small" trailColor="#E4E7EA" strokeColor={prop.clr} showInfo={false} />
        </RateDiv>
     );
}

export default ProgressBar;