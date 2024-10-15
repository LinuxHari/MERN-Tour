export const LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Tamil",
  "Chinese",
  "Italian",
  "Russian",
];

export const CATEGORIES = [
  "Nature",
  "Adventure",
  "Cultural",
  "Food",
  "City",
  "Cruises",
];

export const TOUR_TYPES = [...CATEGORIES, "All tours"]

export const DESTINATION_TYPES = ["City", "State", "Country"]

export const MIN_AGE = { adult: 18, teen: 13, child: 3, infant: 0 };

export const DEFAULT_TOUR_LOCATION = {
  destination: "Paris",
  destinationType: "City"
}

export const MAX_PAX_COUNT = 10

export const MIN_PAX_COUNT = 1