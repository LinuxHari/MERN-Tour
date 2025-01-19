type RatingProps = {
  rating: number;
  className?: string;
  reviewCount: number;
};

const Rating = ({rating, className = "", reviewCount}: RatingProps) => {
  return (
    <div className="d-flex align-items-center">
      <div className={`d-flex x-gap-2 ${className}`}>
        {/* {Array.from({length: 5}).map((_, i) => (
          <i
            key={i}
            className={`icon-star text-10 ${i < rating ? "text-yellow-2" : "text-light-gray"}`}
          />
        ))} */}
        <i className="icon-star text-14 text-yellow-2" />
      </div>
      <span className="text-dark-1 ml-5">
        {rating} ({reviewCount})
      </span>
    </div>
  );
};

export default Rating;
