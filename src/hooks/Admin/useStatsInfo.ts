import {useGetEarningsQuery} from "../../redux/api/adminApi";
import useChart from "./useChart";

const useStatsInfo = () => {
  const {data: revenue, isLoading, isError} = useGetEarningsQuery();
  const {chartData, chartConfig} = useChart({
    hours: revenue?.earningsByTwoHours || [],
    weekly: revenue?.earningsByWeek || [],
    monthly: revenue?.earningsByMonth || [],
  });

  const dashboardData = [
    {
      title: "Total Earnings",
      total: revenue?.totalEarnings || 0,
      currency: "$",
      today: revenue?.todayEarnings || 0,
      icon: "icon-wallet",
    },
    {
      title: "Total Pending",
      total: revenue?.totalPendingEarnings || 0,
      currency: "$",
      today: revenue?.todayPendingEarnings || 0,
      icon: "icon-payment",
    },
    {
      title: "Total Booking",
      total: revenue?.successfulEarnings || 0,
      currency: "$",
      today: revenue?.todaySuccessfulEarnings || 0,
      icon: "icon-booking",
    },
  ];

  return {isLoading, isError, dashboardData, chartConfig, chartData};
};

export default useStatsInfo;
