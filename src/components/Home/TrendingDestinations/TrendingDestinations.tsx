import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import {Link} from "react-router-dom";

const TrendingDestinations = () => {
  const destinations = [
    {
      name: "Paris",
      tourCount: "100",
      destinationId: "a2b410d3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FParis.png?alt=media&token=66550a6d-a05d-4742-b8c5-497a303b4612",
    },
    {
      name: "Singapore",
      tourCount: "300",
      destinationId: "d404d82f",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FSingapore.png?alt=media&token=6332d0d9-d9f5-4aee-ac26-846ad7348525",
    },
    {
      name: "Greece",
      tourCount: "400",
      destinationId: "037794d3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FGreece.jpeg?alt=media&token=d249b39c-ffc9-4899-8f8b-a26e65183bef",
    },
    {
      name: "Bangkok",
      tourCount: "100",
      destinationId: "0a098c18",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FBangkok.png?alt=media&token=8a9ce528-4a93-4512-8641-ef834c2e53d7",
    },
    {
      name: "Bali",
      tourCount: "600",
      destinationId: "aad8480c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FBali.png?alt=media&token=e9b50f08-f3e2-4399-8856-25d6c2605073",
    },
    {
      name: "Phuket",
      tourCount: "200",
      destinationId: "4c68efe1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FPhuket.png?alt=media&token=2c84de08-dce3-45ef-a7e5-06c8ac2bc61e",
    },
    {
      name: "Tokyo",
      tourCount: "700",
      destinationId: "813331c1",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FTokyo.png?alt=media&token=778e827d-029a-4713-897f-867e942bd267",
    },
    {
      name: "Brazil",
      tourCount: "900",
      destinationId: "3251bfc2",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FBrazil.jpeg?alt=media&token=ddbc48c4-7949-43e7-92d8-61177f10f2af",
    },
    {
      name: "Tamil Nadu",
      tourCount: "100",
      destinationId: "1525c1e2",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FTamilNadu.jpg?alt=media&token=e5ccbcc8-9afe-4a44-971f-8389527751a3",
    },
    {
      name: "Berlin",
      tourCount: "300",
      destinationId: "7e097906",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FBerlin.webp?alt=media&token=25cc3865-da4e-4e4a-a1de-d218bee9a844",
    },
    {
      name: "Los Angeles",
      tourCount: "400",
      destinationId: "343af849",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FLosAngeles.jpeg?alt=media&token=4ab9dc76-8c1d-47bf-8316-b7d0abb30d68",
    },
    {
      name: "Dubai",
      tourCount: "100",
      destinationId: "56187019",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/mern-tours-e23a8.appspot.com/o/assets%2Fdestinations%2FDubai.jpeg?alt=media&token=83d8ce2c-fa23-4da3-8564-4276ec9fb871",
    },
  ];

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
            {destinations.map(
              ({imgSrc, name, tourCount, destinationId}, index) => (
                <SwiperSlide key={index}>
                  <Link
                    to={`/tours/${name.replaceAll(" ", "-")}/${destinationId}`}
                    className="featureImage -type-1 text-center -hover-image-scale"
                  >
                    <div className="featureImage__image mx-auto rounded-full -hover-image-scale__image">
                      <img
                        src={imgSrc}
                        alt={name}
                        className="size-130 object-cover rounded-full"
                      />
                    </div>
                    <h3 className="featureImage__title text-16 fw-500 mt-20">
                      {name}
                    </h3>
                    <p className="featureImage__text text-14">
                      {tourCount}+ Tours
                    </p>
                  </Link>
                </SwiperSlide>
              ),
            )}
          </Swiper>

          <div className="pagination -type-1 justify-center pt-60 md:pt-40 js-dest-pagination" />
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
