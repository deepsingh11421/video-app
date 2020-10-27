import React from "react";
import { Line } from "react-chartjs-2";
import classes from './LineGraph.module.css'
import Heading from '../../UI/Heading/Heading'


const data = {
  labels: ["1", "2", "3", "4"],
  datasets: [
    {
      label: "Negative",
      data: [100, 100, 100, 100],
      fill: true,
      backgroundColor: "rgba(255, 0, 0,0.2)",
      borderColor: "rgb(255, 0, 0)",
    },
    {
      label: "Neutral",
      data: [55, 75, 75, 90],
      fill: true,
      backgroundColor: "rgba(255, 165, 0,0.2)",
      borderColor: "rgb(255, 165, 0)",
    },
    {
      label: "Positive",
      data: [30, 40, 50, 60],
      fill: true,
      backgroundColor: "rgba(32, 255, 68, 0.2)",
      borderColor: "rgba(32, 255, 68)",
    },
  ],
};

let options = {
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          stepSize: 25 /* total/4 shows 0, 25%, 50%, 75%, 100% */,
          callback: function (value, index, values) {
            return (value / 100) * 100 + "%";
          },
        },
      },
    ],
  },
};


export default function LineGraph() {
  return (
      <div className={classes.LineGraph}>
        <Heading>Sentiment Over Time</Heading>
        <Line data={data} options={options} />
    </div>
  );
}

// export default LineGraph;
