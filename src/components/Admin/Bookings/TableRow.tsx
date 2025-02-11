import {OrganizedBookings, StatusColor} from "../../../type";
import Button from "../../Shared/Button/Button";
import Image from "../../Shared/Image/Image";

const TableRow = ({
  id,
  tour,
  startDate,
  endDate,
  url,
  price,
  passengers,
  status,
}: OrganizedBookings[number]) => {
  const statusColors: Record<string, StatusColor> = {
    Pending: "yellow",
    Confirmed: "purple",
    Canceled: "red",
  };

  return (
    <tr>
      <td>#{id}</td>
      <td className="min-w-300">
        <div className="d-flex items-center">
          <Image src={tour.imgUrl} alt="" className="w-25 rounded" />
          <div className="ml-20">{tour.name}</div>
        </div>
      </td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td className="text-nowrap">{passengers} People</td>
      <td>${price}</td>
      <td>
        <div className={`circle text-${statusColors[status]}-1`}>{status}</div>
      </td>
      <td>
        <Button
          buttonType="link"
          styleType="primary"
          to={url}
          className="px-4 py-2 rounded"
        >
          View
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
