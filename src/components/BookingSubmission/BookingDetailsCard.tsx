import { ReservedTourResponse } from "../../type";
import Button from "../Shared/Button/Button";

type BookingDetailsCardProps = {
  isPayformLoaded: boolean;
  isLoading: boolean;
  isError: boolean;
  reservedTour: ReservedTourResponse
}

const BookingDetailsCard = ({isPayformLoaded, isLoading, isError, reservedTour}: BookingDetailsCardProps) => {

  if (isLoading) return "Loading...";
  else if (isError || !reservedTour) return "Something went wrong";

  const total = (() => {
    const {
      passengers,
      tourDetails: { price },
    } = reservedTour;
    let totalAmount = passengers.adults * price.adult;
    if (price?.teen) totalAmount += price.teen * (passengers.teens || 0);
    if (price?.child) totalAmount += price.child * (passengers.children || 0);
    if (price?.infant) totalAmount += price.infant * (passengers.infants || 0);
    return totalAmount;
  })();

  return (
    <>
      <div className="pl-50 md:pl-0 col-4 order-2">
        <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
          <h2 className="text-20 fw-500">Your booking details</h2>

          <div className="d-flex flex-column mt-30">
            <img src={reservedTour.tourDetails.images[0]} className="rounded" alt="image" />
            <div className="pt-2 fw-500">{reservedTour.tourDetails.name}</div>
          </div>

          <div className="line mt-20 mb-20"></div>

          <div className="">
            <div className="d-flex items-center justify-between">
              <div className="fw-500">Date:</div>
              <div className="">{reservedTour.startDate.toString().split("T")[0]}</div>
            </div>

            <div className="d-flex items-center justify-between">
              <div className="fw-500">Duration:</div>
              <div className="">{reservedTour.tourDetails.duration} Days</div>
            </div>

            <div className="d-flex items-center justify-between">
              <div className="fw-500">Tickets:</div>
              <div className="">
                Adult x{reservedTour.passengers.adults} = ${reservedTour.passengers.adults * reservedTour.tourDetails.price.adult}
              </div>
            </div>

            {reservedTour.passengers.teens ? (
              <div className="d-flex items-center justify-between">
                <div className="fw-500"></div>
                <div className="">
                  Teens x{reservedTour.passengers.teens} = ${reservedTour.passengers.teens * (reservedTour.tourDetails.price?.teen || 0)}
                </div>
              </div>
            ) : null}

            {reservedTour.passengers.children ? (
              <div className="d-flex items-center justify-between">
                <div className="fw-500"></div>
                <div className="">
                  Children x{reservedTour.passengers.children} = $
                  {reservedTour.passengers.children * (reservedTour.tourDetails.price?.child || 0)}
                </div>
              </div>
            ) : null}

            {reservedTour.passengers.infants ? (
              <div className="d-flex items-center justify-between">
                <div className="fw-500"></div>
                <div className="">
                  Infants x{reservedTour.passengers.infants} = $
                  {reservedTour.passengers.infants * (reservedTour.tourDetails.price?.infant || 0)}
                </div>
              </div>
            ) : null}
          </div>

          <div className="line mt-20 mb-20"></div>

          <div className="">
            {/* <div className="d-flex items-center justify-between">
            <div className="fw-500">Subtotal</div>
            <div className="">$382</div>
          </div> */}

            <div className="d-flex items-center justify-between">
              <div className="fw-500">Total</div>
              <div className="">${total}</div>
            </div>

            {/* <div className="d-flex items-center justify-between">
            <div className="fw-500">Amount Paid</div>
            <div className="">$3.482</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="fw-500">Amount Due</div>
            <div className="">$43.242</div>
          </div> */}
          </div>
        </div>

        <div className="mt-30">
          <Button buttonType="primary" type="submit" className="w-100" disabled={isPayformLoaded}>
            Complete My Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default BookingDetailsCard;
