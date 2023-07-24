import React, { useState } from "react";
import dynamic from "next/dynamic";
import GraphCard from "./GraphCard";
import Button from "./Button";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesLineChart = () => {
  const [activeButton, setActiveButton] = useState(0);

  const series = [
    {
      name: "Amount",
      data: [1500, 9000, 1000, 12000, 0, 0, 10500, 12000],
    },
    {
      name: "平均",
      data: [7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000],
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
      width: [5, 2],
      colors: ["#1D70BD", "#FFD600"],
      dashArray: [0, 3],
    },
    title: {
      text: "數量",
      align: "left",
      style: {
        color: "#B3B4B4",
        fontSize: "10px",
      },
    },
    markers: {
      size: [6, 0],
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
          colors: "#005487",
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
    yaxis: [
      {
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
            colors: "#005487",
          },
        },
      },
      //
    ],
    tooltip: {
      style: {
        colors: "#000000",
      },
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1540,
        options: {
          chart: {
            width: 370,
            height: 190,
          },
        },
      },
    ],
  };

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <GraphCard className="h-[271px] flex flex-col items-center justify-center relative line-graph px-4 2xl:px-0 pb-4">
      {/* action buttons */}
      <div className="flex self-start justify-end w-full xl:pb-0 pt-4 pr-4 pb-2">
        {buttonData.map((button, index) => (
          <Button
            key={button.value}
            className={`font-medium text-[13px] !text-grey ${
              activeButton === index
                ? "!bg-transparent shadow-graph-btn"
                : "!bg-neutral-150 border-t border-b border-l border-r border-light-grey"
            } ${index === 0 ? "rounded-bl-[10px] rounded-tl-[10px]" : ""} ${
              index === buttonData.length - 1
                ? "rounded-br-[10px] rounded-tr-[10px]"
                : ""
            } 
             `}
            onClick={() => handleButtonClick(index)}
          >
            {button.label}
          </Button>
        ))}
      </div>
      {/* graph */}
      <div id="chart">
        <Chart
          options={options}
          series={series}
          type="line"
          width={530}
          height={200}
        />
      </div>
      {/* x-axis title */}
      <span className="text-silverstone text-[10px] font-semibold absolute bottom-2 2xl:right-10 right-2">
        月份
      </span>
      {/* average line title */}
      <span className="text-pale-yellow text-[10px] font-semibold absolute right-[3px] 2xl:right-4 top-[8.5rem]">
        平均
      </span>
    </GraphCard>
  );
};

export default SalesLineChart;

const buttonData = [
  { label: "銷售額", value: "sales" },
  { label: "訪客數", value: "visitors" },
  { label: "瀏覽數", value: "views" },
  { label: "訂單數", value: "orders" },
  { label: "平均客單價", value: "averagePrice" },
];
