import React, { useState, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import GraphCard from "./GraphCard";
import Button from "./Button";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesAreaGraph = () => {
  const [series, setSeries] = useState([20, 30, 90, 7]);
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

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
      width: 440,
      events: {
        animationEnd: function (ctx) {
          ctx.toggleDataPointSelection(2);
        },
      },
    },
    dataLabels: {
      enabled: true,
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
          },
        },
      },
    ],
  };

  return (
    <GraphCard className="h-[347px] flex items-center justify-center relative">
      {/* action buttons */}
      <div className="absolute -right-9 2xl:-right-5 transform rotate-90">
        <Button
          className={`font-medium text-xs 2xl:text-sm !text-grey flex-shrink-0 ${
            activeButton === 1
              ? "!bg-transparent !shadow-graph-btn"
              : "!bg-neutral-150 border-t border-b border-l border-light-grey"
          } rounded-bl-[10px] rounded-tl-[10px] rounded-tr-[1px] rounded-br-[1px] !p-[10px] min-w-[77px]`}
          onClick={() => handleButtonClick(1)}
        >
          碳權種類
        </Button>
        <Button
          className={`font-medium text-[11px] !text-grey 2xl:text-[13px] flex-shrink-0 ${
            activeButton === 2
              ? "!bg-transparent !shadow-graph-btn"
              : "!bg-neutral-150 border-r border-t border-b border-light-grey"
          } rounded-bl-[0px] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[10px] min-w-[52px]`}
          onClick={() => handleButtonClick(2)}
        >
          地區
        </Button>
      </div>
      {/* graph */}
      <div className="donut">
        <Chart options={options} series={series} type="pie" width={440} />
      </div>
    </GraphCard>
  );
};

export default SalesAreaGraph;
