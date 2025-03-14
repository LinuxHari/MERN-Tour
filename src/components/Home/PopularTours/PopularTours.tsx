import {usePopularToursQuery} from "../../../redux/api/baseApi";
import TourCard from "../../Admin/Favorites/TourCard";

const PopularTours = () => {
  const {isLoading, data: tours, isError} = usePopularToursQuery();

  if (!tours || !tours.length || isError) return null;

  if (isLoading) return <>Loading...</>;

  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="col-auto">
          <h2 className="text-30 md:text-24">Find Popular Tours</h2>
        </div>

        <div className="row y-gap-30 justify-content-center justify-content-md-between pt-40 sm:pt-20 mobile-css-slider -w-300">
          {tours.map(
            (
              {
                location,
                title,
                rating,
                reviewCount,
                duration,
                price,
                images,
                tourId,
              },
              index,
            ) => (
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
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
