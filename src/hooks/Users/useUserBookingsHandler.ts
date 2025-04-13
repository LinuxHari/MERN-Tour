import {useGetBookingsQuery} from "../../redux/api/userApi";
import useBookingUtils from "../Shared/useBookingUtils";

const useUserBookingsHandler = () => {
  const tableHeaders = ["ID", "Title", "Start date", "End date", "Details", "Amount", "Status", "Action"];

  const {page, setPage, currentTab, setTab, setBookingId, bookingId} = useBookingUtils();

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
    setCurrentTab: setTab,
    setBookingId,
    page,
    setPage,
    tableHeaders,
    onSearch,
  };
};

export default useUserBookingsHandler;
