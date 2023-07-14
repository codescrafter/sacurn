import React, { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesLineChart = () => {
  const series = [
    {
      name: "Desktops",
      data: [1500, 9000, 1000, 12000, 0, 0, 10500, 12000],
    },
  ];

  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: ["#1D70BD"],
    },
    title: {
      text: "數量",
      align: "left",
      style: {
        color: "#B3B4B4",
      },
    },
    markers: {
      size: [6],
      colors: ["#1D70BD"],
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: ["#005487"],
        },
      },
      title: {
        text: "月份",
        align: "right",
        style: {
          color: "#B3B4B4",
          textAlign: "right",
        },
      },
      categories: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisTicks: {
        show: true,
      },
      labels: {
        formatter: function (value) {
          if (typeof value === "string") {
            return value;
          } else if (value >= 1000) {
            return (value / 1000).toFixed(1) + "k";
          }
          return value;
        },
        style: {
          colors: ["#005487"],
        },
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: 340,
            height: 180,
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <Chart
        options={options}
        series={series}
        type="line"
        width={490}
        height={200}
      />
    </div>
  );
};

export default SalesLineChart;
