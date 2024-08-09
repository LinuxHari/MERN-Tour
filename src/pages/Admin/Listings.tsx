import { RenderProps } from "../../type";
import Pagination from "../../components/shared/Pagination/Pagination";
import ListingCard from "../../components/Admin/Listings/ListingCard";

const Listings = ({render}: RenderProps) => {

  const tourData = [
    {
      imageSrc: "img/dashboard/listing/4.jpg",
      location: "Paris, France",
      title: "Zipline 18 Platform and ATV Adventure Tour From Phuket",
      rating: 4.8,
      reviewCount: 269,
      duration: 3,
      price: 1200
    },
    {
      imageSrc: "img/dashboard/listing/5.jpg",
      location: "Paris, France",
      title: "Phuket City Tour: Karon View Point, Big Buddha & Wat Chalong",
      rating: 4.8,
      reviewCount: 269,
      duration: 3,
      price: 1200
    },
    {
      imageSrc: "img/dashboard/listing/6.jpg",
      location: "Paris, France",
      title: "Phang Nga Bay & James Bond Island with Canoeing By Big Boat",
      rating: 3.8,
      reviewCount: 269,
      duration: 3,
      price: 1200
    }
  ];

  return (
    <>
    {render("Listings", "My Listings")}
    <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:pb-20 mt-60 md:mt-30">
    <div className="row y-gap-30">
    {
      tourData.map(({imageSrc, location, title, rating, reviewCount, duration, price}, index) => (
        <ListingCard key={index} img={imageSrc} location={location} title={title} rating={rating} reviewCount={reviewCount} duration={duration} price={price}/>
      ))
    }
    </div>
    <div className="mt-30">
      <Pagination/>
    </div>
  </div>
    </>
  )
}

export default Listings