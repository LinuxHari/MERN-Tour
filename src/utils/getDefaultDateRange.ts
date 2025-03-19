export const getDefaultDateRange = () => {
  const today = new Date();

  const startDate = new Date().setDate(today.getDate() + 1);
  const endDate = new Date().setDate(today.getDate() + 2);

  const maxDate = new Date().setMonth(today.getMonth() + 3);

  return {startDate, endDate, maxDate};
};
