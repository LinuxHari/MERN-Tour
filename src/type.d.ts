import { TourSchemaType } from "./schema/tourSchema";

export type RenderProps = {
  render: (title: string, desc?: string) => React.JSX.Element;
};

export type Status = "Confirmed" | "Pending" | "Cancelled";

export type Tour = TourSchemaType & {
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

export type ListingCard2Props = ListingCardProps & {
  description: string;
  offer?: {
    percentage: number;
  };
  freeCancellation: boolean;
}

export type PostResponse = {
  message: string;
  error?: boolean;
  data?: Object | Object[];
  stack?: string
}
