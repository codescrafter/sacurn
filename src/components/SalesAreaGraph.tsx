import { useState } from "react";
import GraphCard from "./GraphCard";
import Button from "./Button";
import Chart from "react-apexcharts";
import classNames from "classnames";

const SalesAreaGraph = () => {
  const [series] = useState<number[]>([20, 30, 90, 7]);
  const [activeButton, setActiveButton] = useState<number>(1);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };

  const options: any = {
    plotOptions: {
      pie: {
        customScale: 1
      }
    },
    labels: ["A", "B", "C", "D"],
    colors: ["#1D70BD", "#FFD600", "#68A362", "#C4B0FD"],
    chart: {
      type: "pie",
      width: 440,
      events: {
        animationEnd: function (ctx: ApexCharts) {
          ctx.toggleDataPointSelection(2);
        }
      }
    },
    dataLabels: {
      enabled: true
    },
    legend: {
      show: false
    },
    responsive: [
      {
        breakpoint: 1540,
        options: {
          chart: {
            width: 400
          }
        }
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            width: 350
          }
        }
      }
    ]
  };

  return (
    <GraphCard className="h-[347px] flex items-center justify-center relative z-[999]">
      {/* action buttons */}
      <div className="absolute z-40 -right-9 2xl:-right-5 transform rotate-90">
        <Button
          className={classNames(
            "font-medium text-xs 2xl:text-sm !text-grey flex-shrink-0 rounded-bl-[10px] rounded-tl-[10px] rounded-tr-[1px] rounded-br-[1px] !p-[10px] min-w-[77px]",
            {
              "!bg-transparent !shadow-graph-btn": activeButton === 1,
              "!bg-neutral-150 border-t border-b border-l border-light-grey": activeButton !== 1
            }
          )}
          onClick={() => handleButtonClick(1)}
        >
          碳權種類
        </Button>
        <Button
          className={classNames(
            "font-medium text-[11px] !text-grey 2xl:text-[13px] flex-shrink-0 rounded-bl-[0px] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[10px] min-w-[52px]",
            {
              "!bg-transparent !shadow-graph-btn": activeButton === 2,
              "!bg-neutral-150 border-r border-t border-b border-light-grey": activeButton !== 2
            }
          )}
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
