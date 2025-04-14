import {usePopularToursQuery} from "../../../redux/api/baseApi";
import TourCard from "../../User/Favorites/TourCard";
import CardSkeleton from "../../Skeletons/CardSkeleton";

const PopularTours = () => {
  const {isLoading, data: tours, isError} = usePopularToursQuery();

  if (isLoading)
    return (
      <div className="container layout-pt-xl  layout-pb-xl d-flex gap-3">
        {Array.from({length: 3}).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );

  if (!tours || !tours.length || isError) return null;

  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="col-auto">
          <h2 className="text-30 md:text-24">Find Popular Tours</h2>
        </div>

        <div className="row y-gap-30 justify-content-center justify-content-md-between pt-40 sm:pt-20 mobile-css-slider -w-300">
          {tours.map(({location, title, rating, reviewCount, duration, price, images, tourId}, index) => (
            <TourCard
              key={index}
              images={images}
              rating={rating}
              reviewCount={reviewCount}
              duration={duration}
              price={price}
              title={title}
              location={location}
              tourId={tourId}
              destination={location.split(",")[0]}
              className="col-lg-3 col-md-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
