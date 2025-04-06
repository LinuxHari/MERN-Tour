import {useState} from "react";
import {StatusType} from "../../type";
import {useGetBookingsQuery} from "../../redux/api/userApi";

const useUserBookingsHandler = () => {
  const tableHeaders = ["ID", "Title", "Start date", "End date", "Details", "Price", "Status", "Action"];

  const [page, setPage] = useState(1);
  const [bookingId, setBookingId] = useState<string>("");
  const [currentTab, setCurrentTab] = useState<StatusType>("Confirmed");

  const {
    data: bookings,
    isLoading,
    isError,
  } = useGetBookingsQuery({
    status: currentTab.toLowerCase(),
    page,
    bookingId,
  });

  const onSearch = (searchTerm: string) => {
    setBookingId(searchTerm);
    setPage(1);
  };

  return {
    bookings,
    isLoading,
    isError,
    currentTab,
    setCurrentTab,
    setBookingId: (bookingId: string) => setBookingId(bookingId),
    page,
    setPage,
    tableHeaders,
    onSearch,
  };
};

export default useUserBookingsHandler;
