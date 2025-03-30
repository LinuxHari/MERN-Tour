type RangeType = "month" | "year";

export const getDefaultDateRange = (type?: RangeType) => {
  const today = new Date();

  if (!type || type === "month") {
    const startDate = new Date().setDate(today.getDate() + 1);
    const endDate = new Date().setDate(today.getDate() + 2);

    const maxDate = new Date().setMonth(today.getMonth() + 3);

    return {startDate, endDate, maxDate};
  } else {
    const startDate = new Date().setDate(today.getDate() + 3);
    const endDate = new Date().setDate(today.getDate() + 5);

    const maxDate = new Date().setFullYear(today.getFullYear() + 1);

    return {startDate, endDate, maxDate};
  }
};
