type RatingProps = {
  rating: number
  className?: string
  reviewCount: number
};

const Rating = ({ rating, className = "", reviewCount }: RatingProps) => {
  return (
    <>
        <div className={`d-flex x-gap-5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`icon-star text-10 ${
            i < rating ? "text-yellow-2" : "text-light-gray"
          }`}
        ></i>
      ))}
    </div>
    <span className="text-dark-1 ml-10">{rating} ({reviewCount})</span>
    </>
  );
};

export default Rating;
