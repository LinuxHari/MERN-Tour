import {useMemo} from "react";
import {BookingDetailsResponse} from "../../redux/api/type";

type BookingInfoProps = Omit<BookingDetailsResponse, "tourInfo"> & {
  bookingId: string;
};

const BookingInfo = ({
  name,
  email,
  bookingId,
  bookDate,
  amount,
  paymentMethod,
  paymentInfo,
  status,
  freeCancellation,
  isCancellable,
  currencyCode,
}: BookingInfoProps) => {
  const message = useMemo(() => {
    switch (status) {
      case "success":
        return "your tour is booked successfully!";
      case "failed":
        return "we regret to inform you that your booking has failed";
      case "canceled":
        return "your booking has been canceled";
      default:
        return "your booking is pending. You will receive an email confirmation once it is successful";
    }
  }, [status]);

  return (
    <>
      <div className="d-flex flex-column items-center text-center relative">
        {freeCancellation && isCancellable && (
          <div className="bg-success text-white px-5 py-2 fw-400 rounded-pill position-absolute top-0 start-0">
            Free cancellation
          </div>
        )}
        <div className="size-80 mt-60 mt-md-0 rounded-full flex-center bg-accent-1 text-white relative">
          <i className="icon-check text-26" />
        </div>

        <h2 className="text-30 md:text-24 fw-700 mt-20">
          {name}, {message}
        </h2>
        <div className="mt-10">Booking details has been sent to: {email}</div>
      </div>

      <div className="border-dashed-1 py-30 px-50 rounded-12 mt-30">
        <div className="row y-gap-15">
          <div className="col-md-3 col-12">
            <div>Order Number</div>
            <div className="text-accent-2">{bookingId}</div>
          </div>

          <div className="col-md-3 col-12">
            <div>Date</div>
            <div className="text-accent-2">{bookDate.toString().split("T")[0]}</div>
          </div>

          <div className="col-md-3 col-12">
            <div>Total</div>
            <div className="text-accent-2">
              {currencyCode}
              {amount}
            </div>
          </div>

          <div className="col-md-3 col-12">
            <div>Payment Method</div>
            <div className="text-accent-2">{paymentMethod}</div>
          </div>
        </div>
      </div>

      {paymentInfo && (
        <>
          <h2 className="text-30 md:text-24 fw-700 mt-60 md:mt-30">Payment Details</h2>
          <div className="">
            <div className="d-flex items-center justify-between">
              <div className="fw-500">Card:</div>
              <div className="">{paymentInfo.cardNumber}</div>
            </div>
            <div className="d-flex items-center justify-between">
              <div className="fw-500">Brand:</div>
              <div className="">{paymentInfo.cardBrand}</div>
            </div>
            <div className="d-flex items-center justify-between">
              <div className="fw-500 text-nowrap">Payment date:</div>
              <div className="">{paymentInfo.paymentDate.toString().split("T")[0]}</div>
            </div>
            <div className="d-flex items-center justify-between">
              <div className="fw-500">Receipt:</div>
              <a className="text-accent-2" href={paymentInfo.recipetUrl} target="_blank" rel="noreferrer">
                View
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookingInfo;
