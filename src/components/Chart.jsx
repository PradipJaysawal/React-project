import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'

const Chart = () => {
    const options = {
        title: {
            text: "My First Highcharts",
        },
        series: [
            {
                name: "Demo Series",
                data: [1, 6, 3, 4],
            }
        ]
    };
  return <HighchartsReact highcharts={Highcharts} options={options}/>;
    
};

export default Chart;
