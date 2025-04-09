import {TourSchemaType} from "./schema/tourSchema";

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
  bookingId: string;
  tour: {
    imgUrl: string;
    name: string;
  };
  startDate: string;
  endDate: string;
  details: string;
  price: number;
  status: Status;
  passengers: number;
  currencyCode: string;
};

export type OrganizedBookings = {
  id: string;
  tour: {
    name: string;
    imgUrl: string;
  };
  startDate: string;
  endDate: string;
  details: string;
  price: number;
  status: string;
  url: string;
  passengers: number;
  currencyCode: string;
}[];

export type StatusColor = "purple" | "yellow" | "red";

export type DataCell = "text" | "tour" | "status";

export type SortTypes = "PLH" | "PHL" | "RLH" | "RHL" | "RCM";

export type ListingCard2Props = {
  name: string;
  description: string;
  price: TourSchemaType["price"];
  freeCancellation: boolean;
  destination: string;
  duration: number;
  images: [string];
  tourId: string;
  totalRatings: number;
  averageRating: number;
  isFavorite?: boolean;
};

export type Filters = {
  tourTypes?: string[];
  duration?: string[];
  rating?: {count: number; label: string}[];
  specials?: [string];
  languages?: [string];
};

// export type TourCategories = "Nature" | "Adventure" | "Cultural" | "Food" | "City" | "Cruises"

export type AppliedFiltersProps = Omit<Filters, "rating"> & {
  rating?: number;
};

export type PaxProps = {
  adults: number;
  children: number;
  teens: number;
  infants: number;
};

export type ModalProps = {
  showModal: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export type BookingStatus = "success" | "init" | "canceled" | "failed";

export type FavoriteTours = {
  title: string;
  rating: number;
  reviewCount: number;
  price: number;
  duration: number;
  images: string[];
  tourId: string;
} & CardDestination;

export type StatusType = "Confirmed" | "Pending" | "Canceled";

export type Destination = {id: string; name: string};

export type CardDestination = {
  city: Destination;
  state: Destination;
  country: Destination;
};

export type DestinationSearch = {
  type: "destination";
  destination: string;
  destinationType: string;
  id: string;
};

export type TourSearch = {
  type: "tour";
  id: string;
  name: string;
  image: string;
  minAge: number;
  destination: string;
};

export type SearchOptionType = DestinationSearch | TourSearch;

export enum ImgPath {
  tours = "/tours",
  profile = "/profile",
}

export enum Role {
  admin = "Admin",
  publisher = "Publisher",
  traveler = "Traveler",
}
