import classNames from 'classnames';
import { FC, useState } from 'react';
import Chart from 'react-apexcharts';

import Button from './Button';
import GraphCard from './GraphCard';

const SalesLineChart: FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const series = [
    {
      name: 'Amount',
      data: [1500, 9000, 1000, 12000, 0, 0, 10500, 12000]
    },
    {
      name: '平均',
      data: [7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000]
    }
  ];

  const options: any = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: [5, 2],
      colors: ['#1D70BD', '#FFD600'],
      dashArray: [0, 3]
    },
    markers: {
      size: [6, 0],
      colors: ['#1D70BD']
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      labels: {
        style: {
          colors: '#005487'
        }
      },

      categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTicks: {
        show: false
      }
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        labels: {
          formatter: function (value: number) {
            if (typeof value === 'string') {
              return value;
            } else if (value >= 1000) {
              return (value / 1000).toFixed(1) + 'k';
            }
            return value;
          },
          style: {
            colors: '#005487'
          }
        }
      }
      //
    ],
    tooltip: {
      style: {
        colors: '#000000'
      }
    },
    legend: {
      show: false
    },
    responsive: [
      {
        breakpoint: 1540,
        options: {
          chart: {
            width: 450,
            height: 190
          }
        }
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            width: 335,
            height: 190
          }
        }
      }
    ]
  };

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <GraphCard className="h-[271px] flex flex-col items-center justify-center relative line-graph px-4 2xl:px-0 pb-4">
      {/* action buttons */}
      <div className="flex self-start justify-end w-full 2xl:pb-0 pt-4 2xl:pr-4 pb-2">
        {buttonData.map((button, index) => (
          <Button
            key={button.value}
            className={classNames('font-medium 2xl:text-[13px] xl:text-[11px] text-[10px] !text-grey', {
              '!bg-transparent shadow-graph-btn': activeButton === index,
              '!bg-neutral-150 border-t border-b border-l border-r border-light-grey': activeButton !== index,
              'rounded-bl-[10px] rounded-tl-[10px]': index === 0,
              'rounded-br-[10px] rounded-tr-[10px]': index === buttonData.length - 1
            })}
            onClick={() => handleButtonClick(index)}
          >
            {button.label}
          </Button>
        ))}
      </div>
      {/* graph */}
      <div id="chart">
        <Chart options={options} series={series} type="line" width={530} height={190} />
      </div>
      {/* x-axis title */}
      <span className="text-silverstone text-[10px] font-semibold absolute bottom-4 2xl:right-10 xl:right-5 right-4">
        月份
      </span>
      {/* y-axis title */}
      <span className="text-silverstone text-[10px] font-semibold absolute top-14 2xl:top-10 2xl:left-16 left-10">
        數量
      </span>
      {/* average line title */}
      <span className="text-pale-yellow text-[10px] font-semibold absolute right-1 xl:right-[5px] 2xl:right-4 top-[8.2rem] 2xl:top-[7.8rem]">
        平均
      </span>
    </GraphCard>
  );
};

export default SalesLineChart;

const buttonData = [
  { label: '銷售額', value: 'sales' },
  { label: '訪客數', value: 'visitors' },
  { label: '瀏覽數', value: 'views' },
  { label: '訂單數', value: 'orders' },
  { label: '平均客單價', value: 'averagePrice' }
];
