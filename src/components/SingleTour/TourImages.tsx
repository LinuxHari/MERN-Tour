import {useState} from "react";
import Carousel from "../Shared/Image/Carousel";

type TourImagesProps = {
  images: string[];
};
const TourImages = ({images}: TourImagesProps) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <>
      <div className="absolute top-5 right-5 text-16 m-3 end-0 bg-dark-1 text-white px-3 py-1 rounded-200">
        <span>{currentSlide}</span>/{images.length}
      </div>
      <div className="tour__images">
        <Carousel images={images} onSlide={(index) => setCurrentSlide(index)} />
      </div>
    </>
  );
};

export default TourImages;
