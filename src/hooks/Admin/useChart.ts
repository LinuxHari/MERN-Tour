import {useMemo} from "react";
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
import generateLabels from "../../utils/generateLabels";
import useCurrencyHandler from "../Others/useCurrencyHandler";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type PassedDataType = {hours: number[]; weekly: number[]; monthly: number[]};

const useChart = (data: PassedDataType) => {
  const {maxValue: hoursMaxValue, stepSize: hoursStepSize} = generateLabels(data.hours);
  const {maxValue: weeklyMaxValue, stepSize: weeklyStepSize} = generateLabels(data.weekly, "Weekly");
  const {maxValue: monthlyMaxValue, stepSize: monthlyStepSize} = generateLabels(data.monthly);
  const {formatPrices, currencyCode, formatPrice} = useCurrencyHandler();

  const chartConfig = useMemo(
    () => ({
      hours: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            min: 0,
            max: formatPrice(hoursMaxValue),
            ticks: {
              stepSize: hoursStepSize,
            },
          },
        },
      },
      weekly: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            min: 0,
            max: formatPrice(weeklyMaxValue),
            ticks: {
              stepSize: weeklyStepSize,
            },
          },
        },
      },
      monthly: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            min: 0,
            max: formatPrice(monthlyMaxValue),
            ticks: {
              stepSize: monthlyStepSize,
            },
          },
        },
      },
    }),
    [monthlyMaxValue, weeklyMaxValue, hoursMaxValue, formatPrice],
  );

  const chartData = useMemo(
    () => [
      {
        labels: ["12 AM", "2 AM", "4 AM", "6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM"],
        datasets: [
          {
            label: currencyCode,
            data: formatPrices(data.hours),
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
            label: currencyCode,
            data: formatPrices(data.weekly),
            tension: 0.4,
            backgroundColor: "#336CFB",
            borderColor: "#336CFB",
            borderWidth: 2,
          },
        ],
      },
      {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: currencyCode,
            data: formatPrices(data.monthly),
            tension: 0.4,
            backgroundColor: "#336CFB",
            borderColor: "#336CFB",
            borderWidth: 2,
          },
        ],
      },
    ],
    [data],
  );

  return {chartConfig, chartData};
};

export default useChart;
