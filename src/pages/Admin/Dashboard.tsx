import {RenderProps} from "../../type";
import DetailCard from "../../components/Admin/Dashboard/DetailCard";
import EarningStatistics from "../../components/Admin/Dashboard/EarningStatistics";
import withAuth from "../../hocs/withAuth";
import useStatsInfo from "../../hooks/useStatsInfo";
import CommonSkeleton from "../../components/Skeletons/CommonSkeleton";
import NoResult from "../../components/Shared/NoResult/NoResult";

const Dashboard = ({render}: RenderProps) => {
  const {dashboardData, chartData, chartConfig, isLoading, isError} =
    useStatsInfo();

  if (isError) {
    return (
      <NoResult title="Something went wrong" description="Maybe try later." />
    );
  }

  return (
    <>
      {render("Dashboard", "Track Your Earnings and Activities")}
      {isLoading ? (
        <CommonSkeleton />
      ) : (
        <>
          <div className="row y-gap-30 pt-60 md:pt-30">
            {dashboardData.map(
              ({title, icon, today, total, currency}, index) => (
                <DetailCard
                  key={index}
                  title={title}
                  icon={icon}
                  amount={today}
                  total={total}
                  currency={currency}
                />
              ),
            )}
          </div>

          <div className="row pt-30 y-gap-30">
            <EarningStatistics
              chartData={chartData}
              chartConfig={chartConfig}
            />
          </div>
        </>
      )}
    </>
  );
};

const AuthenticDashboard = withAuth(Dashboard);

export default AuthenticDashboard;
