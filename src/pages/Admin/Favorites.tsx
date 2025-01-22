import {RenderProps} from "../../type";
// import Pagination from "../../components/Shared/Pagination/Pagination";
import TourCard from "../../components/Admin/Favorites/TourCard";
import Pagination from "../../components/Shared/Pagination/Pagination";
import useUserFavoriteHandler from "../../hooks/useUserFavoriteHandler";

const Favorites = ({render}: RenderProps) => {
  const {favoriteTours, page, setPage, isFetchingFavoriteTours} = useUserFavoriteHandler();

  return (
    <>
      {render("Favorites", "My Favorites")}
      {isFetchingFavoriteTours ? (
        <>Loading...</>
      ) : (
        <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60">
          {favoriteTours && favoriteTours.tours.length ? (
            <>
              <div className="row y-gap-30">
                {favoriteTours.tours.map(
                  ({imgUrl, location, title, rating, reviewCount, duration, price}, i) => (
                    <TourCard
                      key={i}
                      img={imgUrl}
                      location={location}
                      title={title}
                      rating={rating}
                      reviewCount={reviewCount}
                      duration={duration}
                      price={price}
                      className="col-lg-3 col-md-6"
                    />
                  ),
                )}
              </div>
              <div className="mt-60">
                <Pagination totalCount={favoriteTours.totalCount} page={page} setPage={setPage} />
              </div>
            </>
          ) : (
            <>You do not have favorite tours</>
          )}
        </div>
      )}
    </>
  );
};

export default Favorites;
