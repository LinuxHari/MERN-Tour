import TourCard from "../../Admin/Favorites/TourCard";

const PopularTours = () => {
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
      title: "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up",
      rating: 4.8,
      reviews: 269,
      duration: 4,
      price: 771,
      image: "img/tourCards/1/9.png",
    },
  ];

  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="col-auto">
          <h2 className="text-30 md:text-24">Find Popular Tours</h2>
        </div>

        <div className="row y-gap-30 justify-content-center justify-content-md-between pt-40 sm:pt-20 mobile-css-slider -w-300">
          {tourCards.map(({location, title, rating, reviews, duration, price, image}, index) => (
            <TourCard
              key={index}
              img={image}
              rating={rating}
              reviewCount={reviews}
              duration={duration}
              price={price}
              title={title}
              location={location}
              className="col-lg-3 col-md-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
