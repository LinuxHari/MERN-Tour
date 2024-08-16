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
        Order Details
      </h2>

      <div className="d-flex item-center justify-between y-gap-5 pt-30">
        <div className="text-18 fw-500">
          Westminster Walking Tour & Westminster Abbey Entry
        </div>
        <div className="text-18 fw-500">$382</div>
      </div>

      <div className="mt-25">
        <div className="d-flex items-center justify-between">
          <div className="fw-500">Date:</div>
          <div className="">06 April 2023</div>
        </div>

        <div className="d-flex items-center justify-between">
          <div className="fw-500">Time:</div>
          <div className="">10:00 am</div>
        </div>

        <div className="d-flex items-center justify-between">
          <div className="fw-500">Duration:</div>
          <div className="">12 Days</div>
        </div>

        <div className="d-flex items-center justify-between">
          <div className="fw-500">Tickets:</div>
          <div className="">
            Adult x2 = $98 - Youth x3 = $383 - Children x6 = $394
          </div>
        </div>
      </div>

      <div className="line mt-30 mb-30"></div>

      <div className="d-flex item-center justify-between y-gap-5">
        <div className="text-18 fw-500">Service per booking</div>
        <div className="text-18 fw-500">$43</div>
      </div>

      <div className="line mt-30 mb-30"></div>

      <div className="d-flex item-center justify-between y-gap-5">
        <div className="text-18 fw-500">
          Service per person 1 Adult, 2 Youth, 4 Children
        </div>
        <div className="text-18 fw-500">$125</div>
      </div>

      <div className="line mt-30 mb-30"></div>

      <div className="row justify-end">
        <div className="col-md-4">
          <div className="d-flex items-center justify-between">
            <div className="text-18 fw-500">Subtotal</div>
            <div className="text-18 fw-500">$382</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="text-18 fw-500">Total</div>
            <div className="text-18 fw-500">$23</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="text-18 fw-500">Amount Paid</div>
            <div className="text-18 fw-500">$3.482</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="text-18 fw-500">Amount Due</div>
            <div className="text-18 fw-500">$43.242</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
