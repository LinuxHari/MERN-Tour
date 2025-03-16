type Duration = "Hours" | "Weekly" | "Monthly";

const generateLabels = (earnings: number[], duration: Duration = "Hours") => {
  const maxValue = Math.max(...earnings);
  const defaultMaxValue = 300;

  if (!earnings.length || maxValue === 0 || maxValue < defaultMaxValue) return {maxValue: 300, stepSize: 50};
  const expectedNumberOfValues = duration === "Weekly" ? 7 : 12;
  const minDivisable = duration === "Weekly" ? 50 : 25;
  const minUnit = Math.ceil(maxValue / expectedNumberOfValues / minDivisable);

  return {maxValue, stepSize: minUnit * minDivisable};
};

export default generateLabels;
