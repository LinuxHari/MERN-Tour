enum DateFormats {
  "MMM-DD" = "MMM-DD",
  "YYYY-MM-DD" = "YYYY-MM-DD",
}

export const formatDate = (date: Date, type: keyof typeof DateFormats) => {
  let formattedDate: string;

  switch (type) {
    case DateFormats["MMM-DD"]:
      formattedDate = date.toString();

      return formattedDate.split(" ").slice(1, 3).join(" ");

    // case DateFormats["YYYY-MM-DD"]:
  }
};
