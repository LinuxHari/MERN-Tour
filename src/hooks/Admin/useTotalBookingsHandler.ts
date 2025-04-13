import {useCallback, useState} from "react";
import toast from "react-hot-toast";
import {useCancelBookedTourMutation, useGetTotalBookingsQuery} from "../../redux/api/adminApi";
import useBookingUtils from "../Shared/useBookingUtils";
import useModal from "../Shared/useModal";

const useTotalBookingsHandler = () => {
  const tableHeaders = [
    "ID",
    "Title",
    "Name",
    "Email",
    "Phone number",
    "Start date",
    "End date",
    "Details",
    "Amount",
    "Total amount",
    "Status",
    "Action",
  ];
  const {page, setPage, currentTab, setTab, bookingId, setBookingId} = useBookingUtils();
  const {
    data: bookings,
    isLoading,
    isFetching,
    isError,
  } = useGetTotalBookingsQuery({status: currentTab.toLowerCase(), page, bookingId});

  const {showModal, openModal, onClose} = useModal();

  const [cancelBooking, {isLoading: isCancelLoading}] = useCancelBookedTourMutation();

  const [cancelBookingId, setCancelBookingId] = useState("");

  const cancelBookedTour = useCallback(async (bookingId: string) => {
    const toastId = toast.loading("Canceling booking...");
    const {error} = await cancelBooking(bookingId);

    if (error) return toast.error("Failed to cancel booking", {id: toastId});
    toast.success("Booking was canceled successfully!", {id: toastId});
  }, []);

  const handleCancel = useCallback((bookingId: string) => {
    setCancelBookingId(bookingId);
    openModal();
  }, []);

  return {
    bookings,
    isLoading: isLoading || isFetching,
    isError,
    setPage,
    setTab,
    onSearch: setBookingId,
    page,
    currentTab,
    tableHeaders,
    showModal,
    closeModal: onClose,
    isCancelLoading,
    cancelBookedTour,
    handleCancel,
    cancelBookingId,
  };
};

export default useTotalBookingsHandler;
