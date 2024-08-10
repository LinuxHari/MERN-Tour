import { Swiper, SwiperSlide } from "swiper/react";
import TourCard from "../../Admin/Favorites/TourCard";
import { Navigation } from "swiper/modules";

const TopTrending = () => {
  const tourCards = [
    {
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: 4.8,
      reviews: 269,
      duration: 4,
      price: 189,
      image: "img/tourCards/1/1.png",
    },
    {
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: 4.8,
      reviews: 269,
      duration: 4,
      price: 225,
      image: "img/tourCards/1/2.png",
    },
    {
      location: "London, UK",
      title: "Westminster Walking Tour & Westminster Abbey Entry",
      rating: 4.8,
      reviews: 269,
      duration: 4,
      price: 943,
      image: "img/tourCards/1/3.png",
    },
    {
      location: "New York, USA",
      title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
      rating: 4.8,
      reviews: 269,
      duration: 4,
      price: 771,
      image: "img/tourCards/1/4.png",
    },
    {
      location: "Paris, France",
      title: "Space Center Houston Admission Ticket",
      rating: 4.8,
      reviews: 269,
      duration: 4,
      price: 189,
      image: "img/tourCards/1/5.png",
    },
    {
      location: "New York, USA",
      title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
      rating: 4.8,
      reviews: 269,
      duration: 4,
      price: 225,
      image: "img/tourCards/1/6.png",
    },
    {
      location: "London, UK",
      title: "History and Hauntings of Salem Guided Walking Tour",
      rating: 4.8,
      reviews: 269,
      duration: 4,
      price: 943,
      image: "img/tourCards/1/7.png",
    },
    {
      location: "New York, USA",
      title:
        "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up",
      rating: 4.8,
      reviews: 269,
      duration: 4,
      price: 771,
      image: "img/tourCards/1/9.png",
    },
  ];

  return (
    <section className="layout-pt-xl layout-pb-xl ">
      <div className="relative py-40 sm:py-20">
      <div className="sectionBg -w-1530 rounded-12 bg-light-1"></div>

<div className="container">
  <div className="col-auto">
    <h2 className="text-30 md:text-24">Top Trending</h2>
  </div>

  <div
    data-anim-child="slide-up delay-2"
    className="relative pt-40 sm:pt-20 is-in-view"
  >
    <div className="overflow-hidden pb-30">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".js-slider1-next",
          prevEl: ".js-slider1-prev",
        }}
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {tourCards.map(
          (
            { location, title, reviews, rating, duration, price, image },
            index
          ) => (
            <SwiperSlide key={index}>
              <TourCard
                location={location}
                title={title}
                reviewCount={reviews}
                rating={rating}
                duration={duration}
                price={price}
                img={image}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>

    <div className="navAbsolute">
      <button className="navAbsolute__button bg-white js-slider1-prev">
        <i className="icon-arrow-left text-14"></i>
      </button>
      <button className="navAbsolute__button bg-white js-slider1-next">
        <i className="icon-arrow-right text-14"></i>
      </button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default TopTrending;
