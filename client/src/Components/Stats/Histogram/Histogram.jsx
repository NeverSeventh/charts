
import HistogramChart from 'react-chart-histogram';
import { useSelector } from 'react-redux';
import { lifeDuration } from '../../../functions/calculate';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


const Histogram = ({users}) => {


    const usersChart = users.map(el => {
        return [el.id,lifeDuration(el.date_registration,el.date_last_activity)]
    })

    
    const labels = users.map(el=>el.id);
    const data = users.map(el=>lifeDuration(el.date_registration,el.date_last_activity));
    
const options = {
    chart: {
        type:'column'
    },
    title: {
      text: 'Длительность жизни пользователей'
    },

    xAxis:{
        categories:{
            ...labels
        }
    },
    yAxis:{
        min:0,
        title:
        {
          text:'Дни последней активности'
        }
    },
    plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0,
          groupPadding: 0,
          shadow: false
        }
      },
    series: [{
        name:'Дни последней активности',
      data: [...data]
    }]
  }
    
    return(
        <>
          <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
        </>
    )
}

export default Histogram;