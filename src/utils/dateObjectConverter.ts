import {DateObject} from "react-multi-date-picker";

const dateObjectConverter = (dateObjects: DateObject[] | DateObject): Date[] => {
  const dateArray = Array.isArray(dateObjects) ? dateObjects : [dateObjects];

  return dateArray.map((dateObj) => dateObj?.toDate() ?? null).filter((date): date is Date => date !== null);
};

export default dateObjectConverter;
