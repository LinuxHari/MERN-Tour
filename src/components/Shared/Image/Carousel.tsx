import {useId} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import Image from "./Image";

type TourImagesProps = {
  images: string[];
  onSlide?: (index: number) => void;
  imageClassName?: string;
};

const Carousel = ({images, onSlide, imageClassName = "object-fit-cover w-100"}: TourImagesProps) => {
  const rawId = useId();
  const uniqueId = `carousel-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.${uniqueId}-next`,
          prevEl: `.${uniqueId}-prev`,
        }}
        slidesPerView={1}
        breakpoints={{
          320: {slidesPerView: 1},
          640: {slidesPerView: 1},
          1024: {slidesPerView: 1},
          1280: {slidesPerView: 1},
        }}
        className="tour__images-list h-100"
        onSlideChange={({activeIndex}) => {
          onSlide && onSlide(activeIndex + 1);
        }}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index} className="d-flex justify-content-center items-center">
            <Image src={imageUrl} className={`h-100 ${imageClassName}`} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && (
        <div className="navAbsolute -type-2">
          <button className={`navAbsolute__button ${uniqueId}-prev bg-white`}>
            <i className="icon-arrow-left text-14" />
          </button>
          <button className={`navAbsolute__button ${uniqueId}-next bg-white`}>
            <i className="icon-arrow-right text-14" />
          </button>
        </div>
      )}
    </>
  );
};

export default Carousel;
