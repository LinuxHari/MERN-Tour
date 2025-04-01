import {useGetEarningsQuery} from "../../redux/api/adminApi";
import useChart from "./useChart";

const useUserStatsInfo = () => {
  const {data: statistics, isLoading, isError} = useGetEarningsQuery();
  const {chartData, chartConfig} = useChart({
    hours: statistics?.earningsByTwoHours || [],
    weekly: statistics?.earningsByWeek || [],
    monthly: statistics?.earningsByMonth || [],
  });

  const dashboardData = [
    {
      title: "Total Earnings",
      total: statistics?.totalEarnings || 0,
      currency: "$",
      today: statistics?.todayEarnings || 0,
      icon: "icon-wallet",
    },
    {
      title: "Total Pending",
      total: statistics?.totalPendingEarnings || 0,
      currency: "$",
      today: statistics?.todayPendingEarnings || 0,
      icon: "icon-payment",
    },
    {
      title: "Total Booking",
      total: statistics?.successfulEarnings || 0,
      currency: "$",
      today: statistics?.todaySuccessfulEarnings || 0,
      icon: "icon-booking",
    },
  ];

  return {isLoading, isError, dashboardData, chartConfig, chartData};
};

export default useUserStatsInfo;
