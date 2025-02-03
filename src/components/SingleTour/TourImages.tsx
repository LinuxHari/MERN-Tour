import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {useState} from "react";

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
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".js-slider1-next",
            prevEl: ".js-slider1-prev",
          }}
          slidesPerView={1}
          breakpoints={{
            320: {slidesPerView: 1},
            640: {slidesPerView: 1},
            1024: {slidesPerView: 1},
            1280: {slidesPerView: 1},
          }}
          className="tour__images-list"
          onSlideChange={({activeIndex}) => setCurrentSlide(activeIndex + 1)}
        >
          {images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <div className="tour__image">
                <img src={imageUrl} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="navAbsolute">
          <button className="navAbsolute__button bg-white js-slider1-prev">
            <i className="icon-arrow-left text-14" />
          </button>
          <button className="navAbsolute__button bg-white js-slider1-next">
            <i className="icon-arrow-right text-14" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TourImages;
