import {ReservedTourResponse} from "../../redux/api/type";
import Button from "../Shared/Button/Button";
import Carousel from "../Shared/Image/Carousel";

type BookingDetailsCardProps = {
  isPayformLoaded: boolean;
  isLoading: boolean;
  isError: boolean;
  reservedTour: ReservedTourResponse;
};

const BookingDetailsCard = ({isPayformLoaded, isLoading, isError, reservedTour}: BookingDetailsCardProps) => {
  if (isError || !reservedTour) return "Something went wrong";

  return (
    <>
      <div className="bg-white rounded-12 shadow-2 py-30 px-30">
        <h2 className="text-20 fw-500">Your booking details</h2>

        <div className="d-flex flex-column mt-30">
          <div className="w-100 overflow-hidden tourCard__image relative rounded">
            <Carousel images={reservedTour.tourDetails.images} />
          </div>
          <div className="pt-4 fw-500">{reservedTour.tourDetails.name}</div>
        </div>

        <div className="line mt-20 mb-20" />

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
              Adult x{reservedTour.passengers.adults} = {reservedTour.currencyCode}
              {(reservedTour.passengers.adults * reservedTour.tourDetails.price.adult).toFixed(2)}
            </div>
          </div>

          {reservedTour.passengers.teens ? (
            <div className="d-flex items-center justify-between">
              <div className="fw-500" />
              <div className="">
                Teens x{reservedTour.passengers.teens} = {reservedTour.currencyCode}
                {(reservedTour.passengers.teens * (reservedTour.tourDetails.price?.teen || 0)).toFixed(2)}
              </div>
            </div>
          ) : null}

          {reservedTour.passengers.children ? (
            <div className="d-flex items-center justify-between">
              <div className="fw-500" />
              <div className="">
                Children x{reservedTour.passengers.children} = {reservedTour.currencyCode}
                {(reservedTour.passengers.children * (reservedTour.tourDetails.price?.child || 0)).toFixed(2)}
              </div>
            </div>
          ) : null}

          {reservedTour.passengers.infants ? (
            <div className="d-flex items-center justify-between">
              <div className="fw-500" />
              <div className="">
                Infants x{reservedTour.passengers.infants} = {reservedTour.currencyCode}
                {(reservedTour.passengers.infants * (reservedTour.tourDetails.price?.infant || 0)).toFixed(2)}
              </div>
            </div>
          ) : null}
        </div>

        <div className="line mt-20 mb-20" />

        <div className="">
          {/* <div className="d-flex items-center justify-between">
            <div className="fw-500">Subtotal</div>
            <div className="">$382</div>
          </div> */}

          <div className="d-flex items-center justify-between">
            <div className="fw-500">Total</div>
            <div>
              {reservedTour.currencyCode}
              {reservedTour.totalAmount.toFixed(2)}
            </div>
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

      <div className="mt-20">
        <Button
          buttonType="primary"
          type="submit"
          className="w-100"
          isLoading={isLoading}
          disabled={!isPayformLoaded || isLoading}
        >
          Book now
        </Button>
      </div>
    </>
  );
};

export default BookingDetailsCard;
