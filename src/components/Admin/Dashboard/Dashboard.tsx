import { DASHBOARD_DATA } from "../../../data";
import { RenderProps } from "../../../type";
import DetailCard from "./DetailCard";
import EarningStatistics from "./EarningStatistics";
import RecentActivities from "./RecentActivities";

const Dashboard = ({ render }: RenderProps) => {
  return (
    <>
      {render("Dashboard", "Track Your Earnings and Activities")}
      <div className="row y-gap-30 pt-60 md:pt-30">
        {DASHBOARD_DATA.map(
          ({ title, icon, today, total, currency }, index) => (
            <DetailCard
              key={index}
              title={title}
              icon={icon}
              amount={today}
              total={total}
              currency={currency}
            />
          )
        )}
      </div>

      <div className="row pt-30 y-gap-30">
        <EarningStatistics />
        <RecentActivities />
      </div>
    </>
  );
};

export default Dashboard;
