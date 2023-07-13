import React, { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesAreaGraph = () => {
  const [options, setOptions] = useState({
    plotOptions: {
      pie: {
        customScale: 1,
      },
    },
    labels: ["A", "B", "C", "D"],
    colors: ["#1D70BD", "#FFD600", "#68A362", "#C4B0FD"],
    chart: {
      type: "pie",
    },

    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },

    responsive: [
      {
        breakpoint: 1000,
      },
    ],
  });
  const [series, setSeries] = useState([20, 30, 90, 7]);
  const [labels, setLabels] = useState(["A", "B", "C", "D", "E"]);

  return (
    <div className="donut">
      <Chart options={options} series={series} type="pie" width="440px" />
    </div>
  );
};

export default SalesAreaGraph;
