import { useState } from "react";
import { Line } from "react-chartjs-2";
import Tabs from "../../shared/Tabs/Tabs";
import useChart from "../../../hooks/useChart"

const EarningStatistics = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ["Hours", "Weekly", "Monthly"];

  const data = {
    hours: [148, 100, 205, 110, 165, 145, 180, 156, 148, 220, 180, 245],
    weekly: [148, 100, 205, 110, 165],
    monthly: [148, 100, 205, 110, 165, 145, 180, 156, 148, 220, 180, 245],
  };

  const { chartConfig, chartData } = useChart(data)

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
                    <Tabs.Tab
                      isActive={selectedTab === index}
                      onClick={() => setSelectedTab(index)}
                      className="fw-500"
                    >
                      {tab}
                    </Tabs.Tab>
                  </div>
                ))}
              </Tabs.TabList>
            </div>

            <Tabs.TabContents className="pt-30">
              {tabs.map((_, index) => (
                <Tabs.TabContent key={index} isVisible={selectedTab === index}>
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
