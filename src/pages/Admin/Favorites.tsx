import {RenderProps} from "../../type";
import TourCard from "../../components/Admin/Favorites/TourCard";
import Pagination from "../../components/Shared/Pagination/Pagination";
import useUserFavoriteHandler from "../../hooks/Users/useUserFavoriteHandler";
import withAuth from "../../hocs/withAuth";
import CommonSkeleton from "../../components/Skeletons/CommonSkeleton";
import NoResult from "../../components/Shared/NoResult/NoResult";

const Favorites = ({render}: RenderProps) => {
  const {favoriteTours, page, setPage, isFetchingFavoriteTours} = useUserFavoriteHandler();

  return (
    <>
      {render("Favorites", "My Favorites")}
      {isFetchingFavoriteTours ? (
        <CommonSkeleton />
      ) : (
        <div className="rounded-12 bg-white shadow-2 px-20 pt-40 pb-30 mt-60">
          {favoriteTours && favoriteTours.favoriteTours.length ? (
            <>
              <div className="row y-gap-30">
                {favoriteTours.favoriteTours.map(
                  ({images, title, rating, reviewCount, duration, price, tourId, city, state, country}, i) => (
                    <TourCard
                      key={i}
                      images={images}
                      location={city.name || "" + state.name || "" + country.name}
                      title={title}
                      rating={rating}
                      reviewCount={reviewCount}
                      duration={duration}
                      price={price}
                      className="col-sm-12 col-lg-6 col-xl-4"
                      isFavorite={true}
                      tourId={tourId}
                      destination={city.name}
                    />
                  ),
                )}
              </div>
              <div className="mt-60">
                <Pagination totalCount={favoriteTours.totalCount} page={page} setPage={setPage} perPage={12} />
              </div>
            </>
          ) : (
            <NoResult title="You do not have favorite tours!" description="Add your favorite tours" />
          )}
        </div>
      )}
    </>
  );
};

const AuthenticatedFavorites = withAuth(Favorites);

export default AuthenticatedFavorites;
