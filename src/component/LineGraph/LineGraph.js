import React from "react";
import { Line } from "react-chartjs-2";
import classes from './LineGraph.module.css'
import Heading from '../../UI/Heading/Heading'

// const options = {
//   legend: {
//     display: false,
//   },
//   elements: {
//     point: {
//       radius: 0,
//     },
//   },
//   maintainAspectRatio: false,
//   tooltips: {
//     mode: "index",
//     intersect: false,
//     callbacks: {
//       label: function (tooltipItem, data) {
//         return numeral(tooltipItem.value).format("+0,0");
//       },
//     },
//   },
//   scales: {
//     xAxes: [
//       {
//         type: "time",
//         time: {
//           format: "MM/DD/YY",
//           tooltipFormat: "ll",
//         },
//       },
//     ],
//     yAxes: [
//       {
//         gridLines: {
//           display: false,
//         },
//         ticks: {
//           // Include a dollar sign in the ticks
//           callback: function (value, index, values) {
//             return numeral(value).format("0a");
//           },
//         },
//       },
//     ],
//   },
// };

// const buildChartData = (data, casesType = "cases") => {
//   let chartData = [];
//   let lastDataPoint;
//   for (let date in data.cases) {
//     if (lastDataPoint) {
//       let newDataPoint = {
//         x: date,
//         y: data[casesType][date] - lastDataPoint,
//       };
//       chartData.push(newDataPoint);
//     }
//     lastDataPoint = data[casesType][date];
//   }
//   return chartData;
// };


export default function LineGraph() {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     fetch(//json url)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         let chartData = buildChartData(data, casesType);
  //         setData(chartData);
  //         console.log(chartData);
  //         //buildChart(chartData);
  //       });
  //   };

  //   fetchData();
  // }, [casesType]);


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

  return (
      <div className={classes.LineGraph}>
        <Heading>Sentiment Over Time</Heading>
        <Line data={data} options={options}/>
    </div>
  );
}

// export default LineGraph;
