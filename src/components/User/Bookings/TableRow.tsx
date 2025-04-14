import {OrganizedBookings, OrganizedTotalBookings, StatusColor} from "../../../type";
import Button from "../../Shared/Button/Button";
import Image from "../../Shared/Image/Image";

type TableRowProps = {
  booking: OrganizedTotalBookings[number] | OrganizedBookings[number];
};

const TableRow = ({booking}: TableRowProps) => {
  const statusColors: Record<string, StatusColor> = {
    Pending: "yellow",
    Confirmed: "purple",
    Canceled: "red",
  };

  const isTotalBooking = "name" in booking && "email" in booking && "phoneNumber" in booking;

  return (
    <tr>
      <td>#{booking.id}</td>

      <td className="min-w-300">
        <div className="d-flex align-items-center">
          <Image src={booking.tour.imgUrl} alt={booking.tour.name} className="dashboard__img rounded" />
          <div className="ml-20">{booking.tour.name}</div>
        </div>
      </td>

      {isTotalBooking && (
        <>
          <td className="text-nowrap">{booking.name}</td>
          <td className="text-nowrap">{booking.email}</td>
          <td className="text-nowrap">{booking.phoneNumber}</td>
        </>
      )}

      <td>{booking.startDate}</td>
      <td>{booking.endDate}</td>
      <td className="text-nowrap">{booking.passengers} People</td>
      <td>
        {booking.currencyCode}
        {booking.amount}
      </td>

      {isTotalBooking && (
        <td className="text-nowrap">
          {booking.currencyCode}
          {booking.refundableAmount}
        </td>
      )}

      <td>
        <div className={`circle text-${statusColors[booking.status]}-1`}>{booking.status}</div>
      </td>

      <td>
        {isTotalBooking ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              booking.cancelBooking(booking.id);
            }}
          >
            {booking.isCancelable ? (
              <Button type="submit" buttonType="primary" className="py-2 px-3 rounded">
                Cancel
              </Button>
            ) : (
              <span className="text-danger">Cancelation expired</span>
            )}
          </form>
        ) : (
          <Button buttonType="link" styleType="primary" to={booking.url} className="px-4 py-2 rounded">
            View
          </Button>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
