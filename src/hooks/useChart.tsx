import { useMemo } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type PassedDataType = { hours: number[]; weekly: number[]; monthly: number[] };

const useChart = (data: PassedDataType) => {
  const chartConfig = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          min: 0,
          max: 300,
          ticks: {
            stepSize: 50,
          },
        },
      },
    }),
    []
  );

  const chartData = useMemo(
    () => [
      {
        labels: [
          "12 AM",
          "2 AM",
          "4 AM",
          "6 AM",
          "8 AM",
          "10 AM",
          "12 PM",
          "2 PM",
          "4 PM",
          "6 PM",
          "8 PM",
          "10 PM",
        ],
        datasets: [
          {
            label: "#",
            data: data.hours,
            tension: 0.4,
            backgroundColor: "#336CFB",
            borderColor: "#336CFB",
            borderWidth: 2,
          },
        ],
      },
      {
        labels: ["1st", "2nd", "3rd", "4th", "5th"],
        datasets: [
          {
            label: "#",
            data: data.weekly,
            tension: 0.4,
            backgroundColor: "#336CFB",
            borderColor: "#336CFB",
            borderWidth: 2,
          },
        ],
      },
      {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "#",
            data: data.monthly,
            tension: 0.4,
            backgroundColor: "#336CFB",
            borderColor: "#336CFB",
            borderWidth: 2,
          },
        ],
      },
    ],
    [data]
  );

  return { chartConfig, chartData };
};

export default useChart;
