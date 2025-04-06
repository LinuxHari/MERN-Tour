import {useGetEarningsQuery} from "../../redux/api/adminApi";
import useCurrencyHandler from "../Others/useCurrencyHandler";
import useChart from "./useChart";

const useStatsInfo = () => {
  const {data: revenue, isLoading, isError} = useGetEarningsQuery();
  const {chartData, chartConfig} = useChart({
    hours: revenue?.earningsByTwoHours || [],
    weekly: revenue?.earningsByWeek || [],
    monthly: revenue?.earningsByMonth || [],
  });

  const {formatPrice, currencyCode} = useCurrencyHandler();

  const dashboardData = [
    {
      title: "Total Earnings",
      total: formatPrice(revenue?.totalEarnings || 0),
      currency: currencyCode,
      today: formatPrice(revenue?.todayEarnings || 0),
      icon: "icon-wallet",
    },
    {
      title: "Total Pending",
      total: formatPrice(revenue?.totalPendingEarnings || 0),
      currency: currencyCode,
      today: formatPrice(revenue?.todayPendingEarnings || 0),
      icon: "icon-payment",
    },
    {
      title: "Total Booking",
      total: formatPrice(revenue?.successfulEarnings || 0),
      currency: currencyCode,
      today: formatPrice(revenue?.todaySuccessfulEarnings || 0),
      icon: "icon-booking",
    },
  ];

  return {isLoading, isError, dashboardData, chartConfig, chartData};
};

export default useStatsInfo;
