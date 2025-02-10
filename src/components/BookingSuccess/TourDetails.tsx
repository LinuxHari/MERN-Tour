import {BookingDetailsResponse} from "../../type";
import Button from "../Shared/Button/Button";

type TourDetailsProps = BookingDetailsResponse["tourInfo"] & {amount: number};

const TourDetails = ({
  tourName,
  startDate,
  duration,
  passengers: pax,
  amount,
}: TourDetailsProps) => {
  return (
    <div className="pl-50 md:pl-0">
      <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-20 fw-500">Tour Details</h2>
        <div className="line mt-20 mb-20" />
        <div className="d-flex item-center justify-between y-gap-5">
          <div className="text-18 fw-500">{tourName}</div>
        </div>

        <div className="mt-25">
          <div className="d-flex items-center justify-between">
            <div className="fw-500">Start Date:</div>
            <div className="">{startDate.toString().split("T")[0]}</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="fw-500">Duration:</div>
            <div className="">{duration} Days</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="fw-500">Tickets:</div>
            <div className="">
              Adult x {pax.adults}{" "}
              {Boolean(pax?.teens) && `, Teen x ${Boolean(pax.teens)} `}{" "}
              {Boolean(pax?.children) && `, Child x ${pax.children} `}{" "}
              {Boolean(pax?.infants) && `, Infant x ${pax.infants}`}
            </div>
          </div>
          <div className="d-flex items-center justify-between">
            <div className="fw-500">Amount:</div>
            <div className="text-18 fw-500">${amount}</div>
          </div>
        </div>
        <Button
          buttonType="primary"
          className="mt-4 w-100"
          onClick={() => window.print()}
        >
          Print
        </Button>
      </div>
    </div>
  );
};

export default TourDetails;
