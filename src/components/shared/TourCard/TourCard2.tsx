const TourCard2 = () => {
  return (
    <div className="tourCard -type-2">
      <div className="tourCard__image">
        <img src="img/tourCards/3/1.png" alt="image" />

        <div className="tourCard__badge">
          <div className="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10">
            20 % OFF
          </div>
        </div>

        <div className="tourCard__favorite">
          <button className="button -accent-1 size-35 bg-white rounded-full flex-center">
            <i className="icon-heart text-15"></i>
          </button>
        </div>
      </div>

      <div className="tourCard__content">
        <div className="tourCard__location">
          <i className="icon-pin"></i>
          Paris, France
        </div>

        <h3 className="tourCard__title mt-2">
          <span>
            Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine
            Tour
          </span>
        </h3>

        <div className="d-flex items-center mt-2">
          <div className="d-flex items-center x-gap-5">
            <i className="icon-star text-yellow-2 text-12"></i>

            <i className="icon-star text-yellow-2 text-12"></i>

            <i className="icon-star text-yellow-2 text-12"></i>

            <i className="icon-star text-yellow-2 text-12"></i>

            <i className="icon-star text-yellow-2 text-12"></i>
          </div>

          <div className="text-14 ml-10">
            <span className="fw-500">4.8</span> (269)
          </div>
        </div>

        <p className="tourCard__text mt-2 mb-2">
          The Phi Phi archipelago is a must-visit while in Phuket, and this
          speedboat trip.
        </p>

        <div className="row x-gap-20 y-gap-5 pt-30">
          <div className="col-auto">
            <div className="text-14 text-accent-1">
              <i className="icon-price-tag mr-10"></i>
              Best Price Guarantee
            </div>
          </div>
          <div className="col-auto">
            <div className="text-14">
              <i className="icon-check mr-10"></i>
              Free Cancellation
            </div>
          </div>
        </div>
      </div>

      <div className="tourCard__info">
        <div>
          <div className="d-flex items-center text-14">
            <i className="icon-clock mr-10"></i>2 Days 1 Nights
          </div>

          <div className="tourCard__price">
            <div>$114.00</div>

            <div className="d-flex items-center">
              From <span className="text-20 fw-500 ml-5">$1,200</span>
            </div>
          </div>
        </div>

        <button className="button -outline-accent-1 text-accent-1">
          View Details
          <i className="icon-arrow-top-right ml-10"></i>
        </button>
      </div>
    </div>
  );
};

export default TourCard2;
