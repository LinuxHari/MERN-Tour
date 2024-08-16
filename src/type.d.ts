export type RenderProps = {
  render: (title: string, desc: string) => React.JSX.Element;
};

export type Status = "Confirmed" | "Pending" | "Cancelled";

type Tour = {
  imgUrl: string;
  title: string;
};

export type Bookings = {
  id: number;
  tour: Tour;
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
