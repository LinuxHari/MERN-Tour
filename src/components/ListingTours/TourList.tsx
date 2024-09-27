import { ListingCard2Props } from "../../type";
import Pagination from "../Shared/Pagination/Pagination";
import TourCard2 from "../Shared/TourCard/TourCard2";

type TourListProps = {
  tours: ListingCard2Props[]
}

const TourList = ({ tours }: TourListProps) => {
  // const tourListings: ListingCard2Props[] = [
  //   {
  //     img: "img/tourCards/3/1.png",
  //     location: "Paris, France",
  //     title:
  //       "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
  //     description:
  //       "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
  //     rating: 4.8,
  //     reviewCount: 269,
  //     duration: 2,
  //     price: 1200,
  //     offer: {
  //       percentage: 20,
  //     },
  //     freeCancellation: true,
  //   },
  //   {
  //     img: "img/tourCards/3/2.png",
  //     location: "Paris, France",
  //     title:
  //       "Phi Phi Islands Adventure Day Trip with Seaview Breakfast by V. Marine Tour",
  //     description:
  //       "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
  //     rating: 4.8,
  //     reviewCount: 269,
  //     duration: 2,
  //     price: 1200,
  //     freeCancellation: true,
  //   },
  //   {
  //     img: "img/tourCards/3/3.png",
  //     location: "Paris, France",
  //     title:
  //       "Phi Phi Islands Adventure Day Trip with Seaview Dinner by V. Marine Tour",
  //     description:
  //       "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
  //     rating: 4.8,
  //     reviewCount: 269,
  //     duration: 2,
  //     price: 1200,
  //     offer: {
  //       percentage: 0,
  //     },
  //     freeCancellation: true,
  //   },
  // ];

  return (
    <>
      <div className="row y-gap-30 pt-10 pt-lg-30">
        {tours.map((tour) => (
          <div className="col-12" key={tour.name}>
            <TourCard2 {...tour} />
          </div>
        ))}
      </div>

      <div className="d-flex justify-center flex-column mt-60">
        <Pagination />
      </div>
    </>
  );
};

export default TourList;
