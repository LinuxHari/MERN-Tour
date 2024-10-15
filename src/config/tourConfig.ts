export const LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Tamil",
  "Chinese",
  "Italian",
  "Russian",
] as const 

export const CATEGORIES = [
  "Nature",
  "Adventure",
  "Cultural",
  "Food",
  "City",
  "Cruises",
] as const

export const TOUR_TYPES = [...CATEGORIES, "All tours"] as const

export const DESTINATION_TYPES = ["City", "State", "Country"] as const

export const MIN_AGE = { adult: 18, teen: 13, child: 3, infant: 0 } as const

export const DEFAULT_TOUR_LOCATION = {
  destination: "Paris",
  destinationType: "City"
}

export const MAX_PAX_COUNT = 10

export const MIN_PAX_COUNT = 1