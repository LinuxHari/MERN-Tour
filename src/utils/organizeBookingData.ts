import {status} from "../config/userConfig";
import {Bookings, OrganizedBookings, StatusType} from "../type";

const organizeBookingData = (bookings: Bookings[], currentTab: StatusType) => {
  const bookingData: OrganizedBookings = bookings.map((booking) => ({
    id: booking.bookingId.toString().toUpperCase(),
    tour: {
      name: booking.tour.name,
      imgUrl: booking.tour.imgUrl,
    },
    startDate: booking.startDate.split("T")[0],
    endDate: new Date(new Date(booking.startDate).getTime() + booking.duration * 24 * 60 * 60 * 1000)
      .toISOString()
      .toString()
      .split("T")[0],
    details: "",
    amount: booking.amount,
    passengers: booking.passengers,
    status: booking.status,
    url: `/booking/${booking.bookingId}`,
    currencyCode: booking.currencyCode,
  }));

  const allBookings: OrganizedBookings[] = [];

  status.forEach((bookingStatus) => {
    if (currentTab === bookingStatus) allBookings.push(bookingData);
    else allBookings.push([]);
  });

  return allBookings;
};

export default organizeBookingData;
