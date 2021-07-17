import { lifeDuration, rollingRetention, totalDuration } from "../../../functions/calculate";
import './metric.scss'




const Metric =({data})=> {

    let lastDayUsers =0;
    let totalUsers=0;
    
    for (let item of data) {
        if (lifeDuration(item.date_registration,item.date_last_activity)>=7) lastDayUsers+=1;
        if (totalDuration(item.date_registration)>=7) totalUsers +=1;
    }

    const rollRetention = Math.round(rollingRetention(lastDayUsers,totalUsers));

    return(
        <>
        <div className="metric">
            <div className="metric__rr">
                <div className="metric__title"><h2>Rolling Retention 7 day </h2></div>
                <div className="metric__content">
                    <div>Rolling Retention 7 day: <span>{rollRetention}%</span> </div>
                    <p>Количество пользователей, вернувшихся в систему в 7-ый день или позже: <span>{lastDayUsers}</span> </p>
                    <p>Количество пользователей, установивших приложение 7 дней назад или раньше: <span>{totalUsers}</span> </p>
                </div>

            </div>

            
        </div>
        </>
    )
}

export default Metric