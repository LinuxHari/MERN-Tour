import { DASHBOARD_DATA } from "../../../data";
import DetailCard from "./DetailCard";
import EarningStatistics from "./EarningStatistics";
import RecentActivities from "./RecentActivities";

const Dashboard = () => {
  return (
    <div className="dashboard__content_content">
      <h1 className="text-30">Dashboard</h1>
      <p className="">Lorem ipsum dolor sit amet, consectetur.</p>

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

      <div className="text-center pt-30">© Copyright Viatours 2023</div>
    </div>
  );
};

export default Dashboard;
