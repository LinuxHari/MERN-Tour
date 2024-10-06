type Props = {
  images: string[];
};

const TourGallery = ({ images }: Props) => {
  return (
    <div className="tourSingleGrid -type-1 mt-30">
      <div className="tourSingleGrid__grid mobile-css-slider-2">
        {images.map((image) => (
          <img key={image} src="https://i.pinimg.com/236x/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg" alt="image" />
        ))}
      </div>

      <div className="tourSingleGrid__button">
          <button className="button -accent-1 py-10 px-20 rounded-200 bg-dark-1 lh-16 text-white">
            See all photos
          </button>
      </div>
    </div>
  );
};

export default TourGallery;
