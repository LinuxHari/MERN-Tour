import {SEARCH_SUGGESTIONS} from "./data";
import {BookingSchemaType} from "./schema/bookingSchema";
import {TourSchemaType} from "./schema/tourSchema";
import {UserSchemaType} from "./schema/userSchema";

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
}[];

export type StatusColor = "purple" | "yellow" | "red";

export type DataCell = "text" | "tour" | "status";

export type SortTypes = "PLH" | "PHL" | "RLH" | "RHL" | "RCM";

export type ListingCardProps = {
  images: string[];
  location: string;
  title: string;
  rating: number;
  reviewCount: number;
  duration: number;
  price: number;
  tourId: string;
  destination: string;
};

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

export type SearchSuggestions = typeof SEARCH_SUGGESTIONS;

export type Filters = {
  tourTypes?: string[];
  duration?: string[];
  rating?: {count: number; label: string}[];
  specials?: [string];
  languages?: [string];
};

export type TourListResponse = {
  tours: ListingCard2Props[];
  totalCount: number;
  filters?: Omit<Filters, "rating">;
};

export type SingleTourResponse = Omit<Tour, "freeCancellation" | "city" | "state" | "country"> & {
  freeCancellation: boolean;
  duration: number;
  destination: string;
  canReview?: boolean;
  totalRatings: number;
  averageRating: number;
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

export type ReserveBody = {
  tourId: string;
  pax: {
    adults: number;
    teens?: number;
    children?: number;
    infants?: number;
  };
  startDate: string;
  endDate: string;
};

export type ReserveResponse = {
  reserveId: string;
};

export type ReservedTourResponse = Omit<ReserveBody, "tourId" | "pax"> & {
  expiresAt: number;
  passengers: ReserveBody["pax"];
  totalAmount: number;
  tourDetails: {
    duration: number;
    price: SingleTourResponse["price"];
    images: string[];
    name: string;
    minAge: string;
  };
};

export type UserInfoResponse = Omit<UserSchemaType, "profile"> & {
  profile: string;
  role: Role;
};

export type BookingBody = BookingSchemaType & {
  id: string;
};

export type BookingStatus = "success" | "init" | "canceled" | "failed";

export type BookingDetailsResponse = {
  bookDate: Date;
  paymentMethod: "Card";
  status: BookingStatus;
  name: string;
  email: string;
  amount: number;
  amountPaid: number;
  freeCancellation: boolean;
  isCancellable: boolean;
  refundableAmount: number;
  tourInfo: {
    tourName: string;
    startDate: Date;
    duration: number;
    passengers: ReserveBody["pax"];
  };
  paymentInfo?: {
    cardNumber: string;
    cardBrand: string;
    paymentDate: Date;
    recipetUrl: string;
  };
};

export type ReviewResponse = {
  location: number;
  food: number;
  price: number;
  rooms: number;
  amenities: number;
  totalCount: number;
  overallRating: number;
  userReviews: {
    name: string;
    postedAt: Date;
    overallRating: number;
    title: string;
    comment: string;
    profile: string;
  }[];
};

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

export type EarningsResponse = {
  totalEarnings: number;
  todayEarnings: number;
  totalPendingEarnings: number;
  todayPendingEarnings: number;
  successfulEarnings: number;
  todaySuccessfulEarnings: number;
  earningsByTwoHours: number[];
  earningsByWeek: number[];
  earningsByMonth: number[];
};

export type Destination = {id: string; name: string};

export type CardDestination = {
  city: Destination;
  state: Destination;
  country: Destination;
};

export type TourMutationResponse = {
  error: boolean;
};

export type PublishedToursResponse = {
  tours: (Tour & {
    totalRatings: number;
    averageRating: number;
    duration: number;
    tourId: string;
  } & CardDestination)[];
  totalPages: number;
  totalCount: number;
};

export type FavoriteToursResponse = {
  favoriteTours: FavoriteTours[];
  totalCount: number;
  totalPages: number;
};

export type BookingsResponse = {
  bookings: Bookings[];
  totalPages: number;
};

export enum ImgPath {
  tours = "/tours",
  profile = "/profile",
}

export enum Role {
  admin = "Admin",
  publisher = "Publisher",
  traveler = "Traveler",
}
