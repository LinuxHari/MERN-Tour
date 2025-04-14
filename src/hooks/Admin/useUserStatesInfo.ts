import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {useGetUserStatisticsQuery} from "../../redux/api/userApi";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const useUserStatsInfo = () => {
  const {data: statistics, isLoading, isError} = useGetUserStatisticsQuery();

  const dashboardData = [
    {
      title: "Total Bookings",
      total: statistics?.totalBookings || 0,
      // currency: "$",
      // today: statistics?.todayEarnings || 0,
      icon: "icon-wallet",
    },
    {
      title: "Total Destinations",
      total: statistics?.totalDestinations || 0,
      // currency: "$",
      // today: statistics?.todayPendingEarnings || 0,
      icon: "icon-pin",
    },
    {
      title: "Upcoming Trips",
      total: statistics?.upcomingTrips || 0,
      // currency: "$",
      // today: statistics?.todaySuccessfulEarnings || 0,
      icon: "icon-booking",
    },
    {
      title: "Total Days",
      total: statistics?.totalDays || 0,
      // currency: "$",
      // today: statistics?.todaySuccessfulEarnings || 0,
      icon: "icon-calendar",
    },
  ];

  const chartConfig = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 31,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "D",
        data:
          statistics?.monthlyData && statistics.monthlyData.length
            ? statistics?.monthlyData
            : Array.from({length: 12}).fill(0),
        tension: 0.4,
        backgroundColor: "#336CFB",
        borderColor: "#336CFB",
        borderWidth: 2,
      },
    ],
  };

  return {isLoading, isError, dashboardData, chartData, chartConfig};
};

export default useUserStatsInfo;
