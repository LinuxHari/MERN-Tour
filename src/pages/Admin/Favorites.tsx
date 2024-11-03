import { RenderProps } from "../../type";
// import Pagination from "../../components/Shared/Pagination/Pagination";
import TourCard from "../../components/Admin/Favorites/TourCard";

const Favorites = ({ render }: RenderProps) => {
  const favTours = [
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
    <>
      {render("Favorites", "My Favorites")}
      <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60">
        <div className="row y-gap-30">
          {favTours.map(
            (
              { image, location, title, rating, reviews, duration, price },
              i
            ) => (
              <TourCard
                key={i}
                img={image}
                location={location}
                title={title}
                rating={rating}
                reviewCount={reviews}
                duration={duration}
                price={price}
                className="col-lg-3 col-md-6"
              />
            )
          )}
        </div>
        <div className="mt-60">
          {/* <Pagination /> */}
        </div>
      </div>
    </>
  );
};

export default Favorites;
