import {SEARCH_SUGGESTIONS} from "../../data";
import {BookingSchemaType} from "../../schema/bookingSchema";
import {UserSchemaType} from "../../schema/userSchema";
import {
  AppliedFiltersProps,
  Bookings,
  BookingStatus,
  CardDestination,
  FavoriteTours,
  Filters,
  ListingCard2Props,
  Role,
  Tour,
} from "../../type";

export type AvailabilityResponse = {
  availableSeats: number;
  date: string;
}[];

export type BaseSearchParams = {
  page: number;
  filters: number;
  appliedFilters: AppliedFiltersProps & {
    sortType?: string;
    minPrice?: number;
    maxPrice?: number;
  };
};

export type TourSearchParams = {
  destinationId: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  infants: number;
  teens: number;
} & BaseSearchParams;

export type SingleTourParams = {
  id: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  infants: number;
  teens: number;
};

export type BookingBody = BookingSchemaType & {
  id: string;
};

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

export type ReserveResponse = {
  reserveId: string;
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

export type SearchSuggestions = typeof SEARCH_SUGGESTIONS;

export type SingleTourResponse = Omit<Tour, "freeCancellation" | "city" | "state" | "country"> & {
  freeCancellation: boolean;
  duration: number;
  destination: string;
  canReview?: boolean;
  totalRatings: number;
  averageRating: number;
};

export type TourListResponse = {
  tours: ListingCard2Props[];
  totalCount: number;
  filters?: Omit<Filters, "rating">;
};

export type UserInfoResponse = Omit<UserSchemaType, "profile"> & {
  profile: string;
  role: Role;
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
