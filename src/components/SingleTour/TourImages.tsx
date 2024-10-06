import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

type TourImagesProps = {
    images: string[]
}
const TourImages = ({ images }: TourImagesProps) => {
  const prevImages = ["https://i.pinimg.com/236x/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg", "https://media.istockphoto.com/id/1414814850/photo/summer-blue-sky-cloud-gradient-light-white-background-beauty-clear-cloudy-in-sunshine-calm.jpg?s=612x612&w=0&k=20&c=AB8i_X54iwA5B8u3EmkmduL37-W35mYuUmHmOeCSiGw=", "https://i.pinimg.com/236x/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg", "https://i.pinimg.com/236x/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg", "https://i.pinimg.com/236x/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg"]
  
  const [currentSlide, setCurrentSlide] = useState(1)
    return (
   <>
    <div className="absolute top-5 right-5 text-16 m-3 end-0 bg-dark-1 text-white px-3 py-1 rounded-200">
        <span>{currentSlide}</span>/{prevImages.length}
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
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1280: { slidesPerView: 1 },
        }}
        className="tour__images-list"
        onSlideChange={({activeIndex}) => setCurrentSlide(activeIndex + 1)}
      >
        {prevImages.map(
         (imageUrl, index) =>  <SwiperSlide key={index}><div className="tour__image"><img src={imageUrl} /></div></SwiperSlide>
        )}
      </Swiper>

    <div className="navAbsolute">
      <button className="navAbsolute__button bg-white js-slider1-prev">
        <i className="icon-arrow-left text-14"></i>
      </button>
      <button className="navAbsolute__button bg-white js-slider1-next">
        <i className="icon-arrow-right text-14"></i>
      </button>
    </div>
  </div>
   </>
  )
}

export default TourImages