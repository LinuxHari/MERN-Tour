type Props = {
  images: string[];
};

const TourGallery = ({ images }: Props) => {
  return (
    <div className="tourSingleGrid -type-1 mt-30">
      <div className="tourSingleGrid__grid mobile-css-slider-2">
        {images.map((image) => (
          <img key={image} src={image} alt="image" />
        ))}
      </div>

      <div className="tourSingleGrid__button">
        <a
          href="img/tourSingle/1/1.png"
          className="js-gallery"
          data-gallery="gallery1"
        >
          <span className="button -accent-1 py-10 px-20 rounded-200 bg-dark-1 lh-16 text-white">
            See all photos
          </span>
        </a>
      </div>
    </div>
  );
};

export default TourGallery;
