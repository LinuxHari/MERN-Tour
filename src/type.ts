import { SEARCH_SUGGESTIONS } from "./data";
import { TourSchemaType } from "./schema/tourSchema";

export type RenderProps = {
  render: (title: string, desc?: string) => React.JSX.Element;
};

export type Status = "Confirmed" | "Pending" | "Cancelled";

export type Tour = Omit<TourSchemaType, "images" | "highlights"> & {
  tourId: string;
  highlights: string[];
  images: string[];
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
  price: TourSchemaType["price"];
  freeCancellation: boolean;
  destination: string;
  duration: number;
  images: [string]
  tourId: string 
}

export type SearchSuggestions = typeof SEARCH_SUGGESTIONS

export type Filters =  {tourTypes?: string[], duration?: string[], rating?: {count: number, label: string}[], specials?: [string], languages?: [string]}

export type TourListResponse = {
  tours: ListingCard2Props[],
  totalCount: number,
  filters?: Omit<Filters, "rating">
}

export type SingleTourResponse = Omit<Tour, "freeCancellation" | "city" | "state" | "country"> & {
  freeCancellation: boolean;
  duration: number;
  destination: string;
};

// export type TourCategories = "Nature" | "Adventure" | "Cultural" | "Food" | "City" | "Cruises"

export type AppliedFiltersProps = Omit<Filters, "rating"> & {
  rating?: number
}

export type PaxProps = {
  adults: number;
  children: number;
  teens: number;
  infants: number;
}

export type ModalProps = {
  showModal: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export type ReserveBody = {
  tourId: string,
  pax: {
      adults: number,
      teens?: number,
      children?: number,
      infants?: number
  },
  startDate: string,
  endDate: string
}

export type ReserveResponse = {
  reserveId: string
}

export enum ImgPath {
  tours = "/tours",
  profile = "/profile"
}