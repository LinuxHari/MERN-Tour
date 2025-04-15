import {Line} from "react-chartjs-2";
import DetailCard from "../../components/Admin/Dashboard/DetailCard";
import useUserStatsInfo from "../../hooks/Admin/useUserStatesInfo";
import {RenderProps} from "../../type";
import withAuth from "../../hocs/withAuth";

const Overview = ({render}: RenderProps) => {
  const {dashboardData, chartData, chartConfig} = useUserStatsInfo();

  return (
    <>
      {render("Overview", "User overview")}
      <div className="row y-gap-30 pt-60 md:pt-30">
        {dashboardData.map(({title, icon, total}, index) => (
          <DetailCard key={index} title={title} icon={icon} total={total} />
        ))}
      </div>
      <div className="col-xl-8 col-12 mt-30">
        <div className="rounded-12 bg-white shadow-2 h-full">
          <div className="pt-20 px-30">
            <div className="text-18 fw-500">Travelled Days</div>
            <div className="row pt-20 y-gap-30">
              <Line data={chartData} options={chartConfig} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AuthenticatedOverview = withAuth(Overview);

export default AuthenticatedOverview;
