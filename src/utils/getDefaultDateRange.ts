const getDefaultDateRange = () => {
  const today = new Date();

  const startDate = new Date().setDate(today.getDate() + 3);
  const endDate = new Date().setDate(today.getDate() + 5);

  const maxDate = new Date().setFullYear(today.getFullYear() + 1);

  return {startDate, endDate, maxDate};
};

export default getDefaultDateRange;
