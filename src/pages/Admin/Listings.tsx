import {RenderProps} from "../../type";
import Pagination from "../../components/Shared/Pagination/Pagination";
import useAdminTourHandler from "../../hooks/useAdminTourHandler";
import ListingCard from "../../components/Admin/Listings/ListingCard";
import withAuth from "../../hocs/withAuth";

const Listings = ({render}: RenderProps) => {
  const {publishedTours, isTourLoading, page, setPage} = useAdminTourHandler();

  return (
    <>
      {render("Listings", "My Listings")}
      {isTourLoading ? (
        <>Loading...</>
      ) : publishedTours && publishedTours.tours.length ? (
        <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60">
          {publishedTours && publishedTours.tours.length ? (
            <>
              <div className="row y-gap-30">
                {publishedTours.tours.map(
                  (
                    {
                      images,
                      name,
                      country,
                      state,
                      city,
                      price,
                      totalRatings,
                      duration,
                      averageRating,
                      tourId,
                      destinationId,
                    },
                    index,
                  ) => (
                    <ListingCard
                      key={index}
                      img={images[0]}
                      location={
                        city || "" + ", " + state || "" + ", " + country || ""
                      }
                      title={name}
                      rating={averageRating}
                      reviewCount={totalRatings}
                      duration={duration}
                      price={price.adult}
                      tourId={tourId}
                      destinationId={destinationId}
                    />
                  ),
                )}
              </div>
              <div className="mt-60">
                <Pagination
                  totalCount={publishedTours.totalCount}
                  page={page}
                  setPage={setPage}
                />
              </div>
            </>
          ) : (
            <>You do not have favorite tours</>
          )}
        </div>
      ) : (
        <>No Tours has been published</>
      )}
    </>
  );
};

const AuthenticatedListing = withAuth(Listings);

export default AuthenticatedListing;
