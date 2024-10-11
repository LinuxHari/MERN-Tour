import { TourSchemaType } from "./schema/tourSchema";

export type RenderProps = {
  render: (title: string, desc?: string) => React.JSX.Element;
};

export type Status = "Confirmed" | "Pending" | "Cancelled";

export type Tour = Omit<TourSchemaType, "images" | "highlights"> & {
  highlights: string[]
  images: string[]
};

export type Bookings = {
  id: number;
  tour: {
    imgUrl: string;
    title: string;
  };
  startDate: string;
  endDate: string;
  details: string;
  price: string;
  status: Status;
};

export type StatusColor = "purple" | "yellow" | "red";

export type DataCell = "text" | "tour" | "status";

export type ListingCardProps = {
  img: string;
  location: string;
  title: string;
  rating: number;
  reviewCount: number;
  duration: number;
  price: number;
};

export type ListingCard2Props =  {
  name: string;
  description: string;
  price: number;
  freeCancellation: boolean;
  destination: string;
  duration: number;
  images: [string]
  tourId: string 
}

export type SearchSuggestions = {
  City?: string[],
  State?: string[],
  Country?: string[]
}

export type PostResponse = {
  message: string;
  error?: boolean;
  data?: Object | Object[];
  stack?: string
}

export type Filters =  {tourTypes?: string[], duration?: string[], rating?: {count: number, label: string}[], specials?: [string], languages?: [string]}

export type TourListResponse = {
  tours: ListingCard2Props[],
  totalCount: number,
  filters?: Omit<Filters, "rating">
}

export type SingleTourResponse = Omit<Tour, "freeCancellation" | "zipCode"> & {
  tourId: string;
  freeCancellation: boolean;
  duration: number;
};


// export type TourCategories = "Nature" | "Adventure" | "Cultural" | "Food" | "City" | "Cruises"

export type AppliedFiltersProps = Omit<Filters, "rating"> & {
  rating?: number
}

export type PaxProps = {
  adults?: number;
  children?: number;
  infants?: number;
}

export enum ImgPath {
  tours = "/tours",
  profile = "/profile"
}