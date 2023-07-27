import React, { useState } from 'react'
import Chart from "react-apexcharts";

const Heatmap = () => {
    const [state, setState] = useState({
        options: {
          colors: ["#E91E63", "#FF9800"],
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          },
        },
        series: [
          {
            name: "People Born",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
          {
            name: "People Died",
            data: [3, 60, 35, 80, 49, 70, 20, 81],
          },
        ],
      });
  return (
    <div className="lineChart">
        <div className="substitute">
        Where do the lines go?
        </div>

          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="580"
            height="280"
          />
          </div>
  )
}

export default Heatmap
