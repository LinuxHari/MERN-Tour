import {RenderProps} from "../../type";
import Pagination from "../../components/Shared/Pagination/Pagination";
import ListingCard from "../../components/Admin/Listings/ListingCard";
import useAdminTourHandler from "../../hooks/useAdminTourHandler";

const Listings = ({render}: RenderProps) => {
  const {publishedTours, isTourLoading, page, setPage} = useAdminTourHandler();

  return (
    <>
      {render("Listings", "My Listings")}
      {isTourLoading ? (
        <>Loading...</>
      ) : publishedTours && publishedTours.tours.length ? (
        <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:pb-20 mt-60 md:mt-30">
          <div className="row y-gap-30">
            {publishedTours.tours.map(
              (
                {images, name, country, state, city, price, totalRatings, duration, averageRating},
                index,
              ) => (
                <ListingCard
                  key={index}
                  img={images[0]}
                  location={city || "" + ", " + state || "" + ", " + country || ""}
                  title={name}
                  rating={totalRatings}
                  reviewCount={averageRating}
                  duration={duration}
                  price={price.adult}
                />
              ),
            )}
          </div>
          <div className="mt-60">
            <Pagination totalCount={publishedTours.totalCount} page={page} setPage={setPage} />
          </div>
        </div>
      ) : (
        <>No Tours has been published</>
      )}
    </>
  );
};

export default Listings;
