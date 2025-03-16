import {RenderProps} from "../../type";
import Pagination from "../../components/Shared/Pagination/Pagination";
import useAdminTourHandler from "../../hooks/useAdminTourHandler";
import ListingCard from "../../components/Admin/Listings/ListingCard";
import withAuth from "../../hocs/withAuth";
import CommonSkeleton from "../../components/Skeletons/CommonSkeleton";
import NoResult from "../../components/Shared/NoResult/NoResult";

const Listings = ({render}: RenderProps) => {
  const {publishedTours, isTourLoading, page, setPage} = useAdminTourHandler();

  return (
    <>
      {render("Listings", "My Listings")}
      {isTourLoading ? (
        <CommonSkeleton />
      ) : publishedTours && publishedTours.tours.length ? (
        <div className="rounded-12 bg-white shadow-2 px-20 pt-40 pb-30 mt-60">
          <div className="row y-gap-30">
            {publishedTours.tours.map(
              ({images, name, country, state, city, price, totalRatings, duration, averageRating, tourId}, index) => (
                <ListingCard
                  key={index}
                  images={images}
                  location={city.name || "" + ", " + state.name || "" + ", " + country.name || ""}
                  title={name}
                  rating={averageRating}
                  reviewCount={totalRatings}
                  duration={duration}
                  price={price.adult}
                  tourId={tourId}
                  destination={city.name}
                />
              ),
            )}
          </div>
          <div className="mt-60">
            <Pagination totalCount={publishedTours.totalCount} page={page} setPage={setPage} perPage={12} />
          </div>
        </div>
      ) : (
        <NoResult title="Add a tour" description="No tour has been published!" />
      )}
    </>
  );
};

const AuthenticatedListing = withAuth(Listings);

export default AuthenticatedListing;
