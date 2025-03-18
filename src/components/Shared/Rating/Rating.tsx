type RatingProps = {
  rating: number;
  className?: string;
  reviewCount: number;
  type?: "single" | "multiple";
};

const Rating = ({rating, className = "", reviewCount, type = "single"}: RatingProps) => {
  return (
    <div className="d-flex align-items-center">
      <div className={`d-flex x-gap-2 ${className}`}>
        {type === "multiple" ? (
          <>
            <div className="d-flex gap-1 ">
              {Array.from({length: Math.round(rating)}).map((_, index) => (
                <i key={index} className="icon-star text-14 text-yellow-2" />
              ))}
            </div>
          </>
        ) : (
          <i className="icon-star text-14 text-yellow-2" />
        )}
      </div>
      <span className="text-dark-1 ml-5">
        {rating} ({reviewCount})
      </span>
    </div>
  );
};

export default Rating;
