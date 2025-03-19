import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import {Link} from "react-router-dom";
import {TRENDING_DESTINATIONS} from "../../../data";

const TrendingDestinations = () => {
  return (
    <section className="layout-pt-xl">
      <div data-anim-wrap className="container">
        <div className="col-auto">
          <h2 className="text-30 md:text-24">Trending destinations</h2>
        </div>
        <div
          className="overflow-hidden pt-40 sm:pt-20 js-section-slider is-in-view"
          data-anim-child="slide-up delay-2"
          data-slider-cols="xl-8 lg-5 md-4 sm-3 base-2"
          data-gap="36"
          data-pagination="js-dest-pagination"
        >
          <Swiper
            spaceBetween={25}
            slidesPerView={8}
            breakpoints={{
              320: {slidesPerView: 2},
              640: {slidesPerView: 4},
              768: {slidesPerView: 6},
              1024: {slidesPerView: 8},
            }}
            pagination={{
              el: ".js-dest-pagination",
              clickable: true,
              bulletClass: "pagination__item cursor-pointer",
              bulletActiveClass: "is-active",
            }}
            modules={[Pagination]}
          >
            {TRENDING_DESTINATIONS.map(({imgSrc, name, tourCount, destinationId}, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={`/tours/${name.replaceAll(" ", "-")}/${destinationId}`}
                  className="featureImage -type-1 text-center -hover-image-scale"
                >
                  <div className="featureImage__image mx-auto rounded-full -hover-image-scale__image">
                    <img src={imgSrc} alt={name} className="size-130 object-cover rounded-full" />
                  </div>
                  <h3 className="featureImage__title text-16 fw-500 mt-20">{name}</h3>
                  <p className="featureImage__text text-14">{tourCount}+ Tours</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pagination -type-1 justify-center pt-60 md:pt-40 js-dest-pagination" />
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
