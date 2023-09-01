import { BodyDiv } from "./Component";
import OverviewLeft from "./OverviewLeft";
import OverviewRight from "./OverviewRight";

const Overview = () => {
    return ( 
        <BodyDiv>
            <OverviewLeft/>
            <OverviewRight></OverviewRight>
        </BodyDiv>
     );
}
 
export default Overview;