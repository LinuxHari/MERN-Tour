import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import TourCard from "../../Admin/Favorites/TourCard";
import {useTrendingToursQuery} from "../../../redux/api/baseApi";
import CardSkeleton from "../../Skeletons/CardSkeleton";

const Cards = () => {
  const {data: tours, isLoading, isError} = useTrendingToursQuery();

  if (!tours || !tours.length || isError) return null;

  if (isLoading)
    return Array.from({length: 3}).map((_, i) => <CardSkeleton key={i} />);

  return (
    <div className="relative pt-40 sm:pt-20 is-in-view">
      <div className="overflow-hidden pb-30">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".js-slider1-next",
            prevEl: ".js-slider1-prev",
          }}
          spaceBetween={25}
          slidesPerView={4}
          breakpoints={{
            320: {slidesPerView: 1},
            640: {slidesPerView: 2},
            1024: {slidesPerView: 3},
            1280: {slidesPerView: 4},
          }}
        >
          {tours.map(
            (
              {
                location,
                title,
                reviewCount,
                rating,
                duration,
                price,
                images,
                tourId,
              },
              index,
            ) => (
              <SwiperSlide key={index}>
                <TourCard
                  location={location}
                  title={title}
                  reviewCount={reviewCount}
                  rating={rating}
                  duration={duration}
                  price={price}
                  images={images}
                  destination={location.split(",")[0]}
                  tourId={tourId}
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>

      <div className="navAbsolute">
        <button className="navAbsolute__button bg-white js-slider1-prev">
          <i className="icon-arrow-left text-14" />
        </button>
        <button className="navAbsolute__button bg-white js-slider1-next">
          <i className="icon-arrow-right text-14" />
        </button>
      </div>
    </div>
  );
};

export default Cards;
