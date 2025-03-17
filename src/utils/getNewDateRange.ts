const toUTCDate = (date: Date) => {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
};

const formatDate = (date: Date) => {
  return toUTCDate(date).toISOString().split("T")[0];
};

const getNewDateRange = (newStartDate: Date, duration: number = 1) => {
  const durationMs = duration * 86400000;
  const newEndDate = new Date(newStartDate.getTime() + durationMs);

  return [formatDate(newStartDate), formatDate(newEndDate)];
};

export default getNewDateRange;
