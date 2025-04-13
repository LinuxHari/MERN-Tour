import {status} from "../config/userConfig";
import {OrganizedTotalBookings, StatusType, TotalBookings} from "../type";

const organizeTotalBookingData = (
  bookings: TotalBookings[],
  currentTab: StatusType,
  cancelBooking: (bookingId: string) => void,
) => {
  const bookingData: OrganizedTotalBookings = bookings.map((booking) => ({
    id: booking.bookingId.toString().toUpperCase(),
    tour: {
      name: booking.tour.name,
      imgUrl: booking.tour.imgUrl,
    },
    name: booking.name,
    email: booking.email,
    phoneNumber: "+" + booking.phoneNumber.toString(),
    startDate: booking.startDate.split("T")[0],
    endDate: new Date(new Date(booking.startDate).getTime() + 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .toString()
      .split("T")[0],
    details: "",
    amount: booking.amount,
    refundableAmount: booking.refundableAmount,
    passengers: booking.passengers,
    status: booking.status,
    url: `/booking/${booking.bookingId}`,
    currencyCode: booking.currencyCode,
    isCancelable: booking.isCancelable,
    cancelBooking,
  }));

  const allBookings: OrganizedTotalBookings[] = [];

  status.forEach((bookingStatus) => {
    if (currentTab === bookingStatus) allBookings.push(bookingData);
    else allBookings.push([]);
  });

  return allBookings;
};

export default organizeTotalBookingData;
