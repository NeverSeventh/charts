import { useSelector } from "react-redux";
import Histogram from "./Histogram/Histogram";
import Metric from "./Metric/Metric";



const Stats = () => {

    const users = useSelector(state=>state.users);
    const stats = useSelector(state=>state.stats);

    return(
        <>
        {stats ?
            <>
            <Metric data={users}/>
            <Histogram users={users}/>
            
            </> 
            :
            <></>}

        </>
    )
}


export default Stats;