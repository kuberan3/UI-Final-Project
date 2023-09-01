import JourneySection1 from "./JourneySection1";
import JourneySection2 from "./JourneySection2";
import { JourneyContainern } from "./StyledComponents";

const JourneySection = () => {
    return ( 
        <JourneyContainern>
            <JourneySection1></JourneySection1>
            <JourneySection2></JourneySection2>
        </JourneyContainern>
     );
}
 
export default JourneySection;