import {RenderProps} from "../../type";
import TourCard from "../../components/Admin/Favorites/TourCard";
import Pagination from "../../components/Shared/Pagination/Pagination";
import useUserFavoriteHandler from "../../hooks/useUserFavoriteHandler";
import withAuth from "../../hocs/withAuth";
import CommonSkeleton from "../../components/Skeletons/CommonSkeleton";
import NoResult from "../../components/Shared/NoResult/NoResult";

const Favorites = ({render}: RenderProps) => {
  const {favoriteTours, page, setPage, isFetchingFavoriteTours} =
    useUserFavoriteHandler();

  return (
    <>
      {render("Favorites", "My Favorites")}
      {isFetchingFavoriteTours ? (
        <CommonSkeleton />
      ) : (
        <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60">
          {favoriteTours && favoriteTours.favoriteTours.length ? (
            <>
              <div className="row y-gap-30">
                {favoriteTours.favoriteTours.map(
                  (
                    {
                      images,
                      location,
                      title,
                      rating,
                      reviewCount,
                      duration,
                      price,
                      tourId,
                      destinationId,
                    },
                    i,
                  ) => (
                    <TourCard
                      key={i}
                      images={images}
                      location={location}
                      title={title}
                      rating={rating}
                      reviewCount={reviewCount}
                      duration={duration}
                      price={price}
                      className="col-lg-3 col-md-6"
                      isFavorite={true}
                      tourId={tourId}
                      destinationId={destinationId}
                    />
                  ),
                )}
              </div>
              <div className="mt-60">
                <Pagination
                  totalCount={favoriteTours.totalCount}
                  page={page}
                  setPage={setPage}
                />
              </div>
            </>
          ) : (
            <NoResult description="You do not have favorite tours!" />
          )}
        </div>
      )}
    </>
  );
};

const AuthenticatedFavorites = withAuth(Favorites);

export default AuthenticatedFavorites;
