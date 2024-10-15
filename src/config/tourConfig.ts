export const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Tamil",
  "Chinese",
  "Italian",
  "Russian",
];

export const categories = [
  "Nature",
  "Adventure",
  "Cultural",
  "Food",
  "City",
  "Cruises",
];

export const tourTypes = [...categories, "All tours"]

export const destinationTypes = ["City", "State", "Country"]

export const minAge = { adult: 18, teen: 13, child: 3, infant: 0 };

export const defaultTourLocation = {
  destination: "Paris",
  destinationType: "City"
}

export const maxPaxCount = 10

export const minPaxCount = 1