import {Line} from "react-chartjs-2";
import Tabs from "../../Shared/Tabs/Tabs";

type EarningStatisticsProps = {
  chartConfig: {
    responsive: boolean;
    plugins: {legend: {display: boolean}};
    scales: {y: {min: number; max: number; ticks: {stepSize: number}}};
  };
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      tension: number;
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  }[];
};

const EarningStatistics = ({
  chartConfig,
  chartData,
}: EarningStatisticsProps) => {
  const tabs = ["Hours", "Weekly", "Monthly"];

  return (
    <div className="col-xl-8 col-lg-12 col-md-6">
      <div className="rounded-12 bg-white shadow-2 h-full">
        <div className="pt-20 px-30">
          <Tabs className="-underline-2">
            <div className="d-flex items-center justify-between">
              <div className="text-18 fw-500">Earning Statistics</div>
              <Tabs.TabList className="row x-gap-20 y-gap-10 lg:x-gap-20">
                {tabs.map((tab, index) => (
                  <div className="col-auto" key={index}>
                    <Tabs.Tab index={index} className="fw-500">
                      {tab}
                    </Tabs.Tab>
                  </div>
                ))}
              </Tabs.TabList>
            </div>

            <Tabs.TabContents className="pt-30">
              {tabs.map((_, index) => (
                <Tabs.TabContent key={index} index={index}>
                  <div className="chart-container">
                    <Line data={chartData[index]} options={chartConfig} />
                  </div>
                </Tabs.TabContent>
              ))}
            </Tabs.TabContents>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EarningStatistics;
