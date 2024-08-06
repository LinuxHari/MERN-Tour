import { RenderProps } from "../../../type";
import Pagination from "../../shared/Pagination/Pagination";
import TourCard from "./TourCard";

const Favorites = ({ render }: RenderProps) => {
  const favTours = [
    {
      image: "img/tourCards/1/1.png",
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: 5,
      reviews: 269,
      duration: 4,
      price: 189,
    },
    {
      image: "img/tourCards/1/2.png",
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: 5,
      reviews: 269,
      duration: 4,
      price: 225,
    },
    {
      image: "img/tourCards/1/1.png",
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: 5,
      reviews: 269,
      duration: 4,
      price: 189,
    },
    {
      image: "img/tourCards/1/2.png",
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: 5,
      reviews: 269,
      duration: 4,
      price: 225,
    },
    {
      image: "img/tourCards/1/1.png",
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: 4,
      reviews: 269,
      duration: 4,
      price: 189,
    },
    {
      image: "img/tourCards/1/2.png",
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: 3,
      reviews: 269,
      duration: 4,
      price: 225,
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
              />
            )
          )}
        </div>
        <div className="mt-60">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Favorites;
