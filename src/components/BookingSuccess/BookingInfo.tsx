import Button from "../Shared/Button/Button";

const BookingInfo = () => {
  return (
    <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
      <div className="d-flex flex-column items-center text-center">
        <div className="size-80 rounded-full flex-center bg-accent-1 text-white">
          <i className="icon-check text-26"></i>
        </div>

        <h2 className="text-30 md:text-24 fw-700 mt-20">
          System, your order was submitted successfully!
        </h2>
        <div className="mt-10">
          Booking details has been sent to: booking@tourz.com
        </div>
      </div>

      <div className="border-dashed-1 py-30 px-50 rounded-12 mt-30">
        <div className="row y-gap-15">
          <div className="col-md-3 col-6">
            <div>Order Number</div>
            <div className="text-accent-2">13119</div>
          </div>

          <div className="col-md-3 col-6">
            <div>Date</div>
            <div className="text-accent-2">27/07/2021</div>
          </div>

          <div className="col-md-3 col-6">
            <div>Total</div>
            <div className="text-accent-2">$40.10</div>
          </div>

          <div className="col-md-3 col-6">
            <div>Payment Method</div>
            <div className="text-accent-2">Direct Bank Transfer</div>
          </div>
        </div>
      </div>

      <h2 className="text-30 md:text-24 fw-700 mt-60 md:mt-30">
        Payment Details
      </h2>
      <div className="">
          <div className="d-flex items-center justify-between">
            <div className="fw-500">Card:</div>
            <div className="">4444</div>
          </div>
          <div className="d-flex items-center justify-between">
            <div className="fw-500">Brand:</div>
            <div className="">MasterCard</div>
          </div>
          <div className="d-flex items-center justify-between">
            <div className="fw-500 text-nowrap">Payment date:</div>
            <div className="">12/08/2025</div>
          </div>
          <div className="d-flex items-center justify-between">
            <div className="fw-500">Reciept:</div>
            <a className="text-accent-2" href="https://google.com" target="_blank">View</a>
          </div>
          <div className="d-flex items-center justify-end mt-3">
            <Button buttonType="secondary">Cancel</Button>
            <Button className="ml-20" buttonType="link" to="/">Book again</Button>
          </div>
        </div>
    </div>
  );
};

export default BookingInfo;


// {
//   tourId: string,
//   bookDate: Date,
//   totalAmount: number,
//   paymentMethod: "Card", 
//   bookInfo: {
//       startDate: Date,
//       duration: number,
//       passengers: {
//           adults: number;
//           children: number;
//           teens: number;
//           infants: number;
//       },
//       email: string
//   },
//   tourInfo: {
//   tour
// }
// }