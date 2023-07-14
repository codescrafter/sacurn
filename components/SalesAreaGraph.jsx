import React, { useState, useLayoutEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesAreaGraph = () => {
  const [chartWidth, setChartWidth] = useState(440);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setChartWidth(370);
      } else {
        setChartWidth(440);
      }
    };

    handleResize(); // Handle initial rendering
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = {
    plotOptions: {
      pie: {
        customScale: 1,
      },
    },
    labels: ["A", "B", "C", "D"],
    colors: ["#1D70BD", "#FFD600", "#68A362", "#C4B0FD"],
    chart: {
      type: "pie",
      width: chartWidth,
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
  };

  const series = [20, 30, 90, 7];

  return (
    <div className="donut">
      <Chart options={options} series={series} type="pie" width={chartWidth} />
    </div>
  );
};

export default SalesAreaGraph;
