import { BookingDetailsResponse } from "../../type";
import Button from "../Shared/Button/Button";

type BookingInfoProps = Omit<BookingDetailsResponse, "tourInfo"> & { bookingId: string, cancel: () => void }

const BookingInfo = ({ name, email, bookingId, bookDate, amount, paymentMethod, paymentInfo, status, cancel }: BookingInfoProps) => {
  return (
    <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
      <div className="d-flex flex-column items-center text-center">
        <div className="size-80 rounded-full flex-center bg-accent-1 text-white">
          <i className="icon-check text-26"></i>
        </div>

        <h2 className="text-30 md:text-24 fw-700 mt-20">
          {name}, {status === "success"? "you have order booked successfully!": "your booking is pending. You will receive an email confirmation once it is successful" }
        </h2>
        <div className="mt-10">
          Booking details has been sent to: {email}
        </div>
      </div>

      <div className="border-dashed-1 py-30 px-50 rounded-12 mt-30">
        <div className="row y-gap-15">
          <div className="col-md-3 col-6">
            <div>Order Number</div>
            <div className="text-accent-2">{bookingId}</div>
          </div>

          <div className="col-md-3 col-6">
            <div>Date</div>
            <div className="text-accent-2">{bookDate.toString()}</div>
          </div>

          <div className="col-md-3 col-6">
            <div>Total</div>
            <div className="text-accent-2">${amount}</div>
          </div>

          <div className="col-md-3 col-6">
            <div>Payment Method</div>
            <div className="text-accent-2">{paymentMethod}</div>
          </div>
        </div>
      </div>

      <h2 className="text-30 md:text-24 fw-700 mt-60 md:mt-30">
        Payment Details
      </h2>
      {
        paymentInfo && <div className="">
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
          <div className="">{paymentInfo.paymentDate.toString()}</div>
        </div>
        <div className="d-flex items-center justify-between">
          <div className="fw-500">Reciept:</div>
          <a className="text-accent-2" href={paymentInfo.recipetUrl} target="_blank">View</a>
        </div>
      </div>
      }
        <div className="d-flex items-center justify-end mt-3">
            <Button buttonType="secondary" onClick={cancel}>Cancel</Button>
            <Button className="ml-20" buttonType="link" to="/">Book again</Button>
          </div>
    </div>
  );
};

export default BookingInfo;